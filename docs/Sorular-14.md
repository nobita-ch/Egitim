<!-- PYTHON INTERACTIVE EXERCISES: YİNELEYİCİLER (ITERATORS) -->
<div id="quiz-container-17" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-17" class="badge">Soru 1 / 10</span>
      <span id="type-badge-17" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-17" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-17" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-17" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-17" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-17" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-17" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-17">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-17" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-17" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-17" class="btn btn-secondary" onclick="resetCurrentQuestion17()">Sıfırla</button>
      <button id="btn-check-17" class="btn btn-primary" onclick="checkAnswer17()">Kontrol Et</button>
      <button id="btn-next-17" class="btn btn-success" onclick="nextQuestion17()" style="display: none;">Sonraki Soru →</button>
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
// YİNELEYİCİLER (ITERATORS) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData17 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. iter() ve next() ile Adım Adım İlerleme",
    summary: "iter() yinelenebilir bir nesneden yineleyici oluşturur, next() ise her çağrıldığında bir sonraki elemanı döner.",
    pieces: [
      "renkler = [\"mavi\", \"sari\"]",
      "it = iter(renkler)",
      "ilk = next(it)",
      "ikinci = next(it)",
      "print(ilk, ikinci)"
    ],
    solutions: [
      [
        "renkler = [\"mavi\", \"sari\"]",
        "it = iter(renkler)",
        "ilk = next(it)",
        "ikinci = next(it)",
        "print(ilk, ikinci)"
      ]
    ],
    output: "mavi sari"
  },
  {
    type: "arrange",
    title: "2. next() Fonksiyonunda Varsayılan Değer Kullanımı",
    summary: "next(yineleyici, varsayilan) çağrısı veri bittiğinde StopIteration hatası vermek yerine belirtilen değeri döner.",
    pieces: [
      "it = iter([100])",
      "print(next(it, \"Yok\"))",
      "print(next(it, \"Yok\"))"
    ],
    solutions: [
      [
        "it = iter([100])",
        "print(next(it, \"Yok\"))",
        "print(next(it, \"Yok\"))"
      ]
    ],
    output: "100\nYok"
  },
  {
    type: "arrange",
    title: "3. for Döngüsünün Arka Planındaki while ve StopIteration Yapısı",
    summary: "for döngüsü arka planda iter() alır, sonsuz while içinde next() çağırır ve StopIteration gelince döngüyü kırar.",
    pieces: [
      "yineleyici = iter([1, 2])",
      "while True:",
      "    try:",
      "        deger = next(yineleyici)",
      "        print(deger)",
      "    except StopIteration:",
      "        break"
    ],
    solutions: [
      [
        "yineleyici = iter([1, 2])",
        "while True:",
        "    try:",
        "        deger = next(yineleyici)",
        "        print(deger)",
        "    except StopIteration:",
        "        break"
      ]
    ],
    output: "1\n2"
  },
  {
    type: "arrange",
    title: "4. Yineleyicilerin Tek Seferlik Tüketim Özelliği",
    summary: "Bir yineleyici sonuna kadar tüketildiğinde bellekteki konumu biter; tekrar listeye çevrilirse boş liste döner.",
    pieces: [
      "sayilar = iter([10, 20, 30])",
      "ilk_liste = list(sayilar)",
      "ikinci_liste = list(sayilar)",
      "print(ilk_liste, ikinci_liste)"
    ],
    solutions: [
      [
        "sayilar = iter([10, 20, 30])",
        "ilk_liste = list(sayilar)",
        "ikinci_liste = list(sayilar)",
        "print(ilk_liste, ikinci_liste)"
      ]
    ],
    output: "[10, 20, 30] []"
  },
  {
    type: "arrange",
    title: "5. Özel Sınıfta __iter__ ve __next__ Protokolü",
    summary: "Özel bir yineleyici sınıfında __iter__ self dönerken, __next__ sıradaki elemanı üretip sonda raise StopIteration fırlatır.",
    pieces: [
      "class Adim:",
      "    def __init__(self):",
      "        self.n = 1",
      "    def __iter__(self):",
      "        return self",
      "    def __next__(self):",
      "        if self.n > 2: raise StopIteration",
      "        v = self.n; self.n += 1; return v",
      "print(list(Adim()))"
    ],
    solutions: [
      [
        "class Adim:",
        "    def __init__(self):",
        "        self.n = 1",
        "    def __iter__(self):",
        "        return self",
        "    def __next__(self):",
        "        if self.n > 2: raise StopIteration",
        "        v = self.n; self.n += 1; return v",
        "print(list(Adim()))"
      ]
    ],
    output: "[1, 2]"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: String Üzerinde iter() ve next()",
    summary: "Metinler yinelenebilir (iterable) nesnelerdir; iter() ile harfleri tek tek getiren iterator oluşturulur.",
    template: "kelime = \"Su\"\nit = {slot0}(kelime)\nprint({slot1}(it))",
    slots: ["slot0", "slot1"],
    options: ["iter", "next", "list", "str"],
    validCombinations: [
      { slot0: "iter", slot1: "next" }
    ],
    output: "S"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: StopIteration İstisnası",
    summary: "Yineleyicide eleman kalmadığında Python işlemi durdurmak için StopIteration istisnasını fırlatır.",
    template: "it = iter([5])\nnext(it)\ntry:\n    next(it)\nexcept {slot0}:\n    print(\"{slot1}\")",
    slots: ["slot0", "slot1"],
    options: ["StopIteration", "Bitti", "TypeError", "ValueError"],
    validCombinations: [
      { slot0: "StopIteration", slot1: "Bitti" }
    ],
    output: "Bitti"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: next() İkinci Parametresi (Fallback)",
    summary: "next(it, varsayılan) kalıbı yineleyici tükendiğinde hata fırlatılmasını engelleyerek güvenli okuma sağlar.",
    template: "kume_it = iter({\"veri\"})\nnext(kume_it)\nsonuc = {slot0}(kume_it, \"{slot1}\")\nprint(sonuc)",
    slots: ["slot0", "slot1"],
    options: ["next", "Bos", "iter", "get"],
    validCombinations: [
      { slot0: "next", slot1: "Bos" }
    ],
    output: "Bos"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Özel Yineleyici Metot İmzaları",
    summary: "Yineleyici protokolünü tamamlamak için sınıfta __iter__ ve __next__ dunder metotları tanımlanmalıdır.",
    template: "class Say:\n    def __{slot0}__(self):\n        return self\n    def __{slot1}__(self):\n        raise StopIteration",
    slots: ["slot0", "slot1"],
    options: ["iter", "next", "init", "len"],
    validCombinations: [
      { slot0: "iter", slot1: "next" }
    ],
    output: "# (__iter__ ve __next__ protokolü tanımlandı)"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: raise StopIteration ile Akışı Kesme",
    summary: "Özel yineleyicide sınıra ulaşıldığında 'raise StopIteration' çağrısı ile gezinme sonlandırılır.",
    template: "class Tekil:\n    def __iter__(self): return self\n    def __next__(self):\n        {slot0} {slot1}",
    slots: ["slot0", "slot1"],
    options: ["raise", "StopIteration", "return", "pass"],
    validCombinations: [
      { slot0: "raise", slot1: "StopIteration" }
    ],
    output: "# (raise StopIteration yapısı kuruldu)"
  }
];

