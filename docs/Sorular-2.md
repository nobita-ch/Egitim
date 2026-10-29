<!-- PYTHON INTERACTIVE EXERCISES: PRINT & INPUT (WHITE THEME / STATIC SUMMARY - TERMINAL ÇIKTILI) -->
<div id="quiz-container-2" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-2" class="badge">Soru 1 / 10</span>
      <span id="type-badge-2" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-2" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-2" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-2" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri -->
    <div id="workspace-2" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-2" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-2" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-2">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-2" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-2" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-2" class="btn btn-secondary" onclick="resetCurrentQuestion2()">Sıfırla</button>
      <button id="btn-check-2" class="btn btn-primary" onclick="checkAnswer2()">Kontrol Et</button>
      <button id="btn-next-2" class="btn btn-success" onclick="nextQuestion2()" style="display: none;">Sonraki Soru →</button>
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
// BASİT VE DOĞRUDAN KONU ODAKLI SORU VERİ SETİ (ÇIKTILARLA BİRLİKTE)
const quizData2 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Girdi Alma ve Yazdırma",
    summary: "input() kullanıcıdan veriyi alır ve değişkene atar, print() ise bu değişkeni ekrana yazar[cite: 2].",
    pieces: [
      "isim = input(\"Adınız: \")",
      "print(f\"Merhaba {isim}\")"
    ],
    solutions: [
      [
        "isim = input(\"Adınız: \")",
        "print(f\"Merhaba {isim}\")"
      ]
    ],
    output: "Adınız: Ali\nMerhaba Ali"
  },
  {
    type: "arrange",
    title: "2. Tam Sayı Dönüşümü (int)",
    summary: "input() ile gelen değerler metindir[cite: 2]. Sayısal hesaplama için önce int() ile tam sayıya çevrilmelidir[cite: 2].",
    pieces: [
      "veri = input(\"Sayı: \")",
      "sayi = int(veri)",
      "print(sayi * 2)"
    ],
    solutions: [
      [
        "veri = input(\"Sayı: \")",
        "sayi = int(veri)",
        "print(sayi * 2)"
      ]
    ],
    output: "Sayı: 5\n10"
  },
  {
    type: "arrange",
    title: "3. end Parametresi ile Satır Sonu",
    summary: "end parametresi çıktının sonuna eklenecek karakteri belirler; alt satıra geçmek yerine yan yana yazdırmayı sağlar[cite: 2].",
    pieces: [
      "print(\"Yükleniyor\", end=\" -> \")",
      "print(\"Bitti\")"
    ],
    solutions: [
      [
        "print(\"Yükleniyor\", end=\" -> \")",
        "print(\"Bitti\")"
      ]
    ],
    output: "Yükleniyor -> Bitti"
  },
  {
    type: "arrange",
    title: "4. Virgül ile print Kullanımı",
    summary: "print içine birden fazla değişken virgülle yazıldığında aralarına otomatik boşluk eklenir[cite: 2]. Değişkenler önceden tanımlanmalıdır[cite: 2, 3].",
    pieces: [
      "urun = \"Kitap\"",
      "adet = 2",
      "print(\"Ürün:\", urun, \"Adet:\", adet)"
    ],
    solutions: [
      [
        "urun = \"Kitap\"",
        "adet = 2",
        "print(\"Ürün:\", urun, \"Adet:\", adet)"
      ],
      [
        "adet = 2",
        "urun = \"Kitap\"",
        "print(\"Ürün:\", urun, \"Adet:\", adet)"
      ]
    ],
    output: "Ürün: Kitap Adet: 2"
  },
  {
    type: "arrange",
    title: "5. Noktalı Virgül (;) ile Çoklu print",
    summary: "Tek bir satırda birden fazla komut çalıştırmak için aralarına noktalı virgül (;) konur[cite: 2].",
    pieces: [
      "print(\"Adım 1\");",
      "print(\"Adım 2\");",
      "print(\"Adım 3\")"
    ],
    solutions: [
      [
        "print(\"Adım 1\");",
        "print(\"Adım 2\");",
        "print(\"Adım 3\")"
      ]
    ],
    output: "Adım 1\nAdım 2\nAdım 3"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: sep Ayırıcı Parametresi",
    summary: "sep parametresi, print() içindeki birden fazla değerin arasına koyulacak karakteri belirler[cite: 2].",
    template: "print(\"2026\", \"08\", \"29\", {slot0}=\"/\")",
    slots: ["slot0"],
    options: ["sep", "end", "file", "int"],
    validCombinations: [
      { slot0: "sep" }
    ],
    output: "2026/08/29"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: float() Tip Dönüşümü",
    summary: "Kullanıcıdan alınan küsüratlı/ondalıklı değerler matematiksel işlem için float() ile dönüştürülür[cite: 2].",
    template: "kilo = {slot0}({slot1}(\"Kilonuz: \"))\nprint(kilo)",
    slots: ["slot0", "slot1"],
    options: ["float", "input", "print", "str"],
    validCombinations: [
      { slot0: "float", slot1: "input" }
    ],
    output: "Kilonuz: 72.5\n72.5"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: f-string Biçimi",
    summary: "f-string kullanımında metnin hemen başına 'f' harfi konur ve değişken süslü parantez içine yazılır[cite: 2].",
    template: "sehir = \"Bursa\"\nprint({slot0}\"Konum: {slot1}sehir{slot2}\")",
    slots: ["slot0", "slot1", "slot2"],
    options: ["f", "{", "}", "$", "[", "]"],
    validCombinations: [
      { slot0: "f", slot1: "{", slot2: "}" }
    ],
    output: "Konum: Bursa"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Üçlü Tırnak ile Çok Satırlı Çıktı",
    summary: "Üçlü tırnak (\"\"\" veya ''') satır sonlarını ve boşlukları koruyarak çok satırlı metin yazdırmayı sağlar[cite: 2].",
    template: "print({slot0}\nSatır 1\nSatır 2\n{slot1})",
    slots: ["slot0", "slot1"],
    options: ['"""', '"""', "'''", "'''", '"', "'"],
    validCombinations: [
      { slot0: '"""', slot1: '"""' },
      { slot0: "'''", slot1: "'''" }
    ],
    output: "Satır 1\nSatır 2"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: int() ve end=\"\" ile Yan Yana Yazdırma",
    summary: "Girdi tam sayıya int() ile çevrilir; ilk print'teki end=\"\" parametresi alt satıra geçişi engelleyerek ikinci print'in yanına eklenmesini sağlar[cite: 2].",
    template: "sayi = {slot0}(input())\nprint(sayi, {slot1}=\"\")\nprint(sayi)",
    slots: ["slot0", "slot1"],
    options: ["int", "end", "sep", "float"],
    validCombinations: [
      { slot0: "int", slot1: "end" }
    ],
    output: "4242"
  }
];

