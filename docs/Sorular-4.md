<!-- PYTHON INTERACTIVE EXERCISES: VERİ TÜRLERİ (DATA TYPES - TERMINAL ÇIKTILI) -->
<div id="quiz-container-4" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-4" class="badge">Soru 1 / 10</span>
      <span id="type-badge-4" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-4" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-4" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-4" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-4" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-4" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-4" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-4">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-4" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-4" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-4" class="btn btn-secondary" onclick="resetCurrentQuestion4()">Sıfırla</button>
      <button id="btn-check-4" class="btn btn-primary" onclick="checkAnswer4()">Kontrol Et</button>
      <button id="btn-next-4" class="btn btn-success" onclick="nextQuestion4()" style="display: none;">Sonraki Soru →</button>
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
// VERİ TÜRLERİ KONUSU İÇİN ÖZGÜN VE SADE SORU HAVUZU (ÇIKTI VERİLERİYLE)
const quizData4 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. float Değerin int Türüne Dönüşümü",
    summary: "int() fonksiyonu ondalıklı bir sayıyı tam sayıya çevirirken yuvarlama yapmaz, ondalık kısmı tamamen atar[cite: 4].",
    pieces: [
      "ondalik = 8.95",
      "tam_sayi = int(ondalik)",
      "print(tam_sayi)"
    ],
    solutions: [
      [
        "ondalik = 8.95",
        "tam_sayi = int(ondalik)",
        "print(tam_sayi)"
      ]
    ],
    output: "8"
  },
  {
    type: "arrange",
    title: "2. Sıra (Sequence) Türlerini Tanımlama",
    summary: "Listeler köşeli parantez '[]' ile mutable (değiştirilebilir), demetler parantez '()' ile immutable (değiştirilemez) tanımlanır[cite: 4].",
    pieces: [
      "renkler_listesi = [\"mavi\", \"yesil\"]",
      "renkler_demeti = (\"mavi\", \"yesil\")",
      "print(type(renkler_listesi), type(renkler_demeti))"
    ],
    solutions: [
      [
        "renkler_listesi = [\"mavi\", \"yesil\"]",
        "renkler_demeti = (\"mavi\", \"yesil\")",
        "print(type(renkler_listesi), type(renkler_demeti))"
      ],
      [
        "renkler_demeti = (\"mavi\", \"yesil\")",
        "renkler_listesi = [\"mavi\", \"yesil\"]",
        "print(type(renkler_listesi), type(renkler_demeti))"
      ]
    ],
    output: "<class 'list'> <class 'tuple'>"
  },
  {
    type: "arrange",
    title: "3. complex (Karmaşık) Sayı Dönüşümü",
    summary: "Bir tam sayı complex() fonksiyonu ile veya sanal birim 'j' eklenerek karmaşık sayıya çevrilebilir[cite: 4].",
    pieces: [
      "sayi = 15",
      "karmasik = complex(sayi)",
      "print(karmasik)"
    ],
    solutions: [
      [
        "sayi = 15",
        "karmasik = complex(sayi)",
        "print(karmasik)"
      ]
    ],
    output: "(15+0j)"
  },
  {
    type: "arrange",
    title: "4. Eşleme (dict) ve Küme (set) Tanımlama",
    summary: "dict anahtar-değer çiftlerinden oluşurken ({k: v}), set eşsiz tekil elemanlardan ({v1, v2}) oluşur[cite: 4].",
    pieces: [
      "ayarlar = {\"ses\": 80, \"parlaklik\": 100}",
      "etiketler = {\"python\", \"kodlama\"}",
      "print(type(ayarlar), type(etiketler))"
    ],
    solutions: [
      [
        "ayarlar = {\"ses\": 80, \"parlaklik\": 100}",
        "etiketler = {\"python\", \"kodlama\"}",
        "print(type(ayarlar), type(etiketler))"
      ],
      [
        "etiketler = {\"python\", \"kodlama\"}",
        "ayarlar = {\"ses\": 80, \"parlaklik\": 100}",
        "print(type(ayarlar), type(etiketler))"
      ]
    ],
    output: "<class 'dict'> <class 'set'>"
  },
  {
    type: "arrange",
    title: "5. NoneType (Boşluk Türü) Ataması",
    summary: "None sabiti bir değerin veya nesnenin bulunmadığını simgeler ve türü 'NoneType' olarak geçer[cite: 4].",
    pieces: [
      "cevap = None",
      "print(type(cevap))"
    ],
    solutions: [
      [
        "cevap = None",
        "print(type(cevap))"
      ]
    ],
    output: "<class 'NoneType'>"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Kurucu ile dict Tanımlama",
    summary: "dict() kurucusu parametre olarak verilen isimli argümanları anahtar-değer eşleşmesine çevirir[cite: 4].",
    template: "profil = {slot0}(kullanici=\"ahmet\", {slot1}=24)\nprint(profil)",
    slots: ["slot0", "slot1"],
    options: ["dict", "yas", "list", "set"],
    validCombinations: [
      { slot0: "dict", slot1: "yas" }
    ],
    output: "{'kullanici': 'ahmet', 'yas': 24}"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Boole Truthy ve Falsy Değerleri",
    summary: "Boş koleksiyonlar '[]' mantıksal olarak False verirken[cite: 4], sıfır dışındaki tüm sayılar (örn: -5) True üretir[cite: 4].",
    template: "print(bool({slot0}))  # False üretir\nprint(bool({slot1}))  # True üretir",
    slots: ["slot0", "slot1"],
    options: ["[]", "-5", "None", "\"\""],
    validCombinations: [
      { slot0: "[]", slot1: "-5" },
      { slot0: "None", slot1: "-5" },
      { slot0: "\"\"", slot1: "-5" }
    ],
    output: "False\nTrue"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Metni Ondalıklı Sayıya Çevirme",
    summary: "Ondalık nokta içeren metinsel sayılar float() kurucusu ile sayısal ondalıklı türe dönüştürülür[cite: 4].",
    template: "giris = \"4.75\"\noran = {slot0}(giris)\nprint({slot1}(oran))",
    slots: ["slot0", "slot1"],
    options: ["float", "type", "int", "str"],
    validCombinations: [
      { slot0: "float", slot1: "type" }
    ],
    output: "<class 'float'>"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: İkili (Binary) bytes Tanımı",
    summary: "Metinlerin başına 'b' ön eki konularak veya bytes() kurucusu çağrılarak ikili bayt türü elde edilir[cite: 4].",
    template: "ham_veri = {slot0}\"Sinyal\"\ntur = {slot1}(ham_veri)\nprint(tur)",
    slots: ["slot0", "slot1"],
    options: ["b", "type", "f", "bytearray"],
    validCombinations: [
      { slot0: "b", slot1: "type" }
    ],
    output: "<class 'bytes'>"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Değiştirilemez Sabit Küme (frozenset)",
    summary: "Elemanları sonradan değiştirilemeyen dondurulmuş küme oluşturmak için frozenset() kurucusu kullanılır[cite: 4].",
    template: "rakamlar = {slot0}([{slot1}, 2, 3])\nprint(type(rakamlar))",
    slots: ["slot0", "slot1"],
    options: ["frozenset", "1", "set", "tuple"],
    validCombinations: [
      { slot0: "frozenset", slot1: "1" }
    ],
    output: "<class 'frozenset'>"
  }
];

