<!-- PYTHON INTERACTIVE EXERCISES: LİSTELER (LISTS) -->
<div id="quiz-container-9" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-9" class="badge">Soru 1 / 10</span>
      <span id="type-badge-9" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-9" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-9" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-9" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-9" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-9" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-9" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-9">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-9" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-9" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-9" class="btn btn-secondary" onclick="resetCurrentQuestion9()">Sıfırla</button>
      <button id="btn-check-9" class="btn btn-primary" onclick="checkAnswer9()">Kontrol Et</button>
      <button id="btn-next-9" class="btn btn-success" onclick="nextQuestion9()" style="display: none;">Sonraki Soru →</button>
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
// LİSTELER (LISTS) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData9 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. append() ve insert() ile Eleman Ekleme",
    summary: "append() elemanı listenin en sonuna eklerken, insert(indeks, eleman) belirtilen konuma araya ekleme yapar[cite: 9].",
    pieces: [
      "diller = [\"Python\", \"C++\"]",
      "diller.append(\"Rust\")",
      "diller.insert(1, \"Go\")",
      "print(diller)"
    ],
    solutions: [
      [
        "diller = [\"Python\", \"C++\"]",
        "diller.append(\"Rust\")",
        "diller.insert(1, \"Go\")",
        "print(diller)"
      ]
    ],
    output: "['Python', 'Go', 'C++', 'Rust']"
  },
  {
    type: "arrange",
    title: "2. pop() ile Eleman Çıkarma ve Değeri Alma",
    summary: "pop(indeks) belirtilen indeksteki elemanı listeden siler ve çıkarılan değeri geriye döndürür[cite: 9].",
    pieces: [
      "notlar = [70, 85, 90, 100]",
      "cikarilan = notlar.pop(2)",
      "print(cikarilan, notlar)"
    ],
    solutions: [
      [
        "notlar = [70, 85, 90, 100]",
        "cikarilan = notlar.pop(2)",
        "print(cikarilan, notlar)"
      ]
    ],
    output: "90 [70, 85, 100]"
  },
  {
    type: "arrange",
    title: "3. sort() vs sorted() Sıralama Mantığı",
    summary: "sorted() orijinal listeyi değiştirmeden yeni bir liste üretirken, sort() listeyi yerinde (in-place) değiştirir[cite: 9].",
    pieces: [
      "puanlar = [4, 1, 8, 3]",
      "yeni_puanlar = sorted(puanlar)",
      "puanlar.sort(reverse=True)",
      "print(yeni_puanlar, puanlar)"
    ],
    solutions: [
      [
        "puanlar = [4, 1, 8, 3]",
        "yeni_puanlar = sorted(puanlar)",
        "puanlar.sort(reverse=True)",
        "print(yeni_puanlar, puanlar)"
      ]
    ],
    output: "[1, 3, 4, 8] [8, 4, 3, 1]"
  },
  {
    type: "arrange",
    title: "4. Negatif İndeksleme ve Adımlı Dilimleme",
    summary: "[::-1] tüm listeyi tersine çevirirken, negatif indeksler listenin son elemanından (-1) geriye doğru sayar[cite: 9].",
    pieces: [
      "harfler = [\"a\", \"b\", \"c\", \"d\", \"e\"]",
      "ters = harfler[::-1]",
      "son_iki = harfler[-2:]",
      "print(ters, son_iki)"
    ],
    solutions: [
      [
        "harfler = [\"a\", \"b\", \"c\", \"d\", \"e\"]",
        "ters = harfler[::-1]",
        "son_iki = harfler[-2:]",
        "print(ters, son_iki)"
      ],
      [
        "harfler = [\"a\", \"b\", \"c\", \"d\", \"e\"]",
        "son_iki = harfler[-2:]",
        "ters = harfler[::-1]",
        "print(ters, son_iki)"
      ]
    ],
    output: "['e', 'd', 'c', 'b', 'a'] ['d', 'e']"
  },
  {
    type: "arrange",
    title: "5. Liste Kopyalama (copy) ve Bağımsızlık",
    summary: "copy() metodu bağımsız bir kopya oluşturur; kopyada yapılan değişiklik orijinal listeyi etkilemez[cite: 9].",
    pieces: [
      "asıl = [10, 20, 30]",
      "yedek = asıl.copy()",
      "yedek.append(40)",
      "print(asıl, yedek)"
    ],
    solutions: [
      [
        "asıl = [10, 20, 30]",
        "yedek = asıl.copy()",
        "yedek.append(40)",
        "print(asıl, yedek)"
      ]
    ],
    output: "[10, 20, 30] [10, 20, 30, 40]"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: extend() ile Listeleri Genişletme",
    summary: "extend() bir koleksiyonun tüm elemanlarını mevcut listenin sonuna tek tek ulayarak genişletir[cite: 9].",
    template: "a = [1, 2]\nb = [3, 4]\na.{slot0}(b)\nprint({slot1}(a))",
    slots: ["slot0", "slot1"],
    options: ["extend", "len", "append", "sort"],
    validCombinations: [
      { slot0: "extend", slot1: "len" }
    ],
    output: "4"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: remove() ve clear() Metotları",
    summary: "remove(değer) eşleşen ilk elemanı siler, clear() ise listenin tüm elemanlarını boşaltır[cite: 9].",
    template: "sehirler = [\"Ankara\", \"İzmir\", \"Bursa\"]\nsehirler.{slot0}(\"İzmir\")\nsehirler.{slot1}()\nprint(sehirler)",
    slots: ["slot0", "slot1"],
    options: ["remove", "clear", "pop", "del"],
    validCombinations: [
      { slot0: "remove", slot1: "clear" }
    ],
    output: "[]"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: count() ve index() Metotları",
    summary: "count(x) elemanın kaç kez geçtiğini sayar, index(x) ise elemanın ilk bulunduğu indeks numarasını verir[cite: 9].",
    template: "sayilar = [5, 2, 5, 8, 5]\nadet = sayilar.{slot0}(5)\nkonum = sayilar.{slot1}(8)\nprint(adet, konum)",
    slots: ["slot0", "slot1"],
    options: ["count", "index", "pop", "len"],
    validCombinations: [
      { slot0: "count", slot1: "index" }
    ],
    output: "3 3"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Açma (*) Operatörü ile Birleştirme",
    summary: "Yıldız (*) operatörü liste elemanlarını açarak yeni bir liste içinde kolayca birleştirmeyi sağlar[cite: 9].",
    template: "l1 = [10, 20]\nl2 = [30, 40]\nbirlesik = [{slot0}l1, {slot1}l2]\nprint(birlesik)",
    slots: ["slot0", "slot1"],
    options: ["*", "*", "+", "**"],
    validCombinations: [
      { slot0: "*", slot1: "*" }
    ],
    output: "[10, 20, 30, 40]"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: min() ve max() Yardımcı Fonksiyonları",
    summary: "min() listedeki en küçük değeri, max() ise en büyük değeri döndüren yerleşik fonksiyonlardır[cite: 9].",
    template: "degerler = [45, 12, 89, 33]\nen_kucuk = {slot0}(degerler)\nen_buyuk = {slot1}(degerler)\nprint(en_kucuk, en_buyuk)",
    slots: ["slot0", "slot1"],
    options: ["min", "max", "sort", "len"],
    validCombinations: [
      { slot0: "min", slot1: "max" }
    ],
    output: "12 89"
  }
];

