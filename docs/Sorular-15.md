<!-- PYTHON INTERACTIVE EXERCISES: MODÜLLER (MODULES) -->
<div id="quiz-container-18" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-18" class="badge">Soru 1 / 10</span>
      <span id="type-badge-18" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-18" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-18" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-18" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-18" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-18" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-18" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-18">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-18" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-18" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-18" class="btn btn-secondary" onclick="resetCurrentQuestion18()">Sıfırla</button>
      <button id="btn-check-18" class="btn btn-primary" onclick="checkAnswer18()">Kontrol Et</button>
      <button id="btn-next-18" class="btn btn-success" onclick="nextQuestion18()" style="display: none;">Sonraki Soru →</button>
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
// MODÜLLER (MODULES) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData18 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Modülü Takma Adla (as) İçe Aktarma ve Kullanma",
    summary: "'import modül as takma_ad' sözdizimi, modül adını kısaltarak daha pratik çağırmayı sağlar.",
    pieces: [
      "import math as m",
      "yaricap = 3",
      "alan = m.pi * (yaricap ** 2)",
      "print(f\"{alan:.2f}\")"
    ],
    solutions: [
      [
        "import math as m",
        "yaricap = 3",
        "alan = m.pi * (yaricap ** 2)",
        "print(f\"{alan:.2f}\")"
      ],
      [
        "yaricap = 3",
        "import math as m",
        "alan = m.pi * (yaricap ** 2)",
        "print(f\"{alan:.2f}\")"
      ]
    ],
    output: "28.27"
  },
  {
    type: "arrange",
    title: "2. Belirli Bir Fonksiyonu İçe Aktarma (from ... import)",
    summary: "'from modül import oge' yöntemiyle içe aktarılan fonksiyonlar modül öneki olmadan doğrudan çağrılabilir.",
    pieces: [
      "from math import sqrt",
      "sayi = 64",
      "kok = sqrt(sayi)",
      "print(kok)"
    ],
    solutions: [
      [
        "from math import sqrt",
        "sayi = 64",
        "kok = sqrt(sayi)",
        "print(kok)"
      ],
      [
        "sayi = 64",
        "from math import sqrt",
        "kok = sqrt(sayi)",
        "print(kok)"
      ]
    ],
    output: "8.0"
  },
  {
    type: "arrange",
    title: "3. if __name__ == '__main__' Test Bloğu",
    summary: "__name__ değişkeni dosya doğrudan çalıştırıldığında '__main__' olur; import edildiğinde bu blok atlanır.",
    pieces: [
      "def topla(a, b):",
      "    return a + b",
      "if __name__ == \"__main__\":",
      "    print(topla(10, 20))"
    ],
    solutions: [
      [
        "def topla(a, b):",
        "    return a + b",
        "if __name__ == \"__main__\":",
        "    print(topla(10, 20))"
      ]
    ],
    output: "30"
  },
  {
    type: "arrange",
    title: "4. dir() ile Modül İçeriğinde Fonksiyon Sorgulama",
    summary: "dir(modul) fonksiyonu modül içindeki tüm nesne ve metotların isimlerini liste olarak döner.",
    pieces: [
      "import math",
      "elemanlar = dir(math)",
      "var_mi = \"pow\" in elemanlar",
      "print(var_mi)"
    ],
    solutions: [
      [
        "import math",
        "elemanlar = dir(math)",
        "var_mi = \"pow\" in elemanlar",
        "print(var_mi)"
      ]
    ],
    output: "True"
  },
  {
    type: "arrange",
    title: "5. sys.path Modül Arama Yolu Kontrolü",
    summary: "sys.path listesi, Python'ın import edilen modülleri aradığı dizin yollarını içerir.",
    pieces: [
      "import sys",
      "yollar = sys.path",
      "print(isinstance(yollar, list))"
    ],
    solutions: [
      [
        "import sys",
        "yollar = sys.path",
        "print(isinstance(yollar, list))"
      ]
    ],
    output: "True"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: from ... import Sözdizimi",
    summary: "Bir modülden tek bir fonksiyonu doğrudan almak için 'from' ve 'import' anahtar kelimeleri kullanılır.",
    template: "{slot0} math {slot1} ceil\nprint(ceil(4.2))",
    slots: ["slot0", "slot1"],
    options: ["from", "import", "as", "with"],
    validCombinations: [
      { slot0: "from", slot1: "import" }
    ],
    output: "5"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: as ile Takma Ad Atama",
    summary: "'as' anahtar kelimesi modüllere veya fonksiyonlara alternatif kısa bir isim vermek için kullanılır.",
    template: "import datetime {slot0} dt\nsimdi = dt.date(2026, 8, 30)\nprint({slot1})",
    slots: ["slot0", "slot1"],
    options: ["as", "simdi.year", "is", "simdi"],
    validCombinations: [
      { slot0: "as", slot1: "simdi.year" }
    ],
    output: "2026"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Doğrudan Çalıştırma Kontrolü (__main__)",
    summary: "Dosyanın ana script olarak yürütüldüğünü kontrol etmek için __name__ değişkeni '__main__' ile kıyaslanır.",
    template: "if {slot0} == \"__{slot1}__\":\n    print(\"Ana dosya olarak calisiyor\")",
    slots: ["slot0", "slot1"],
    options: ["__name__", "main", "__file__", "init"],
    validCombinations: [
      { slot0: "__name__", slot1: "main" }
    ],
    output: "Ana dosya olarak calisiyor"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: dir() İnceleme Fonksiyonu",
    summary: "dir() fonksiyonu parametre olarak verilen modülün tüm nitelik ve metot listesini verir.",
    template: "import sys\nicerik = {slot0}({slot1})\nprint(\"version\" in icerik)",
    slots: ["slot0", "slot1"],
    options: ["dir", "sys", "type", "len"],
    validCombinations: [
      { slot0: "dir", slot1: "sys" }
    ],
    output: "True"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Çoklu Fonksiyon İçe Aktarma",
    summary: "'from modül import a, b' yapısı ile aynı modülden birden fazla öğe virgülle ayrılarak içeri alınabilir.",
    template: "from math import floor{slot0} {slot1}\nprint(floor(3.9), gcd(12, 8))",
    slots: ["slot0", "slot1"],
    options: [",", "gcd", "as", ";"],
    validCombinations: [
      { slot0: ",", slot1: "gcd" }
    ],
    output: "3 4"
  }
];

