<!-- PYTHON INTERACTIVE EXERCISES: DÖNGÜLER (LOOPS) -->
<div id="quiz-container-15" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-15" class="badge">Soru 1 / 10</span>
      <span id="type-badge-15" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-15" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-15" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-15" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-15" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-15" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-15" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-15">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-15" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-15" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-15" class="btn btn-secondary" onclick="resetCurrentQuestion15()">Sıfırla</button>
      <button id="btn-check-15" class="btn btn-primary" onclick="checkAnswer15()">Kontrol Et</button>
      <button id="btn-next-15" class="btn btn-success" onclick="nextQuestion15()" style="display: none;">Sonraki Soru →</button>
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
// DÖNGÜLER (LOOPS) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData15 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. while Döngüsü ve Sayaç Güncelleme",
    summary: "while döngüsünde koşul sağlandığı sürece kod çalışır; sonsuz döngüyü önlemek için sayaç içeride artırılmalıdır[cite: 15].",
    pieces: [
      "sayac = 1",
      "while sayac <= 3:",
      "    print(sayac)",
      "    sayac += 1"
    ],
    solutions: [
      [
        "sayac = 1",
        "while sayac <= 3:",
        "    print(sayac)",
        "    sayac += 1"
      ]
    ],
    output: "1\n2\n3"
  },
  {
    type: "arrange",
    title: "2. for Döngüsünde break ile Erken Çıkış",
    summary: "break ifadesi döngüyü koşulun bitmesini beklemeden anında ve tamamen sonlandırır[cite: 15].",
    pieces: [
      "sayilar = [10, 20, 30, 40]",
      "for s in sayilar:",
      "    if s == 30:",
      "        break",
      "    print(s)"
    ],
    solutions: [
      [
        "sayilar = [10, 20, 30, 40]",
        "for s in sayilar:",
        "    if s == 30:",
        "        break",
        "    print(s)"
      ]
    ],
    output: "10\n20"
  },
  {
    type: "arrange",
    title: "3. continue İfadesi ile Adım Atlama",
    summary: "continue o anki döngü turunu atlayarak bir sonraki adıma geçer; altındaki kodları çalıştırmaz[cite: 15].",
    pieces: [
      "for i in range(1, 4):",
      "    if i == 2:",
      "        continue",
      "    print(i)"
    ],
    solutions: [
      [
        "for i in range(1, 4):",
        "    if i == 2:",
        "        continue",
        "    print(i)"
      ]
    ],
    output: "1\n3"
  },
  {
    type: "arrange",
    title: "4. for...else Döngü Bitiş Bloğu",
    summary: "Döngü break ile kesilmeden başarıyla tamamlanırsa 'else' bloğu çalıştırılır[cite: 15].",
    pieces: [
      "for x in range(2):",
      "    print(x)",
      "else:",
      "    print(\"Tamamlandi\")"
    ],
    solutions: [
      [
        "for x in range(2):",
        "    print(x)",
        "else:",
        "    print(\"Tamamlandi\")"
      ]
    ],
    output: "0\n1\nTamamlandi"
  },
  {
    type: "arrange",
    title: "5. İç İçe (Nested) Döngüler",
    summary: "Dıştaki döngünün her bir adımı için içteki döngü baştan sona tamamen çalıştırılır[cite: 15].",
    pieces: [
      "gruplar = [\"A\", \"B\"]",
      "sayilar = [1, 2]",
      "for g in gruplar:",
      "    for s in sayilar:",
      "        print(g, s)"
    ],
    solutions: [
      [
        "gruplar = [\"A\", \"B\"]",
        "sayilar = [1, 2]",
        "for g in gruplar:",
        "    for s in sayilar:",
        "        print(g, s)"
      ],
      [
        "sayilar = [1, 2]",
        "gruplar = [\"A\", \"B\"]",
        "for g in gruplar:",
        "    for s in sayilar:",
        "        print(g, s)"
      ]
    ],
    output: "A 1\nA 2\nB 1\nB 2"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Adımlı range() Fonksiyonu",
    summary: "range(start, stop, step) fonksiyonu başlangıçtan bitişe (hariç) belirlenen adım miktarıyla sayı üretir[cite: 15].",
    template: "for sayi in {slot0}(1, 6, {slot1}):\n    print(sayi)",
    slots: ["slot0", "slot1"],
    options: ["range", "2", "list", "3"],
    validCombinations: [
      { slot0: "range", slot1: "2" }
    ],
    output: "1\n3\n5"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Sonsuz while Döngüsü ve break",
    summary: "while True sonsuz döngü başlatır; içerideki bir koşulla break çağrılarak döngü durdurulur[cite: 15].",
    template: "adet = 0\nwhile {slot0}:\n    adet += 1\n    if adet == 2:\n        {slot1}\nprint(adet)",
    slots: ["slot0", "slot1"],
    options: ["True", "break", "False", "pass"],
    validCombinations: [
      { slot0: "True", slot1: "break" }
    ],
    output: "2"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: String Üzerinde for Gezinmesi",
    summary: "for döngüsü metin (str) içerisindeki her bir karakteri sırayla gezerek değişkene atar[cite: 15].",
    template: "{slot0} harf in \"Kod\":\n    print({slot1})",
    slots: ["slot0", "slot1"],
    options: ["for", "harf", "while", "range"],
    validCombinations: [
      { slot0: "for", slot1: "harf" }
    ],
    output: "K\no\nd"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: pass Yer Tutucusu (Placeholder)",
    summary: "Henüz gövdesi yazılmamış döngülerde hata almamak için 'pass' anahtar kelimesi kullanılır[cite: 15].",
    template: "for deger in range(3):\n    {slot0}\nprint(\"{slot1}\")",
    slots: ["slot0", "slot1"],
    options: ["pass", "Bitti", "break", "continue"],
    validCombinations: [
      { slot0: "pass", slot1: "Bitti" }
    ],
    output: "Bitti"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Geriye Doğru Sayım Yapan range()",
    summary: "range() içinde negatif adım (-1) kullanılarak geriye doğru azalan sayı dizileri üretilir[cite: 15].",
    template: "for geri in range(3, 0, {slot0}):\n    print({slot1})",
    slots: ["slot0", "slot1"],
    options: ["-1", "geri", "1", "range"],
    validCombinations: [
      { slot0: "-1", slot1: "geri" }
    ],
    output: "3\n2\n1"
  }
];

