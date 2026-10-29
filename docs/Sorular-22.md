<!-- PYTHON INTERACTIVE EXERCISES: KALITIM (INHERITANCE) -->
<div id="quiz-container-25" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-25" class="badge">Soru 1 / 10</span>
      <span id="type-badge-25" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-25" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-25" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-25" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-25" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-25" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-25" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-25">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-25" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-25" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-25" class="btn btn-secondary" onclick="resetCurrentQuestion25()">Sıfırla</button>
      <button id="btn-check-25" class="btn btn-primary" onclick="checkAnswer25()">Kontrol Et</button>
      <button id="btn-next-25" class="btn btn-success" onclick="nextQuestion25()" style="display: none;">Sonraki Soru →</button>
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
// KALITIM (INHERITANCE) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData25 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Temel Sınıf Kalıtımı ve Miras Alınan Metot",
    summary: "Alt sınıf, üst sınıfın adını parantez içine alarak tanımlanır ve üst sınıfın tüm metotlarına doğrudan erişir[cite: 19].",
    pieces: [
      "class Cihaz:",
      "    def calis(self): return \"Cihaz devrede\"",
      "class Router(Cihaz): pass",
      "r = Router(); print(r.calis())"
    ],
    solutions: [
      [
        "class Cihaz:",
        "    def calis(self): return \"Cihaz devrede\"",
        "class Router(Cihaz): pass",
        "r = Router(); print(r.calis())"
      ]
    ],
    output: "Cihaz devrede"
  },
  {
    type: "arrange",
    title: "2. super().__init__() ile Üst Sınıf Niteliklerini Koruma",
    summary: "Alt sınıfta __init__ tanımlandığında üst sınıf başlatıcısı ezilir; super().__init__() ile üst sınıf nitelikleri korunur[cite: 19].",
    pieces: [
      "class Personel:",
      "    def __init__(self, ad): self.ad = ad",
      "class Muhendis(Personel):",
      "    def __init__(self, ad, uzmanlik):",
      "        super().__init__(ad)",
      "        self.uzmanlik = uzmanlik",
      "m = Muhendis(\"Ali\", \"Yazılım\"); print(m.ad, m.uzmanlik)"
    ],
    solutions: [
      [
        "class Personel:",
        "    def __init__(self, ad): self.ad = ad",
        "class Muhendis(Personel):",
        "    def __init__(self, ad, uzmanlik):",
        "        super().__init__(ad)",
        "        self.uzmanlik = uzmanlik",
        "m = Muhendis(\"Ali\", \"Yazılım\"); print(m.ad, m.uzmanlik)"
      ]
    ],
    output: "Ali Yazılım"
  },
  {
    type: "arrange",
    title: "3. Metot Ezme (Method Overriding)",
    summary: "Alt sınıf, üst sınıfta var olan bir metodu aynı isimle yeniden tanımlayarak kendine özel hale getirebilir[cite: 19].",
    pieces: [
      "class Bildirim:",
      "    def gonder(self): return \"Standart bildirim\"",
      "class SMSBildirimi(Bildirim):",
      "    def gonder(self): return \"SMS gönderildi\"",
      "b = SMSBildirimi(); print(b.gonder())"
    ],
    solutions: [
      [
        "class Bildirim:",
        "    def gonder(self): return \"Standart bildirim\"",
        "class SMSBildirimi(Bildirim):",
        "    def gonder(self): return \"SMS gönderildi\"",
        "b = SMSBildirimi(); print(b.gonder())"
      ]
    ],
    output: "SMS gönderildi"
  },
  {
    type: "arrange",
    title: "4. Çoklu Kalıtım (Multiple Inheritance)",
    summary: "Bir sınıf virgülle ayrılarak birden fazla ebeveyn sınıftan aynı anda miras alabilir[cite: 19].",
    pieces: [
      "class Yazici: def yazdir(self): return \"Yazdırıldı\"",
      "class Tarayici: def tara(self): return \"Tarandı\"",
      "class CokFonksiyonlu(Yazici, Tarayici): pass",
      "cf = CokFonksiyonlu(); print(cf.yazdir(), cf.tara())"
    ],
    solutions: [
      [
        "class Yazici: def yazdir(self): return \"Yazdırıldı\"",
        "class Tarayici: def tara(self): return \"Tarandı\"",
        "class CokFonksiyonlu(Yazici, Tarayici): pass",
        "cf = CokFonksiyonlu(); print(cf.yazdir(), cf.tara())"
      ],
      [
        "class Tarayici: def tara(self): return \"Tarandı\"",
        "class Yazici: def yazdir(self): return \"Yazdırıldı\"",
        "class CokFonksiyonlu(Yazici, Tarayici): pass",
        "cf = CokFonksiyonlu(); print(cf.yazdir(), cf.tara())"
      ]
    ],
    output: "Yazdırıldı Tarandı"
  },
  {
    type: "arrange",
    title: "5. issubclass() ve isinstance() Kontrolleri",
    summary: "isinstance nesne-sınıf ilişkisini doğrular[cite: 19], issubclass ise sınıflar arası kalıtım bağını kontrol eder[cite: 19].",
    pieces: [
      "class Ana: pass",
      "class Yavru(Ana): pass",
      "y = Yavru()",
      "print(isinstance(y, Ana), issubclass(Yavru, Ana))"
    ],
    solutions: [
      [
        "class Ana: pass",
        "class Yavru(Ana): pass",
        "y = Yavru()",
        "print(isinstance(y, Ana), issubclass(Yavru, Ana))"
      ]
    ],
    output: "True True"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Sınıf Kalıtım Bildirimi",
    summary: "Bir sınıfın üst sınıftan türemesi için sınıf isminin yanındaki paranteze üst sınıf yazılır[cite: 19].",
    template: "class Hayvan:\n    def ses(self): return \"Genel ses\"\n\nclass Kopek({slot0}):\n    pass\n\nk = Kopek()\nprint(k.{slot1}())",
    slots: ["slot0", "slot1"],
    options: ["Hayvan", "ses", "object", "Kopek"],
    validCombinations: [
      { slot0: "Hayvan", slot1: "ses" }
    ],
    output: "Genel ses"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: super() Çağrısında self Kuralı",
    summary: "super().__init__() çağrılırken 'self' parametresi verilmez; Python nesneyi otomatik bağlar[cite: 19].",
    template: "class Arac:\n    def __init__(self, tip): self.tip = tip\n\nclass Otomobil(Arac):\n    def __init__(self, tip, kapi):\n        {slot0}().__init__({slot1})\n        self.kapi = kapi\n\noto = Otomobil(\"Binek\", 4); print(oto.tip, oto.kapi)",
    slots: ["slot0", "slot1"],
    options: ["super", "tip", "self", "Arac"],
    validCombinations: [
      { slot0: "super", slot1: "tip" }
    ],
    output: "Binek 4"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Doğrudan Üst Sınıf Adıyla Çağrı (self Zorunluluğu)",
    summary: "super() yerine doğrudan UstSinif.__init__ kullanılırsa ilk parametre olarak 'self' geçilmelidir[cite: 19].",
    template: "class Temel:\n    def __init__(self, kod): self.kod = kod\n\nclass Turemis(Temel):\n    def __init__(self, kod):\n        {slot0}.__init__({slot1}, kod)\n\nt = Turemis(909); print(t.kod)",
    slots: ["slot0", "slot1"],
    options: ["Temel", "self", "super", "cls"],
    validCombinations: [
      { slot0: "Temel", slot1: "self" }
    ],
    output: "909"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: issubclass() ile Alt Sınıf Doğrulama",
    summary: "issubclass(Alt, Ust) fonksiyonu belirtilen alt sınıfın üst sınıftan türeyip türemediğini kontrol eder[cite: 19].",
    template: "class ModelA: pass\nclass ModelB(ModelA): pass\n\nkontrol = {slot0}({slot1}, ModelA)\nprint(kontrol)",
    slots: ["slot0", "slot1"],
    options: ["issubclass", "ModelB", "isinstance", "ModelA"],
    validCombinations: [
      { slot0: "issubclass", slot1: "ModelB" }
    ],
    output: "True"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Metot Arama Sırası (MRO)",
    summary: "Çoklu kalıtımda metotların hangi sırayla aranacağını görmek için sınıfın .mro() metodu çağrılır[cite: 19].",
    template: "class A: pass\nclass B(A): pass\n\nsira = B.{slot0}()\nprint(sira[0] is {slot1})",
    slots: ["slot0", "slot1"],
    options: ["mro", "B", "keys", "A"],
    validCombinations: [
      { slot0: "mro", slot1: "B" }
    ],
    output: "True"
  }
];