let currentStep18 = 0;
let userArrangeState18 = [];
let userFillState18 = {};

function initQuiz18() {
  loadQuestion18(currentStep18);
}

function loadQuestion18(index) {
  const q = quizData18[index];
  document.getElementById("step-badge-18").innerText = `Soru ${index + 1} / ${quizData18.length}`;
  document.getElementById("type-badge-18").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-18").style.width = `${((index + 1) / quizData18.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-18");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-18").innerText = q.title;
  
  const feedback = document.getElementById("feedback-18");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-18");
  outputContainer.style.display = "none";
  document.getElementById("code-output-18").innerText = "";
  
  document.getElementById("btn-check-18").style.display = "inline-block";
  document.getElementById("btn-next-18").style.display = "none";
  
  const workspace = document.getElementById("workspace-18");
  const pool = document.getElementById("options-pool-18");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState18 = [];
    renderArrangeWorkspace18();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange18(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState18 = {};
    q.slots.forEach(slot => userFillState18[slot] = null);
    renderFillWorkspace18();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption18(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange18(piece, btnElement) {
  userArrangeState18.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace18();
}

function removePieceFromArrange18(index) {
  const item = userArrangeState18[index];
  item.btnRef.classList.remove("used");
  userArrangeState18.splice(index, 1);
  renderArrangeWorkspace18();
}

function renderArrangeWorkspace18() {
  const workspace = document.getElementById("workspace-18");
  if (userArrangeState18.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState18.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml18(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange18(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot18 = null;

function renderFillWorkspace18() {
  const q = quizData18[currentStep18];
  const workspace = document.getElementById("workspace-18");
  let html = escapeHtml18(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState18[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot18('${slot}')">${escapeHtml18(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot18('${slot}')">${activeSlot18 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot18(slot) {
  activeSlot18 = slot;
  renderFillWorkspace18();
}

function selectFillOption18(val, btnElement) {
  const q = quizData18[currentStep18];
  let targetSlot = activeSlot18;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState18[s] === null);
  }
  
  if (targetSlot) {
    userFillState18[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot18 = null;
    renderFillWorkspace18();
  }
}

function clearSlot18(slot) {
  const pool = document.getElementById("options-pool-18");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState18[slot] = null;
  activeSlot18 = slot;
  renderFillWorkspace18();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer18() {
  const q = quizData18[currentStep18];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState18.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback18("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState18[s] !== null);
    if (!isAllFilled) {
      showFeedback18("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState18[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback18("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-18");
    const outputBox = document.getElementById("code-output-18");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-18").style.display = "none";
    document.getElementById("btn-next-18").style.display = "inline-block";
  } else {
    showFeedback18("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback18(msg, type) {
  const feedback = document.getElementById("feedback-18");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion18() {
  loadQuestion18(currentStep18);
}

function nextQuestion18() {
  if (currentStep18 < quizData18.length - 1) {
    currentStep18++;
    loadQuestion18(currentStep18);
  } else {
    document.getElementById("quiz-container-18").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Modüller (import, as, from, __name__) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml18(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz18);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz18();
}
</script>