let currentStep17 = 0;
let userArrangeState17 = [];
let userFillState17 = {};

function initQuiz17() {
  loadQuestion17(currentStep17);
}

function loadQuestion17(index) {
  const q = quizData17[index];
  document.getElementById("step-badge-17").innerText = `Soru ${index + 1} / ${quizData17.length}`;
  document.getElementById("type-badge-17").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-17").style.width = `${((index + 1) / quizData17.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-17");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-17").innerText = q.title;
  
  const feedback = document.getElementById("feedback-17");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-17");
  outputContainer.style.display = "none";
  document.getElementById("code-output-17").innerText = "";
  
  document.getElementById("btn-check-17").style.display = "inline-block";
  document.getElementById("btn-next-17").style.display = "none";
  
  const workspace = document.getElementById("workspace-17");
  const pool = document.getElementById("options-pool-17");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState17 = [];
    renderArrangeWorkspace17();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange17(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState17 = {};
    q.slots.forEach(slot => userFillState17[slot] = null);
    renderFillWorkspace17();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption17(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange17(piece, btnElement) {
  userArrangeState17.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace17();
}

function removePieceFromArrange17(index) {
  const item = userArrangeState17[index];
  item.btnRef.classList.remove("used");
  userArrangeState17.splice(index, 1);
  renderArrangeWorkspace17();
}

function renderArrangeWorkspace17() {
  const workspace = document.getElementById("workspace-17");
  if (userArrangeState17.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState17.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml17(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange17(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot17 = null;

function renderFillWorkspace17() {
  const q = quizData17[currentStep17];
  const workspace = document.getElementById("workspace-17");
  let html = escapeHtml17(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState17[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot17('${slot}')">${escapeHtml17(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot17('${slot}')">${activeSlot17 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot17(slot) {
  activeSlot17 = slot;
  renderFillWorkspace17();
}

function selectFillOption17(val, btnElement) {
  const q = quizData17[currentStep17];
  let targetSlot = activeSlot17;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState17[s] === null);
  }
  
  if (targetSlot) {
    userFillState17[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot17 = null;
    renderFillWorkspace17();
  }
}

function clearSlot17(slot) {
  const pool = document.getElementById("options-pool-17");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState17[slot] = null;
  activeSlot17 = slot;
  renderFillWorkspace17();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer17() {
  const q = quizData17[currentStep17];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState17.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback17("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState17[s] !== null);
    if (!isAllFilled) {
      showFeedback17("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState17[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback17("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-17");
    const outputBox = document.getElementById("code-output-17");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-17").style.display = "none";
    document.getElementById("btn-next-17").style.display = "inline-block";
  } else {
    showFeedback17("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback17(msg, type) {
  const feedback = document.getElementById("feedback-17");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion17() {
  loadQuestion17(currentStep17);
}

function nextQuestion17() {
  if (currentStep17 < quizData17.length - 1) {
    currentStep17++;
    loadQuestion17(currentStep17);
  } else {
    document.getElementById("quiz-container-17").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Yineleyiciler (Iterators & Iterable) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml17(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz17);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz17();
}
</script>