let currentStep25 = 0;
let userArrangeState25 = [];
let userFillState25 = {};

function initQuiz25() {
  loadQuestion25(currentStep25);
}

function loadQuestion25(index) {
  const q = quizData25[index];
  document.getElementById("step-badge-25").innerText = `Soru ${index + 1} / ${quizData25.length}`;
  document.getElementById("type-badge-25").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-25").style.width = `${((index + 1) / quizData25.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-25");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-25").innerText = q.title;
  
  const feedback = document.getElementById("feedback-25");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-25");
  outputContainer.style.display = "none";
  document.getElementById("code-output-25").innerText = "";
  
  document.getElementById("btn-check-25").style.display = "inline-block";
  document.getElementById("btn-next-25").style.display = "none";
  
  const workspace = document.getElementById("workspace-25");
  const pool = document.getElementById("options-pool-25");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState25 = [];
    renderArrangeWorkspace25();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange25(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState25 = {};
    q.slots.forEach(slot => userFillState25[slot] = null);
    renderFillWorkspace25();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption25(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange25(piece, btnElement) {
  userArrangeState25.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace25();
}

function removePieceFromArrange25(index) {
  const item = userArrangeState25[index];
  item.btnRef.classList.remove("used");
  userArrangeState25.splice(index, 1);
  renderArrangeWorkspace25();
}

function renderArrangeWorkspace25() {
  const workspace = document.getElementById("workspace-25");
  if (userArrangeState25.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState25.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml25(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange25(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot25 = null;

function renderFillWorkspace25() {
  const q = quizData25[currentStep25];
  const workspace = document.getElementById("workspace-25");
  let html = escapeHtml25(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState25[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot25('${slot}')">${escapeHtml25(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot25('${slot}')">${activeSlot25 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot25(slot) {
  activeSlot25 = slot;
  renderFillWorkspace25();
}

function selectFillOption25(val, btnElement) {
  const q = quizData25[currentStep25];
  let targetSlot = activeSlot25;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState25[s] === null);
  }
  
  if (targetSlot) {
    userFillState25[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot25 = null;
    renderFillWorkspace25();
  }
}

function clearSlot25(slot) {
  const pool = document.getElementById("options-pool-25");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState25[slot] = null;
  activeSlot25 = slot;
  renderFillWorkspace25();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer25() {
  const q = quizData25[currentStep25];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState25.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback25("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState25[s] !== null);
    if (!isAllFilled) {
      showFeedback25("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState25[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback25("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-25");
    const outputBox = document.getElementById("code-output-25");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-25").style.display = "none";
    document.getElementById("btn-next-25").style.display = "inline-block";
  } else {
    showFeedback25("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback25(msg, type) {
  const feedback = document.getElementById("feedback-25");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion25() {
  loadQuestion25(currentStep25);
}

function nextQuestion25() {
  if (currentStep25 < quizData25.length - 1) {
    currentStep25++;
    loadQuestion25(currentStep25);
  } else {
    document.getElementById("quiz-container-25").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Kalıtım (Inheritance & super()) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml25(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz25);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz25();
}
</script>
