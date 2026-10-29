<!-- PYTHON INTERACTIVE EXERCISES (MkDocs Light Theme / White Workspace - Terminal Çıktılı) -->
<div id="quiz-container" class="interactive-quiz">
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge" class="badge">Soru 1 / 10</span>
      <span id="type-badge" class="badge badge-type">Kod Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill" class="progress-fill"></div>
    </div>
  </div>

  <div class="quiz-body">
    <h3 id="question-title" class="q-title"></h3>
    <p id="question-desc" class="q-desc"></p>

    <!-- Kod / Boşluk Doldurma Alanı (Beyaz Arka Plan) -->
    <div id="workspace" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section">
      <div class="pool-header">Kullanılabilir Parçalar (Seçmek / Kaldırmak için dokunun):</div>
      <div id="options-pool" class="options-container"></div>
    </div>
  </div>

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
/* Beyaz Ana Tema */
.interactive-quiz {
  background: #ffffff;
  color: #2b2b2b;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  font-family: var(--md-text-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
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
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  background: #ebf3ff;
  color: #1a56db;
}

.badge-type {
  background: #eefdf3;
  color: #0e8a38;
}

.quiz-progress-bar {
  width: 100%;
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 10%;
  background: #2563eb;
  transition: width 0.3s ease;
}

.q-title {
  margin: 0.5rem 0 0.25rem 0;
  color: #111827;
  font-size: 1.15rem;
  font-weight: 700;
}

.q-desc {
  font-size: 0.92rem;
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.5;
}

/* Soru & Cevap Kod Alanı (Beyaz Arka Plan) */
.workspace-box {
  background: #ffffff;
  color: #0f172a;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  padding: 1.1rem;
  min-height: 110px;
  font-family: var(--md-code-font-family, Consolas, Monaco, "Courier New", monospace);
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  white-space: pre-wrap;
  word-break: break-word;
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
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-height: 48px;
  margin-bottom: 1.2rem;
}

/* Seçenek Butonları */
.code-chip {
  background: #f3f4f6;
  color: #1f2937;
  border: 1px solid #d1d5db;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-family: Consolas, Monaco, monospace;
  font-size: 0.88rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
}

.code-chip:hover {
  background: #e5e7eb;
  border-color: #9ca3af;
}

.code-chip.used {
  opacity: 0.35;
  background: #e5e7eb;
  cursor: not-allowed;
  border-style: dashed;
}

/* Boşluk Yuvaları */
.code-slot {
  display: inline-block;
  min-width: 74px;
  height: 28px;
  border: 1.5px dashed #2563eb;
  border-radius: 4px;
  background: #eff6ff;
  color: #1e40af;
  vertical-align: middle;
  margin: 0 4px;
  text-align: center;
  line-height: 26px;
  cursor: pointer;
  font-weight: 600;
}

.code-slot.filled {
  border-style: solid;
  border-color: #16a34a;
  background: #f0fdf4;
  color: #15803d;
}

