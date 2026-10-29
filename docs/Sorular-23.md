<!-- PYTHON INTERACTIVE EXERCISES: ÇOK BİÇİMLİLİK (POLYMORPHISM) -->
<div id="quiz-container-26" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-26" class="badge">Soru 1 / 10</span>
      <span id="type-badge-26" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-26" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-26" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-26" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-26" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-26" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-26" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-26">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-26" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-26" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-26" class="btn btn-secondary" onclick="resetCurrentQuestion26()">Sıfırla</button>
      <button id="btn-check-26" class="btn btn-primary" onclick="checkAnswer26()">Kontrol Et</button>
      <button id="btn-next-26" class="btn btn-success" onclick="nextQuestion26()" style="display: none;">Sonraki Soru →</button>
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
// ÇOK BİÇİMLİLİK (POLYMORPHISM) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData26 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Kalıtım Temelli Polimorfik Döngü",
    summary: "Farklı alt sınıflar aynı metot ismini kendilerine göre ezer ve tek bir döngüde ortak arayüzle çağrılır.",
    pieces: [
      "class Bildirim: def ilet(self): return \"Bildirim\"",
      "class Eposta(Bildirim): def ilet(self): return \"E-posta iletildi\"",
      "class SMS(Bildirim): def ilet(self): return \"SMS iletildi\"",
      "kanallar = [Eposta(), SMS()]",
      "print(\" | \".join([k.ilet() for k in kanallar]))"
    ],
    solutions: [
      [
        "class Bildirim: def ilet(self): return \"Bildirim\"",
        "class Eposta(Bildirim): def ilet(self): return \"E-posta iletildi\"",
        "class SMS(Bildirim): def ilet(self): return \"SMS iletildi\"",
        "kanallar = [Eposta(), SMS()]",
        "print(\" | \".join([k.ilet() for k in kanallar]))"
      ],
      [
        "class Bildirim: def ilet(self): return \"Bildirim\"",
        "class SMS(Bildirim): def ilet(self): return \"SMS iletildi\"",
        "class Eposta(Bildirim): def ilet(self): return \"E-posta iletildi\"",
        "kanallar = [Eposta(), SMS()]",
        "print(\" | \".join([k.ilet() for k in kanallar]))"
      ]
    ],
    output: "E-posta iletildi | SMS iletildi"
  },
  {
    type: "arrange",
    title: "2. Ördek Tiplemesi (Duck Typing) ile Ortak Fonksiyon",
    summary: "Aralarında kalıtım bağı olmasa dahi aynı metot adına sahip nesneler ortak bir fonksiyona parametre olarak verilebilir.",
    pieces: [
      "class PDF: def render(self): return \"PDF Çizildi\"",
      "class HTML: def render(self): return \"HTML Çizildi\"",
      "def ciz(belge): return belge.render()",
      "print(ciz(PDF()), ciz(HTML()))"
    ],
    solutions: [
      [
        "class PDF: def render(self): return \"PDF Çizildi\"",
        "class HTML: def render(self): return \"HTML Çizildi\"",
        "def ciz(belge): return belge.render()",
        "print(ciz(PDF()), ciz(HTML()))"
      ],
      [
        "class HTML: def render(self): return \"HTML Çizildi\"",
        "class PDF: def render(self): return \"PDF Çizildi\"",
        "def ciz(belge): return belge.render()",
        "print(ciz(PDF()), ciz(HTML()))"
      ]
    ],
    output: "PDF Çizildi HTML Çizildi"
  },
  {
    type: "arrange",
    title: "3. Dunder __add__ ile Operatör Polimorfizmi (+ Overloading)",
    summary: "__add__ metodu tanımlanarak özel sınıfların '+' operatörü ile kendi aralarında toplanması sağlanır.",
    pieces: [
      "class Puan:",
      "    def __init__(self, val): self.val = val",
      "    def __add__(self, diger): return Puan(self.val + diger.val)",
      "p1 = Puan(25); p2 = Puan(15)",
      "p3 = p1 + p2; print(p3.val)"
    ],
    solutions: [
      [
        "class Puan:",
        "    def __init__(self, val): self.val = val",
        "    def __add__(self, diger): return Puan(self.val + diger.val)",
        "p1 = Puan(25); p2 = Puan(15)",
        "p3 = p1 + p2; print(p3.val)"
      ]
    ],
    output: "40"
  },
  {
    type: "arrange",
    title: "4. Soyut Sınıf (abc.ABC) ile Arayüz Zorunluluğu",
    summary: "ABC sınıfından türeyen ve @abstractmethod içeren soyut sınıflar, alt sınıfların o metodu tanımlamasını zorunlu kılar.",
    pieces: [
      "from abc import ABC, abstractmethod",
      "class Depolama(ABC):",
      "    @abstractmethod",
      "    def kaydet(self): pass",
      "class Disk(Depolama):",
      "    def kaydet(self): return \"Diske yazıldı\"",
      "d = Disk(); print(d.kaydet())"
    ],
    solutions: [
      [
        "from abc import ABC, abstractmethod",
        "class Depolama(ABC):",
        "    @abstractmethod",
        "    def kaydet(self): pass",
        "class Disk(Depolama):",
        "    def kaydet(self): return \"Diske yazıldı\"",
        "d = Disk(); print(d.kaydet())"
      ]
    ],
    output: "Diske yazıldı"
  },
  {
    type: "arrange",
    title: "5. __eq__ ile Eşitlik (==) Operatörü Polimorfizmi",
    summary: "__eq__ dunder metodu ezilerek iki nesnenin referansı yerine içerik değerlerine göre eşitliği karşılaştırılır.",
    pieces: [
      "class Uye:",
      "    def __init__(self, uid): self.uid = uid",
      "    def __eq__(self, diger): return self.uid == diger.uid",
      "u1 = Uye(101); u2 = Uye(101)",
      "print(u1 == u2, u1 is u2)"
    ],
    solutions: [
      [
        "class Uye:",
        "    def __init__(self, uid): self.uid = uid",
        "    def __eq__(self, diger): return self.uid == diger.uid",
        "u1 = Uye(101); u2 = Uye(101)",
        "print(u1 == u2, u1 is u2)"
      ]
    ],
    output: "True False"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Yerleşik len() Fonksiyonu Polimorfizmi",
    summary: "len() fonksiyonu veri tipine göre arka planda o nesnenin __len__() dunder metodunu tetikler.",
    template: "metin = \"Python\"\nliste = [10, 20]\nprint({slot0}(metin), {slot1}(liste))",
    slots: ["slot0", "slot1"],
    options: ["len", "len", "type", "sum"],
    validCombinations: [
      { slot0: "len", slot1: "len" }
    ],
    output: "6 2"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: abc Modülü ve abstractmethod Dekoratörü",
    summary: "Soyut sınıf oluşturmak için ABC temel sınıfı ve @abstractmethod dekoratörü birlikte kullanılır.",
    template: "from abc import {slot0}, {slot1}\n\nclass Odeme(ABC):\n    @{slot1}\n    def ode(self, miktar): pass",
    slots: ["slot0", "slot1"],
    options: ["ABC", "abstractmethod", "property", "staticmethod"],
    validCombinations: [
      { slot0: "ABC", slot1: "abstractmethod" }
    ],
    output: "# (Soyut Odeme sınıfı tanımlandı)"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: '+' Operatörünün Aşırı Yüklenmesi (__add__)",
    summary: "İki nesne '+' ile toplandığında soldaki nesnenin __add__ metodu çalışır.",
    template: "class Kutu:\n    def __init__(self, sayi): self.sayi = sayi\n    def __{slot0}__(self, diger):\n        return Kutu(self.sayi + diger.sayi)\n\nk = Kutu(10) + Kutu(20)\nprint(k.{slot1})",
    slots: ["slot0", "slot1"],
    options: ["add", "sayi", "sum", "plus"],
    validCombinations: [
      { slot0: "add", slot1: "sayi" }
    ],
    output: "30"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Duck Typing Çağrısı",
    summary: "Ördek tiplemesinde nesnenin sınıfı kontrol edilmez, beklenen metodun çağrılması yeterlidir.",
    template: "class Ses: \n    def cal(self): return \"Ses Aktif\"\n\ndef oynat(medya):\n    return {slot0}.{slot1}()\n\nprint(oynat(Ses()))",
    slots: ["slot0", "slot1"],
    options: ["medya", "cal", "self", "Ses"],
    validCombinations: [
      { slot0: "medya", slot1: "cal" }
    ],
    output: "Ses Aktif"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: __eq__ ile Eşitlik Kontrolü",
    summary: "Nesnelerin '==' operatörüne yanıt vermesini sağlamak için __eq__ metodu tanımlanır.",
    template: "class Kimlik:\n    def __init__(self, no): self.no = no\n    def __{slot0}__(self, other):\n        return self.no == other.no\n\nprint(Kimlik(5) {slot1} Kimlik(5))",
    slots: ["slot0", "slot1"],
    options: ["eq", "==", "equal", "is"],
    validCombinations: [
      { slot0: "eq", slot1: "==" }
    ],
    output: "True"
  }
];

