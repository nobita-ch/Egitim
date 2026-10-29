<!-- PYTHON INTERACTIVE EXERCISES: METOTLAR (METHODS IN OOP) -->
<div id="quiz-container-24" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-24" class="badge">Soru 1 / 10</span>
      <span id="type-badge-24" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-24" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-24" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-24" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-24" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-24" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-24" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-24">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-24" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-24" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-24" class="btn btn-secondary" onclick="resetCurrentQuestion24()">Sıfırla</button>
      <button id="btn-check-24" class="btn btn-primary" onclick="checkAnswer24()">Kontrol Et</button>
      <button id="btn-next-24" class="btn btn-success" onclick="nextQuestion24()" style="display: none;">Sonraki Soru →</button>
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
// METOTLAR (METHODS) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData24 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Örnek Metodu (Instance Method) ile Durum Güncelleme",
    summary: "Örnek metotları ilk parametre olarak self alır; nesnenin mevcut niteliklerini okuyup güncelleyebilir[cite: 18].",
    pieces: [
      "class Gorev:",
      "    def __init__(self, ad): self.ad = ad; self.bitti = False",
      "    def tamamla(self): self.bitti = True",
      "g = Gorev(\"Rapor\"); g.tamamla(); print(g.ad, g.bitti)"
    ],
    solutions: [
      [
        "class Gorev:",
        "    def __init__(self, ad): self.ad = ad; self.bitti = False",
        "    def tamamla(self): self.bitti = True",
        "g = Gorev(\"Rapor\"); g.tamamla(); print(g.ad, g.bitti)"
      ]
    ],
    output: "Rapor True"
  },
  {
    type: "arrange",
    title: "2. @classmethod ile Sınıf Niteliğini Değiştirme",
    summary: "@classmethod dekoratörü ile tanımlanan metotlar ilk parametre olarak 'cls' alır ve sınıf düzeyinde işlem yapar[cite: 18].",
    pieces: [
      "class Baglanti:",
      "    protokol = \"HTTP\"",
      "    @classmethod",
      "    def guncelle(cls, p): cls.protokol = p",
      "Baglanti.guncelle(\"HTTPS\"); print(Baglanti.protokol)"
    ],
    solutions: [
      [
        "class Baglanti:",
        "    protokol = \"HTTP\"",
        "    @classmethod",
        "    def guncelle(cls, p): cls.protokol = p",
        "Baglanti.guncelle(\"HTTPS\"); print(Baglanti.protokol)"
      ]
    ],
    output: "HTTPS"
  },
  {
    type: "arrange",
    title: "3. @staticmethod ile Bağımsız Doğrulama Metodu",
    summary: "Statik metotlar self veya cls parametresi almaz; sınıfa bağlı bağımsız yardımcı fonksiyonlar olarak çalışır[cite: 18].",
    pieces: [
      "class Mat:",
      "    @staticmethod",
      "    def pozitif_mi(sayi): return sayi > 0",
      "print(Mat.pozitif_mi(15), Mat.pozitif_mi(-4))"
    ],
    solutions: [
      [
        "class Mat:",
        "    @staticmethod",
        "    def pozitif_mi(sayi): return sayi > 0",
        "print(Mat.pozitif_mi(15), Mat.pozitif_mi(-4))"
      ]
    ],
    output: "True False"
  },
  {
    type: "arrange",
    title: "4. __str__() ve __repr__() Temsil Ayrımı",
    summary: "__str__ kullanıcı odaklı okunabilir metin dönerken[cite: 18], __repr__ resmi/hata ayıklama odaklı gösterimi döner[cite: 18].",
    pieces: [
      "class Port:",
      "    def __init__(self, no): self.no = no",
      "    def __str__(self): return f\"Port-{self.no}\"",
      "    def __repr__(self): return f\"Port(no={self.no})\"",
      "p = Port(80); print(str(p), repr(p))"
    ],
    solutions: [
      [
        "class Port:",
        "    def __init__(self, no): self.no = no",
        "    def __str__(self): return f\"Port-{self.no}\"",
        "    def __repr__(self): return f\"Port(no={self.no})\"",
        "p = Port(80); print(str(p), repr(p))"
      ]
    ],
    output: "Port-80 Port(no=80)"
  },
  {
    type: "arrange",
    title: "5. Sınıftan del ile Metot Silme",
    summary: "del Sinif.metot_adi ifadesi ile bir metot sınıf tanımından tamamen kaldırılabilir[cite: 18].",
    pieces: [
      "class Test:",
      "    def selam(self): return \"Merhaba\"",
      "del Test.selam",
      "print(hasattr(Test, \"selam\"))"
    ],
    solutions: [
      [
        "class Test:",
        "    def selam(self): return \"Merhaba\"",
        "del Test.selam",
        "print(hasattr(Test, \"selam\"))"
      ]
    ],
    output: "False"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: @classmethod ve cls Parametresi",
    summary: "Sınıf metotları @classmethod dekoratörü ve ilk parametre olarak 'cls' ile tanımlanır[cite: 18].",
    template: "class Ayar:\n    kod = 101\n    @{slot0}\n    def degistir({slot1}, k): cls.kod = k\n\nAyar.degistir(202); print(Ayar.kod)",
    slots: ["slot0", "slot1"],
    options: ["classmethod", "cls", "staticmethod", "self"],
    validCombinations: [
      { slot0: "classmethod", slot1: "cls" }
    ],
    output: "202"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: @staticmethod Dekoratörü",
    summary: "Nesneye veya sınıfa doğrudan referans vermeyen bağımsız fonksiyonlar @staticmethod ile işaretlenir[cite: 18].",
    template: "class Dogrula:\n    @{slot0}\n    def gecerli_mi(kod):\n        return len(kod) >= 4\n\nprint(Dogrula.{slot1}(\"12345\"))",
    slots: ["slot0", "slot1"],
    options: ["staticmethod", "gecerli_mi", "classmethod", "self"],
    validCombinations: [
      { slot0: "staticmethod", slot1: "gecerli_mi" }
    ],
    output: "True"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: print() Çağrısında Tetiklenen __str__ Metodu",
    summary: "Nesne print() içine verildiğinde Python otomatik olarak o nesnenin __str__ metodunu çağırır[cite: 18].",
    template: "class Sunucu:\n    def __init__(self, ip): self.ip = ip\n    def __{slot0}__(self):\n        return f\"Sunucu: {self.ip}\"\n\nprint({slot1}(Sunucu(\"127.0.0.1\")))",
    slots: ["slot0", "slot1"],
    options: ["str", "str", "repr", "print"],
    validCombinations: [
      { slot0: "str", slot1: "str" }
    ],
    output: "Sunucu: 127.0.0.1"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Metodun Arka Planda Sınıf Üzerinden Çağrılması",
    summary: "nesne.metot() çağrısı arka planda Sinif.metot(nesne) şeklinde işletilir[cite: 18].",
    template: "class Sayi:\n    def __init__(self, v): self.v = v\n    def carp(self, n): return self.v * n\n\ns = Sayi(6)\nprint({slot0}.carp({slot1}, 3))",
    slots: ["slot0", "slot1"],
    options: ["Sayi", "s", "self", "Sayi()"],
    validCombinations: [
      { slot0: "Sayi", slot1: "s" }
    ],
    output: "18"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Geliştirici Temsil Metodu (__repr__)",
    summary: "Resmi nesne temsilini ve hata ayıklama formatını oluşturmak için __repr__ metodu tanımlanır[cite: 18].",
    template: "class Cihaz:\n    def __init__(self, ad): self.ad = ad\n    def __{slot0}__(self): return f\"Cihaz('{self.ad}')\"\n\nc = Cihaz(\"Router\")\nprint({slot1}(c))",
    slots: ["slot0", "slot1"],
    options: ["repr", "repr", "str", "type"],
    validCombinations: [
      { slot0: "repr", slot1: "repr" }
    ],
    output: "Cihaz('Router')"
  }
];

