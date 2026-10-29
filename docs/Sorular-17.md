<!-- PYTHON INTERACTIVE EXERCISES: NESNE YÖNELİMLİ PROGRAMLAMA (OOP) -->
<div id="quiz-container-20" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-20" class="badge">Soru 1 / 10</span>
      <span id="type-badge-20" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-20" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-20" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-20" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-20" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-20" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-20" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-20">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-20" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-20" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-20" class="btn btn-secondary" onclick="resetCurrentQuestion20()">Sıfırla</button>
      <button id="btn-check-20" class="btn btn-primary" onclick="checkAnswer20()">Kontrol Et</button>
      <button id="btn-next-20" class="btn btn-success" onclick="nextQuestion20()" style="display: none;">Sonraki Soru →</button>
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
// NESNE YÖNELİMLİ PROGRAMLAMA (OOP) SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData20 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Sınıf Tanımlama, __init__ ve Nesne Metodu",
    summary: "Sınıf yapıcı metodu __init__ ile örnek nitelikleri oluşturulur ve self üzerinden metotlara erişilir.",
    pieces: [
      "class Arac:",
      "    def __init__(self, model):",
      "        self.model = model",
      "    def bilgi(self):",
      "        return f\"Model: {self.model}\"",
      "oto = Arac(\"Sedan\")",
      "print(oto.bilgi())"
    ],
    solutions: [
      [
        "class Arac:",
        "    def __init__(self, model):",
        "        self.model = model",
        "    def bilgi(self):",
        "        return f\"Model: {self.model}\"",
        "oto = Arac(\"Sedan\")",
        "print(oto.bilgi())"
      ]
    ],
    output: "Model: Sedan"
  },
  {
    type: "arrange",
    title: "2. super() ile Üst Sınıf Kalıtımı (Inheritance)",
    summary: "Alt sınıflar üst sınıfın özelliklerini devralmak için super().__init__() fonksiyonunu çalıştırır.",
    pieces: [
      "class Urun:",
      "    def __init__(self, ad): self.ad = ad",
      "class Kitap(Urun):",
      "    def __init__(self, ad, sayfa):",
      "        super().__init__(ad)",
      "        self.sayfa = sayfa",
      "k = Kitap(\"Python\", 300); print(k.ad, k.sayfa)"
    ],
    solutions: [
      [
        "class Urun:",
        "    def __init__(self, ad): self.ad = ad",
        "class Kitap(Urun):",
        "    def __init__(self, ad, sayfa):",
        "        super().__init__(ad)",
        "        self.sayfa = sayfa",
        "k = Kitap(\"Python\", 300); print(k.ad, k.sayfa)"
      ]
    ],
    output: "Python 300"
  },
  {
    type: "arrange",
    title: "3. __str__() Metodu ile Metinsel Temsil",
    summary: "__str__() metodu, nesne print() ile ekrana yazdırıldığında kullanıcı dostu bir metin döndürmeyi sağlar.",
    pieces: [
      "class Kisi:",
      "    def __init__(self, isim):",
      "        self.isim = isim",
      "    def __str__(self):",
      "        return f\"Kullanıcı: {self.isim}\"",
      "birey = Kisi(\"Ayşe\"); print(birey)"
    ],
    solutions: [
      [
        "class Kisi:",
        "    def __init__(self, isim):",
        "        self.isim = isim",
        "    def __str__(self):",
        "        return f\"Kullanıcı: {self.isim}\"",
        "birey = Kisi(\"Ayşe\"); print(birey)"
      ]
    ],
    output: "Kullanıcı: Ayşe"
  },
  {
    type: "arrange",
    title: "4. Kapsülleme (Private Nitelik) ve Getter Metodu",
    summary: "__degisken (iki alt çizgi) dışarıdan doğrudan erişilemeyen private nitelik oluşturur; erişim metotla sağlanır.",
    pieces: [
      "class Hesap:",
      "    def __init__(self, miktar):",
      "        self.__bakiye = miktar",
      "    def bakiye_al(self):",
      "        return self.__bakiye",
      "h = Hesap(500); print(h.bakiye_al())"
    ],
    solutions: [
      [
        "class Hesap:",
        "    def __init__(self, miktar):",
        "        self.__bakiye = miktar",
        "    def bakiye_al(self):",
        "        return self.__bakiye",
        "h = Hesap(500); print(h.bakiye_al())"
      ]
    ],
    output: "500"
  },
  {
    type: "arrange",
    title: "5. Çok Biçimlilik (Polymorphism) Döngüsü",
    summary: "Farklı sınıfların aynı isimli metoda sahip olması, ortak bir döngüde farklı davranabilmelerini sağlar.",
    pieces: [
      "class Kedi: def ses(self): return \"Miyav\"",
      "class Kopek: def ses(self): return \"Hav\"",
      "hayvanlar = [Kedi(), Kopek()]",
      "sesler = [h.ses() for h in hayvanlar]",
      "print(\" \".join(sesler))"
    ],
    solutions: [
      [
        "class Kedi: def ses(self): return \"Miyav\"",
        "class Kopek: def ses(self): return \"Hav\"",
        "hayvanlar = [Kedi(), Kopek()]",
        "sesler = [h.ses() for h in hayvanlar]",
        "print(\" \".join(sesler))"
      ],
      [
        "class Kopek: def ses(self): return \"Hav\"",
        "class Kedi: def ses(self): return \"Miyav\"",
        "hayvanlar = [Kedi(), Kopek()]",
        "sesler = [h.ses() for h in hayvanlar]",
        "print(\" \".join(sesler))"
      ]
    ],
    output: "Miyav Hav"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Sınıf Başlatıcı ve self Parametresi",
    summary: "Sınıf metotlarında ilk parametre daima o anki nesneyi temsil eden 'self' olmak zorundadır.",
    template: "class Nokta:\n    def __init__({slot0}, x, y):\n        self.x = x\n        {slot1}.y = y\nn = Nokta(3, 4)\nprint(n.x, n.y)",
    slots: ["slot0", "slot1"],
    options: ["self", "self", "cls", "this"],
    validCombinations: [
      { slot0: "self", slot1: "self" }
    ],
    output: "3 4"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Sınıf Niteliği (Ortak Paylaşım)",
    summary: "Sınıf gövdesinde tanımlanan nitelikler tüm nesneler tarafından ortak paylaşılır ve sınıf adıyla güncellenebilir.",
    template: "class Oyun:\n    surum = \"1.0\"\nOyun.{slot0} = \"2.0\"\no = Oyun()\nprint({slot1}.surum)",
    slots: ["slot0", "slot1"],
    options: ["surum", "o", "id", "Oyun()"],
    validCombinations: [
      { slot0: "surum", slot1: "o" }
    ],
    output: "2.0"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: super() ile Kalıtım Metodu Çağırma",
    summary: "super().__init__() ifadesi türetilen sınıftan üst sınıfın kurucu metodunu çalıştırmak için kullanılır.",
    template: "class Ana:\n    def __init__(self, kod): self.kod = kod\nclass Alt(Ana):\n    def __init__(self, kod):\n        {slot0}().__init__({slot1})\na = Alt(101); print(a.kod)",
    slots: ["slot0", "slot1"],
    options: ["super", "kod", "self", "Ana"],
    validCombinations: [
      { slot0: "super", slot1: "kod" }
    ],
    output: "101"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: del ile Nitelik Silme",
    summary: "Nesneye ait bir niteliği nesne üzerinden kaldırmak için 'del' anahtar sözcüğü kullanılır.",
    template: "class Veri:\n    def __init__(self): self.test = True\nv = Veri()\n{slot0} v.{slot1}\nprint(hasattr(v, \"test\"))",
    slots: ["slot0", "slot1"],
    options: ["del", "test", "remove", "pop"],
    validCombinations: [
      { slot0: "del", slot1: "test" }
    ],
    output: "False"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: __str__ Dunder Metodu İmzası",
    summary: "__str__(self) metodu nesnenin print() çağrılarında döneceği metin formatını belirler.",
    template: "class Kart:\n    def __init__(self, tur): self.tur = tur\n    def __{slot0}__(self):\n        {slot1} f\"Kart: {self.tur}\"\nprint(Kart(\"Kupa\"))",
    slots: ["slot0", "slot1"],
    options: ["str", "return", "repr", "print"],
    validCombinations: [
      { slot0: "str", slot1: "return" }
    ],
    output: "Kart: Kupa"
  }
];

