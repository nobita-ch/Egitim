<!-- PYTHON INTERACTIVE EXERCISES: OPERATÖRLER (OPERATORS) -->
<div id="quiz-container-7" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-7" class="badge">Soru 1 / 10</span>
      <span id="type-badge-7" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-7" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-7" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-7" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-7" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-7" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-7" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-7">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-7" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-7" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-7" class="btn btn-secondary" onclick="resetCurrentQuestion7()">Sıfırla</button>
      <button id="btn-check-7" class="btn btn-primary" onclick="checkAnswer7()">Kontrol Et</button>
      <button id="btn-next-7" class="btn btn-success" onclick="nextQuestion7()" style="display: none;">Sonraki Soru →</button>
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
// OPERATÖRLER KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData7 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Aritmetik İşlemler ve Modül Hesabı",
    summary: "// tam sayı bölmesi yaparken, % operatörü bölme işleminden kalan değeri (modül) verir[cite: 7].",
    pieces: [
      "sayi = 23",
      "bolum = sayi // 4",
      "kalan = sayi % 4",
      "print(bolum, kalan)"
    ],
    solutions: [
      [
        "sayi = 23",
        "bolum = sayi // 4",
        "kalan = sayi % 4",
        "print(bolum, kalan)"
      ],
      [
        "sayi = 23",
        "kalan = sayi % 4",
        "bolum = sayi // 4",
        "print(bolum, kalan)"
      ]
    ],
    output: "5 3"
  },
  {
    type: "arrange",
    title: "2. Bileşik Atama Operatörleri",
    summary: "+= ve *= gibi atama operatörleri değişkenin mevcut değerini işleme sokup doğrudan günceller[cite: 7].",
    pieces: [
      "bakiye = 100",
      "bakiye += 50",
      "bakiye *= 2",
      "print(bakiye)"
    ],
    solutions: [
      [
        "bakiye = 100",
        "bakiye += 50",
        "bakiye *= 2",
        "print(bakiye)"
      ]
    ],
    output: "300"
  },
  {
    type: "arrange",
    title: "3. Kimlik (is) ve Değer Eşitliği (==)",
    summary: "== değer eşitliğini kontrol ederken, 'is' operatörü değişkenlerin bellekte aynı nesneye işaret edip etmediğini kontrol eder[cite: 7].",
    pieces: [
      "liste1 = [10, 20]",
      "liste2 = liste1",
      "print(liste1 == liste2, liste1 is liste2)"
    ],
    solutions: [
      [
        "liste1 = [10, 20]",
        "liste2 = liste1",
        "print(liste1 == liste2, liste1 is liste2)"
      ]
    ],
    output: "True True"
  },
  {
    type: "arrange",
    title: "4. Üyelik Operatörü (not in) Kontrolü",
    summary: "'not in' operatörü, belirtilen bir değerin hedef koleksiyon içinde yer almadığını doğrulamak için kullanılır[cite: 7].",
    pieces: [
      "yasakli_kelimeler = [\"spam\", \"reklam\"]",
      "mesaj_turu = \"bilgi\"",
      "if mesaj_turu not in yasakli_kelimeler:",
      "    print(\"Mesaj iletildi\")"
    ],
    solutions: [
      [
        "yasakli_kelimeler = [\"spam\", \"reklam\"]",
        "mesaj_turu = \"bilgi\"",
        "if mesaj_turu not in yasakli_kelimeler:",
        "    print(\"Mesaj iletildi\")"
      ],
      [
        "mesaj_turu = \"bilgi\"",
        "yasakli_kelimeler = [\"spam\", \"reklam\"]",
        "if mesaj_turu not in yasakli_kelimeler:",
        "    print(\"Mesaj iletildi\")"
      ]
    ],
    output: "Mesaj iletildi"
  },
  {
    type: "arrange",
    title: "5. Walrus (Mors) Operatörü ile Koşul İçi Atama",
    summary: "Walrus operatörü (:=), bir ifade değerlendirilirken aynı satırda değişkene atama yapmayı sağlar[cite: 7].",
    pieces: [
      "kelime = \"programlama\"",
      "if (uzunluk := len(kelime)) > 5:",
      "    print(f\"Karakter: {uzunluk}\")"
    ],
    solutions: [
      [
        "kelime = \"programlama\"",
        "if (uzunluk := len(kelime)) > 5:",
        "    print(f\"Karakter: {uzunluk}\")"
      ]
    ],
    output: "Karakter: 11"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Üs Alma ve Ondalıklı Bölme",
    summary: "** operatörü üs alma işlemi yapar, / operatörü ise sonucu her zaman float (ondalıklı) döndürür[cite: 7].",
    template: "us = 3 {slot0} 3\nbolme = 10 {slot1} 2\nprint(us, bolme)",
    slots: ["slot0", "slot1"],
    options: ["**", "/", "//", "%"],
    validCombinations: [
      { slot0: "**", slot1: "/" }
    ],
    output: "27 5.0"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Mantıksal and ve not Operatörleri",
    summary: "'and' her iki koşulun da True olmasını bekler, 'not' ise mantıksal sonucu tersine çevirir[cite: 7].",
    template: "aktif = True\nhata = False\nsonuc = aktif {slot0} {slot1} hata\nprint(sonuc)",
    slots: ["slot0", "slot1"],
    options: ["and", "not", "or", "is"],
    validCombinations: [
      { slot0: "and", slot1: "not" }
    ],
    output: "True"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: None Kontrolünde Kimlik Operatörü",
    summary: "Python standartlarında 'None' kontrolleri için == yerine her zaman 'is' veya 'is not' tercih edilir[cite: 7].",
    template: "sonuc = None\nif sonuc {slot0} {slot1}:\n    print(\"Veri yok\")",
    slots: ["slot0", "slot1"],
    options: ["is", "None", "==", "not"],
    validCombinations: [
      { slot0: "is", slot1: "None" }
    ],
    output: "Veri yok"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Bitsel Sola ve Sağa Kaydırma",
    summary: "<< operatörü bitleri sola kaydırıp sayıyı 2 ile çarpar[cite: 7], >> operatörü sağa kaydırıp 2'ye böler[cite: 7].",
    template: "sayi = 4\nsol = sayi {slot0} 1\nsag = sayi {slot1} 1\nprint(sol, sag)",
    slots: ["slot0", "slot1"],
    options: ["<<", ">>", "&", "|"],
    validCombinations: [
      { slot0: "<<", slot1: ">>" }
    ],
    output: "8 2"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Operatör İşlem Önceliği",
    summary: "İşlem önceliğinde parantez içi '()' ilk sırada, üs alma '**' çarpma ve bölmeden önce yer alır[cite: 7].",
    template: "hesap = {slot0}2 + 3{slot1} * 2 ** 2\nprint(hesap)",
    slots: ["slot0", "slot1"],
    options: ["(", ")", "[", "]"],
    validCombinations: [
      { slot0: "(", slot1: ")" }
    ],
    output: "20"
  }
];

