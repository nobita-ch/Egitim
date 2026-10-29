<!-- PYTHON INTERACTIVE EXERCISES: DEMETLER (TUPLES) -->
<div id="quiz-container-10" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-10" class="badge">Soru 1 / 10</span>
      <span id="type-badge-10" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-10" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-10" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-10" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-10" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-10" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-10" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-10">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-10" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-10" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-10" class="btn btn-secondary" onclick="resetCurrentQuestion10()">Sıfırla</button>
      <button id="btn-check-10" class="btn btn-primary" onclick="checkAnswer10()">Kontrol Et</button>
      <button id="btn-next-10" class="btn btn-success" onclick="nextQuestion10()" style="display: none;">Sonraki Soru →</button>
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
// DEMETLER (TUPLES) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData10 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Liste Üzerinden Demet Güncelleme Mantığı",
    summary: "Demetler doğrudan güncellenemez (immutable)[cite: 10]; bu nedenle listeye çevrilip eleman eklendikten sonra tekrar tuple yapılır[cite: 10].",
    pieces: [
      "veriler = (\"A\", \"B\")",
      "gecici = list(veriler)",
      "gecici.append(\"C\")",
      "veriler = tuple(gecici)",
      "print(veriler)"
    ],
    solutions: [
      [
        "veriler = (\"A\", \"B\")",
        "gecici = list(veriler)",
        "gecici.append(\"C\")",
        "veriler = tuple(gecici)",
        "print(veriler)"
      ]
    ],
    output: "('A', 'B', 'C')"
  },
  {
    type: "arrange",
    title: "2. Yıldız (*) Operatörü ile Kalanları Listede Toplama (Unpacking)",
    summary: "Tuple açma işleminde değişken adının önüne '*' konulursa, artan tüm elemanlar bir liste olarak toplanır[cite: 10].",
    pieces: [
      "skorlar = (100, 80, 60, 40)",
      "birinci, *digerleri = skorlar",
      "print(birinci, digerleri)"
    ],
    solutions: [
      [
        "skorlar = (100, 80, 60, 40)",
        "birinci, *digerleri = skorlar",
        "print(birinci, digerleri)"
      ]
    ],
    output: "100 [80, 60, 40]"
  },
  {
    type: "arrange",
    title: "3. Demetleri Birleştirme (+) ve Çoğaltma (*)",
    summary: "+ operatörü iki demeti uç uca birleştirir, * operatörü ise demeti belirtilen katsayı kadar yineler[cite: 10].",
    pieces: [
      "d1 = (1, 2)",
      "d2 = (3,)",
      "birlesik = (d1 + d2) * 2",
      "print(birlesik)"
    ],
    solutions: [
      [
        "d1 = (1, 2)",
        "d2 = (3,)",
        "birlesik = (d1 + d2) * 2",
        "print(birlesik)"
      ],
      [
        "d2 = (3,)",
        "d1 = (1, 2)",
        "birlesik = (d1 + d2) * 2",
        "print(birlesik)"
      ]
    ],
    output: "(1, 2, 3, 1, 2, 3)"
  },
  {
    type: "arrange",
    title: "4. İç İçe Liste İçeren Demetin Elemanını Güncelleme",
    summary: "Demetin kendisi değiştirilemez olsa da, içindeki değiştirilebilir (mutable) bir liste nesnesi güncellenebilir[cite: 10].",
    pieces: [
      "kayit = (\"Ahmet\", [90, 85])",
      "kayit[1].append(95)",
      "print(kayit)"
    ],
    solutions: [
      [
        "kayit = (\"Ahmet\", [90, 85])",
        "kayit[1].append(95)",
        "print(kayit)"
      ]
    ],
    output: "('Ahmet', [90, 85, 95])"
  },
  {
    type: "arrange",
    title: "5. count() ve index() Metotları",
    summary: "count() elemanın kaç kez geçtiğini sayar[cite: 10], index() ise değerin ilk görüldüğü indeks numarasını verir[cite: 10].",
    pieces: [
      "harfler = (\"x\", \"y\", \"x\", \"z\")",
      "adet = harfler.count(\"x\")",
      "sira = harfler.index(\"y\")",
      "print(adet, sira)"
    ],
    solutions: [
      [
        "harfler = (\"x\", \"y\", \"x\", \"z\")",
        "adet = harfler.count(\"x\")",
        "sira = harfler.index(\"y\")",
        "print(adet, sira)"
      ],
      [
        "harfler = (\"x\", \"y\", \"x\", \"z\")",
        "sira = harfler.index(\"y\")",
        "adet = harfler.count(\"x\")",
        "print(adet, sira)"
      ]
    ],
    output: "2 1"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Tek Elemanlı Demet Kuralı",
    summary: "Tek elemanlı bir demet oluştururken parantez içindeki değerin sonuna mutlaka virgül (',') konmalıdır[cite: 10].",
    template: "tekil_demet = (\"Tek Deger\"{slot0})\nprint({slot1}(tekil_demet))",
    slots: ["slot0", "slot1"],
    options: [",", "type", ";", "tuple"],
    validCombinations: [
      { slot0: ",", slot1: "type" }
    ],
    output: "<class 'tuple'>"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Parantezsiz Paketleme ve Açma (Packing & Unpacking)",
    summary: "Virgülle ayrılan değerler otomatik olarak demet şeklinde paketlenir ve değişkenlere birebir açılabilir[cite: 10].",
    template: "nokta = 10, 20\nx, {slot0} = {slot1}\nprint(x, y)",
    slots: ["slot0", "slot1"],
    options: ["y", "nokta", "z", "tuple"],
    validCombinations: [
      { slot0: "y", slot1: "nokta" }
    ],
    output: "10 20"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: del Deyimi ile Bellekten Silme",
    summary: "Demetin içinden tek eleman silinemez[cite: 10]; ancak 'del' deyimi ile tüm demet bellekten tamamen silinebilir[cite: 10].",
    template: "bilgi = (\"IP\", 8080)\n{slot0} {slot1}",
    slots: ["slot0", "slot1"],
    options: ["del", "bilgi", "remove", "clear"],
    validCombinations: [
      { slot0: "del", slot1: "bilgi" }
    ],
    output: "# (bilgi nesnesi bellekten silindi, ekrana çıktı üretmez)"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: sum() ve len() Genel Fonksiyonları",
    summary: "len() toplam eleman sayısını[cite: 10], sum() ise sayısal demet elemanlarının toplamını hesaplar[cite: 10].",
    template: "adetler = (5, 15, 10)\ntoplam = {slot0}(adetler)\nsayi = {slot1}(adetler)\nprint(toplam, sayi)",
    slots: ["slot0", "slot1"],
    options: ["sum", "len", "min", "max"],
    validCombinations: [
      { slot0: "sum", slot1: "len" }
    ],
    output: "30 3"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Baştaki, Ortadaki ve Sondaki Elemanları Ayırma",
    summary: "ilk, *orta, son şeklinde yapılan açma işleminde baştaki ve sondaki hariç aradaki tüm elemanlar liste olur[cite: 10].",
    template: "kodlar = (10, 20, 30, 40, 50)\nilk, {slot0}orta, son = kodlar\nprint(ilk, {slot1}, son)",
    slots: ["slot0", "slot1"],
    options: ["*", "orta", "**", "list"],
    validCombinations: [
      { slot0: "*", slot1: "orta" }
    ],
    output: "10 [20, 30, 40] 50"
  }
];