/* Sıralanabilir Kod Satırları */
.sortable-line {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #0f172a;
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  margin-bottom: 0.45rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sortable-line:hover {
  border-color: #f87171;
  background: #fef2f2;
}

.quiz-footer {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feedback-msg {
  font-size: 0.95rem;
  font-weight: 600;
  min-height: 1.3rem;
}

.feedback-msg.success { color: #16a34a; }
.feedback-msg.error { color: #dc2626; }
.feedback-msg.warning { color: #d97706; }

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.btn {
  padding: 0.55rem 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.btn:hover { opacity: 0.9; }
.btn-primary { background: #2563eb; color: #ffffff; }
.btn-secondary { background: #e5e7eb; color: #374151; }
.btn-success { background: #16a34a; color: #ffffff; }
</style>

<script>
const quizData = [
  /* ================= 5 ADET SIRALAMA (TIKLA-SIRALA) ================= */
  {
    type: "arrange",
    title: "1. Sıralama: Koşul ve Girintili Blok Mantığı",
    desc: "Aşağıdaki kod parçalarını geçerli bir `if` bloğu oluşturacak şekilde doğru sırayla tıklayarak ekleyin.",
    pieces: [
      "if hava_durumu == \"yagmurlu\":",
      "    print(\"Semsiyeni yanina al!\")"
    ],
    solutions: [
      [
        "if hava_durumu == \"yagmurlu\":",
        "    print(\"Semsiyeni yanina al!\")"
      ]
    ],
    output: "Semsiyeni yanina al!  # (Koşul True ise ekrana basılır)"
  },
  {
    type: "arrange",
    title: "2. Sıralama: Bağımsız Yorum Satırları Zinciri",
    desc: "Yapılacaklar listesini belirten 3 satırlık bağımsız açıklama satırlarını mantıklı bir sırayla birleştirin.",
    pieces: [
      "# Adım 1: Veritabanına bağlan",
      "# Adım 2: Tabloları getir",
      "# Adım 3: Bağlantıyı kapat"
    ],
    solutions: [
      [
        "# Adım 1: Veritabanına bağlan",
        "# Adım 2: Tabloları getir",
        "# Adım 3: Bağlantıyı kapat"
      ]
    ],
    output: "# (Yorum satırları Python tarafından yürütülmez, çıktı üretmez)"
  },
  {
    type: "arrange",
    title: "3. Sıralama: Açık Satır Devamı (\\) ile String Birleştirme",
    desc: "Ters bölü (`\\`) ile alt satırlara bölünmüş uzun bir metin birleştirme ifadesini kurun.",
    pieces: [
      "mesaj = \"Python \" + \\",
      "        \"programlama \" + \\",
      "        \"dili\"",
      "print(mesaj)"
    ],
    solutions: [
      [
        "mesaj = \"Python \" + \\",
        "        \"programlama \" + \\",
        "        \"dili\"",
        "print(mesaj)"
      ]
    ],
    output: "Python programlama dili"
  },
  {
    type: "arrange",
    title: "4. Sıralama: Örtük Satır Devamı (Sözlük / Dict Tanımı)",
    desc: "Süslü parantez `{}` içinde alt alta tanımlanan öğrenci sözlük yapısını doğru şekilde sıralayın.",
    pieces: [
      "ogrenci = {",
      "    'ad': 'Can',",
      "    'not': 95",
      "}",
      "print(ogrenci)"
    ],
    solutions: [
      [
        "ogrenci = {",
        "    'ad': 'Can',",
        "    'not': 95",
        "}",
        "print(ogrenci)"
      ],
      [
        "ogrenci = {",
        "    'not': 95,",
        "    'ad': 'Can'",
        "}",
        "print(ogrenci)"
      ]
    ],
    output: "{'ad': 'Can', 'not': 95}"
  },
  {
    type: "arrange",
    title: "5. Sıralama: Noktalı Virgül (;) ile Çoklu İfade",
    desc: "Noktalı virgülle yan yana dizilmiş değişken atamaları ve yazdırma adımını ardışık olarak dizin.",
    pieces: [
      "puan = 50;",
      "ekstra = 10;",
      "print(puan + ekstra)"
    ],
    solutions: [
      [
        "puan = 50;",
        "ekstra = 10;",
        "print(puan + ekstra)"
      ],
      [
        "ekstra = 10;",
        "puan = 50;",
        "print(puan + ekstra)"
      ]
    ],
    output: "60"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA (TIKLA-YERLEŞTİR) ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Blok Başlatma ve Girinti Standartı",
    desc: "Koşul bloğunu başlatan karakteri (`:`) ve alt satırdaki komutun girintisini yerleştirin.",
    template: "if skor > 100{slot0}\n{slot1}print(\"Yeni rekor kirildi!\")",
    slots: ["slot0", "slot1"],
    options: [
      { label: ":", value: ":" },
      { label: "␣␣␣␣ (4 Boşluk)", value: "    " },
      { label: ";", value: ";" },
      { label: "␣␣ (2 Boşluk)", value: "  " }
    ],
    validate: function(state) {
      if (state.slot0 === ":" && state.slot1 === "    ") {
        return { valid: true, message: "Harika! Kod Python (PEP 8) standardı olan 4 boşluk girintisine tam uyumlu.", type: "success" };
      }
      if (state.slot0 === ":" && state.slot1 === "  ") {
        return { valid: true, message: "Doğru! (Python en az 1 boşluk kabul eder; ancak PEP 8 standardı olarak 4 boşluk tavsiye edilir).", type: "warning" };
      }
      return { valid: false, message: "Girinti veya blok başlatıcı hatalı, tekrar deneyin!", type: "error" };
    },
    output: "Yeni rekor kirildi!"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Satır İçi (Inline) Açıklama",
    desc: "Hesaplama satırının yanına eklenen açıklama işareti ile hesap sonucunu ekrana basan fonksiyonu seçin.",
    template: "hiz = 120  {slot0} km/s cinsinden değer\n{slot1}(hiz)",
    slots: ["slot0", "slot1"],
    options: [
      { label: "#", value: "#" },
      { label: "print", value: "print" },
      { label: "//", value: "//" },
      { label: "echo", value: "echo" }
    ],
    validate: function(state) {
      const valid = state.slot0 === "#" && state.slot1 === "print";
      return { valid: valid, message: valid ? "Harika! Satır içi açıklama ve yazdırma komutu doğru." : "Dizilimde veya seçilen parçalarda hata var, tekrar deneyin!", type: valid ? "success" : "error" };
    },
    output: "120"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Çok Satırlı Açıklama / Docstring",
    desc: "Çok satırlı metin bloğunu sarmalayan tırnakları seçin. (Hem üç adet çift tırnak hem üç adet tek tırnak kabul edilir).",
    template: "{slot0}\nSistem parametrelerini günceller.\nGeriye durum kodu döner.\n{slot1}\nprint(\"Belgelendirme Hazır\")",
    slots: ["slot0", "slot1"],
    options: [
      { label: '"""', value: '"""' },
      { label: "'''", value: "'''" },
      { label: '"""', value: '"""' },
      { label: "'''", value: "'''" }
    ],
    validate: function(state) {
      const valid = (state.slot0 === '"""' && state.slot1 === '"""') || 
                    (state.slot0 === "'''" && state.slot1 === "'''");
      return { valid: valid, message: valid ? "Tebrikler! Üçlü tırnak blokları başarıyla tamamlandı." : "Dizilimde veya seçilen parçalarda hata var, tekrar deneyin!", type: valid ? "success" : "error" };
    },
    output: "Belgelendirme Hazır"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Uzun Formülde Satır Atlama",
    desc: "Matematiksel işlemin alt satırda devam ettiğini belirten ters bölü (`\\`) kaçış işaretlerini yerleştirin.",
    template: "alan = (taban * yukseklik) + {slot0}\n       (ekstra_pay) + {slot1}\n       tolerans\nprint(alan)",
    slots: ["slot0", "slot1"],
    options: [
      { label: "\\", value: "\\" },
      { label: "\\", value: "\\" },
      { label: "/", value: "/" },
      { label: ";", value: ";" }
    ],
    validate: function(state) {
      const valid = state.slot0 === "\\" && state.slot1 === "\\";
      return { valid: valid, message: valid ? "Harika! Açık satır devamı (\\) doğru uygulandı." : "Dizilimde veya seçilen parçalarda hata var, tekrar deneyin!", type: valid ? "success" : "error" };
    },
    output: "65  # (Tüm satırların toplam sonucu)"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Örtük Satır Devamı (Parantez İçi Hesaplama)",
    desc: "Ters bölü (`\\`) kullanmadan matematiksel bir ifadenin alt satırlarda devam etmesini sağlayan açma ve kapama parantezlerini yerleştirin.",
    template: "net_kazanc = {slot0}\n    ana_gelir + prim +\n    faiz_geliri - vergi\n{slot1}\nprint(net_kazanc)",
    slots: ["slot0", "slot1"],
    options: [
      { label: "(", value: "(" },
      { label: ")", value: ")" },
      { label: "{", value: "{" },
      { label: "}", value: "}" }
    ],
    validate: function(state) {
      const valid = state.slot0 === "(" && state.slot1 === ")";
      return { valid: valid, message: valid ? "Tebrikler! Parantez içi örtük satır devamı doğru kuruldu." : "Dizilimde veya seçilen parçalarda hata var, tekrar deneyin!", type: valid ? "success" : "error" };
    },
    output: "14500  # (Parantez içi hesaplama sonucu)"
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
  document.getElementById("type-badge").innerText = q.type === "arrange" ? "Kod Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill").style.width = `${((index + 1) / quizData.length) * 100}%`;
  
  document.getElementById("question-title").innerText = q.title;
  document.getElementById("question-desc").innerText = q.desc;
  
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
    shuffledOptions.forEach((optObj) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = optObj.label;
      btn.onclick = () => selectFillOption(optObj, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Fonksiyonları */
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
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Aşağıdaki kod parçalarına tıklayarak sırayla buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml(item.text)}</span> <span style="color:#ef4444; font-size:0.75rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Fonksiyonları */
let activeSlot = null;

function renderFillWorkspace() {
  const q = quizData[currentStep];
  const workspace = document.getElementById("workspace");
  let html = escapeHtml(q.template);
  
  q.slots.forEach((slot) => {
    const valObj = userFillState[slot];
    const slotHtml = valObj 
      ? `<span class="code-slot filled" onclick="clearSlot('${slot}')">${escapeHtml(valObj.label)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot('${slot}')">${activeSlot === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot(slot) {
  activeSlot = slot;
  renderFillWorkspace();
}

function selectFillOption(optObj, btnElement) {
  const q = quizData[currentStep];
  let targetSlot = activeSlot;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState[s] === null);
  }
  
  if (targetSlot) {
    userFillState[targetSlot] = optObj;
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

/* Kontrol ve Esnek Doğrulama */
function checkAnswer() {
  const q = quizData[currentStep];
  let isSuccess = false;
  let feedbackText = "";
  let feedbackType = "error";

  if (q.type === "arrange") {
    const userAns = userArrangeState.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isSuccess = q.solutions.some(sol => JSON.stringify(userAns) === JSON.stringify(sol));
    feedbackText = isSuccess ? "Harika! Kod Python sözdizimine ve standartlara tam uyumlu." : "Dizilimde hata var, tekrar deneyin!";
    feedbackType = isSuccess ? "success" : "error";
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState[s] !== null);
    if (!isAllFilled) {
      showFeedback("Lütfen tüm boşlukları doldurun.", "error");
      return;
    }
    const flatState = {};
    q.slots.forEach(s => flatState[s] = userFillState[s].value);
    const result = q.validate(flatState);
    isSuccess = result.valid;
    feedbackText = result.message;
    feedbackType = result.type;
  }

  showFeedback(feedbackText, feedbackType);

  if (isSuccess) {
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container");
    const outputBox = document.getElementById("code-output");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check").style.display = "none";
    document.getElementById("btn-next").style.display = "inline-block";
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
        <h2 style="color: #16a34a; margin-bottom: 0.5rem;">Tebrikler! 🎉</h2>
        <p style="color: #4b5563; font-size: 1rem;">Girinti, Yorum ve Çok Satırlı İfadeler konusundaki tüm alıştırmaları başarıyla tamamladınız.</p>
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
