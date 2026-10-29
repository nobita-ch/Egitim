<!-- PYTHON INTERACTIVE EXERCISES: RANDOM MODÜLÜ (TERMINAL ÇIKTILI) -->
<div id="quiz-container-5" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-5" class="badge">Soru 1 / 10</span>
      <span id="type-badge-5" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-5" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-5" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-5" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-5" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-5" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-5" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-5">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-5" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-5" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-5" class="btn btn-secondary" onclick="resetCurrentQuestion5()">Sıfırla</button>
      <button id="btn-check-5" class="btn btn-primary" onclick="checkAnswer5()">Kontrol Et</button>
      <button id="btn-next-5" class="btn btn-success" onclick="nextQuestion5()" style="display: none;">Sonraki Soru →</button>
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
// RANDOM MODÜLÜ SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData5 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Modülü Dahil Etme ve randint() ile Zar Atma",
    summary: "random modülü önce 'import random' ile projeye dahil edilir, ardından randint(a, b) her iki sınır da dahil olacak şekilde tam sayı üretir[cite: 5].",
    pieces: [
      "import random",
      "zar = random.randint(1, 6)",
      "print(zar)"
    ],
    solutions: [
      [
        "import random",
        "zar = random.randint(1, 6)",
        "print(zar)"
      ]
    ],
    output: "4  # (1 ile 6 arasında rastgele bir tam sayı)"
  },
  {
    type: "arrange",
    title: "2. Listeden Rastgele Tek Eleman Seçme (choice)",
    summary: "random.choice() fonksiyonu verilen bir diziden/listeden rastgele tek bir eleman seçer[cite: 5].",
    pieces: [
      "import random",
      "sehirler = [\"Ankara\", \"İzmir\", \"Bursa\"]",
      "secilen_sehir = random.choice(sehirler)",
      "print(secilen_sehir)"
    ],
    solutions: [
      [
        "import random",
        "sehirler = [\"Ankara\", \"İzmir\", \"Bursa\"]",
        "secilen_sehir = random.choice(sehirler)",
        "print(secilen_sehir)"
      ]
    ],
    output: "İzmir  # (Listeden rastgele seçilen tek eleman)"
  },
  {
    type: "arrange",
    title: "3. Listenin Elemanlarını Yerinde Karıştırma (shuffle)",
    summary: "random.shuffle() fonksiyonu listenin orijinal sırasını doğrudan yerinde (in-place) karıştırır[cite: 5].",
    pieces: [
      "import random",
      "kartlar = [\"As\", \"Papaz\", \"Kız\", \"Vale\"]",
      "random.shuffle(kartlar)",
      "print(kartlar)"
    ],
    solutions: [
      [
        "import random",
        "kartlar = [\"As\", \"Papaz\", \"Kız\", \"Vale\"]",
        "random.shuffle(kartlar)",
        "print(kartlar)"
      ]
    ],
    output: "['Kız', 'As', 'Vale', 'Papaz']  # (Karıştırılmış liste)"
  },
  {
    type: "arrange",
    title: "4. Tekrarsız Çoklu Eleman Seçme (sample)",
    summary: "random.sample(liste, k) fonksiyonu belirtilen listeden tekrar etmeyecek şekilde 'k' adet eleman seçer[cite: 5].",
    pieces: [
      "import random",
      "numaralar = [10, 20, 30, 40, 50]",
      "secilenler = random.sample(numaralar, k=3)",
      "print(secilenler)"
    ],
    solutions: [
      [
        "import random",
        "numaralar = [10, 20, 30, 40, 50]",
        "secilenler = random.sample(numaralar, k=3)",
        "print(secilenler)"
      ]
    ],
    output: "[40, 10, 50]  # (Tekrarsız seçilen 3 eleman)"
  },
  {
    type: "arrange",
    title: "5. Sabit Tohum Belirleme ve Sayı Üretme (seed)",
    summary: "random.seed() sözde rastgele algoritmanın başlangıç noktasını sabitler ve aynı serinin tekrar üretilmesini sağlar[cite: 5].",
    pieces: [
      "import random",
      "random.seed(100)",
      "sayi = random.randint(1, 50)",
      "print(sayi)"
    ],
    solutions: [
      [
        "import random",
        "random.seed(100)",
        "sayi = random.randint(1, 50)",
        "print(sayi)"
      ]
    ],
    output: "19  # (Tohum 100 olduğu sürece sabit üretilen değer)"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Adımlı Aralık Üretimi (randrange)",
    summary: "random.randrange(start, stop, step) fonksiyonunda bitiş değeri hariçtir ve belirtilen adım miktarına göre tam sayı seçilir[cite: 5].",
    template: "import {slot0}\ntek_sayi = random.{slot1}(1, 10, 2)\nprint(tek_sayi)",
    slots: ["slot0", "slot1"],
    options: ["random", "randrange", "randint", "uniform"],
    validCombinations: [
      { slot0: "random", slot1: "randrange" }
    ],
    output: "7  # (1, 3, 5, 7, 9 kümesinden rastgele tek sayı)"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: 0.0 - 1.0 Arası Ondalıklı Sayı",
    summary: "random.random() fonksiyonu parametre almaz ve 0.0 ile 1.0 (1.0 hariç) arasında float sayı üretir[cite: 5].",
    template: "import random\nondalik = random.{slot0}()\nprint({slot1}(ondalik))",
    slots: ["slot0", "slot1"],
    options: ["random", "type", "uniform", "int"],
    validCombinations: [
      { slot0: "random", slot1: "type" }
    ],
    output: "<class 'float'>"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Belirli İki Değer Arası Ondalıklı Sayı",
    summary: "random.uniform(a, b) fonksiyonu belirlenen iki sınır arasında ondalıklı (float) sayı üretir[cite: 5].",
    template: "import random\nsicaklik = random.{slot0}({slot1}, 38.5)\nprint(f\"{sicaklik:.2f}\")",
    slots: ["slot0", "slot1"],
    options: ["uniform", "36.0", "randint", "choice"],
    validCombinations: [
      { slot0: "uniform", slot1: "36.0" }
    ],
    output: "37.14  # (36.0 ile 38.5 arası float değer)"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: İki Sınırın da Dahil Olduğu Tam Sayı",
    summary: "random.randint(a, b) fonksiyonunda hem başlangıç 'a' hem de bitiş 'b' değeri üretilecek sayıya dahildir[cite: 5].",
    template: "import random\nnot_degeri = random.{slot0}(0, {slot1})\nprint(not_degeri)",
    slots: ["slot0", "slot1"],
    options: ["randint", "100", "randrange", "sample"],
    validCombinations: [
      { slot0: "randint", slot1: "100" }
    ],
    output: "85  # (0 ile 100 dahil aralıktan tam sayı)"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Rastgele Liste Elemanı Seçimi",
    summary: "random.choice() listeden tek eleman seçerken[cite: 5], modülü kullanmak için 'import random' ifadesi yazılmalıdır[cite: 5].",
    template: "{slot0} random\nhayvanlar = [\"kedi\", \"kopek\"]\nsecim = random.{slot1}(hayvanlar)\nprint(secim)",
    slots: ["slot0", "slot1"],
    options: ["import", "choice", "shuffle", "from"],
    validCombinations: [
      { slot0: "import", slot1: "choice" }
    ],
    output: "kopek  # (Listeden seçilen rastgele eleman)"
  }
];