let currentStep24 = 0;
let userArrangeState24 = [];
let userFillState24 = {};

function initQuiz24() {
  loadQuestion24(currentStep24);
}

function loadQuestion24(index) {
  const q = quizData24[index];
  document.getElementById("step-badge-24").innerText = `Soru ${index + 1} / ${quizData24.length}`;
  document.getElementById("type-badge-24").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-24").style.width = `${((index + 1) / quizData24.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-24");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-24").innerText = q.title;
  
  const feedback = document.getElementById("feedback-24");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-24");
  outputContainer.style.display = "none";
  document.getElementById("code-output-24").innerText = "";
  
  document.getElementById("btn-check-24").style.display = "inline-block";
  document.getElementById("btn-next-24").style.display = "none";
  
  const workspace = document.getElementById("workspace-24");
  const pool = document.getElementById("options-pool-24");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState24 = [];
    renderArrangeWorkspace24();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange24(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState24 = {};
    q.slots.forEach(slot => userFillState24[slot] = null);
    renderFillWorkspace24();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption24(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange24(piece, btnElement) {
  userArrangeState24.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace24();
}

function removePieceFromArrange24(index) {
  const item = userArrangeState24[index];
  item.btnRef.classList.remove("used");
  userArrangeState24.splice(index, 1);
  renderArrangeWorkspace24();
}

function renderArrangeWorkspace24() {
  const workspace = document.getElementById("workspace-24");
  if (userArrangeState24.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState24.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml24(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange24(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot24 = null;

function renderFillWorkspace24() {
  const q = quizData24[currentStep24];
  const workspace = document.getElementById("workspace-24");
  let html = escapeHtml24(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState24[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot24('${slot}')">${escapeHtml24(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot24('${slot}')">${activeSlot24 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot24(slot) {
  activeSlot24 = slot;
  renderFillWorkspace24();
}

function selectFillOption24(val, btnElement) {
  const q = quizData24[currentStep24];
  let targetSlot = activeSlot24;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState24[s] === null);
  }
  
  if (targetSlot) {
    userFillState24[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot24 = null;
    renderFillWorkspace24();
  }
}

function clearSlot24(slot) {
  const pool = document.getElementById("options-pool-24");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState24[slot] = null;
  activeSlot24 = slot;
  renderFillWorkspace24();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer24() {
  const q = quizData24[currentStep24];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState24.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback24("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState24[s] !== null);
    if (!isAllFilled) {
      showFeedback24("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState24[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback24("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-24");
    const outputBox = document.getElementById("code-output-24");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-24").style.display = "none";
    document.getElementById("btn-next-24").style.display = "inline-block";
  } else {
    showFeedback24("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback24(msg, type) {
  const feedback = document.getElementById("feedback-24");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion24() {
  loadQuestion24(currentStep24);
}

function nextQuestion24() {
  if (currentStep24 < quizData24.length - 1) {
    currentStep24++;
    loadQuestion24(currentStep24);
  } else {
    document.getElementById("quiz-container-24").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Metotlar (Instance, Class, Static Methods) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml24(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz24);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz24();
}
</script>
