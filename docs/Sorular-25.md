<!-- PYTHON INTERACTIVE EXERCISES: İÇ SINIFLAR (INNER / NESTED CLASSES) -->
<div id="quiz-container-28" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-28" class="badge">Soru 1 / 10</span>
      <span id="type-badge-28" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-28" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-28" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-28" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-28" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-28" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-28" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-28">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-28" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-28" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-28" class="btn btn-secondary" onclick="resetCurrentQuestion28()">Sıfırla</button>
      <button id="btn-check-28" class="btn btn-primary" onclick="checkAnswer28()">Kontrol Et</button>
      <button id="btn-next-28" class="btn btn-success" onclick="nextQuestion28()" style="display: none;">Sonraki Soru →</button>
    </div>
  </div>
</div>

<style>
.interactive-quiz {
  background: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.quiz-header {
  margin-bottom: 1rem;
}

.quiz-step-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.badge {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: #e0e7ff;
  color: #3730a3;
}

.badge-type {
  background: #fef3c7;
  color: #92400e;
}

.quiz-progress-bar {
  width: 100%;
  height: 6px;
  background: #f3f4f6;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 10%;
  background: #2563eb;
  transition: width 0.3s ease;
}

/* Sorunun Üstünde Sürekli Görünen Bilgi Kutusu */
.summary-box {
  background: #f0fdf4;
  border-left: 4px solid #16a34a;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.88rem;
  color: #14532d;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.q-title {
  margin: 0.25rem 0 0.75rem 0;
  color: #111827;
  font-size: 1.05rem;
  font-weight: 600;
}

.workspace-box {
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  padding: 1rem;
  min-height: 85px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  color: #0f172a;
}

/* Terminal / Çıktı Gösterim Stili */
.output-wrapper {
  margin-bottom: 1.25rem;
}

.output-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #059669;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.35rem;
}

