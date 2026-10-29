<!-- PYTHON INTERACTIVE EXERCISES: MATCH - CASE -->
<div id="quiz-container-14" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-14" class="badge">Soru 1 / 10</span>
      <span id="type-badge-14" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-14" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-14" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-14" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-14" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-14" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-14" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-14">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-14" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-14" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-14" class="btn btn-secondary" onclick="resetCurrentQuestion14()">Sıfırla</button>
      <button id="btn-check-14" class="btn btn-primary" onclick="checkAnswer14()">Kontrol Et</button>
      <button id="btn-next-14" class="btn btn-success" onclick="nextQuestion14()" style="display: none;">Sonraki Soru →</button>
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
// MATCH - CASE KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData14 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Temel match-case ve Joker (case _) Kullanımı",
    summary: "match ifadesi değeri değerlendirir; hiçbir case uyuşmazsa en sonda yer alan 'case _' varsayılan durumu çalışır[cite: 14].",
    pieces: [
      "rol = \"misafir\"",
      "match rol:",
      "    case \"admin\":",
      "        print(\"Tam Erişim\")",
      "    case _:",
      "        print(\"Kısıtlı Erişim\")"
    ],
    solutions: [
      [
        "rol = \"misafir\"",
        "match rol:",
        "    case \"admin\":",
        "        print(\"Tam Erişim\")",
        "    case _:",
        "        print(\"Kısıtlı Erişim\")"
      ]
    ],
    output: "Kısıtlı Erişim"
  },
  {
    type: "arrange",
    title: "2. Boru (|) Operatörü ile Çoklu Değer Eşleme",
    summary: "Bir case durumunun birden fazla eşleşmeye yanıt vermesi için değerler arasına '|' (boru) operatörü konur[cite: 14].",
    pieces: [
      "cevap = \"evet\"",
      "match cevap:",
      "    case \"evet\" | \"e\" | \"tamam\":",
      "        print(\"İşlem Onaylandı\")",
      "    case _:",
      "        print(\"İşlem İptal Edildi\")"
    ],
    solutions: [
      [
        "cevap = \"evet\"",
        "match cevap:",
        "    case \"evet\" | \"e\" | \"tamam\":",
        "        print(\"İşlem Onaylandı\")",
        "    case _:",
        "        print(\"İşlem İptal Edildi\")"
      ]
    ],
    output: "İşlem Onaylandı"
  },
  {
    type: "arrange",
    title: "3. Koşul Koruması (Guard: case ... if) Yapısı",
    summary: "case ifadesinin yanına eklenen 'if' koşulu, yalnızca hem örüntü eşleştiğinde hem de mantıksal şart True olduğunda çalışır[cite: 14].",
    pieces: [
      "derece = 3",
      "kat = 2",
      "match kat:",
      "    case 1 | 2 | 3 if derece == 3:",
      "        print(\"Üst Düzey Yönetici Katı\")",
      "    case _:",
      "        print(\"Standart Kat\")"
    ],
    solutions: [
      [
        "derece = 3",
        "kat = 2",
        "match kat:",
        "    case 1 | 2 | 3 if derece == 3:",
        "        print(\"Üst Düzey Yönetici Katı\")",
        "    case _:",
        "        print(\"Standart Kat\")"
      ],
      [
        "kat = 2",
        "derece = 3",
        "match kat:",
        "    case 1 | 2 | 3 if derece == 3:",
        "        print(\"Üst Düzey Yönetici Katı\")",
        "    case _:",
        "        print(\"Standart Kat\")"
      ]
    ],
    output: "Üst Düzey Yönetici Katı"
  },
  {
    type: "arrange",
    title: "4. Demet / Koordinat Örüntü Eşleme (Pattern Matching)",
    summary: "match-case koleksiyonların şekline göre değişken ataması yapar; (x, 0) gibi şablonlarla eksen ayrıştırması sağlar[cite: 14].",
    pieces: [
      "konum = (50, 0)",
      "match konum:",
      "    case (0, 0):",
      "        print(\"Merkez\")",
      "    case (x, 0):",
      "        print(f\"X ekseninde: {x}\")",
      "    case _:",
      "        print(\"Serbest Nokta\")"
    ],
    solutions: [
      [
        "konum = (50, 0)",
        "match konum:",
        "    case (0, 0):",
        "        print(\"Merkez\")",
        "    case (x, 0):",
        "        print(f\"X ekseninde: {x}\")",
        "    case _:",
        "        print(\"Serbest Nokta\")"
      ]
    ],
    output: "X ekseninde: 50"
  },
  {
    type: "arrange",
    title: "5. Liste Boyutu ve Öğe Ayrıştırma",
    summary: "Liste veya demet elemanları match-case ile doğrudan değişkenlere bağlanarak eleman sayısına göre eşlenebilir[cite: 14].",
    pieces: [
      "veri = [\"kaydet\", \"dosya.txt\"]",
      "match veri:",
      "    case [\"kaydet\", dosya_adi]:",
      "        print(f\"Dosya kaydedildi: {dosya_adi}\")",
      "    case _:",
      "        print(\"Geçersiz format\")"
    ],
    solutions: [
      [
        "veri = [\"kaydet\", \"dosya.txt\"]",
        "match veri:",
        "    case [\"kaydet\", dosya_adi]:",
        "        print(f\"Dosya kaydedildi: {dosya_adi}\")",
        "    case _:",
        "        print(\"Geçersiz format\")"
      ]
    ],
    output: "Dosya kaydedildi: dosya.txt"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: match ve case Sözdizimi Başlatıcıları",
    summary: "match ve case satırlarının sonuna Python blok yapısı kuralı gereğince iki nokta (:) konulmalıdır[cite: 13, 14].",
    template: "mod = \"gece\"\n{slot0} mod:\n    case \"gece\"{slot1}\n        print(\"Koyu Tema Aktif\")",
    slots: ["slot0", "slot1"],
    options: ["match", ":", "switch", ";"],
    validCombinations: [
      { slot0: "match", slot1: ":" }
    ],
    output: "Koyu Tema Aktif"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Çoklu Seçeneklerde Boru (|) İşareti",
    summary: "Aynı kod bloğunu birden fazla sabit değere bağlamak için pipe (|) ayracı kullanılır[cite: 14].",
    template: "tus = \"w\"\nmatch tus:\n    case \"w\" {slot0} \"W\":\n        print(\"İleri {slot1}\")",
    slots: ["slot0", "slot1"],
    options: ["|", "Git", "or", "&"],
    validCombinations: [
      { slot0: "|", slot1: "Git" }
    ],
    output: "İleri Git"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Guard Koşulu (if) ile Ek Doğrulama",
    summary: "case ifadesinden sonra 'if' yazılarak durumun yalnızca koşul sağlandığında tetiklenmesi garanti edilir[cite: 14].",
    template: "puan = 95\nmatch puan:\n    case x {slot0} x >= 90:\n        print(\"Takdir {slot1}\")",
    slots: ["slot0", "slot1"],
    options: ["if", "Belgesi", "when", "and"],
    validCombinations: [
      { slot0: "if", slot1: "Belgesi" }
    ],
    output: "Takdir Belgesi"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Varsayılan Durum (case _)",
    summary: "Hiçbir case bloğu eşleşmediğinde 'case _:' jokeri devreye girer ve yapının en sonunda yer alır[cite: 14].",
    template: "islem = 9\nmatch islem:\n    case 1:\n        print(\"Aç\")\n    {slot0} {slot1}:\n        print(\"Tanımsız\")",
    slots: ["slot0", "slot1"],
    options: ["case", "_", "default", "*"],
    validCombinations: [
      { slot0: "case", slot1: "_" }
    ],
    output: "Tanımsız"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: İki Elemanlı Demet Eşleme",
    summary: "match-case yapısında (0, y) deseni ilk elemanı 0 olan iki öğeli demetleri eşleyip y değerini değişkene aktarır[cite: 14].",
    template: "nokta = (0, 75)\nmatch nokta:\n    case (0, {slot0}):\n        print(f\"Y degeri: {{{slot1}}}\")",
    slots: ["slot0", "slot1"],
    options: ["y", "y", "x", "z"],
    validCombinations: [
      { slot0: "y", slot1: "y" }
    ],
    output: "Y degeri: 75"
  }
];

