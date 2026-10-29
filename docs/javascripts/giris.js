/*
 * Basit giriş kapısı + sayfada kalma süresi takibi.
 *
 * ÖNEMLİ: Bu kontrol tarayıcıda çalışır. Sıradan ziyaretçiyi durdurur ama
 * sitenin HTML'i herkese açıktır; gerçek bir güvenlik katmanı değildir.
 * Şifreler burada açık değil, PBKDF2 ile özetlenmiş (hash) olarak durur.
 */
(function () {
  "use strict";

  // sha256("egitim:" + kullanıcıAdı)  ->  [tuz, PBKDF2-SHA256(şifre, tuz)]
  var KULLANICILAR = {
      "8a87de9822f13e0c9aedefd6318f338a786b3073f6fcc6fbb1017c3ee500ec80": [
          "4a13b1133ad73ce8e558a0a11978dd8a",
          "8be2b38036b96edd6ebc4772633c9e41e13645544745b10d4ef03baafe89ad64"
      ],
      "2fa98b5cc73fc166615ca73d26896c830dec1909bf21195d5deb87cd6c26880e": [
          "5defd065f19cd74665e31682e33ff949",
          "bc500c9f77665bc5271ee078a366cdc6f98ba06c738833ff129bdbfb0998ca21"
      ],
      "f9d44f656979e0702dca0a1429daf32b8e7fc88c1b99de9ba323ea85a83f3427": [
          "0070abcdfa65ab96f2071189b9d14ac1",
          "745df45950920e10fee932e0b4ea630d1a7025a8942bb74ee86b79de0f33ef43"
      ],
      "88ad427eca6497f5c66b060496ab85bac9bd5b61b501df54dfb4cf079c80d3bb": [
          "328e303a95c56ab124365b9e1e68a5cc",
          "97f93ce85e6f07c4fbb763ed7680bde9d16b8ed2c3d04d5f58bca7b36169eeae"
      ],
      "7b66b669162c4a5ef209dd882a61d01937e8e3401f1aa96f46138ebf69cdca30": [
          "4e85ae2eb66cd5a0b3d448f64d7a8016",
          "c2c9bf69ffb5143a1a9d4562145d1785dbaa89b2465c4b37e5e20dd24ad380bc"
      ],
      "4f24eb6bc590fa7ba04ed86c1701435c0b7d0523caf02bd639185b7b30ebcb8c": [
          "3da2e2a73159f1a9bb513bb7589b1641",
          "f3459c6ea59d00d60027576adfc8668dc89c15255f9c00ce3aec2ea9ffd34883"
      ],
      "2f2ca5e1a8421516a397fc693718c75c9d8f22f1b5123d2529bf9e8a49d3d8b9": [
          "4de1a2ddc14fc5e232c555abf143a2da",
          "13b6318bfe2367a21a52f03ea5403cbba9eb5be55b1b30388ff168c953317990"
      ],
      "af4633adca086da99f11f93856b48f5cd3f8768b3cd2591d73a0121124f122a3": [
          "c3efa57f96ae8cf96626217e8f0728d5",
          "44b9a258c3ad4b37c4c6f2894b62ba27ccd3fcc0c3110d36523843b16e264a3c"
      ],
      "83e04ed04096076b4355f5590c28b6e1ef64c3bebfd738749882dd0cb1a57a7b": [
          "da20a7116e0c418896b51c1fe44b92a3",
          "2d7489d133dc93ea33c978d5fd4b35a4970e1719857608d1101409bcf477c32b"
      ],
      "4397c5429e58b359e4fb65c1542d95241d04c7e30ef2e4f057d1d313fc0ccc7b": [
          "31526e9777e36a11702cb140c6362b38",
          "01901560dd271ec729d71c9ce30f062d19af8b2d623cca193ac0ab5f24cafcbc"
      ],
      "bd69c75a3201f39e0bc20364b1982d27208aa207a2c9981f4ad102138781d5d2": [
          "4944c11ca7a1a01bcae91e54bbdebfab",
          "bafbe809819c5973d29f0635e0878ee2e05fee6b0c8e7a71550f1d8c704a897e"
      ],
      "0b2a6a21c0d85f0195ac3baa625777774ace85403712e5a4f4172ce6b2c2c4a9": [
          "65e5e8e34520275c24ad383be234f374",
          "f6f1f5043269efac6314a995c8a3efc0ac1f2f45b7ed370eb0ecf69df886a103"
      ],
      "e5f6a7741841160f9c29fa85d8691c99c0bb40ab665459f4195205555aaf473f": [
          "6b06a8ef606b47778c97fc92acee57ce",
          "643cd7e64c8a36db226f80522c674fa25c2e99c61b9d13b6fb109ae5dc755106"
      ],
      "9ff3a00ce2679c99e10bf52d1af6a3e1ada4cd055639915bb4560500dfcce7f2": [
          "7df3f9ffb862281bed263fd68c389b85",
          "7d4528c79dbf9ab34126dff15f7d7e8c4d493dca63a3e82b5cd04a74f42cbb42"
      ],
      "7beea956453db6d8855c8bbb148222ea631262e81ca4d57d51a2c4127824ae60": [
          "73474e3f02061da4c952c0da59ad0de8",
          "5a663a711d18ba09f56d5f8ff3d448cbbb72ecb8b064e72083161589fc0b54d0"
      ],
      "451b651476007b40aab767e9b1517010f4fda6da381a810d05e5285b29712af1": [
          "65e56ff3f4989239910c993484b24197",
          "cc8822e9917a002bf87342fcf0eea6e117cd7e2bae8566c28ea97b53398c5037"
      ],
      "d2734ae83457b38956160e03f64b9f6bc47d3ef92af7ab4ebe37e6b528532075": [
          "8b91a3cf350d014f4c321c62f0c7e7d6",
          "5ba78fa58aaffcd32dde2311436c5661f5d3fa7ee8d7b7b357603a94ddf99466"
      ],
      "d0d4145794071a5049bcc5044866e19af178961f85dc7cff2ebd02998f9a7d78": [
          "ce97626aeca96316f7467541b4bfb8fc",
          "d218cbc9be1551c59120b3b71ec51ba58171e91732e99eaa057f71bdc0f3c484"
      ],
      "0b61b26a3926c14e760c28263046262ed9aa950678b17678301dbf01ce4227ad": [
          "cc32ce2e2c95de86772082cd8d321fa6",
          "d1c9f65ea9e0e2786c4a7da7dfa2a71d96f01f9d383c6834a78371321a2e9acf"
      ],
      "bc5855597abb9201c6923d5419aa988c28dc7e9259b62e8a472a6e48c3ebf12a": [
          "653dcf64de9a89f456f0404800148cdb",
          "b00b38d3a774a4152d902e37496c04c69fdf5258de06a1c89796c59fc7fab5bd"
      ],
      "d357666b00e7df69478e6006551ca6f644f13583c58afbf04dcfaecfa61eb692": [
          "64203ea661cd8ab804659a56b0e738f1",
          "168771032f87465826cbeb8581bb0dfc9587ed0f5cb02bd98eab8d2478610e1f"
      ]
  };
  var TEKRAR = 150000;             // PBKDF2 tekrar sayısı (üretim betiğiyle aynı olmalı)
  var OTURUM_ANAHTARI = "egitim-oturum";
  var OTURUM_GUN = 7;              // giriş kaç gün hatırlansın
  var BOSTA_SINIRI = 5 * 60 * 1000;  // 5 dk hareketsizlikte süre saymayı durdur
  var GONDERIM_ARALIGI = 60 * 1000;  // biriken süreyi dakikada bir gönder

  var html = document.documentElement;

  /* ---------- oturum ---------- */
  function oturumuOku() {
    try {
      var v = JSON.parse(localStorage.getItem(OTURUM_ANAHTARI));
      if (v && typeof v.ad === "string" && v.bitis > Date.now()) return v;
    } catch (e) { /* depolama kapalı olabilir */ }
    return null;
  }
  function oturumuYaz(ad) {
    try {
      localStorage.setItem(OTURUM_ANAHTARI, JSON.stringify({
        ad: ad, bitis: Date.now() + OTURUM_GUN * 24 * 60 * 60 * 1000
      }));
    } catch (e) { /* yoksay */ }
  }
  function oturumuSil() {
    try { localStorage.removeItem(OTURUM_ANAHTARI); } catch (e) { /* yoksay */ }
  }

  /* ---------- adresler ---------- */
  function siteKoku() {
    try {
      var c = JSON.parse(document.getElementById("__config").textContent);
      return new URL(c.base.replace(/\/?$/, "/"), location.href);
    } catch (e) {
      return new URL("./", location.href);
    }
  }
  function girisAdresi() { return new URL("giris/", siteKoku()); }

  function guvenliHedef(hedef) {
    if (typeof hedef === "string" && hedef.charAt(0) === "/" && hedef.charAt(1) !== "/") {
      return new URL(hedef, location.origin).href;
    }
    return siteKoku().href;
  }

  /* ---------- kriptografi ---------- */
  function hex(tampon) {
    return Array.prototype.map.call(new Uint8Array(tampon), function (b) {
      return ("0" + b.toString(16)).slice(-2);
    }).join("");
  }
  function hexBayt(h) {
    var b = new Uint8Array(h.length / 2);
    for (var i = 0; i < b.length; i++) b[i] = parseInt(h.substr(i * 2, 2), 16);
    return b;
  }
  function sha256(metin) {
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(metin)).then(hex);
  }
  function pbkdf2(sifre, tuzHex) {
    return crypto.subtle.importKey("raw", new TextEncoder().encode(sifre), "PBKDF2", false, ["deriveBits"])
      .then(function (k) {
        return crypto.subtle.deriveBits(
          { name: "PBKDF2", hash: "SHA-256", salt: hexBayt(tuzHex), iterations: TEKRAR }, k, 256);
      })
      .then(hex);
  }
  function dogrula(ad, sifre) {
    return sha256("egitim:" + ad).then(function (anahtar) {
      var kayit = KULLANICILAR[anahtar];
      if (!kayit) return false;
      return pbkdf2(sifre, kayit[0]).then(function (ozet) { return ozet === kayit[1]; });
    });
  }

  /* ---------- giriş sayfası ---------- */
  function girisSayfasi(form) {
    html.classList.add("giris-sayfasi");
    var hedef = guvenliHedef(new URLSearchParams(location.search).get("sonra"));
    if (oturumuOku()) { location.replace(hedef); return; }

    var mesaj = document.getElementById("giris-mesaj");
    var dugme = form.querySelector("button");
    form.addEventListener("submit", function (olay) {
      olay.preventDefault();
      var ad = form.elements["giris-ad"].value.trim().toLowerCase();
      var sifre = form.elements["giris-sifre"].value.trim();
      if (!window.crypto || !crypto.subtle) {
        mesaj.textContent = "Tarayıcın bu sayfayı desteklemiyor. Güncel bir tarayıcı dene.";
        return;
      }
      dugme.disabled = true;
      mesaj.textContent = "Kontrol ediliyor…";
      dogrula(ad, sifre).then(function (tamam) {
        if (tamam) {
          oturumuYaz(ad);
          location.replace(hedef);
        } else {
          mesaj.textContent = "Kullanıcı adı veya şifre hatalı.";
          dugme.disabled = false;
        }
      }).catch(function () {
        mesaj.textContent = "Bir hata oluştu, tekrar dene.";
        dugme.disabled = false;
      });
    });
  }

  /* ---------- çıkış düğmesi ---------- */
  function cikisDugmesi(ad) {
    var yer = document.querySelector(".md-header__inner");
    if (!yer) return;
    var d = document.createElement("button");
    d.type = "button";
    d.className = "cikis-dugmesi";
    d.title = "Çıkış yap";
    d.textContent = ad + " · Çıkış";
    d.addEventListener("click", function () {
      oturumuSil();
      location.replace(girisAdresi().href);
    });
    yer.appendChild(d);
  }

  /* ---------- süre takibi (Supabase) ---------- */
  function oturumKimligi() {
    try {
      var k = sessionStorage.getItem("egitim-sekme");
      if (!k) {
        k = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()).slice(0, 64);
        sessionStorage.setItem("egitim-sekme", k);
      }
      return k;
    } catch (e) {
      return String(Date.now());
    }
  }

  function sureTakibi(ad) {
    var ayar = window.EGITIM_AYARLAR || {};
    var url = (ayar.supabaseUrl || "").replace(/\/+$/, "");
    var anahtar = ayar.supabaseAnahtar || "";
    if (!url || !anahtar) return; // ayarlar girilmemişse takip kapalı

    var basliklar = {
      "apikey": anahtar,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    };
    if (anahtar.indexOf("eyJ") === 0) basliklar["Authorization"] = "Bearer " + anahtar;

    var kimlik = oturumKimligi();
    var sayfa;
    try { sayfa = decodeURIComponent(location.pathname); } catch (e) { sayfa = location.pathname; }
    sayfa = sayfa.slice(0, 500);
    var baslik = document.title.slice(0, 300);
    var biriken = 0;
    var videoSayfasi = !!document.querySelector(".yt-video");
    var sonEtkilesim = Date.now();

    function etkilesim() { sonEtkilesim = Date.now(); }
    ["mousemove", "keydown", "scroll", "touchstart", "click", "wheel"].forEach(function (o) {
      window.addEventListener(o, etkilesim, { passive: true });
    });

    setInterval(function () {
      var videoOynuyor = window.EGITIM_VIDEO_OYNUYOR === true;
      if (document.visibilityState === "visible" &&
          (videoOynuyor || Date.now() - sonEtkilesim < BOSTA_SINIRI)) {
        biriken += 1;
      }
    }, 1000);

    function gonder() {
      var sn = biriken;
      // video.js'in ölçtüğü, videonun gerçekten ilerlediği saniyeler
      var vsn = videoSayfasi ? Math.floor(window.EGITIM_VIDEO_SANIYE || 0) : 0;
      if (sn < 1 && vsn < 1) return;
      biriken = 0;
      if (vsn > 0) window.EGITIM_VIDEO_SANIYE -= vsn;
      var kayit = {
        kullanici: ad,
        sayfa: sayfa,
        sayfa_basligi: baslik,
        oturum_id: kimlik,
        sure_saniye: Math.min(sn, 3600)
      };
      if (videoSayfasi) kayit.video_saniye = Math.min(vsn, 3600);
      try {
        fetch(url + "/rest/v1/sayfa_sureleri", {
          method: "POST",
          keepalive: true,
          headers: basliklar,
          body: JSON.stringify(kayit)
        }).catch(function () { /* ağ hatası: sessizce geç */ });
      } catch (e) { /* yoksay */ }
    }

    setInterval(gonder, GONDERIM_ARALIGI);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") gonder();
      else etkilesim();
    });
    window.addEventListener("pagehide", gonder);
  }

  /* ---------- başlat ---------- */
  var form = document.getElementById("giris-formu");
  if (form) { girisSayfasi(form); return; }

  var oturum = oturumuOku();
  if (!oturum) {
    var hedef = girisAdresi();
    hedef.searchParams.set("sonra", location.pathname + location.search + location.hash);
    location.replace(hedef.href);
    return;
  }
  html.classList.add("oturum-acik");
  cikisDugmesi(oturum.ad);
  sureTakibi(oturum.ad);
})();