let currentStep4 = 0;
let userArrangeState4 = [];
let userFillState4 = {};

function initQuiz4() {
  loadQuestion4(currentStep4);
}

function loadQuestion4(index) {
  const q = quizData4[index];
  document.getElementById("step-badge-4").innerText = `Soru ${index + 1} / ${quizData4.length}`;
  document.getElementById("type-badge-4").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-4").style.width = `${((index + 1) / quizData4.length) * 100}%`;
  
  // Konu kuralı kutusu sorunun en üstünde sürekli görünür
  const summaryBox = document.getElementById("topic-summary-4");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-4").innerText = q.title;
  
  const feedback = document.getElementById("feedback-4");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-4");
  outputContainer.style.display = "none";
  document.getElementById("code-output-4").innerText = "";
  
  document.getElementById("btn-check-4").style.display = "inline-block";
  document.getElementById("btn-next-4").style.display = "none";
  
  const workspace = document.getElementById("workspace-4");
  const pool = document.getElementById("options-pool-4");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState4 = [];
    renderArrangeWorkspace4();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange4(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState4 = {};
    q.slots.forEach(slot => userFillState4[slot] = null);
    renderFillWorkspace4();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption4(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange4(piece, btnElement) {
  userArrangeState4.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace4();
}

function removePieceFromArrange4(index) {
  const item = userArrangeState4[index];
  item.btnRef.classList.remove("used");
  userArrangeState4.splice(index, 1);
  renderArrangeWorkspace4();
}

function renderArrangeWorkspace4() {
  const workspace = document.getElementById("workspace-4");
  if (userArrangeState4.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState4.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml4(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange4(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot4 = null;

function renderFillWorkspace4() {
  const q = quizData4[currentStep4];
  const workspace = document.getElementById("workspace-4");
  let html = escapeHtml4(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState4[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot4('${slot}')">${escapeHtml4(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot4('${slot}')">${activeSlot4 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot4(slot) {
  activeSlot4 = slot;
  renderFillWorkspace4();
}

function selectFillOption4(val, btnElement) {
  const q = quizData4[currentStep4];
  let targetSlot = activeSlot4;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState4[s] === null);
  }
  
  if (targetSlot) {
    userFillState4[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot4 = null;
    renderFillWorkspace4();
  }
}

function clearSlot4(slot) {
  const pool = document.getElementById("options-pool-4");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState4[slot] = null;
  activeSlot4 = slot;
  renderFillWorkspace4();
}

/* Cevap Kontrolü ve Terminal Çıktısı */
function checkAnswer4() {
  const q = quizData4[currentStep4];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState4.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback4("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState4[s] !== null);
    if (!isAllFilled) {
      showFeedback4("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState4[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback4("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-4");
    const outputBox = document.getElementById("code-output-4");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-4").style.display = "none";
    document.getElementById("btn-next-4").style.display = "inline-block";
  } else {
    showFeedback4("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback4(msg, type) {
  const feedback = document.getElementById("feedback-4");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion4() {
  loadQuestion4(currentStep4);
}

function nextQuestion4() {
  if (currentStep4 < quizData4.length - 1) {
    currentStep4++;
    loadQuestion4(currentStep4);
  } else {
    document.getElementById("quiz-container-4").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Veri Türleri (Data Types) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml4(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz4);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz4();
}
</script>