.output-box {
  background: #0f172a;
  color: #34d399;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}

.pool-header {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-height: 48px;
  margin-bottom: 1rem;
}

.code-chip {
  background: #f1f5f9;
  color: #0f172a;
  border: 1px solid #cbd5e1;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
}

.code-chip:hover {
  background: #e2e8f0;
  border-color: #94a3b8;
}

.code-chip.used {
  opacity: 0.25;
  pointer-events: none;
  background: #e2e8f0;
}

.code-slot {
  display: inline-block;
  min-width: 50px;
  height: 30px;
  border: 2px dashed #93c5fd;
  border-radius: 5px;
  background: #eff6ff;
  vertical-align: middle;
  margin: 0 3px;
  text-align: center;
  line-height: 26px;
  cursor: pointer;
  color: #1e3a8a;
  font-weight: 600;
  padding: 0 6px;
}

.code-slot.filled {
  border-style: solid;
  border-color: #2563eb;
  background: #dbeafe;
  color: #0f172a;
}

.sortable-line {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  margin-bottom: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0f172a;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.sortable-line:hover {
  border-color: #ef4444;
}

.quiz-footer {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feedback-msg {
  font-size: 0.95rem;
  font-weight: 600;
  min-height: 1.2rem;
}

.feedback-msg.success { color: #15803d; }
.feedback-msg.error { color: #b91c1c; }

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.btn:hover { opacity: 0.9; }
.btn-primary { background: #2563eb; color: #ffffff; }
.btn-secondary { background: #e2e8f0; color: #334155; }
.btn-success { background: #16a34a; color: #ffffff; }
</style>

<script>
// İÇ SINIFLAR (INNER CLASSES) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData28 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Dış Sınıf Ad Alanı Üzerinden İç Sınıfı Başlatma",
    summary: "İç sınıflar dış sınıfın ad alanı altındadır; 'DisSinif.IcSinif()' sözdizimi ile doğrudan başlatılabilir.",
    pieces: [
      "class Sunucu:",
      "    class AgArayuzu:",
      "        def __init__(self, ip): self.ip = ip",
      "        def goster(self): return f\"IP: {self.ip}\"",
      "net = Sunucu.AgArayuzu(\"10.0.0.1\"); print(net.goster())"
    ],
    solutions: [
      [
        "class Sunucu:",
        "    class AgArayuzu:",
        "        def __init__(self, ip): self.ip = ip",
        "        def goster(self): return f\"IP: {self.ip}\"",
        "net = Sunucu.AgArayuzu(\"10.0.0.1\"); print(net.goster())"
      ]
    ],
    output: "IP: 10.0.0.1"
  },
  {
    type: "arrange",
    title: "2. Dış Sınıf Referansını İç Sınıfa Aktarma",
    summary: "İç sınıf dış sınıfın niteliklerini otomatik görmez; dış sınıf örneği parametre olarak iç sınıfa aktarılmalıdır.",
    pieces: [
      "class Arac:",
      "    def __init__(self, plaka): self.plaka = plaka",
      "    class Takip:",
      "        def __init__(self, dis): self.dis = dis",
      "        def rapor(self): return f\"Plaka: {self.dis.plaka}\"",
      "oto = Arac(\"34ABC01\"); t = oto.Takip(oto); print(t.rapor())"
    ],
    solutions: [
      [
        "class Arac:",
        "    def __init__(self, plaka): self.plaka = plaka",
        "    class Takip:",
        "        def __init__(self, dis): self.dis = dis",
        "        def rapor(self): return f\"Plaka: {self.dis.plaka}\"",
        "oto = Arac(\"34ABC01\"); t = oto.Takip(oto); print(t.rapor())"
      ]
    ],
    output: "Plaka: 34ABC01"
  },
  {
    type: "arrange",
    title: "3. Bileşim (Composition) ile Otomatik İç Nesne Üretimi",
    summary: "Dış sınıf kendi __init__ metodunda iç sınıf nesnesini otomatik türeterek parçaları tek çatıda birleştirir.",
    pieces: [
      "class Bilgisayar:",
      "    def __init__(self, cpu_ad):",
      "        self.islemci = self.Islemci(cpu_ad)",
      "    class Islemci:",
      "        def __init__(self, model): self.model = model",
      "pc = Bilgisayar(\"M3\"); print(pc.islemci.model)"
    ],
    solutions: [
      [
        "class Bilgisayar:",
        "    def __init__(self, cpu_ad):",
        "        self.islemci = self.Islemci(cpu_ad)",
        "    class Islemci:",
        "        def __init__(self, model): self.model = model",
        "pc = Bilgisayar(\"M3\"); print(pc.islemci.model)"
      ]
    ],
    output: "M3"
  },
  {
    type: "arrange",
    title: "4. Çoklu İç Sınıf Yapılandırması",
    summary: "Bir dış sınıf bünyesinde birden fazla yardımcı iç sınıf barındırarak modüler alt birimler oluşturabilir.",
    pieces: [
      "class Telefon:",
      "    class Batarya: def durum(self): return \"%100\"",
      "    class Ekran: def tip(self): return \"OLED\"",
      "b = Telefon.Batarya(); e = Telefon.Ekran()",
      "print(b.durum(), e.tip())"
    ],
    solutions: [
      [
        "class Telefon:",
        "    class Batarya: def durum(self): return \"%100\"",
        "    class Ekran: def tip(self): return \"OLED\"",
        "b = Telefon.Batarya(); e = Telefon.Ekran()",
        "print(b.durum(), e.tip())"
      ],
      [
        "class Telefon:",
        "    class Ekran: def tip(self): return \"OLED\"",
        "    class Batarya: def durum(self): return \"%100\"",
        "b = Telefon.Batarya(); e = Telefon.Ekran()",
        "print(b.durum(), e.tip())"
      ]
    ],
    output: "%100 OLED"
  },
  {
    type: "arrange",
    title: "5. İç Sınıfta Metot Çağrısı ve Durum Okuma",
    summary: "Dış nesne üzerinden başlatılan iç sınıf örneği kendi metotlarını çalıştırarak bağımsız durumunu korur.",
    pieces: [
      "class Dosya:",
      "    class Baslik:",
      "        def __init__(self, yazar): self.yazar = yazar",
      "        def oku(self): return f\"Yazar: {self.yazar}\"",
      "h = Dosya.Baslik(\"Ahmet\"); print(h.oku())"
    ],
    solutions: [
      [
        "class Dosya:",
        "    class Baslik:",
        "        def __init__(self, yazar): self.yazar = yazar",
        "        def oku(self): return f\"Yazar: {self.yazar}\"",
        "h = Dosya.Baslik(\"Ahmet\"); print(h.oku())"
      ]
    ],
    output: "Yazar: Ahmet"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Dış Sınıf Ad Alanı (Namespace)",
    summary: "İç sınıftan nesne üretirken 'DisSinif.IcSinif()' kuralı uygulanır.",
    template: "class Magaza:\n    class Kasa:\n        def fis(self): return \"Fis kesildi\"\n\nk = {slot0}.{slot1}()\nprint(k.fis())",
    slots: ["slot0", "slot1"],
    options: ["Magaza", "Kasa", "kasa", "self"],
    validCombinations: [
      { slot0: "Magaza", slot1: "Kasa" }
    ],
    output: "Fis kesildi"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Dış Nesne Referansı Saklama",
    summary: "İç sınıf dış sınıfın özelliklerine erişebilmek için dış nesneyi 'self.dis = dis_nesne' şeklinde saklar.",
    template: "class Donanim:\n    def __init__(self, id_no): self.id_no = id_no\n    class Test:\n        def __init__(self, dis):\n            self.{slot0} = dis\n        def kontrol(self):\n            return self.dis.{slot1}\n\nd = Donanim(404); t = d.Test(d); print(t.kontrol())",
    slots: ["slot0", "slot1"],
    options: ["dis", "id_no", "self", "Donanim"],
    validCombinations: [
      { slot0: "dis", slot1: "id_no" }
    ],
    output: "404"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: __init__ İçinde İç Sınıf Başlatma",
    summary: "Dış sınıf yapıcı metodunda 'self.IcSinif()' çağrısı yaparak iç sınıf örneğini oluşturur.",
    template: "class Motor:\n    def __init__(self, val):\n        self.piston = {slot0}.{slot1}(val)\n    class Piston:\n        def __init__(self, v): self.v = v\n\nm = Motor(4); print(m.piston.v)",
    slots: ["slot0", "slot1"],
    options: ["self", "Piston", "Motor", "cls"],
    validCombinations: [
      { slot0: "self", slot1: "Piston" }
    ],
    output: "4"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: İç Sınıf Tanımlama Sözdizimi",
    summary: "İç sınıflar dış sınıf gövdesi altında 'class' anahtar sözcüğü ile tanımlanır.",
    template: "class Paket:\n    {slot0} Icerik:\n        def __init__(self, tip): self.tip = tip\n\nveri = Paket.{slot1}(\"JSON\"); print(veri.tip)",
    slots: ["slot0", "slot1"],
    options: ["class", "Icerik", "def", "Paket"],
    validCombinations: [
      { slot0: "class", slot1: "Icerik" }
    ],
    output: "JSON"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: İç İçe Örnek Metodu Erişimi",
    summary: "Dış nesne üzerinden iç sınıf örneğinin metoduna zincirleme 'nesne.ic_nesne.metot()' ile erişilir.",
    template: "class Sistem:\n    def __init__(self): self.ayar = self.Ayar()\n    class Ayar:\n        def aktif_mi(self): return True\n\ns = Sistem()\nprint(s.{slot0}.{slot1}())",
    slots: ["slot0", "slot1"],
    options: ["ayar", "aktif_mi", "Ayar", "Sistem"],
    validCombinations: [
      { slot0: "ayar", slot1: "aktif_mi" }
    ],
    output: "True"
  }
];

let currentStep28 = 0;
let userArrangeState28 = [];
let userFillState28 = {};

function initQuiz28() {
  loadQuestion28(currentStep28);
}

function loadQuestion28(index) {
  const q = quizData28[index];
  document.getElementById("step-badge-28").innerText = `Soru ${index + 1} / ${quizData28.length}`;
  document.getElementById("type-badge-28").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-28").style.width = `${((index + 1) / quizData28.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-28");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-28").innerText = q.title;
  
  const feedback = document.getElementById("feedback-28");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-28");
  outputContainer.style.display = "none";
  document.getElementById("code-output-28").innerText = "";
  
  document.getElementById("btn-check-28").style.display = "inline-block";
  document.getElementById("btn-next-28").style.display = "none";
  
  const workspace = document.getElementById("workspace-28");
  const pool = document.getElementById("options-pool-28");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState28 = [];
    renderArrangeWorkspace28();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange28(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState28 = {};
    q.slots.forEach(slot => userFillState28[slot] = null);
    renderFillWorkspace28();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption28(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange28(piece, btnElement) {
  userArrangeState28.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace28();
}

function removePieceFromArrange28(index) {
  const item = userArrangeState28[index];
  item.btnRef.classList.remove("used");
  userArrangeState28.splice(index, 1);
  renderArrangeWorkspace28();
}

function renderArrangeWorkspace28() {
  const workspace = document.getElementById("workspace-28");
  if (userArrangeState28.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState28.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml28(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange28(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot28 = null;

function renderFillWorkspace28() {
  const q = quizData28[currentStep28];
  const workspace = document.getElementById("workspace-28");
  let html = escapeHtml28(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState28[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot28('${slot}')">${escapeHtml28(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot28('${slot}')">${activeSlot28 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot28(slot) {
  activeSlot28 = slot;
  renderFillWorkspace28();
}

function selectFillOption28(val, btnElement) {
  const q = quizData28[currentStep28];
  let targetSlot = activeSlot28;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState28[s] === null);
  }
  
  if (targetSlot) {
    userFillState28[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot28 = null;
    renderFillWorkspace28();
  }
}

function clearSlot28(slot) {
  const pool = document.getElementById("options-pool-28");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState28[slot] = null;
  activeSlot28 = slot;
  renderFillWorkspace28();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer28() {
  const q = quizData28[currentStep28];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState28.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback28("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState28[s] !== null);
    if (!isAllFilled) {
      showFeedback28("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState28[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback28("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-28");
    const outputBox = document.getElementById("code-output-28");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-28").style.display = "none";
    document.getElementById("btn-next-28").style.display = "inline-block";
  } else {
    showFeedback28("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback28(msg, type) {
  const feedback = document.getElementById("feedback-28");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion28() {
  loadQuestion28(currentStep28);
}

function nextQuestion28() {
  if (currentStep28 < quizData28.length - 1) {
    currentStep28++;
    loadQuestion28(currentStep28);
  } else {
    document.getElementById("quiz-container-28").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">İç Sınıflar (Inner / Nested Classes) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml28(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz28);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz28();
}
</script>
