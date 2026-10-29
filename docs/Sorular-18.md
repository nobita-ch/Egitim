<!-- PYTHON INTERACTIVE EXERCISES: __INIT__ METHOD (INITIALIZER) -->
<div id="quiz-container-21" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-21" class="badge">Soru 1 / 10</span>
      <span id="type-badge-21" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-21" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-21" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-21" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-21" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-21" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-21" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-21">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-21" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-21" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-21" class="btn btn-secondary" onclick="resetCurrentQuestion21()">Sıfırla</button>
      <button id="btn-check-21" class="btn btn-primary" onclick="checkAnswer21()">Kontrol Et</button>
      <button id="btn-next-21" class="btn btn-success" onclick="nextQuestion21()" style="display: none;">Sonraki Soru →</button>
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
// __INIT__() METODU KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData21 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Temel __init__ Tanımı ve Nitelik Ataması",
    summary: "__init__ metodu nesne örneği oluşturulurken otomatik çalışır ve self üzerinden nitelikleri bağlar[cite: 21].",
    pieces: [
      "class Kisi:",
      "    def __init__(self, ad, yas):",
      "        self.ad = ad",
      "        self.yas = yas",
      "birey = Kisi(\"Can\", 25)",
      "print(birey.ad, birey.yas)"
    ],
    solutions: [
      [
        "class Kisi:",
        "    def __init__(self, ad, yas):",
        "        self.ad = ad",
        "        self.yas = yas",
        "birey = Kisi(\"Can\", 25)",
        "print(birey.ad, birey.yas)"
      ]
    ],
    output: "Can 25"
  },
  {
    type: "arrange",
    title: "2. __init__ İçinde Varsayılan Parametre Kullanımı",
    summary: "Parametrelere varsayılan değerler atanabilir; değer gönderilmezse varsayılan devreye girer[cite: 21].",
    pieces: [
      "class Lamba:",
      "    def __init__(self, parlaklik=100):",
      "        self.parlaklik = parlaklik",
      "l1 = Lamba()",
      "l2 = Lamba(50)",
      "print(l1.parlaklik, l2.parlaklik)"
    ],
    solutions: [
      [
        "class Lamba:",
        "    def __init__(self, parlaklik=100):",
        "        self.parlaklik = parlaklik",
        "l1 = Lamba()",
        "l2 = Lamba(50)",
        "print(l1.parlaklik, l2.parlaklik)"
      ]
    ],
    output: "100 50"
  },
  {
    type: "arrange",
    title: "3. Değiştirilebilir Parametre Tuzağı ve None Kontrolü",
    summary: "Varsayılan parametreye boş liste atanmaz[cite: 21]; None atanıp __init__ gövdesinde yeni liste oluşturulmalıdır[cite: 21].",
    pieces: [
      "class Sepet:",
      "    def __init__(self, urunler=None):",
      "        if urunler is None:",
      "            self.urunler = []",
      "        else:",
      "            self.urunler = urunler",
      "s = Sepet(); s.urunler.append(\"A\"); print(s.urunler)"
    ],
    solutions: [
      [
        "class Sepet:",
        "    def __init__(self, urunler=None):",
        "        if urunler is None:",
        "            self.urunler = []",
        "        else:",
        "            self.urunler = urunler",
        "s = Sepet(); s.urunler.append(\"A\"); print(s.urunler)"
      ]
    ],
    output: "['A']"
  },
  {
    type: "arrange",
    title: "4. Sabit Başlangıç Değeri Atama",
    summary: "Dışarıdan parametre almadan da __init__ içinde sabit başlangıç nitelikleri belirlenebilir[cite: 21].",
    pieces: [
      "class Surec:",
      "    def __init__(self, gorev):",
      "        self.gorev = gorev",
      "        self.tamamlandi = False",
      "islem = Surec(\"Yedekleme\")",
      "print(islem.gorev, islem.tamamlandi)"
    ],
    solutions: [
      [
        "class Surec:",
        "    def __init__(self, gorev):",
        "        self.gorev = gorev",
        "        self.tamamlandi = False",
        "islem = Surec(\"Yedekleme\")",
        "print(islem.gorev, islem.tamamlandi)"
      ]
    ],
    output: "Yedekleme False"
  },
  {
    type: "arrange",
    title: "5. __init__ ve __new__ Görev Ayrımı",
    summary: "__new__ nesneyi bellekte yaratan yapıcıdır, __init__ ise yaratılan nesnenin niteliklerini doldurur[cite: 21].",
    pieces: [
      "class Kimlik:",
      "    def __init__(self, kod):",
      "        self.kod = kod",
      "k = Kimlik(\"TR-06\")",
      "print(isinstance(k, Kimlik), k.kod)"
    ],
    solutions: [
      [
        "class Kimlik:",
        "    def __init__(self, kod):",
        "        self.kod = kod",
        "k = Kimlik(\"TR-06\")",
        "print(isinstance(k, Kimlik), k.kod)"
      ]
    ],
    output: "True TR-06"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: __init__ Dunder İmzası",
    summary: "Başlatıcı metot başında ve sonunda çift alt çizgi barındıran __init__ adıyla tanımlanır[cite: 21].",
    template: "class Kutu:\n    def __{slot0}__(self, boyut):\n        self.boyut = boyut\nk = Kutu(10)\nprint({slot1}.boyut)",
    slots: ["slot0", "slot1"],
    options: ["init", "k", "new", "self"],
    validCombinations: [
      { slot0: "init", slot1: "k" }
    ],
    output: "10"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: self ile Nitelik Bağlama",
    summary: "Gelen parametre değerleri 'self.nitelik = parametre' sözdizimiyle nesneye özel örnek niteliği yapılır[cite: 21].",
    template: "class Hesap:\n    def __init__(self, no):\n        {slot0}.no = {slot1}\nh = Hesap(101)\nprint(h.no)",
    slots: ["slot0", "slot1"],
    options: ["self", "no", "cls", "Hesap"],
    validCombinations: [
      { slot0: "self", slot1: "no" }
    ],
    output: "101"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: return Değer Yasağı",
    summary: "__init__ metodu geriye değer döndüremez; sadece None dönebilir veya erken çıkış yapabilir[cite: 21].",
    template: "class Test:\n    def __init__(self, x):\n        self.x = x\n        return {slot0}\nt = Test(5)\nprint(t.{slot1})",
    slots: ["slot0", "slot1"],
    options: ["None", "x", "5", "self"],
    validCombinations: [
      { slot0: "None", slot1: "x" }
    ],
    output: "5"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Varsayılan Port Parametresi",
    summary: "Parametreye atanan varsayılan değer sayesinde nesne eksik argümanla da güvenle başlatılabilir[cite: 21].",
    template: "class Servis:\n    def __init__(self, host, port={slot0}):\n        self.host = host\n        self.port = port\ns = Servis(\"localhost\")\nprint(s.{slot1})",
    slots: ["slot0", "slot1"],
    options: ["8080", "port", "host", "None"],
    validCombinations: [
      { slot0: "8080", slot1: "port" }
    ],
    output: "8080"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Güvenli Koleksiyon Başlatıcı (None)",
    summary: "Varsayılan liste tanımlanırken 'None' atanıp kontrol edilerek paylaşılan referans hatası önlenir[cite: 21].",
    template: "class Kuyruk:\n    def __init__(self, liste={slot0}):\n        self.liste = [] if liste {slot1} None else liste\nk = Kuyruk(); print(k.liste)",
    slots: ["slot0", "slot1"],
    options: ["None", "is", "[]", "=="],
    validCombinations: [
      { slot0: "None", slot1: "is" }
    ],
    output: "[]"
  }
];

