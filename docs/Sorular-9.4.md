<!-- PYTHON INTERACTIVE EXERCISES: SÖZLÜKLER (DICTIONARIES) -->
<div id="quiz-container-12" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-12" class="badge">Soru 1 / 10</span>
      <span id="type-badge-12" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-12" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-12" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-12" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-12" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-12" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-12" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-12">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-12" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-12" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-12" class="btn btn-secondary" onclick="resetCurrentQuestion12()">Sıfırla</button>
      <button id="btn-check-12" class="btn btn-primary" onclick="checkAnswer12()">Kontrol Et</button>
      <button id="btn-next-12" class="btn btn-success" onclick="nextQuestion12()" style="display: none;">Sonraki Soru →</button>
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
// SÖZLÜKLER (DICTIONARIES) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData12 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Sözlüğe Eleman Ekleme ve Güncelleme",
    summary: "Var olan anahtara yeni değer atanırsa güncellenir[cite: 12], olmayan bir anahtara atama yapılırsa sözlüğe yeni çift olarak eklenir[cite: 12].",
    pieces: [
      "araba = {\"marka\": \"Toyota\", \"yil\": 2020}",
      "araba[\"yil\"] = 2022",
      "araba[\"renk\"] = \"Gri\"",
      "print(araba)"
    ],
    solutions: [
      [
        "araba = {\"marka\": \"Toyota\", \"yil\": 2020}",
        "araba[\"yil\"] = 2022",
        "araba[\"renk\"] = \"Gri\"",
        "print(araba)"
      ],
      [
        "araba = {\"marka\": \"Toyota\", \"yil\": 2020}",
        "araba[\"renk\"] = \"Gri\"",
        "araba[\"yil\"] = 2022",
        "print(araba)"
      ]
    ],
    output: "{'marka': 'Toyota', 'yil': 2022, 'renk': 'Gri'}"
  },
  {
    type: "arrange",
    title: "2. get() Metodu ile Varsayılan Değer Alma",
    summary: "get(anahtar, varsayilan) anahtar bulunamadığında KeyError fırlatmak yerine belirtilen varsayılan değeri döner[cite: 12].",
    pieces: [
      "ayarlar = {\"tema\": \"karanlik\"}",
      "dil = ayarlar.get(\"dil\", \"tr\")",
      "print(dil)"
    ],
    solutions: [
      [
        "ayarlar = {\"tema\": \"karanlik\"}",
        "dil = ayarlar.get(\"dil\", \"tr\")",
        "print(dil)"
      ]
    ],
    output: "tr"
  },
  {
    type: "arrange",
    title: "3. popitem() ile Son Eklenen Çifti Silme",
    summary: "popitem() sözlüğe en son eklenen (anahtar, değer) çiftini siler ve tuple olarak geriye döndürür[cite: 12].",
    pieces: [
      "gorev = {\"id\": 1, \"oncelik\": \"yuksek\"}",
      "silinen_cift = gorev.popitem()",
      "print(silinen_cift, gorev)"
    ],
    solutions: [
      [
        "gorev = {\"id\": 1, \"oncelik\": \"yuksek\"}",
        "silinen_cift = gorev.popitem()",
        "print(silinen_cift, gorev)"
      ]
    ],
    output: "('oncelik', 'yuksek') {'id': 1}"
  },
  {
    type: "arrange",
    title: "4. İç İçe Sözlükten (Nested Dict) Veri Okuma",
    summary: "İç içe sözlük yapılarında verilere kademeli köşeli parantez ['ana_anahtar']['alt_anahtar'] ile erişilir[cite: 12].",
    pieces: [
      "kullanici = {\"id\": 45, \"profil\": {\"ad\": \"Murat\", \"rol\": \"admin\"}}",
      "isim = kullanici[\"profil\"][\"ad\"]",
      "print(isim)"
    ],
    solutions: [
      [
        "kullanici = {\"id\": 45, \"profil\": {\"ad\": \"Murat\", \"rol\": \"admin\"}}",
        "isim = kullanici[\"profil\"][\"ad\"]",
        "print(isim)"
      ]
    ],
    output: "Murat"
  },
  {
    type: "arrange",
    title: "5. setdefault() Metodunun Davranışı",
    summary: "setdefault() anahtar zaten varsa mevcut değerini döner[cite: 12]; anahtar yoksa verilen varsayılan değeri atayıp sözlüğe ekler[cite: 12].",
    pieces: [
      "stok = {\"kalem\": 30}",
      "stok.setdefault(\"kalem\", 50)",
      "stok.setdefault(\"defter\", 15)",
      "print(stok)"
    ],
    solutions: [
      [
        "stok = {\"kalem\": 30}",
        "stok.setdefault(\"kalem\", 50)",
        "stok.setdefault(\"defter\", 15)",
        "print(stok)"
      ],
      [
        "stok = {\"kalem\": 30}",
        "stok.setdefault(\"defter\", 15)",
        "stok.setdefault(\"kalem\", 50)",
        "print(stok)"
      ]
    ],
    output: "{'kalem': 30, 'defter': 15}"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: keys() ve values() Görünümleri",
    summary: "keys() yalnızca sözlük anahtarlarını[cite: 12], values() ise yalnızca değerleri içeren dinamik görünüm nesneleri döner[cite: 12].",
    template: "fiyatlar = {\"ekmek\": 10, \"sut\": 25}\nk = list(fiyatlar.{slot0}())\nv = list(fiyatlar.{slot1}())\nprint(k, v)",
    slots: ["slot0", "slot1"],
    options: ["keys", "values", "items", "pop"],
    validCombinations: [
      { slot0: "keys", slot1: "values" }
    ],
    output: "['ekmek', 'sut'] [10, 25]"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: items() ile Döngü Kurma",
    summary: "items() metodu her bir (anahtar, değer) çiftini tuple olarak verir ve for döngüsünde iki değişkene açılabilir[cite: 12].",
    template: "puanlar = {\"Ahmet\": 90}\nfor ad, not_degeri in puanlar.{slot0}():\n    print(f\"{ad}: {not_degeri}\"){slot1}",
    slots: ["slot0", "slot1"],
    options: ["items", "", "values", ";"],
    validCombinations: [
      { slot0: "items", slot1: "" },
      { slot0: "items", slot1: ";" }
    ],
    output: "Ahmet: 90"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: update() ile Çoklu Güncelleme",
    summary: "update() metodu parametre olarak verilen sözlüğü mevcut sözlüğe katar ve var olan anahtarları günceller[cite: 12].",
    template: "bilgi = {\"ad\": \"Ece\", \"yas\": 20}\nbilgi.{slot0}({{\"yas\": 21, \"sehir\": \"İzmir\"}})\nprint(bilgi[\"yas\"], {slot1})",
    slots: ["slot0", "slot1"],
    options: ["update", "bilgi[\"sehir\"]", "setdefault", "len(bilgi)"],
    validCombinations: [
      { slot0: "update", slot1: "bilgi[\"sehir\"]" }
    ],
    output: "21 İzmir"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: pop() ile Anahtar Silip Değeri Alma",
    summary: "pop(anahtar) belirtilen anahtarı silerek o anahtara ait değeri geriye döndürür[cite: 12].",
    template: "hesap = {\"bakiye\": 500, \"limit\": 1000}\nsilinen = hesap.{slot0}(\"limit\")\nprint(silinen, {slot1}(hesap))",
    slots: ["slot0", "slot1"],
    options: ["pop", "len", "popitem", "clear"],
    validCombinations: [
      { slot0: "pop", slot1: "len" }
    ],
    output: "1000 1"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Bağımsız Sözlük Kopyası (copy)",
    summary: "copy() metodu bağımsız bir yüzeysel kopya oluşturur; kopyada yapılan değişiklik orijinal sözlüğü etkilemez[cite: 12].",
    template: "a = {\"x\": 1}\nb = a.{slot0}()\nb[\"x\"] = 99\nprint(a[\"x\"], {slot1})",
    slots: ["slot0", "slot1"],
    options: ["copy", "b[\"x\"]", "dict", "a[\"x\"]"],
    validCombinations: [
      { slot0: "copy", slot1: "b[\"x\"]" }
    ],
    output: "1 99"
  }
];