let currentStep2 = 0;
let userArrangeState2 = [];
let userFillState2 = {};

function initQuiz2() {
  loadQuestion2(currentStep2);
}

function loadQuestion2(index) {
  const q = quizData2[index];
  document.getElementById("step-badge-2").innerText = `Soru ${index + 1} / ${quizData2.length}`;
  document.getElementById("type-badge-2").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-2").style.width = `${((index + 1) / quizData2.length) * 100}%`;
  
  // Konu kuralı bilgisi en üstte sürekli gösterilir
  const summaryBox = document.getElementById("topic-summary-2");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-2").innerText = q.title;
  
  const feedback = document.getElementById("feedback-2");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-2");
  outputContainer.style.display = "none";
  document.getElementById("code-output-2").innerText = "";
  
  document.getElementById("btn-check-2").style.display = "inline-block";
  document.getElementById("btn-next-2").style.display = "none";
  
  const workspace = document.getElementById("workspace-2");
  const pool = document.getElementById("options-pool-2");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState2 = [];
    renderArrangeWorkspace2();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange2(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState2 = {};
    q.slots.forEach(slot => userFillState2[slot] = null);
    renderFillWorkspace2();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption2(opt, btn);
      pool.appendChild(btn);
    });
  }
}

function addPieceToArrange2(piece, btnElement) {
  userArrangeState2.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace2();
}

function removePieceFromArrange2(index) {
  const item = userArrangeState2[index];
  item.btnRef.classList.remove("used");
  userArrangeState2.splice(index, 1);
  renderArrangeWorkspace2();
}

function renderArrangeWorkspace2() {
  const workspace = document.getElementById("workspace-2");
  if (userArrangeState2.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState2.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml2(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange2(idx);
    workspace.appendChild(line);
  });
}

let activeSlot2 = null;

function renderFillWorkspace2() {
  const q = quizData2[currentStep2];
  const workspace = document.getElementById("workspace-2");
  let html = escapeHtml2(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState2[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot2('${slot}')">${escapeHtml2(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot2('${slot}')">${activeSlot2 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot2(slot) {
  activeSlot2 = slot;
  renderFillWorkspace2();
}

function selectFillOption2(val, btnElement) {
  const q = quizData2[currentStep2];
  let targetSlot = activeSlot2;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState2[s] === null);
  }
  
  if (targetSlot) {
    userFillState2[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot2 = null;
    renderFillWorkspace2();
  }
}

function clearSlot2(slot) {
  const pool = document.getElementById("options-pool-2");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState2[slot] = null;
  activeSlot2 = slot;
  renderFillWorkspace2();
}

function checkAnswer2() {
  const q = quizData2[currentStep2];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState2.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback2("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState2[s] !== null);
    if (!isAllFilled) {
      showFeedback2("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState2[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback2("✓ Tebrikler! Doğru cevap.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-2");
    const outputBox = document.getElementById("code-output-2");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-2").style.display = "none";
    document.getElementById("btn-next-2").style.display = "inline-block";
  } else {
    showFeedback2("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback2(msg, type) {
  const feedback = document.getElementById("feedback-2");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion2() {
  loadQuestion2(currentStep2);
}

function nextQuestion2() {
  if (currentStep2 < quizData2.length - 1) {
    currentStep2++;
    loadQuestion2(currentStep2);
  } else {
    document.getElementById("quiz-container-2").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Girdi ve Çıktı (print & input) alıştırmalarını başarıyla tamamladınız.</p>
      </div>
    `;
  }
}

function escapeHtml2(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz2);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz2();
}
</script>