let currentStep5 = 0;
let userArrangeState5 = [];
let userFillState5 = {};

function initQuiz5() {
  loadQuestion5(currentStep5);
}

function loadQuestion5(index) {
  const q = quizData5[index];
  document.getElementById("step-badge-5").innerText = `Soru ${index + 1} / ${quizData5.length}`;
  document.getElementById("type-badge-5").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-5").style.width = `${((index + 1) / quizData5.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-5");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-5").innerText = q.title;
  
  const feedback = document.getElementById("feedback-5");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-5");
  outputContainer.style.display = "none";
  document.getElementById("code-output-5").innerText = "";
  
  document.getElementById("btn-check-5").style.display = "inline-block";
  document.getElementById("btn-next-5").style.display = "none";
  
  const workspace = document.getElementById("workspace-5");
  const pool = document.getElementById("options-pool-5");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState5 = [];
    renderArrangeWorkspace5();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange5(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState5 = {};
    q.slots.forEach(slot => userFillState5[slot] = null);
    renderFillWorkspace5();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption5(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange5(piece, btnElement) {
  userArrangeState5.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace5();
}

function removePieceFromArrange5(index) {
  const item = userArrangeState5[index];
  item.btnRef.classList.remove("used");
  userArrangeState5.splice(index, 1);
  renderArrangeWorkspace5();
}

function renderArrangeWorkspace5() {
  const workspace = document.getElementById("workspace-5");
  if (userArrangeState5.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState5.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml5(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange5(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot5 = null;

function renderFillWorkspace5() {
  const q = quizData5[currentStep5];
  const workspace = document.getElementById("workspace-5");
  let html = escapeHtml5(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState5[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot5('${slot}')">${escapeHtml5(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot5('${slot}')">${activeSlot5 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot5(slot) {
  activeSlot5 = slot;
  renderFillWorkspace5();
}

function selectFillOption5(val, btnElement) {
  const q = quizData5[currentStep5];
  let targetSlot = activeSlot5;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState5[s] === null);
  }
  
  if (targetSlot) {
    userFillState5[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot5 = null;
    renderFillWorkspace5();
  }
}

function clearSlot5(slot) {
  const pool = document.getElementById("options-pool-5");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState5[slot] = null;
  activeSlot5 = slot;
  renderFillWorkspace5();
}

/* Cevap Kontrolü ve Konsol Çıktısı Gösterme */
function checkAnswer5() {
  const q = quizData5[currentStep5];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState5.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback5("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState5[s] !== null);
    if (!isAllFilled) {
      showFeedback5("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState5[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback5("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-5");
    const outputBox = document.getElementById("code-output-5");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-5").style.display = "none";
    document.getElementById("btn-next-5").style.display = "inline-block";
  } else {
    showFeedback5("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback5(msg, type) {
  const feedback = document.getElementById("feedback-5");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion5() {
  loadQuestion5(currentStep5);
}

function nextQuestion5() {
  if (currentStep5 < quizData5.length - 1) {
    currentStep5++;
    loadQuestion5(currentStep5);
  } else {
    document.getElementById("quiz-container-5").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Rastgele Sayı ve random Modülü konusundaki tüm alıştırmaları başarıyla tamamladınız.</p>
      </div>
    `;
  }
}

function escapeHtml5(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz5);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz5();
}
</script>