let currentStep14 = 0;
let userArrangeState14 = [];
let userFillState14 = {};

function initQuiz14() {
  loadQuestion14(currentStep14);
}

function loadQuestion14(index) {
  const q = quizData14[index];
  document.getElementById("step-badge-14").innerText = `Soru ${index + 1} / ${quizData14.length}`;
  document.getElementById("type-badge-14").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-14").style.width = `${((index + 1) / quizData14.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-14");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-14").innerText = q.title;
  
  const feedback = document.getElementById("feedback-14");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-14");
  outputContainer.style.display = "none";
  document.getElementById("code-output-14").innerText = "";
  
  document.getElementById("btn-check-14").style.display = "inline-block";
  document.getElementById("btn-next-14").style.display = "none";
  
  const workspace = document.getElementById("workspace-14");
  const pool = document.getElementById("options-pool-14");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState14 = [];
    renderArrangeWorkspace14();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange14(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState14 = {};
    q.slots.forEach(slot => userFillState14[slot] = null);
    renderFillWorkspace14();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption14(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange14(piece, btnElement) {
  userArrangeState14.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace14();
}

function removePieceFromArrange14(index) {
  const item = userArrangeState14[index];
  item.btnRef.classList.remove("used");
  userArrangeState14.splice(index, 1);
  renderArrangeWorkspace14();
}

function renderArrangeWorkspace14() {
  const workspace = document.getElementById("workspace-14");
  if (userArrangeState14.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState14.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml14(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange14(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot14 = null;

function renderFillWorkspace14() {
  const q = quizData14[currentStep14];
  const workspace = document.getElementById("workspace-14");
  let html = escapeHtml14(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState14[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot14('${slot}')">${escapeHtml14(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot14('${slot}')">${activeSlot14 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot14(slot) {
  activeSlot14 = slot;
  renderFillWorkspace14();
}

function selectFillOption14(val, btnElement) {
  const q = quizData14[currentStep14];
  let targetSlot = activeSlot14;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState14[s] === null);
  }
  
  if (targetSlot) {
    userFillState14[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot14 = null;
    renderFillWorkspace14();
  }
}

function clearSlot14(slot) {
  const pool = document.getElementById("options-pool-14");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState14[slot] = null;
  activeSlot14 = slot;
  renderFillWorkspace14();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer14() {
  const q = quizData14[currentStep14];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState14.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback14("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState14[s] !== null);
    if (!isAllFilled) {
      showFeedback14("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState14[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback14("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-14");
    const outputBox = document.getElementById("code-output-14");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-14").style.display = "none";
    document.getElementById("btn-next-14").style.display = "inline-block";
  } else {
    showFeedback14("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback14(msg, type) {
  const feedback = document.getElementById("feedback-14");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion14() {
  loadQuestion14(currentStep14);
}

function nextQuestion14() {
  if (currentStep14 < quizData14.length - 1) {
    currentStep14++;
    loadQuestion14(currentStep14);
  } else {
    document.getElementById("quiz-container-14").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">match-case (Yapısal Örüntü Eşleme) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml14(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz14);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz14();
}
</script>
