<!-- PYTHON INTERACTIVE EXERCISES: FONKSİYONLAR (FUNCTIONS) -->
<div id="quiz-container-16" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-16" class="badge">Soru 1 / 10</span>
      <span id="type-badge-16" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-16" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-16" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-16" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-16" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-16" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-16" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-16">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-16" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-16" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-16" class="btn btn-secondary" onclick="resetCurrentQuestion16()">Sıfırla</button>
      <button id="btn-check-16" class="btn btn-primary" onclick="checkAnswer16()">Kontrol Et</button>
      <button id="btn-next-16" class="btn btn-success" onclick="nextQuestion16()" style="display: none;">Sonraki Soru →</button>
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
// FONKSİYONLAR (FUNCTIONS) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData16 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Temel Fonksiyon Tanımlama ve return Değeri Alma",
    summary: "def ile fonksiyon tanımlanır, return üretilen veriyi çağıran yere geri döndürür[cite: 16].",
    pieces: [
      "def selamla(ad):",
      "    return f\"Merhaba {ad}\"",
      "mesaj = selamla(\"Ece\")",
      "print(mesaj)"
    ],
    solutions: [
      [
        "def selamla(ad):",
        "    return f\"Merhaba {ad}\"",
        "mesaj = selamla(\"Ece\")",
        "print(mesaj)"
      ]
    ],
    output: "Merhaba Ece"
  },
  {
    type: "arrange",
    title: "2. Çoklu Değer Döndürme (Tuple Unpacking)",
    summary: "Fonksiyondan virgülle birden fazla değer döndürüldüğünde Python bunları tuple olarak paketler ve değişkenlere açılabilir[cite: 16].",
    pieces: [
      "def boyutlar():",
      "    return 1920, 1080",
      "genislik, yukseklik = boyutlar()",
      "print(genislik, yukseklik)"
    ],
    solutions: [
      [
        "def boyutlar():",
        "    return 1920, 1080",
        "genislik, yukseklik = boyutlar()",
        "print(genislik, yukseklik)"
      ]
    ],
    output: "1920 1080"
  },
  {
    type: "arrange",
    title: "3. Değişken Sayıda Konumsal Argüman (*args)",
    summary: "*args fonksiyona fazladan gönderilen tüm konumsal argümanları bir tuple içinde toplar[cite: 16].",
    pieces: [
      "def topla(*sayilar):",
      "    return sum(sayilar)",
      "sonuc = topla(5, 10, 15)",
      "print(sonuc)"
    ],
    solutions: [
      [
        "def topla(*sayilar):",
        "    return sum(sayilar)",
        "sonuc = topla(5, 10, 15)",
        "print(sonuc)"
      ]
    ],
    output: "30"
  },
  {
    type: "arrange",
    title: "4. Lambda Fonksiyonu ile Tek Satırda Hesaplama",
    summary: "lambda argumanlar: ifade sözdizimi ile isimsiz ve tek satırlık fonksiyonlar oluşturulur[cite: 16].",
    pieces: [
      "kup = lambda x: x ** 3",
      "deger = kup(3)",
      "print(deger)"
    ],
    solutions: [
      [
        "kup = lambda x: x ** 3",
        "deger = kup(3)",
        "print(deger)"
      ]
    ],
    output: "27"
  },
  {
    type: "arrange",
    title: "5. Jeneratör (yield) ve next() ile Adım Adım Üretim",
    summary: "yield fonksiyonun durumunu dondurur ve her next() çağrısında sıradaki değeri üretir (lazy evaluation)[cite: 16].",
    pieces: [
      "def adimlar():",
      "    yield \"Adım 1\"",
      "    yield \"Adım 2\"",
      "g = adimlar()",
      "print(next(g), next(g))"
    ],
    solutions: [
      [
        "def adimlar():",
        "    yield \"Adım 1\"",
        "    yield \"Adım 2\"",
        "g = adimlar()",
        "print(next(g), next(g))"
      ]
    ],
    output: "Adım 1 Adım 2"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: def ve return Sözdizimi",
    summary: "Fonksiyon tanımı 'def' ile başlar ve hesaplanan sonucu dışarı aktarmak için 'return' kullanılır[cite: 16].",
    template: "{slot0} carp(a, b):\n    {slot1} a * b\nprint(carp(4, 5))",
    slots: ["slot0", "slot1"],
    options: ["def", "return", "function", "yield"],
    validCombinations: [
      { slot0: "def", slot1: "return" }
    ],
    output: "20"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Güvenli Varsayılan Parametre (None)",
    summary: "Değiştirilebilir liste tuzaklarını önlemek için varsayılan değer None verilir ve içeride yeni liste oluşturulur[cite: 16].",
    template: "def ekle(oge, liste={slot0}):\n    if liste is {slot1}:\n        liste = []\n    liste.append(oge)\n    return liste\nprint(ekle(\"X\"))",
    slots: ["slot0", "slot1"],
    options: ["None", "None", "[]", "list"],
    validCombinations: [
      { slot0: "None", slot1: "None" }
    ],
    output: "['X']"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Sadece Konumsal (/) ve Sadece Anahtar (*)",
    summary: "'/' solundaki parametreleri sadece konumsal, '*' sağındakileri ise sadece anahtar kelime yapmaya zorlar[cite: 16].",
    template: "def ayarla(mod, {slot0}, *, {slot1}):\n    return f\"{mod}-{seviye}\"\nprint(ayarla(\"oto\", seviye=2))",
    slots: ["slot0", "slot1"],
    options: ["/", "seviye", "*", "mod"],
    validCombinations: [
      { slot0: "/", slot1: "seviye" }
    ],
    output: "oto-2"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: İsimli Değişken Argümanlar (**kwargs)",
    summary: "**kwargs fazladan gönderilen tüm anahtar-değer parametrelerini bir sözlük (dict) olarak toplar[cite: 16].",
    template: "def bilgi_yaz(**{slot0}):\n    print({slot1}[\"rol\"])\nbilgi_yaz(ad=\"Ali\", rol=\"Admin\")",
    slots: ["slot0", "slot1"],
    options: ["kwargs", "kwargs", "args", "dict"],
    validCombinations: [
      { slot0: "kwargs", slot1: "kwargs" }
    ],
    output: "Admin"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Özyineleme (Recursion) Temel Durumu",
    summary: "Özyinelemeli fonksiyonlarda sonsuz çağrıyı önlemek için durdurucu temel durum (base case) bulunmalıdır[cite: 16].",
    template: "def geri_say(n):\n    if n <= {slot0}:\n        return 0\n    return n + geri_say(n - {slot1})\nprint(geri_say(3))",
    slots: ["slot0", "slot1"],
    options: ["0", "1", "2", "n"],
    validCombinations: [
      { slot0: "0", slot1: "1" }
    ],
    output: "6"
  }
];