let currentStep12 = 0;
let userArrangeState12 = [];
let userFillState12 = {};

function initQuiz12() {
  loadQuestion12(currentStep12);
}

function loadQuestion12(index) {
  const q = quizData12[index];
  document.getElementById("step-badge-12").innerText = `Soru ${index + 1} / ${quizData12.length}`;
  document.getElementById("type-badge-12").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-12").style.width = `${((index + 1) / quizData12.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-12");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-12").innerText = q.title;
  
  const feedback = document.getElementById("feedback-12");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-12");
  outputContainer.style.display = "none";
  document.getElementById("code-output-12").innerText = "";
  
  document.getElementById("btn-check-12").style.display = "inline-block";
  document.getElementById("btn-next-12").style.display = "none";
  
  const workspace = document.getElementById("workspace-12");
  const pool = document.getElementById("options-pool-12");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState12 = [];
    renderArrangeWorkspace12();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange12(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState12 = {};
    q.slots.forEach(slot => userFillState12[slot] = null);
    renderFillWorkspace12();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt === "" ? "␣ (Boş)" : opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption12(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange12(piece, btnElement) {
  userArrangeState12.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace12();
}

function removePieceFromArrange12(index) {
  const item = userArrangeState12[index];
  item.btnRef.classList.remove("used");
  userArrangeState12.splice(index, 1);
  renderArrangeWorkspace12();
}

function renderArrangeWorkspace12() {
  const workspace = document.getElementById("workspace-12");
  if (userArrangeState12.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState12.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml12(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange12(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot12 = null;

function renderFillWorkspace12() {
  const q = quizData12[currentStep12];
  const workspace = document.getElementById("workspace-12");
  let html = escapeHtml12(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState12[slot];
    const displayVal = val === "" ? "∅" : val;
    const slotHtml = val !== null 
      ? `<span class="code-slot filled" onclick="clearSlot12('${slot}')">${escapeHtml12(displayVal)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot12('${slot}')">${activeSlot12 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot12(slot) {
  activeSlot12 = slot;
  renderFillWorkspace12();
}

function selectFillOption12(val, btnElement) {
  const q = quizData12[currentStep12];
  let targetSlot = activeSlot12;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState12[s] === null);
  }
  
  if (targetSlot) {
    userFillState12[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot12 = null;
    renderFillWorkspace12();
  }
}

function clearSlot12(slot) {
  const pool = document.getElementById("options-pool-12");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState12[slot] = null;
  activeSlot12 = slot;
  renderFillWorkspace12();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer12() {
  const q = quizData12[currentStep12];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState12.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback12("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState12[s] !== null);
    if (!isAllFilled) {
      showFeedback12("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState12[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback12("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-12");
    const outputBox = document.getElementById("code-output-12");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-12").style.display = "none";
    document.getElementById("btn-next-12").style.display = "inline-block";
  } else {
    showFeedback12("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback12(msg, type) {
  const feedback = document.getElementById("feedback-12");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion12() {
  loadQuestion12(currentStep12);
}

function nextQuestion12() {
  if (currentStep12 < quizData12.length - 1) {
    currentStep12++;
    loadQuestion12(currentStep12);
  } else {
    document.getElementById("quiz-container-12").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Sözlükler (Dictionaries) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml12(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz12);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz12();
}
</script>