let currentStep20 = 0;
let userArrangeState20 = [];
let userFillState20 = {};

function initQuiz20() {
  loadQuestion20(currentStep20);
}

function loadQuestion20(index) {
  const q = quizData20[index];
  document.getElementById("step-badge-20").innerText = `Soru ${index + 1} / ${quizData20.length}`;
  document.getElementById("type-badge-20").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-20").style.width = `${((index + 1) / quizData20.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-20");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-20").innerText = q.title;
  
  const feedback = document.getElementById("feedback-20");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-20");
  outputContainer.style.display = "none";
  document.getElementById("code-output-20").innerText = "";
  
  document.getElementById("btn-check-20").style.display = "inline-block";
  document.getElementById("btn-next-20").style.display = "none";
  
  const workspace = document.getElementById("workspace-20");
  const pool = document.getElementById("options-pool-20");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState20 = [];
    renderArrangeWorkspace20();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange20(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState20 = {};
    q.slots.forEach(slot => userFillState20[slot] = null);
    renderFillWorkspace20();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption20(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange20(piece, btnElement) {
  userArrangeState20.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace20();
}

function removePieceFromArrange20(index) {
  const item = userArrangeState20[index];
  item.btnRef.classList.remove("used");
  userArrangeState20.splice(index, 1);
  renderArrangeWorkspace20();
}

function renderArrangeWorkspace20() {
  const workspace = document.getElementById("workspace-20");
  if (userArrangeState20.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState20.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml20(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange20(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot20 = null;

function renderFillWorkspace20() {
  const q = quizData20[currentStep20];
  const workspace = document.getElementById("workspace-20");
  let html = escapeHtml20(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState20[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot20('${slot}')">${escapeHtml20(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot20('${slot}')">${activeSlot20 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot20(slot) {
  activeSlot20 = slot;
  renderFillWorkspace20();
}

function selectFillOption20(val, btnElement) {
  const q = quizData20[currentStep20];
  let targetSlot = activeSlot20;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState20[s] === null);
  }
  
  if (targetSlot) {
    userFillState20[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot20 = null;
    renderFillWorkspace20();
  }
}

function clearSlot20(slot) {
  const pool = document.getElementById("options-pool-20");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState20[slot] = null;
  activeSlot20 = slot;
  renderFillWorkspace20();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer20() {
  const q = quizData20[currentStep20];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState20.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback20("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState20[s] !== null);
    if (!isAllFilled) {
      showFeedback20("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState20[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback20("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-20");
    const outputBox = document.getElementById("code-output-20");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-20").style.display = "none";
    document.getElementById("btn-next-20").style.display = "inline-block";
  } else {
    showFeedback20("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback20(msg, type) {
  const feedback = document.getElementById("feedback-20");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion20() {
  loadQuestion20(currentStep20);
}

function nextQuestion20() {
  if (currentStep20 < quizData20.length - 1) {
    currentStep20++;
    loadQuestion20(currentStep20);
  } else {
    document.getElementById("quiz-container-20").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Nesne Yönelimli Programlama (OOP) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml20(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz20);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz20();
}
</script>
