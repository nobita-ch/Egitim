<!-- PYTHON INTERACTIVE EXERCISES: BOOLE (MANTIKSAL VERİ TİPİ) -->
<div id="quiz-container-8" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-8" class="badge">Soru 1 / 10</span>
      <span id="type-badge-8" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-8" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-8" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-8" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-8" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-8" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-8" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-8">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-8" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-8" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-8" class="btn btn-secondary" onclick="resetCurrentQuestion8()">Sıfırla</button>
      <button id="btn-check-8" class="btn btn-primary" onclick="checkAnswer8()">Kontrol Et</button>
      <button id="btn-next-8" class="btn btn-success" onclick="nextQuestion8()" style="display: none;">Sonraki Soru →</button>
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
// BOOLE KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData8 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Boole Sayısal Davranışı ve Toplama",
    summary: "bool veri tipi int alt sınıfıdır; True sayısal olarak 1, False ise 0 değerini taşır.",
    pieces: [
      "durum_a = True",
      "durum_b = False",
      "toplam = durum_a + durum_a + durum_b",
      "print(toplam)"
    ],
    solutions: [
      [
        "durum_a = True",
        "durum_b = False",
        "toplam = durum_a + durum_a + durum_b",
        "print(toplam)"
      ],
      [
        "durum_b = False",
        "durum_a = True",
        "toplam = durum_a + durum_a + durum_b",
        "print(toplam)"
      ]
    ],
    output: "2"
  },
  {
    type: "arrange",
    title: "2. isinstance() ile Tür Kontrolü",
    summary: "isinstance(nesne, tip) fonksiyonu nesnenin belirtilen tipe ait olup olmadığını Boole (True/False) olarak döner.",
    pieces: [
      "sayi = 75.5",
      "kontrol = isinstance(sayi, (int, float))",
      "print(kontrol)"
    ],
    solutions: [
      [
        "sayi = 75.5",
        "kontrol = isinstance(sayi, (int, float))",
        "print(kontrol)"
      ]
    ],
    output: "True"
  },
  {
    type: "arrange",
    title: "3. 'or' Operatörü ile İlk Truthy Değeri Döndürme",
    summary: "'or' operatörü soldan sağa ilk bulduğu truthy (dolu/doğru) değeri doğrudan döndürür.",
    pieces: [
      "kullanici_girisi = \"\"",
      "varsayilan = \"Misafir\"",
      "aktif_kullanici = kullanici_girisi or varsayilan",
      "print(aktif_kullanici)"
    ],
    solutions: [
      [
        "kullanici_girisi = \"\"",
        "varsayilan = \"Misafir\"",
        "aktif_kullanici = kullanici_girisi or varsayilan",
        "print(aktif_kullanici)"
      ],
      [
        "varsayilan = \"Misafir\"",
        "kullanici_girisi = \"\"",
        "aktif_kullanici = kullanici_girisi or varsayilan",
        "print(aktif_kullanici)"
      ]
    ],
    output: "Misafir"
  },
  {
    type: "arrange",
    title: "4. Kısa Devre (Short-Circuit) Korumalı Liste Erişimi",
    summary: "'and' işleminde sol taraf False ise sağ taraf değerlendirilmez; böylece boş liste indeks hatası (IndexError) engellenir.",
    pieces: [
      "sepet = []",
      "if len(sepet) > 0 and sepet[0] == \"kitap\":",
      "    print(\"Ürün bulundu\")",
      "print(\"Kontrol tamamlandi\")"
    ],
    solutions: [
      [
        "sepet = []",
        "if len(sepet) > 0 and sepet[0] == \"kitap\":",
        "    print(\"Ürün bulundu\")",
        "print(\"Kontrol tamamlandi\")"
      ]
    ],
    output: "Kontrol tamamlandi"
  },
  {
    type: "arrange",
    title: "5. Boole Dönen Fonksiyon ile Koşul Kontrolü",
    summary: "Fonksiyonlar mantıksal doğruluk durumlarına göre doğrudan True veya False döndürebilir.",
    pieces: [
      "def yetki_var_mi():",
      "    return True",
      "if yetki_var_mi():",
      "    print(\"Panel açıldı\")"
    ],
    solutions: [
      [
        "def yetki_var_mi():",
        "    return True",
        "if yetki_var_mi():",
        "    print(\"Panel açıldı\")"
      ]
    ],
    output: "Panel açıldı"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Sıfır İçeren Liste ve Boş Dize",
    summary: "Boş dizeler ('') False üretirken; içinde '0' dahi olsa elemanı bulunan listeler ([0]) True (truthy) kabul edilir.",
    template: "bos_metin = bool({slot0})\ndolu_liste = bool({slot1})\nprint(bos_metin, dolu_liste)",
    slots: ["slot0", "slot1"],
    options: ["\"\"", "[0]", "None", "1"],
    validCombinations: [
      { slot0: "\"\"", slot1: "[0]" }
    ],
    output: "False True"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: isinstance() Tip Eşleşmesi",
    summary: "isinstance() fonksiyonu değişkenin belirtilen türlerden birine ait olup olmadığını kontrol eder.",
    template: "metin = \"Python\"\nsonuc = {slot0}(metin, {slot1})\nprint(sonuc)",
    slots: ["slot0", "slot1"],
    options: ["isinstance", "str", "type", "bool"],
    validCombinations: [
      { slot0: "isinstance", slot1: "str" }
    ],
    output: "True"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: 'and' Operatörünün Falsy Döndürme Kuralı",
    summary: "'and' operatörü ilk karşılaştığı falsy değeri döner; tümü truthy ise son operandın değerini verir.",
    template: "sonuc1 = 0 {slot0} \"Veri\"\nsonuc2 = \"Kod\" {slot1} \"Analiz\"\nprint(sonuc1, sonuc2)",
    slots: ["slot0", "slot1"],
    options: ["and", "and", "or", "is"],
    validCombinations: [
      { slot0: "and", slot1: "and" }
    ],
    output: "0 Analiz"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Negatif Sayı ve Boş Küme (set())",
    summary: "Sıfır dışındaki tüm negatif sayılar True dönerken, elemanı olmayan boş küme 'set()' her zaman False verir.",
    template: "print(bool({slot0}))  # True üretir\nprint(bool({slot1}))  # False üretir",
    slots: ["slot0", "slot1"],
    options: ["-25", "set()", "0", "[1]"],
    validCombinations: [
      { slot0: "-25", slot1: "set()" }
    ],
    output: "True\nFalse"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: 'or' Kısa Devre Mantığı",
    summary: "'or' ifadesinde sol taraf True olduğunda sağdaki işlem çalıştırılmadan doğrudan sol taraf atanır.",
    template: "ayar = {slot0} {slot1} print(\"Çalışmaz\")\nprint(ayar)",
    slots: ["slot0", "slot1"],
    options: ["True", "or", "False", "and"],
    validCombinations: [
      { slot0: "True", slot1: "or" }
    ],
    output: "True"
  }
];