let currentStep7 = 0;
let userArrangeState7 = [];
let userFillState7 = {};

function initQuiz7() {
  loadQuestion7(currentStep7);
}

function loadQuestion7(index) {
  const q = quizData7[index];
  document.getElementById("step-badge-7").innerText = `Soru ${index + 1} / ${quizData7.length}`;
  document.getElementById("type-badge-7").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-7").style.width = `${((index + 1) / quizData7.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-7");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-7").innerText = q.title;
  
  const feedback = document.getElementById("feedback-7");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-7");
  outputContainer.style.display = "none";
  document.getElementById("code-output-7").innerText = "";
  
  document.getElementById("btn-check-7").style.display = "inline-block";
  document.getElementById("btn-next-7").style.display = "none";
  
  const workspace = document.getElementById("workspace-7");
  const pool = document.getElementById("options-pool-7");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState7 = [];
    renderArrangeWorkspace7();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange7(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState7 = {};
    q.slots.forEach(slot => userFillState7[slot] = null);
    renderFillWorkspace7();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption7(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange7(piece, btnElement) {
  userArrangeState7.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace7();
}

function removePieceFromArrange7(index) {
  const item = userArrangeState7[index];
  item.btnRef.classList.remove("used");
  userArrangeState7.splice(index, 1);
  renderArrangeWorkspace7();
}

function renderArrangeWorkspace7() {
  const workspace = document.getElementById("workspace-7");
  if (userArrangeState7.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState7.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml7(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange7(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot7 = null;

function renderFillWorkspace7() {
  const q = quizData7[currentStep7];
  const workspace = document.getElementById("workspace-7");
  let html = escapeHtml7(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState7[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot7('${slot}')">${escapeHtml7(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot7('${slot}')">${activeSlot7 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot7(slot) {
  activeSlot7 = slot;
  renderFillWorkspace7();
}

function selectFillOption7(val, btnElement) {
  const q = quizData7[currentStep7];
  let targetSlot = activeSlot7;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState7[s] === null);
  }
  
  if (targetSlot) {
    userFillState7[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot7 = null;
    renderFillWorkspace7();
  }
}

function clearSlot7(slot) {
  const pool = document.getElementById("options-pool-7");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState7[slot] = null;
  activeSlot7 = slot;
  renderFillWorkspace7();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer7() {
  const q = quizData7[currentStep7];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState7.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback7("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState7[s] !== null);
    if (!isAllFilled) {
      showFeedback7("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState7[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback7("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-7");
    const outputBox = document.getElementById("code-output-7");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-7").style.display = "none";
    document.getElementById("btn-next-7").style.display = "inline-block";
  } else {
    showFeedback7("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback7(msg, type) {
  const feedback = document.getElementById("feedback-7");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion7() {
  loadQuestion7(currentStep7);
}

function nextQuestion7() {
  if (currentStep7 < quizData7.length - 1) {
    currentStep7++;
    loadQuestion7(currentStep7);
  } else {
    document.getElementById("quiz-container-7").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Operatörler konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml7(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz7);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz7();
}
</script>