let currentStep10 = 0;
let userArrangeState10 = [];
let userFillState10 = {};

function initQuiz10() {
  loadQuestion10(currentStep10);
}

function loadQuestion10(index) {
  const q = quizData10[index];
  document.getElementById("step-badge-10").innerText = `Soru ${index + 1} / ${quizData10.length}`;
  document.getElementById("type-badge-10").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-10").style.width = `${((index + 1) / quizData10.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-10");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-10").innerText = q.title;
  
  const feedback = document.getElementById("feedback-10");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-10");
  outputContainer.style.display = "none";
  document.getElementById("code-output-10").innerText = "";
  
  document.getElementById("btn-check-10").style.display = "inline-block";
  document.getElementById("btn-next-10").style.display = "none";
  
  const workspace = document.getElementById("workspace-10");
  const pool = document.getElementById("options-pool-10");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState10 = [];
    renderArrangeWorkspace10();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange10(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState10 = {};
    q.slots.forEach(slot => userFillState10[slot] = null);
    renderFillWorkspace10();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption10(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange10(piece, btnElement) {
  userArrangeState10.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace10();
}

function removePieceFromArrange10(index) {
  const item = userArrangeState10[index];
  item.btnRef.classList.remove("used");
  userArrangeState10.splice(index, 1);
  renderArrangeWorkspace10();
}

function renderArrangeWorkspace10() {
  const workspace = document.getElementById("workspace-10");
  if (userArrangeState10.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState10.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml10(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange10(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot10 = null;

function renderFillWorkspace10() {
  const q = quizData10[currentStep10];
  const workspace = document.getElementById("workspace-10");
  let html = escapeHtml10(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState10[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot10('${slot}')">${escapeHtml10(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot10('${slot}')">${activeSlot10 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot10(slot) {
  activeSlot10 = slot;
  renderFillWorkspace10();
}

function selectFillOption10(val, btnElement) {
  const q = quizData10[currentStep10];
  let targetSlot = activeSlot10;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState10[s] === null);
  }
  
  if (targetSlot) {
    userFillState10[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot10 = null;
    renderFillWorkspace10();
  }
}

function clearSlot10(slot) {
  const pool = document.getElementById("options-pool-10");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState10[slot] = null;
  activeSlot10 = slot;
  renderFillWorkspace10();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer10() {
  const q = quizData10[currentStep10];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState10.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback10("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState10[s] !== null);
    if (!isAllFilled) {
      showFeedback10("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState10[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback10("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-10");
    const outputBox = document.getElementById("code-output-10");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-10").style.display = "none";
    document.getElementById("btn-next-10").style.display = "inline-block";
  } else {
    showFeedback10("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback10(msg, type) {
  const feedback = document.getElementById("feedback-10");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion10() {
  loadQuestion10(currentStep10);
}

function nextQuestion10() {
  if (currentStep10 < quizData10.length - 1) {
    currentStep10++;
    loadQuestion10(currentStep10);
  } else {
    document.getElementById("quiz-container-10").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Demetler (Tuples) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml10(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz10);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz10();
}
</script>