let currentStep26 = 0;
let userArrangeState26 = [];
let userFillState26 = {};

function initQuiz26() {
  loadQuestion26(currentStep26);
}

function loadQuestion26(index) {
  const q = quizData26[index];
  document.getElementById("step-badge-26").innerText = `Soru ${index + 1} / ${quizData26.length}`;
  document.getElementById("type-badge-26").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-26").style.width = `${((index + 1) / quizData26.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-26");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-26").innerText = q.title;
  
  const feedback = document.getElementById("feedback-26");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-26");
  outputContainer.style.display = "none";
  document.getElementById("code-output-26").innerText = "";
  
  document.getElementById("btn-check-26").style.display = "inline-block";
  document.getElementById("btn-next-26").style.display = "none";
  
  const workspace = document.getElementById("workspace-26");
  const pool = document.getElementById("options-pool-26");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState26 = [];
    renderArrangeWorkspace26();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange26(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState26 = {};
    q.slots.forEach(slot => userFillState26[slot] = null);
    renderFillWorkspace26();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption26(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange26(piece, btnElement) {
  userArrangeState26.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace26();
}

function removePieceFromArrange26(index) {
  const item = userArrangeState26[index];
  item.btnRef.classList.remove("used");
  userArrangeState26.splice(index, 1);
  renderArrangeWorkspace26();
}

function renderArrangeWorkspace26() {
  const workspace = document.getElementById("workspace-26");
  if (userArrangeState26.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState26.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml26(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange26(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot26 = null;

function renderFillWorkspace26() {
  const q = quizData26[currentStep26];
  const workspace = document.getElementById("workspace-26");
  let html = escapeHtml26(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState26[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot26('${slot}')">${escapeHtml26(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot26('${slot}')">${activeSlot26 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot26(slot) {
  activeSlot26 = slot;
  renderFillWorkspace26();
}

function selectFillOption26(val, btnElement) {
  const q = quizData26[currentStep26];
  let targetSlot = activeSlot26;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState26[s] === null);
  }
  
  if (targetSlot) {
    userFillState26[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot26 = null;
    renderFillWorkspace26();
  }
}

function clearSlot26(slot) {
  const pool = document.getElementById("options-pool-26");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState26[slot] = null;
  activeSlot26 = slot;
  renderFillWorkspace26();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer26() {
  const q = quizData26[currentStep26];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState26.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback26("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState26[s] !== null);
    if (!isAllFilled) {
      showFeedback26("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState26[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback26("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-26");
    const outputBox = document.getElementById("code-output-26");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-26").style.display = "none";
    document.getElementById("btn-next-26").style.display = "inline-block";
  } else {
    showFeedback26("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback26(msg, type) {
  const feedback = document.getElementById("feedback-26");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion26() {
  loadQuestion26(currentStep26);
}

function nextQuestion26() {
  if (currentStep26 < quizData26.length - 1) {
    currentStep26++;
    loadQuestion26(currentStep26);
  } else {
    document.getElementById("quiz-container-26").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Çok Biçimlilik (Polymorphism) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml26(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz26);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz26();
}
</script>