let currentStep8 = 0;
let userArrangeState8 = [];
let userFillState8 = {};

function initQuiz8() {
  loadQuestion8(currentStep8);
}

function loadQuestion8(index) {
  const q = quizData8[index];
  document.getElementById("step-badge-8").innerText = `Soru ${index + 1} / ${quizData8.length}`;
  document.getElementById("type-badge-8").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-8").style.width = `${((index + 1) / quizData8.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-8");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-8").innerText = q.title;
  
  const feedback = document.getElementById("feedback-8");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-8");
  outputContainer.style.display = "none";
  document.getElementById("code-output-8").innerText = "";
  
  document.getElementById("btn-check-8").style.display = "inline-block";
  document.getElementById("btn-next-8").style.display = "none";
  
  const workspace = document.getElementById("workspace-8");
  const pool = document.getElementById("options-pool-8");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState8 = [];
    renderArrangeWorkspace8();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange8(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState8 = {};
    q.slots.forEach(slot => userFillState8[slot] = null);
    renderFillWorkspace8();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption8(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange8(piece, btnElement) {
  userArrangeState8.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace8();
}

function removePieceFromArrange8(index) {
  const item = userArrangeState8[index];
  item.btnRef.classList.remove("used");
  userArrangeState8.splice(index, 1);
  renderArrangeWorkspace8();
}

function renderArrangeWorkspace8() {
  const workspace = document.getElementById("workspace-8");
  if (userArrangeState8.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState8.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml8(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange8(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot8 = null;

function renderFillWorkspace8() {
  const q = quizData8[currentStep8];
  const workspace = document.getElementById("workspace-8");
  let html = escapeHtml8(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState8[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot8('${slot}')">${escapeHtml8(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot8('${slot}')">${activeSlot8 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot8(slot) {
  activeSlot8 = slot;
  renderFillWorkspace8();
}

function selectFillOption8(val, btnElement) {
  const q = quizData8[currentStep8];
  let targetSlot = activeSlot8;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState8[s] === null);
  }
  
  if (targetSlot) {
    userFillState8[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot8 = null;
    renderFillWorkspace8();
  }
}

function clearSlot8(slot) {
  const pool = document.getElementById("options-pool-8");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState8[slot] = null;
  activeSlot8 = slot;
  renderFillWorkspace8();
}

/* Cevap Kontrolü ve Terminal Çıktısı */
function checkAnswer8() {
  const q = quizData8[currentStep8];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState8.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback8("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState8[s] !== null);
    if (!isAllFilled) {
      showFeedback8("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState8[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback8("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-8");
    const outputBox = document.getElementById("code-output-8");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-8").style.display = "none";
    document.getElementById("btn-next-8").style.display = "inline-block";
  } else {
    showFeedback8("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback8(msg, type) {
  const feedback = document.getElementById("feedback-8");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion8() {
  loadQuestion8(currentStep8);
}

function nextQuestion8() {
  if (currentStep8 < quizData8.length - 1) {
    currentStep8++;
    loadQuestion8(currentStep8);
  } else {
    document.getElementById("quiz-container-8").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Boole Veri Tipi ve Mantıksal Değerlendirmeler konusundaki tüm alıştırmaları başarıyla tamamladınız.</p>
      </div>
    `;
  }
}

function escapeHtml8(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz8);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz8();
}
</script>