<!-- PYTHON DEĞİŞKENLER VE KAPSAM (LEGB) ETKİLEŞİMLİ ALIŞTIRMALAR (TERMINAL ÇIKTILI) -->
<div id="quiz-container" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge" class="badge">Soru 1 / 10</span>
      <span id="type-badge" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri -->
    <div id="workspace" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset" class="btn btn-secondary" onclick="resetCurrentQuestion()">Sıfırla</button>
      <button id="btn-check" class="btn btn-primary" onclick="checkAnswer()">Kontrol Et</button>
      <button id="btn-next" class="btn btn-success" onclick="nextQuestion()" style="display: none;">Sonraki Soru →</button>
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

/* Sorunun Üstünde Duran Sabit Bilgi Kutusu */
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
  background: #f8fafc;
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
const quizData = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Dinamik Tür Değişimi",
    summary: "Python dinamik tiplidir; aynı değişken önce int ardından str gibi farklı türde bir değere bağlanabilir.",
    pieces: [
      "veri = 42",
      "veri = \"Kitap\"",
      "print(veri)"
    ],
    solutions: [
      [
        "veri = 42",
        "veri = \"Kitap\"",
        "print(veri)"
      ]
    ],
    output: "Kitap"
  },
  {
    type: "arrange",
    title: "2. Tek Satırda Çoklu Değer Atama",
    summary: "Tek satırda birden fazla değişkene virgül yardımıyla sırasıyla farklı değerler atanabilir (a, b = 1, 2).",
    pieces: [
      "k1, k2 = 5, 8",
      "cevre = (k1 + k2) * 2",
      "print(cevre)"
    ],
    solutions: [
      [
        "k1, k2 = 5, 8",
        "cevre = (k1 + k2) * 2",
        "print(cevre)"
      ]
    ],
    output: "26"
  },
  {
    type: "arrange",
    title: "3. Ortak Değer Atama Zinciri",
    summary: "Eşittir '=' zinciri kullanılarak tek bir değer aynı anda birden fazla değişkene atanabilir.",
    pieces: [
      "a = b = c = 0",
      "print(a, b, c)"
    ],
    solutions: [
      [
        "a = b = c = 0",
        "print(a, b, c)"
      ]
    ],
    output: "0 0 0"
  },
  {
    type: "arrange",
    title: "4. Global Değişkeni Fonksiyon İçinde Güncelleme",
    summary: "Fonksiyon içinden global bir değişkenin değerini değiştirmek için satır başında 'global' anahtar kelimesiyle belirtilmesi gerekir.",
    pieces: [
      "puan = 10",
      "def puan_ekle():",
      "    global puan",
      "    puan += 5"
    ],
    solutions: [
      [
        "puan = 10",
        "def puan_ekle():",
        "    global puan",
        "    puan += 5"
      ]
    ],
    output: "# (puan_ekle() çağrıldığında global puan 15 olur)"
  },
  {
    type: "arrange",
    title: "5. İç İçe Fonksiyonda nonlocal Kullanımı",
    summary: "İçteki fonksiyonun bir üstteki dış fonksiyonun değişkenini güncellemesi için 'nonlocal' anahtar kelimesi kullanılır.",
    pieces: [
      "def dis():",
      "    sayi = 1",
      "    def ic():",
      "        nonlocal sayi",
      "        sayi += 1"
    ],
    solutions: [
      [
        "def dis():",
        "    sayi = 1",
        "    def ic():",
        "        nonlocal sayi",
        "        sayi += 1"
      ]
    ],
    output: "# (ic() fonksiyonu dıştaki sayi değişkenini 2 yapar)"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Veri Tipi Kontrolü",
    summary: "type() fonksiyonu, parametre olarak verilen değişkenin o an işaret ettiği veri türünü döndürür.",
    template: "adet = 15\nprint({slot0}({slot1}))",
    slots: ["slot0", "slot1"],
    options: ["type", "adet", "int", "input"],
    validCombinations: [
      { slot0: "type", slot1: "adet" }
    ],
    output: "<class 'int'>"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Snake Case Adlandırma",
    summary: "Python (PEP 8) değişken adlandırma standardı Snake Case'dir; tüm harfler küçük yazılır ve kelimeler alt çizgi (_) ile ayrılır.",
    template: "{slot0}{slot1}{slot2} = 50\nprint({slot0}{slot1}{slot2})",
    slots: ["slot0", "slot1", "slot2"],
    options: ["kullanici", "_", "sayisi", "-", "Sayisi"],
    validCombinations: [
      { slot0: "kullanici", slot1: "_", slot2: "sayisi" }
    ],
    output: "50"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Sabit (Constant) Tanımlama",
    summary: "Değeri program boyunca değişmemesi gereken sabitler PEP 8 kuralına göre tamamen BÜYÜK HARFLERLE yazılır.",
    template: "{slot0} = 3.14\n{slot1} = 500\nprint({slot0}, {slot1})",
    slots: ["slot0", "slot1"],
    options: ["PI_DEGERI", "MAX_LIMIT", "pi_degeri", "maxLimit"],
    validCombinations: [
      { slot0: "PI_DEGERI", slot1: "MAX_LIMIT" },
      { slot0: "MAX_LIMIT", slot1: "PI_DEGERI" }
    ],
    output: "3.14 500"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: LEGB Arama Sırası",
    summary: "Python değişken ararken LEGB sırasını izler: Local (Yerel) -> Enclosing (Kapsayan) -> Global -> Built-in (Gömülü).",
    template: "sirasi = \"L -> {slot0} -> G -> {slot1}\"\nprint(sirasi)",
    slots: ["slot0", "slot1"],
    options: ["Enclosing", "Built-in", "Block", "Base"],
    validCombinations: [
      { slot0: "Enclosing", slot1: "Built-in" }
    ],
    output: "L -> Enclosing -> G -> Built-in"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Tip İpucu (Type Hint)",
    summary: "Tip ipuçlarında değişken adından sonra iki nokta ':' konup veri tipi belirtilir (degisken: str = \"Metin\").",
    template: "ad{slot0} {slot1} = \"Deniz\"\nprint(ad)",
    slots: ["slot0", "slot1"],
    options: [":", "str", "=", "int"],
    validCombinations: [
      { slot0: ":", slot1: "str" }
    ],
    output: "Deniz"
  }
];

