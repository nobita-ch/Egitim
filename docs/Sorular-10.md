<!-- PYTHON INTERACTIVE EXERCISES: KOŞULLU DURUMLAR (IF - ELIF - ELSE - MATCH) -->
<div id="quiz-container-13" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-13" class="badge">Soru 1 / 10</span>
      <span id="type-badge-13" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-13" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-13" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-13" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-13" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-13" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-13" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-13">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-13" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-13" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-13" class="btn btn-secondary" onclick="resetCurrentQuestion13()">Sıfırla</button>
      <button id="btn-check-13" class="btn btn-primary" onclick="checkAnswer13()">Kontrol Et</button>
      <button id="btn-next-13" class="btn btn-success" onclick="nextQuestion13()" style="display: none;">Sonraki Soru →</button>
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
// KOŞULLU DURUMLAR KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData13 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. if - elif - else Hiyerarşisi",
    summary: "Koşullar yukarıdan aşağıya kontrol edilir; if ilk kontrolü yapar, elif alternatifleri sunar ve else hiçbiri uymadığında devreye girer[cite: 13].",
    pieces: [
      "bakiye = 50",
      "if bakiye >= 100:",
      "    print(\"Yeterli\")",
      "elif bakiye >= 40:",
      "    print(\"Kritik\")",
      "else:",
      "    print(\"Yetersiz\")"
    ],
    solutions: [
      [
        "bakiye = 50",
        "if bakiye >= 100:",
        "    print(\"Yeterli\")",
        "elif bakiye >= 40:",
        "    print(\"Kritik\")",
        "else:",
        "    print(\"Yetersiz\")"
      ]
    ],
    output: "Kritik"
  },
  {
    type: "arrange",
    title: "2. Tek Satırlık Koşul (Ternary Operator) ile Değer Atama",
    summary: "degisken = dogru_deger if kosul else yanlis_deger şeklinde tek satırda atama yapılabilir[cite: 13].",
    pieces: [
      "yas = 19",
      "durum = \"Resit\" if yas >= 18 else \"Cocuk\"",
      "print(durum)"
    ],
    solutions: [
      [
        "yas = 19",
        "durum = \"Resit\" if yas >= 18 else \"Cocuk\"",
        "print(durum)"
      ]
    ],
    output: "Resit"
  },
  {
    type: "arrange",
    title: "3. İç İçe Koşullar (Nested If)",
    summary: "Bir if bloğunun içine başka bir koşul yapısı yerleştirilerek çok aşamalı doğrulama sağlanır[cite: 13].",
    pieces: [
      "oturum_acik = True",
      "rol = \"editor\"",
      "if oturum_acik:",
      "    if rol == \"editor\":",
      "        print(\"Duzenleme Yetkisi\")"
    ],
    solutions: [
      [
        "oturum_acik = True",
        "rol = \"editor\"",
        "if oturum_acik:",
        "    if rol == \"editor\":",
        "        print(\"Duzenleme Yetkisi\")"
      ],
      [
        "rol = \"editor\"",
        "oturum_acik = True",
        "if oturum_acik:",
        "    if rol == \"editor\":",
        "        print(\"Duzenleme Yetkisi\")"
      ]
    ],
    output: "Duzenleme Yetkisi"
  },
  {
    type: "arrange",
    title: "4. pass İfadesi ile Boş Gövde Tanımlama",
    summary: "Gövdesi boş bırakılamayan if bloklarında hata almamak için 'pass' yer tutucusu kullanılır[cite: 13].",
    pieces: [
      "kod = 200",
      "if kod == 200:",
      "    pass",
      "else:",
      "    print(\"Hata\")",
      "print(\"Kontrol Bitti\")"
    ],
    solutions: [
      [
        "kod = 200",
        "if kod == 200:",
        "    pass",
        "else:",
        "    print(\"Hata\")",
        "print(\"Kontrol Bitti\")"
      ]
    ],
    output: "Kontrol Bitti"
  },
  {
    type: "arrange",
    title: "5. match-case Örüntü Eşleme Yapısı",
    summary: "match-case yapısında case _ durumu diğer dillerdeki 'default' (varsayılan) blok gibi çalışır[cite: 13].",
    pieces: [
      "tercih = 2",
      "match tercih:",
      "    case 1:",
      "        print(\"Baslat\")",
      "    case 2:",
      "        print(\"Durdur\")",
      "    case _:",
      "        print(\"Gecersiz\")"
    ],
    solutions: [
      [
        "tercih = 2",
        "match tercih:",
        "    case 1:",
        "        print(\"Baslat\")",
        "    case 2:",
        "        print(\"Durdur\")",
        "    case _:",
        "        print(\"Gecersiz\")"
      ]
    ],
    output: "Durdur"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: if ve elif Blok Başlatıcıları",
    summary: "Python'da her koşul satırının sonunda mutlaka iki nokta (:) yer almalıdır[cite: 13].",
    template: "puan = 85\nif puan >= 90{slot0}\n    print(\"A\")\nelif puan >= 80{slot1}\n    print(\"B\")",
    slots: ["slot0", "slot1"],
    options: [":", ":", ";", "."],
    validCombinations: [
      { slot0: ":", slot1: ":" }
    ],
    output: "B"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Tek Satırlık if-else (Ternary)",
    summary: "Tek satırlık if-else ifadelerinde 'if' ve 'else' anahtar sözcükleri karar mekanizmasını oluşturur[cite: 13].",
    template: "sayi = 10\nmesaj = \"Cift\" {slot0} sayi % 2 == 0 {slot1} \"Tek\"\nprint(mesaj)",
    slots: ["slot0", "slot1"],
    options: ["if", "else", "elif", "then"],
    validCombinations: [
      { slot0: "if", slot1: "else" }
    ],
    output: "Cift"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Mantıksal and ile Çoklu Koşul",
    summary: "if ifadesinde birden fazla şartın aynı anda doğru olması için 'and' operatörü kullanılır[cite: 13].",
    template: "sicaklik = 25\nnem = 50\nif sicaklik > 20 {slot0} nem < 60:\n    {slot1}(\"Uygun\")",
    slots: ["slot0", "slot1"],
    options: ["and", "print", "or", "pass"],
    validCombinations: [
      { slot0: "and", slot1: "print" }
    ],
    output: "Uygun"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: match-case Varsayılan Durum (_)",
    summary: "match-case yapısında hiçbir case eşleşmediğinde 'case _:' varsayılan dalı çalıştırılır[cite: 13].",
    template: "rol = \"ziyaretci\"\nmatch rol:\n    case \"admin\":\n        print(\"Tam Yetki\")\n    case {slot0}:\n        print(\"Kisitli {slot1}\")",
    slots: ["slot0", "slot1"],
    options: ["_", "Yetki", "else", "default"],
    validCombinations: [
      { slot0: "_", slot1: "Yetki" }
    ],
    output: "Kisitli Yetki"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: pass ve else Kullanımı",
    summary: "Koşul sağlandığında hiçbir işlem yapılmayacaksa 'pass' kullanılır, aksi durumlar için 'else' bloğuna geçilir[cite: 13].",
    template: "durum = False\nif durum:\n    {slot0}\n{slot1}:\n    print(\"Kapali\")",
    slots: ["slot0", "slot1"],
    options: ["pass", "else", "break", "elif"],
    validCombinations: [
      { slot0: "pass", slot1: "else" }
    ],
    output: "Kapali"
  }
];

