<!-- PYTHON INTERACTIVE EXERCISES: KÜMELER (SETS) -->
<div id="quiz-container-11" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-11" class="badge">Soru 1 / 10</span>
      <span id="type-badge-11" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-11" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-11" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-11" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-11" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-11" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-11" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-11">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-11" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-11" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-11" class="btn btn-secondary" onclick="resetCurrentQuestion11()">Sıfırla</button>
      <button id="btn-check-11" class="btn btn-primary" onclick="checkAnswer11()">Kontrol Et</button>
      <button id="btn-next-11" class="btn btn-success" onclick="nextQuestion11()" style="display: none;">Sonraki Soru →</button>
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
// KÜMELER (SETS) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData11 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Kümeye Eleman Ekleme (add ve update)",
    summary: "add() tek bir eleman eklerken[cite: 11], update() birden fazla elemanı listeler veya kümeler halinde mevcut kümeye ekler[cite: 11].",
    pieces: [
      "etiketler = {\"python\", \"veri\"}",
      "etiketler.add(\"kodlama\")",
      "etiketler.update([\"ai\", \"web\"])",
      "print(len(etiketler))"
    ],
    solutions: [
      [
        "etiketler = {\"python\", \"veri\"}",
        "etiketler.add(\"kodlama\")",
        "etiketler.update([\"ai\", \"web\"])",
        "print(len(etiketler))"
      ],
      [
        "etiketler = {\"python\", \"veri\"}",
        "etiketler.update([\"ai\", \"web\"])",
        "etiketler.add(\"kodlama\")",
        "print(len(etiketler))"
      ]
    ],
    output: "5"
  },
  {
    type: "arrange",
    title: "2. Matematiksel Küme İşlemleri (Kesişim ve Fark)",
    summary: "& operatörü iki kümenin kesişimini alırken[cite: 11], - operatörü ilk kümede olup ikincide olmayan elemanları (farkı) verir[cite: 11].",
    pieces: [
      "kume1 = {10, 20, 30}",
      "kume2 = {20, 30, 40}",
      "kesisim = kume1 & kume2",
      "fark = kume1 - kume2",
      "print(kesisim, fark)"
    ],
    solutions: [
      [
        "kume1 = {10, 20, 30}",
        "kume2 = {20, 30, 40}",
        "kesisim = kume1 & kume2",
        "fark = kume1 - kume2",
        "print(kesisim, fark)"
      ],
      [
        "kume2 = {20, 30, 40}",
        "kume1 = {10, 20, 30}",
        "kesisim = kume1 & kume2",
        "fark = kume1 - kume2",
        "print(kesisim, fark)"
      ]
    ],
    output: "{20, 30} {10}"
  },
  {
    type: "arrange",
    title: "3. Güvenli Eleman Silme: remove vs discard",
    summary: "discard() eleman kümede olmasa bile hata vermezken[cite: 11], remove() eleman bulunamadığında KeyError fırlatır[cite: 11].",
    pieces: [
      "sayilar = {5, 10, 15}",
      "sayilar.discard(100)",
      "sayilar.remove(5)",
      "print(sayilar)"
    ],
    solutions: [
      [
        "sayilar = {5, 10, 15}",
        "sayilar.discard(100)",
        "sayilar.remove(5)",
        "print(sayilar)"
      ],
      [
        "sayilar = {5, 10, 15}",
        "sayilar.remove(5)",
        "sayilar.discard(100)",
        "print(sayilar)"
      ]
    ],
    output: "{10, 15}"
  },
  {
    type: "arrange",
    title: "4. Kümelerde True / 1 ve False / 0 Çakışması",
    summary: "Kümelerde True ile 1 ve False ile 0 aynı mantıksal değere sahip olduğundan yinelenen eleman sayılarak elenir[cite: 11].",
    pieces: [
      "test_kumesi = {True, 1, False, 0, 2}",
      "print(test_kumesi, len(test_kumesi))"
    ],
    solutions: [
      [
        "test_kumesi = {True, 1, False, 0, 2}",
        "print(test_kumesi, len(test_kumesi))"
      ]
    ],
    output: "{False, True, 2} 3  # (Sıra değişebilir, eleman sayısı 3'tür)"
  },
  {
    type: "arrange",
    title: "5. Dondurulmuş Küme (frozenset) ve Sözlük Anahtarı",
    summary: "Normal set sözlük anahtarı olamaz[cite: 11]; ancak değiştirilemez (immutable) frozenset anahtar olarak kullanılabilir[cite: 11].",
    pieces: [
      "sabit = frozenset([1, 2, 3])",
      "veri_haritasi = {sabit: \"Onaylandi\"}",
      "print(veri_haritasi[sabit])"
    ],
    solutions: [
      [
        "sabit = frozenset([1, 2, 3])",
        "veri_haritasi = {sabit: \"Onaylandi\"}",
        "print(veri_haritasi[sabit])"
      ]
    ],
    output: "Onaylandi"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Boş Küme ve Boş Sözlük Ayrımı",
    summary: "Boş süslü parantez '{}' dict oluşturur[cite: 11]; boş bir küme oluşturmak için mutlaka set() kurucusu kullanılmalıdır[cite: 11].",
    template: "a = {slot0}\nb = {slot1}()\nprint(type(a), type(b))",
    slots: ["slot0", "slot1"],
    options: ["{}", "set", "dict", "[]"],
    validCombinations: [
      { slot0: "{}", slot1: "set" }
    ],
    output: "<class 'dict'> <class 'set'>"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Birleşim (|) ve Simetrik Fark (^)",
    summary: "| operatörü tüm benzersiz elemanları birleştirirken[cite: 11], ^ operatörü ortak olanlar hariç elemanları (simetrik fark) alır[cite: 11].",
    template: "x = {1, 2, 3}\ny = {3, 4, 5}\nbirlesim = x {slot0} y\nsimetrik = x {slot1} y\nprint(birlesim, simetrik)",
    slots: ["slot0", "slot1"],
    options: ["|", "^", "&", "-"],
    validCombinations: [
      { slot0: "|", slot1: "^" }
    ],
    output: "{1, 2, 3, 4, 5} {1, 2, 4, 5}"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: issubset() ve issuperset() Kontrolleri",
    summary: "issubset() alt küme kontrolü[cite: 11], issuperset() ise kapsayan küme kontrolü yaparak Boole değeri döner[cite: 11].",
    template: "alt = {1, 2}\nana = {1, 2, 3, 4}\nsonuc1 = alt.{slot0}(ana)\nsonuc2 = ana.{slot1}(alt)\nprint(sonuc1, sonuc2)",
    slots: ["slot0", "slot1"],
    options: ["issubset", "issuperset", "isdisjoint", "union"],
    validCombinations: [
      { slot0: "issubset", slot1: "issuperset" }
    ],
    output: "True True"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: isdisjoint() ile Ayrık Küme Kontrolü",
    summary: "isdisjoint() metodu iki kümenin hiçbir ortak elemanı bulunmadığında True döndürür[cite: 11].",
    template: "k1 = {\"a\", \"b\"}\nk2 = {\"c\", \"d\"}\nayrik_mi = k1.{slot0}(k2)\nprint({slot1})",
    slots: ["slot0", "slot1"],
    options: ["isdisjoint", "ayrik_mi", "issubset", "type"],
    validCombinations: [
      { slot0: "isdisjoint", slot1: "ayrik_mi" }
    ],
    output: "True"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Yinelenen Elemanların Otomatik Elenmesi",
    summary: "Kümeler aynı elemandan yalnızca bir tane tutar; tekrar eden değerler otomatik olarak tekilleştirilir[cite: 11].",
    template: "rakamlar = {slot0}([2, 4, 4, 6, 6, 6])\nprint({slot1}(rakamlar))",
    slots: ["slot0", "slot1"],
    options: ["set", "len", "tuple", "count"],
    validCombinations: [
      { slot0: "set", slot1: "len" }
    ],
    output: "3"
  }
];