let currentStep21 = 0;
let userArrangeState21 = [];
let userFillState21 = {};

function initQuiz21() {
  loadQuestion21(currentStep21);
}

function loadQuestion21(index) {
  const q = quizData21[index];
  document.getElementById("step-badge-21").innerText = `Soru ${index + 1} / ${quizData21.length}`;
  document.getElementById("type-badge-21").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-21").style.width = `${((index + 1) / quizData21.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-21");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-21").innerText = q.title;
  
  const feedback = document.getElementById("feedback-21");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-21");
  outputContainer.style.display = "none";
  document.getElementById("code-output-21").innerText = "";
  
  document.getElementById("btn-check-21").style.display = "inline-block";
  document.getElementById("btn-next-21").style.display = "none";
  
  const workspace = document.getElementById("workspace-21");
  const pool = document.getElementById("options-pool-21");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState21 = [];
    renderArrangeWorkspace21();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange21(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState21 = {};
    q.slots.forEach(slot => userFillState21[slot] = null);
    renderFillWorkspace21();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption21(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange21(piece, btnElement) {
  userArrangeState21.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace21();
}

function removePieceFromArrange21(index) {
  const item = userArrangeState21[index];
  item.btnRef.classList.remove("used");
  userArrangeState21.splice(index, 1);
  renderArrangeWorkspace21();
}

function renderArrangeWorkspace21() {
  const workspace = document.getElementById("workspace-21");
  if (userArrangeState21.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState21.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml21(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange21(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot21 = null;

function renderFillWorkspace21() {
  const q = quizData21[currentStep21];
  const workspace = document.getElementById("workspace-21");
  let html = escapeHtml21(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState21[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot21('${slot}')">${escapeHtml21(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot21('${slot}')">${activeSlot21 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot21(slot) {
  activeSlot21 = slot;
  renderFillWorkspace21();
}

function selectFillOption21(val, btnElement) {
  const q = quizData21[currentStep21];
  let targetSlot = activeSlot21;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState21[s] === null);
  }
  
  if (targetSlot) {
    userFillState21[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot21 = null;
    renderFillWorkspace21();
  }
}

function clearSlot21(slot) {
  const pool = document.getElementById("options-pool-21");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState21[slot] = null;
  activeSlot21 = slot;
  renderFillWorkspace21();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer21() {
  const q = quizData21[currentStep21];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState21.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback21("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState21[s] !== null);
    if (!isAllFilled) {
      showFeedback21("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState21[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback21("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-21");
    const outputBox = document.getElementById("code-output-21");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-21").style.display = "none";
    document.getElementById("btn-next-21").style.display = "inline-block";
  } else {
    showFeedback21("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback21(msg, type) {
  const feedback = document.getElementById("feedback-21");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion21() {
  loadQuestion21(currentStep21);
}

function nextQuestion21() {
  if (currentStep21 < quizData21.length - 1) {
    currentStep21++;
    loadQuestion21(currentStep21);
  } else {
    document.getElementById("quiz-container-21").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">__init__() Metodu (Initializer) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml21(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz21);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz21();
}
</script>
