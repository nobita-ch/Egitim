/*
 * LeetCode tarzı kod soruları (fonksiyonsuz, ekran çıktısı karşılaştırmalı).
 *
 * Sayfadaki her <div class="kod-sorusu" data-id="..."> içine bir kod editörü,
 * "Çalıştır" ve "Gönder" düğmeleri yerleştirir. Öğrenci düz Python kodu yazar ve
 * sonucu print() ile ekrana basar. Girdi değişkenleri (ör. saniye = 3661) her
 * test için önceden tanımlanır. Kod tarayıcıda Pyodide (WebAssembly ile çalışan
 * Python) üzerinde, ayrı bir Web Worker içinde çalıştırılır; böylece sonsuz döngü
 * sayfayı kilitlemez.
 *
 * Soru verisi div içindeki <script type="application/json"> etiketinde durur:
 *   { "baslangic": "# ...\n",
 *     "degiskenler": ["saniye"],
 *     "testler": [ { "girdi": "3661", "gosterim": "saniye = 3661",
 *                    "beklenen": "1 1 1", "ornek": true }, ... ] }
 * "girdi" Python sabit ifadeleridir (ast.literal_eval), "beklenen" ekran çıktısıdır.
 */
(function () {
  "use strict";

  var kutular = document.querySelectorAll(".kod-sorusu");
  if (!kutular.length) return;

  var PYODIDE = "https://cdn.jsdelivr.net/npm/pyodide@0.26.4/";
  var CM = "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/";
  var SURE_SINIRI = 5000; // kod çalıştırma süre sınırı (ms)

  /* ---------- Python tarafındaki hakem ---------- */
  var HAKEM = [
    "import sys, io, json, ast, traceback",
    "",
    "def _normal(metin):",
    "    satirlar = [s.rstrip() for s in metin.replace('\\r\\n', '\\n').split('\\n')]",
    "    while satirlar and not satirlar[-1]:",
    "        satirlar.pop()",
    "    return '\\n'.join(satirlar)",
    "",
    "def _hata_metni():",
    "    t, e, tb = sys.exc_info()",
    "    kendi = [f for f in traceback.extract_tb(tb) if f.filename == 'cozum.py']",
    "    yer = ' (satır %d)' % kendi[-1].lineno if kendi else ''",
    "    if t is SyntaxError or t is IndentationError:",
    "        return '%s: %s (satır %s)' % (t.__name__, e.msg, e.lineno)",
    "    if t is EOFError:",
    "        return 'EOFError: Bu soruda input() kullanılmaz; girdi değişkenleri sana hazır verilir.'",
    "    return '%s: %s%s' % (t.__name__, e, yer)",
    "",
    "def _sabit_atama(agac, adlar):",
    "    # Girdi değişkenine doğrudan sabit değer atanmış mı? (ör. saniye = 3661)",
    "    for dugum in agac.body:",
    "        if isinstance(dugum, ast.Assign):",
    "            hedefler = []",
    "            for h in dugum.targets:",
    "                hedefler += h.elts if isinstance(h, (ast.Tuple, ast.List)) else [h]",
    "            if any(isinstance(h, ast.Name) and h.id in adlar for h in hedefler):",
    "                try:",
    "                    ast.literal_eval(dugum.value)",
    "                    return [h.id for h in hedefler if isinstance(h, ast.Name) and h.id in adlar]",
    "                except Exception:",
    "                    pass",
    "    return []",
    "",
    "def calistir(istek_json):",
    "    istek = json.loads(istek_json)",
    "    adlar = istek['degiskenler']",
    "    try:",
    "        derlenmis = compile(istek['kod'], 'cozum.py', 'exec')",
    "        agac = ast.parse(istek['kod'])",
    "    except BaseException:",
    "        return json.dumps({'hata': _hata_metni()})",
    "    uyari = None",
    "    atanan = _sabit_atama(agac, adlar)",
    "    if atanan:",
    "        uyari = (\"Kodunda '%s' değişkenine kendin değer atamışsın. Bu değişken her testte farklı bir \"",
    "                 \"değerle sana hazır verilir; o satırı silersen kodun tüm testlerde çalışır.\") % atanan[0]",
    "    eski_out, eski_in = sys.stdout, sys.stdin",
    "    sonuclar = []",
    "    try:",
    "        for t in istek['testler']:",
    "            degerler = ast.literal_eval('(' + t['girdi'] + ',)')",
    "            ns = {'__name__': '__main__'}",
    "            ns.update(zip(adlar, degerler))",
    "            yazilan = io.StringIO()",
    "            sys.stdout, sys.stdin = yazilan, io.StringIO('')",
    "            try:",
    "                exec(derlenmis, ns)",
    "                hata = None",
    "            except BaseException:",
    "                hata = _hata_metni()",
    "            finally:",
    "                sys.stdout, sys.stdin = eski_out, eski_in",
    "            cikti = yazilan.getvalue()",
    "            sonuclar.append({",
    "                'gecti': hata is None and _normal(cikti) == _normal(t['beklenen']),",
    "                'cikti': cikti[:4000],",
    "                'hata': hata,",
    "            })",
    "        return json.dumps({'sonuclar': sonuclar, 'uyari': uyari})",
    "    finally:",
    "        sys.stdout, sys.stdin = eski_out, eski_in"
  ].join("\n");
  window.__KOD_SORUSU_HAKEM = HAKEM; // test amaçlı erişim

  /* ---------- Python çalıştırıcı (Web Worker) ---------- */
  var isci = null;
  var isciHazir = null;

  function isciOlustur() {
    var kaynak =
      "var PY=" + JSON.stringify(PYODIDE) + ";" +
      "var HAKEM=" + JSON.stringify(HAKEM) + ";" +
      "var py=null;" +
      "self.onmessage=async function(e){var m=e.data;try{" +
      "if(!py){importScripts(PY+'pyodide.js');py=await loadPyodide({indexURL:PY});py.runPython(HAKEM);}" +
      "if(m.tur==='hazirla'){self.postMessage({tur:'hazir'});return;}" +
      "py.globals.set('_istek',m.istek);" +
      "self.postMessage({tur:'sonuc',sonuc:py.runPython('calistir(_istek)')});" +
      "}catch(err){self.postMessage({tur:'hata',hata:String((err&&err.message)||err)});}};";
    var url = URL.createObjectURL(new Blob([kaynak], { type: "text/javascript" }));
    isci = new Worker(url);
    isciHazir = new Promise(function (coz, red) {
      isci.onmessage = function (e) {
        if (e.data.tur === "hazir") coz();
        else red(new Error(e.data.hata || "Python yüklenemedi."));
      };
      isci.onerror = function (e) {
        red(new Error((e && e.message) || "Python yüklenemedi."));
      };
    });
    isciHazir.catch(isciSifirla);
    isci.postMessage({ tur: "hazirla" });
    return isciHazir;
  }

  function isciSifirla() {
    if (isci) isci.terminate();
    isci = null;
    isciHazir = null;
  }

  function pythonCalistir(istek) {
    return (isciHazir || isciOlustur()).then(function () {
      return new Promise(function (coz, red) {
        var zamanlayici = setTimeout(function () {
          isciSifirla();
          red(new Error("Süre sınırı aşıldı (" + SURE_SINIRI / 1000 + " sn). Kodunda sonsuz döngü olabilir."));
        }, SURE_SINIRI);
        isci.onmessage = function (e) {
          clearTimeout(zamanlayici);
          if (e.data.tur === "sonuc") coz(JSON.parse(e.data.sonuc));
          else red(new Error(e.data.hata));
        };
        isci.postMessage({ tur: "calistir", istek: JSON.stringify(istek) });
      });
    });
  }

  /* ---------- yardımcılar ---------- */
  function el(etiket, sinif, metin) {
    var d = document.createElement(etiket);
    if (sinif) d.className = sinif;
    if (metin != null) d.textContent = metin;
    return d;
  }

  function betikYukle(src) {
    return new Promise(function (coz, red) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = coz;
      s.onerror = red;
      document.head.appendChild(s);
    });
  }

  function stilYukle(href) {
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    document.head.appendChild(l);
  }

  function depoOku(anahtar) {
    try { return localStorage.getItem(anahtar); } catch (e) { return null; }
  }
  function depoYaz(anahtar, deger) {
    try { localStorage.setItem(anahtar, deger); } catch (e) { /* yoksay */ }
  }
  function depoSil(anahtar) {
    try { localStorage.removeItem(anahtar); } catch (e) { /* yoksay */ }
  }

  /* ---------- editör ---------- */
  var editorKutuphanesi = null;
  function editorHazirla() {
    if (!editorKutuphanesi) {
      stilYukle(CM + "codemirror.min.css");
      editorKutuphanesi = betikYukle(CM + "codemirror.min.js")
        .then(function () { return betikYukle(CM + "mode/python/python.min.js"); })
        .then(function () { return true; }, function () { return false; });
    }
    return editorKutuphanesi;
  }

  function editorKur(alan, deger, degisince, calistirKisayolu) {
    if (window.CodeMirror) {
      var cm = window.CodeMirror(alan, {
        value: deger,
        mode: "python",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        matchBrackets: true,
        viewportMargin: Infinity,
        extraKeys: {
          Tab: function (c) {
            if (c.somethingSelected()) c.indentSelection("add");
            else c.replaceSelection("    ", "end");
          },
          "Shift-Tab": function (c) { c.indentSelection("subtract"); },
          "Ctrl-Enter": calistirKisayolu,
          "Cmd-Enter": calistirKisayolu
        }
      });
      cm.on("change", function () { degisince(cm.getValue()); });
      return {
        al: function () { return cm.getValue(); },
        koy: function (v) { cm.setValue(v); },
        yenile: function () { cm.refresh(); }
      };
    }
    // CodeMirror yüklenemezse sade metin alanı
    var ta = el("textarea", "kod-sorusu__metin");
    ta.value = deger;
    ta.spellcheck = false;
    ta.setAttribute("autocapitalize", "off");
    ta.addEventListener("input", function () { degisince(ta.value); });
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        var b = ta.selectionStart;
        ta.setRangeText("    ", b, ta.selectionEnd, "end");
        degisince(ta.value);
      } else if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        calistirKisayolu();
      }
    });
    alan.appendChild(ta);
    return {
      al: function () { return ta.value; },
      koy: function (v) { ta.value = v; },
      yenile: function () {}
    };
  }

  /* ---------- soru bileşeni ---------- */
  function soruKur(kutu) {
    var veriEtiketi = kutu.querySelector('script[type="application/json"]');
    if (!veriEtiketi) return;
    var veri = JSON.parse(veriEtiketi.textContent);
    var anahtar = "kod-sorusu:" + kutu.getAttribute("data-id");
    var testler = veri.testler;
    var ornekler = testler.filter(function (t) { return t.ornek; });

    var ust = el("div", "kod-sorusu__ust");
    ust.appendChild(el("span", "kod-sorusu__dil", "Python 3"));
    var sifirlaDugmesi = el("button", "kod-sorusu__ikincil", "Sıfırla");
    sifirlaDugmesi.type = "button";
    sifirlaDugmesi.title = "Kodu başlangıç hâline döndür";
    ust.appendChild(sifirlaDugmesi);

    var editorAlani = el("div", "kod-sorusu__editor");

    var alt = el("div", "kod-sorusu__alt");
    var ipucu = el("span", "kod-sorusu__ipucu", "Ctrl + Enter: Çalıştır");
    var calistirDugmesi = el("button", "kod-sorusu__ikincil", "Çalıştır");
    calistirDugmesi.type = "button";
    var gonderDugmesi = el("button", "kod-sorusu__birincil", "Gönder");
    gonderDugmesi.type = "button";
    alt.appendChild(ipucu);
    alt.appendChild(calistirDugmesi);
    alt.appendChild(gonderDugmesi);

    var sonuc = el("div", "kod-sorusu__sonuc");
    sonuc.setAttribute("aria-live", "polite");
    sonuc.appendChild(el("p", "kod-sorusu__bilgi",
      "Kodunu yaz, örnek testler için “Çalıştır”, tüm testler için “Gönder” düğmesine bas."));

    kutu.textContent = "";
    kutu.appendChild(ust);
    kutu.appendChild(editorAlani);
    kutu.appendChild(alt);
    kutu.appendChild(sonuc);

    var editor = null;
    var calisiyor = false;

    editorHazirla().then(function () {
      editor = editorKur(editorAlani, depoOku(anahtar) || veri.baslangic, function (v) {
        if (v === veri.baslangic) depoSil(anahtar); else depoYaz(anahtar, v);
      }, function () { calistir(false); });
    });

    sifirlaDugmesi.addEventListener("click", function () {
      if (!editor) return;
      editor.koy(veri.baslangic);
      depoSil(anahtar);
    });
    calistirDugmesi.addEventListener("click", function () { calistir(false); });
    gonderDugmesi.addEventListener("click", function () { calistir(true); });

    function mesgul(durum, metin) {
      calisiyor = durum;
      calistirDugmesi.disabled = durum;
      gonderDugmesi.disabled = durum;
      if (durum) {
        sonuc.textContent = "";
        sonuc.appendChild(el("p", "kod-sorusu__bilgi", metin));
      }
    }

    function calistir(hepsi) {
      if (calisiyor || !editor) return;
      var secilen = hepsi ? testler : ornekler;
      mesgul(true, isciHazir ? "Çalıştırılıyor…" : "Python hazırlanıyor (ilk seferde birkaç saniye sürebilir)…");
      var hazirlik = isciHazir || isciOlustur();
      hazirlik.then(function () {
        if (calisiyor) sonuc.querySelector(".kod-sorusu__bilgi").textContent = "Çalıştırılıyor…";
      }, function () {});
      pythonCalistir({ kod: editor.al(), degiskenler: veri.degiskenler, testler: secilen })
        .then(function (cevap) {
          mesgul(false);
          if (cevap.hata) hataGoster("Hata", cevap.hata);
          else {
            if (hepsi) gonderimGoster(secilen, cevap.sonuclar);
            else orneklerGoster(secilen, cevap.sonuclar);
            if (cevap.uyari) sonuc.insertBefore(el("p", "kod-sorusu__uyari", cevap.uyari), sonuc.children[1] || null);
          }
        })
        .catch(function (err) {
          mesgul(false);
          hataGoster("Çalıştırılamadı", err.message);
        });
    }

    function baslik(metin, durum) {
      return el("p", "kod-sorusu__durum kod-sorusu__durum--" + durum, metin);
    }

    function hataGoster(ust, mesaj) {
      sonuc.textContent = "";
      sonuc.appendChild(baslik(ust, "hata"));
      sonuc.appendChild(el("pre", "kod-sorusu__hata", mesaj));
    }

    function satir(etiket, deger, sinif) {
      var s = el("div", "kod-sorusu__satir");
      s.appendChild(el("div", "kod-sorusu__etiket", etiket));
      s.appendChild(el("pre", "kod-sorusu__deger" + (sinif ? " " + sinif : ""), deger));
      return s;
    }

    function ayrinti(test, r, gizli) {
      var d = el("div", "kod-sorusu__ayrinti");
      if (gizli) d.appendChild(el("p", "kod-sorusu__not", "Gizli test"));
      d.appendChild(satir("Girdi", test.gosterim || test.girdi));
      d.appendChild(satir("Beklenen çıktı", test.beklenen));
      var cikti = r.cikti ? r.cikti.replace(/\n$/, "") : "";
      if (r.hata) {
        if (cikti) d.appendChild(satir("Senin çıktın", cikti));
        d.appendChild(satir("Hata", r.hata, "kod-sorusu__deger--hata"));
      } else {
        d.appendChild(satir("Senin çıktın", cikti || "(Ekrana hiçbir şey yazdırılmadı. Sonucu print() ile yazdırmayı unutma.)",
          r.gecti ? "kod-sorusu__deger--dogru" : "kod-sorusu__deger--yanlis"));
      }
      return d;
    }

    function orneklerGoster(secilen, sonuclar) {
      sonuc.textContent = "";
      var gecen = sonuclar.filter(function (r) { return r.gecti; }).length;
      var hepsiGecti = gecen === sonuclar.length;
      sonuc.appendChild(baslik(
        hepsiGecti ? "Örnek testler geçti (" + gecen + "/" + sonuclar.length + ")" :
          "Örnek testlerde hata var (" + gecen + "/" + sonuclar.length + ")",
        hepsiGecti ? "dogru" : "yanlis"));
      var sekmeler = el("div", "kod-sorusu__sekmeler");
      sekmeler.setAttribute("role", "tablist");
      var govde = el("div");
      var dugmeler = [];
      function sec(i) {
        dugmeler.forEach(function (b, j) {
          b.classList.toggle("secili", i === j);
          b.setAttribute("aria-selected", i === j ? "true" : "false");
        });
        govde.textContent = "";
        govde.appendChild(ayrinti(secilen[i], sonuclar[i], false));
      }
      sonuclar.forEach(function (r, i) {
        var b = el("button", "kod-sorusu__sekme " + (r.gecti ? "gecti" : "kaldi"),
          (r.gecti ? "✓ " : "✗ ") + "Durum " + (i + 1));
        b.type = "button";
        b.setAttribute("role", "tab");
        b.addEventListener("click", function () { sec(i); });
        dugmeler.push(b);
        sekmeler.appendChild(b);
      });
      sonuc.appendChild(sekmeler);
      sonuc.appendChild(govde);
      var ilkHata = sonuclar.findIndex(function (r) { return !r.gecti; });
      sec(ilkHata < 0 ? 0 : ilkHata);
    }

    function gonderimGoster(secilen, sonuclar) {
      sonuc.textContent = "";
      var gecen = sonuclar.filter(function (r) { return r.gecti; }).length;
      if (gecen === sonuclar.length) {
        sonuc.appendChild(baslik("Kabul edildi ✓", "dogru"));
        sonuc.appendChild(el("p", "kod-sorusu__ozet", sonuclar.length + " / " + sonuclar.length + " test geçti. Tebrikler!"));
        return;
      }
      var i = sonuclar.findIndex(function (r) { return !r.gecti; });
      var r = sonuclar[i];
      sonuc.appendChild(baslik(r.hata ? "Çalışma hatası" : "Yanlış cevap", "yanlis"));
      sonuc.appendChild(el("p", "kod-sorusu__ozet", gecen + " / " + sonuclar.length + " test geçti. İlk başarısız test:"));
      sonuc.appendChild(ayrinti(secilen[i], r, !secilen[i].ornek));
    }
  }

  Array.prototype.forEach.call(kutular, soruKur);
})();