let currentStep11 = 0;
let userArrangeState11 = [];
let userFillState11 = {};

function initQuiz11() {
  loadQuestion11(currentStep11);
}

function loadQuestion11(index) {
  const q = quizData11[index];
  document.getElementById("step-badge-11").innerText = `Soru ${index + 1} / ${quizData11.length}`;
  document.getElementById("type-badge-11").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-11").style.width = `${((index + 1) / quizData11.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-11");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-11").innerText = q.title;
  
  const feedback = document.getElementById("feedback-11");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-11");
  outputContainer.style.display = "none";
  document.getElementById("code-output-11").innerText = "";
  
  document.getElementById("btn-check-11").style.display = "inline-block";
  document.getElementById("btn-next-11").style.display = "none";
  
  const workspace = document.getElementById("workspace-11");
  const pool = document.getElementById("options-pool-11");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState11 = [];
    renderArrangeWorkspace11();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange11(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState11 = {};
    q.slots.forEach(slot => userFillState11[slot] = null);
    renderFillWorkspace11();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption11(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange11(piece, btnElement) {
  userArrangeState11.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace11();
}

function removePieceFromArrange11(index) {
  const item = userArrangeState11[index];
  item.btnRef.classList.remove("used");
  userArrangeState11.splice(index, 1);
  renderArrangeWorkspace11();
}

function renderArrangeWorkspace11() {
  const workspace = document.getElementById("workspace-11");
  if (userArrangeState11.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState11.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml11(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange11(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot11 = null;

function renderFillWorkspace11() {
  const q = quizData11[currentStep11];
  const workspace = document.getElementById("workspace-11");
  let html = escapeHtml11(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState11[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot11('${slot}')">${escapeHtml11(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot11('${slot}')">${activeSlot11 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot11(slot) {
  activeSlot11 = slot;
  renderFillWorkspace11();
}

function selectFillOption11(val, btnElement) {
  const q = quizData11[currentStep11];
  let targetSlot = activeSlot11;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState11[s] === null);
  }
  
  if (targetSlot) {
    userFillState11[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot11 = null;
    renderFillWorkspace11();
  }
}

function clearSlot11(slot) {
  const pool = document.getElementById("options-pool-11");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState11[slot] = null;
  activeSlot11 = slot;
  renderFillWorkspace11();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer11() {
  const q = quizData11[currentStep11];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState11.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback11("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState11[s] !== null);
    if (!isAllFilled) {
      showFeedback11("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState11[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback11("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-11");
    const outputBox = document.getElementById("code-output-11");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-11").style.display = "none";
    document.getElementById("btn-next-11").style.display = "inline-block";
  } else {
    showFeedback11("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback11(msg, type) {
  const feedback = document.getElementById("feedback-11");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion11() {
  loadQuestion11(currentStep11);
}

function nextQuestion11() {
  if (currentStep11 < quizData11.length - 1) {
    currentStep11++;
    loadQuestion11(currentStep11);
  } else {
    document.getElementById("quiz-container-11").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Kümeler (Sets) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml11(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz11);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz11();
}
</script>