let currentStep = 0;
let userArrangeState = [];
let userFillState = {};

function initQuiz() {
  loadQuestion(currentStep);
}

function loadQuestion(index) {
  const q = quizData[index];
  document.getElementById("step-badge").innerText = `Soru ${index + 1} / ${quizData.length}`;
  document.getElementById("type-badge").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill").style.width = `${((index + 1) / quizData.length) * 100}%`;
  
  // Konu kuralı kutusu sorunun en üstünde sürekli görünür kalır
  const summaryBox = document.getElementById("topic-summary");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title").innerText = q.title;
  
  const feedback = document.getElementById("feedback");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container");
  outputContainer.style.display = "none";
  document.getElementById("code-output").innerText = "";
  
  document.getElementById("btn-check").style.display = "inline-block";
  document.getElementById("btn-next").style.display = "none";
  
  const workspace = document.getElementById("workspace");
  const pool = document.getElementById("options-pool");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState = [];
    renderArrangeWorkspace();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState = {};
    q.slots.forEach(slot => userFillState[slot] = null);
    renderFillWorkspace();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Arrange Fonksiyonları */
function addPieceToArrange(piece, btnElement) {
  userArrangeState.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace();
}

function removePieceFromArrange(index) {
  const item = userArrangeState[index];
  item.btnRef.classList.remove("used");
  userArrangeState.splice(index, 1);
  renderArrangeWorkspace();
}

function renderArrangeWorkspace() {
  const workspace = document.getElementById("workspace");
  if (userArrangeState.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange(idx);
    workspace.appendChild(line);
  });
}

/* Fill Fonksiyonları */
let activeSlot = null;

function renderFillWorkspace() {
  const q = quizData[currentStep];
  const workspace = document.getElementById("workspace");
  let html = escapeHtml(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot('${slot}')">${escapeHtml(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot('${slot}')">${activeSlot === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot(slot) {
  activeSlot = slot;
  renderFillWorkspace();
}

function selectFillOption(val, btnElement) {
  const q = quizData[currentStep];
  let targetSlot = activeSlot;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState[s] === null);
  }
  
  if (targetSlot) {
    userFillState[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot = null;
    renderFillWorkspace();
  }
}

function clearSlot(slot) {
  const pool = document.getElementById("options-pool");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState[slot] = null;
  activeSlot = slot;
  renderFillWorkspace();
}

/* Doğrulama */
function checkAnswer() {
  const q = quizData[currentStep];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState[s] !== null);
    if (!isAllFilled) {
      showFeedback("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback("✓ Tebrikler! Doğru cevap.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container");
    const outputBox = document.getElementById("code-output");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check").style.display = "none";
    document.getElementById("btn-next").style.display = "inline-block";
  } else {
    showFeedback("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback(msg, type) {
  const feedback = document.getElementById("feedback");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion() {
  loadQuestion(currentStep);
}

function nextQuestion() {
  if (currentStep < quizData.length - 1) {
    currentStep++;
    loadQuestion(currentStep);
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Değişkenler, Adlandırma ve Kapsam (LEGB) alıştırmalarını başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz();
}
</script>