let currentStep15 = 0;
let userArrangeState15 = [];
let userFillState15 = {};

function initQuiz15() {
  loadQuestion15(currentStep15);
}

function loadQuestion15(index) {
  const q = quizData15[index];
  document.getElementById("step-badge-15").innerText = `Soru ${index + 1} / ${quizData15.length}`;
  document.getElementById("type-badge-15").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-15").style.width = `${((index + 1) / quizData15.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-15");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-15").innerText = q.title;
  
  const feedback = document.getElementById("feedback-15");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-15");
  outputContainer.style.display = "none";
  document.getElementById("code-output-15").innerText = "";
  
  document.getElementById("btn-check-15").style.display = "inline-block";
  document.getElementById("btn-next-15").style.display = "none";
  
  const workspace = document.getElementById("workspace-15");
  const pool = document.getElementById("options-pool-15");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState15 = [];
    renderArrangeWorkspace15();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange15(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState15 = {};
    q.slots.forEach(slot => userFillState15[slot] = null);
    renderFillWorkspace15();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption15(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange15(piece, btnElement) {
  userArrangeState15.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace15();
}

function removePieceFromArrange15(index) {
  const item = userArrangeState15[index];
  item.btnRef.classList.remove("used");
  userArrangeState15.splice(index, 1);
  renderArrangeWorkspace15();
}

function renderArrangeWorkspace15() {
  const workspace = document.getElementById("workspace-15");
  if (userArrangeState15.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState15.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml15(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange15(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot15 = null;

function renderFillWorkspace15() {
  const q = quizData15[currentStep15];
  const workspace = document.getElementById("workspace-15");
  let html = escapeHtml15(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState15[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot15('${slot}')">${escapeHtml15(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot15('${slot}')">${activeSlot15 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot15(slot) {
  activeSlot15 = slot;
  renderFillWorkspace15();
}

function selectFillOption15(val, btnElement) {
  const q = quizData15[currentStep15];
  let targetSlot = activeSlot15;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState15[s] === null);
  }
  
  if (targetSlot) {
    userFillState15[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot15 = null;
    renderFillWorkspace15();
  }
}

function clearSlot15(slot) {
  const pool = document.getElementById("options-pool-15");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState15[slot] = null;
  activeSlot15 = slot;
  renderFillWorkspace15();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer15() {
  const q = quizData15[currentStep15];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState15.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback15("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState15[s] !== null);
    if (!isAllFilled) {
      showFeedback15("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState15[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback15("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-15");
    const outputBox = document.getElementById("code-output-15");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-15").style.display = "none";
    document.getElementById("btn-next-15").style.display = "inline-block";
  } else {
    showFeedback15("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback15(msg, type) {
  const feedback = document.getElementById("feedback-15");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion15() {
  loadQuestion15(currentStep15);
}

function nextQuestion15() {
  if (currentStep15 < quizData15.length - 1) {
    currentStep15++;
    loadQuestion15(currentStep15);
  } else {
    document.getElementById("quiz-container-15").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Döngüler (while, for, range, break, continue) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml15(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz15);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz15();
}
</script>