let currentStep16 = 0;
let userArrangeState16 = [];
let userFillState16 = {};

function initQuiz16() {
  loadQuestion16(currentStep16);
}

function loadQuestion16(index) {
  const q = quizData16[index];
  document.getElementById("step-badge-16").innerText = `Soru ${index + 1} / ${quizData16.length}`;
  document.getElementById("type-badge-16").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-16").style.width = `${((index + 1) / quizData16.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-16");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-16").innerText = q.title;
  
  const feedback = document.getElementById("feedback-16");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-16");
  outputContainer.style.display = "none";
  document.getElementById("code-output-16").innerText = "";
  
  document.getElementById("btn-check-16").style.display = "inline-block";
  document.getElementById("btn-next-16").style.display = "none";
  
  const workspace = document.getElementById("workspace-16");
  const pool = document.getElementById("options-pool-16");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState16 = [];
    renderArrangeWorkspace16();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange16(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState16 = {};
    q.slots.forEach(slot => userFillState16[slot] = null);
    renderFillWorkspace16();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption16(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange16(piece, btnElement) {
  userArrangeState16.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace16();
}

function removePieceFromArrange16(index) {
  const item = userArrangeState16[index];
  item.btnRef.classList.remove("used");
  userArrangeState16.splice(index, 1);
  renderArrangeWorkspace16();
}

function renderArrangeWorkspace16() {
  const workspace = document.getElementById("workspace-16");
  if (userArrangeState16.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState16.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml16(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange16(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot16 = null;

function renderFillWorkspace16() {
  const q = quizData16[currentStep16];
  const workspace = document.getElementById("workspace-16");
  let html = escapeHtml16(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState16[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot16('${slot}')">${escapeHtml16(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot16('${slot}')">${activeSlot16 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot16(slot) {
  activeSlot16 = slot;
  renderFillWorkspace16();
}

function selectFillOption16(val, btnElement) {
  const q = quizData16[currentStep16];
  let targetSlot = activeSlot16;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState16[s] === null);
  }
  
  if (targetSlot) {
    userFillState16[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot16 = null;
    renderFillWorkspace16();
  }
}

function clearSlot16(slot) {
  const pool = document.getElementById("options-pool-16");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState16[slot] = null;
  activeSlot16 = slot;
  renderFillWorkspace16();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer16() {
  const q = quizData16[currentStep16];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState16.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback16("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState16[s] !== null);
    if (!isAllFilled) {
      showFeedback16("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState16[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback16("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-16");
    const outputBox = document.getElementById("code-output-16");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-16").style.display = "none";
    document.getElementById("btn-next-16").style.display = "inline-block";
  } else {
    showFeedback16("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback16(msg, type) {
  const feedback = document.getElementById("feedback-16");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion16() {
  loadQuestion16(currentStep16);
}

function nextQuestion16() {
  if (currentStep16 < quizData16.length - 1) {
    currentStep16++;
    loadQuestion16(currentStep16);
  } else {
    document.getElementById("quiz-container-16").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Fonksiyonlar konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml16(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz16);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz16();
}
</script>