let currentStep13 = 0;
let userArrangeState13 = [];
let userFillState13 = {};

function initQuiz13() {
  loadQuestion13(currentStep13);
}

function loadQuestion13(index) {
  const q = quizData13[index];
  document.getElementById("step-badge-13").innerText = `Soru ${index + 1} / ${quizData13.length}`;
  document.getElementById("type-badge-13").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-13").style.width = `${((index + 1) / quizData13.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-13");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-13").innerText = q.title;
  
  const feedback = document.getElementById("feedback-13");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-13");
  outputContainer.style.display = "none";
  document.getElementById("code-output-13").innerText = "";
  
  document.getElementById("btn-check-13").style.display = "inline-block";
  document.getElementById("btn-next-13").style.display = "none";
  
  const workspace = document.getElementById("workspace-13");
  const pool = document.getElementById("options-pool-13");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState13 = [];
    renderArrangeWorkspace13();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange13(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState13 = {};
    q.slots.forEach(slot => userFillState13[slot] = null);
    renderFillWorkspace13();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption13(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange13(piece, btnElement) {
  userArrangeState13.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace13();
}

function removePieceFromArrange13(index) {
  const item = userArrangeState13[index];
  item.btnRef.classList.remove("used");
  userArrangeState13.splice(index, 1);
  renderArrangeWorkspace13();
}

function renderArrangeWorkspace13() {
  const workspace = document.getElementById("workspace-13");
  if (userArrangeState13.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState13.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml13(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange13(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot13 = null;

function renderFillWorkspace13() {
  const q = quizData13[currentStep13];
  const workspace = document.getElementById("workspace-13");
  let html = escapeHtml13(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState13[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot13('${slot}')">${escapeHtml13(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot13('${slot}')">${activeSlot13 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot13(slot) {
  activeSlot13 = slot;
  renderFillWorkspace13();
}

function selectFillOption13(val, btnElement) {
  const q = quizData13[currentStep13];
  let targetSlot = activeSlot13;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState13[s] === null);
  }
  
  if (targetSlot) {
    userFillState13[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot13 = null;
    renderFillWorkspace13();
  }
}

function clearSlot13(slot) {
  const pool = document.getElementById("options-pool-13");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState13[slot] = null;
  activeSlot13 = slot;
  renderFillWorkspace13();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer13() {
  const q = quizData13[currentStep13];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState13.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback13("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState13[s] !== null);
    if (!isAllFilled) {
      showFeedback13("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState13[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback13("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-13");
    const outputBox = document.getElementById("code-output-13");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-13").style.display = "none";
    document.getElementById("btn-next-13").style.display = "inline-block";
  } else {
    showFeedback13("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback13(msg, type) {
  const feedback = document.getElementById("feedback-13");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion13() {
  loadQuestion13(currentStep13);
}

function nextQuestion13() {
  if (currentStep13 < quizData13.length - 1) {
    currentStep13++;
    loadQuestion13(currentStep13);
  } else {
    document.getElementById("quiz-container-13").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Koşullu Durumlar (If, Elif, Else, Match) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml13(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz13);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz13();
}
</script>