let currentStep9 = 0;
let userArrangeState9 = [];
let userFillState9 = {};

function initQuiz9() {
  loadQuestion9(currentStep9);
}

function loadQuestion9(index) {
  const q = quizData9[index];
  document.getElementById("step-badge-9").innerText = `Soru ${index + 1} / ${quizData9.length}`;
  document.getElementById("type-badge-9").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-9").style.width = `${((index + 1) / quizData9.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-9");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-9").innerText = q.title;
  
  const feedback = document.getElementById("feedback-9");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-9");
  outputContainer.style.display = "none";
  document.getElementById("code-output-9").innerText = "";
  
  document.getElementById("btn-check-9").style.display = "inline-block";
  document.getElementById("btn-next-9").style.display = "none";
  
  const workspace = document.getElementById("workspace-9");
  const pool = document.getElementById("options-pool-9");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState9 = [];
    renderArrangeWorkspace9();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange9(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState9 = {};
    q.slots.forEach(slot => userFillState9[slot] = null);
    renderFillWorkspace9();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption9(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange9(piece, btnElement) {
  userArrangeState9.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace9();
}

function removePieceFromArrange9(index) {
  const item = userArrangeState9[index];
  item.btnRef.classList.remove("used");
  userArrangeState9.splice(index, 1);
  renderArrangeWorkspace9();
}

function renderArrangeWorkspace9() {
  const workspace = document.getElementById("workspace-9");
  if (userArrangeState9.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState9.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml9(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange9(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot9 = null;

function renderFillWorkspace9() {
  const q = quizData9[currentStep9];
  const workspace = document.getElementById("workspace-9");
  let html = escapeHtml9(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState9[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot9('${slot}')">${escapeHtml9(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot9('${slot}')">${activeSlot9 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot9(slot) {
  activeSlot9 = slot;
  renderFillWorkspace9();
}

function selectFillOption9(val, btnElement) {
  const q = quizData9[currentStep9];
  let targetSlot = activeSlot9;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState9[s] === null);
  }
  
  if (targetSlot) {
    userFillState9[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot9 = null;
    renderFillWorkspace9();
  }
}

function clearSlot9(slot) {
  const pool = document.getElementById("options-pool-9");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState9[slot] = null;
  activeSlot9 = slot;
  renderFillWorkspace9();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer9() {
  const q = quizData9[currentStep9];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState9.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback9("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState9[s] !== null);
    if (!isAllFilled) {
      showFeedback9("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState9[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback9("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-9");
    const outputBox = document.getElementById("code-output-9");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-9").style.display = "none";
    document.getElementById("btn-next-9").style.display = "inline-block";
  } else {
    showFeedback9("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback9(msg, type) {
  const feedback = document.getElementById("feedback-9");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion9() {
  loadQuestion9(currentStep9);
}

function nextQuestion9() {
  if (currentStep9 < quizData9.length - 1) {
    currentStep9++;
    loadQuestion9(currentStep9);
  } else {
    document.getElementById("quiz-container-9").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Listeler (Lists) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml9(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz9);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz9();
}
</script>
