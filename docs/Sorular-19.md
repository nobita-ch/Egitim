<!-- PYTHON INTERACTIVE EXERCISES: SELF PARAMETRESİ (SELF IN OOP) -->
<div id="quiz-container-22" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-22" class="badge">Soru 1 / 10</span>
      <span id="type-badge-22" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-22" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-22" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-22" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-22" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-22" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-22" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-22">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-22" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-22" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-22" class="btn btn-secondary" onclick="resetCurrentQuestion22()">Sıfırla</button>
      <button id="btn-check-22" class="btn btn-primary" onclick="checkAnswer22()">Kontrol Et</button>
      <button id="btn-next-22" class="btn btn-success" onclick="nextQuestion22()" style="display: none;">Sonraki Soru →</button>
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
// SELF PARAMETRESİ KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData22 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. self Üzerinden Nitelik Güncelleme ve Okuma",
    summary: "self parametresi o anki nesne örneğini temsil eder ve metotlar self üzerinden nitelikleri günceller[cite: 16].",
    pieces: [
      "class Lamba:",
      "    def __init__(self):",
      "        self.acik = False",
      "    def ac(self):",
      "        self.acik = True",
      "l = Lamba(); l.ac(); print(l.acik)"
    ],
    solutions: [
      [
        "class Lamba:",
        "    def __init__(self):",
        "        self.acik = False",
        "    def ac(self):",
        "        self.acik = True",
        "l = Lamba(); l.ac(); print(l.acik)"
      ]
    ],
    output: "True"
  },
  {
    type: "arrange",
    title: "2. Aynı Sınıf İçinde Metotlar Arası Çağrı (self.metot())",
    summary: "Bir metot aynı sınıftaki başka bir metodu çağırırken başına mutlaka 'self.' getirilmelidir[cite: 16].",
    pieces: [
      "class Dogrulama:",
      "    def aktif_mi(self):",
      "        return True",
      "    def calistir(self):",
      "        if self.aktif_mi():",
      "            return \"Sistem Onaylı\"",
      "d = Dogrulama(); print(d.calistir())"
    ],
    solutions: [
      [
        "class Dogrulama:",
        "    def aktif_mi(self):",
        "        return True",
        "    def calistir(self):",
        "        if self.aktif_mi():",
        "            return \"Sistem Onaylı\"",
        "d = Dogrulama(); print(d.calistir())"
      ]
    ],
    output: "Sistem Onaylı"
  },
  {
    type: "arrange",
    title: "3. Standart Çağrı vs Sınıf Üzerinden Açık self Çağrısı",
    summary: "c.metot() çağrısı arka planda Python tarafından Sinif.metot(c) şeklinde self nesnesi verilerek çalıştırılır[cite: 16].",
    pieces: [
      "class Sayac:",
      "    def __init__(self, val):",
      "        self.val = val",
      "    def deger(self):",
      "        return self.val * 2",
      "s = Sayac(5)",
      "print(Sayac.deger(s))"
    ],
    solutions: [
      [
        "class Sayac:",
        "    def __init__(self, val):",
        "        self.val = val",
        "    def deger(self):",
        "        return self.val * 2",
        "s = Sayac(5)",
        "print(Sayac.deger(s))"
      ]
    ],
    output: "10"
  },
  {
    type: "arrange",
    title: "4. İki Ayrı Nesnede Bağımsız self Durumu",
    summary: "Her nesne örneğinin self referansı bellekte farklı bir adresi gösterir ve nitelikleri birbirini etkilemez[cite: 14, 16].",
    pieces: [
      "class Depo:",
      "    def __init__(self, adet):",
      "        self.adet = adet",
      "d1 = Depo(10); d2 = Depo(20)",
      "d1.adet += 5",
      "print(d1.adet, d2.adet)"
    ],
    solutions: [
      [
        "class Depo:",
        "    def __init__(self, adet):",
        "        self.adet = adet",
        "d1 = Depo(10); d2 = Depo(20)",
        "d1.adet += 5",
        "print(d1.adet, d2.adet)"
      ]
    ],
    output: "15 20"
  },
  {
    type: "arrange",
    title: "5. self Olmadan Çağrı Hatası (NameError Önlemi)",
    summary: "self kullanılmadan doğrudan yazılan metot isimleri yerel/global fonksiyon sanılarak NameError verir[cite: 16].",
    pieces: [
      "class Servis:",
      "    def log(self):",
      "        return \"Kayıt alındı\"",
      "    def baslat(self):",
      "        return self.log()",
      "srv = Servis(); print(srv.baslat())"
    ],
    solutions: [
      [
        "class Servis:",
        "    def log(self):",
        "        return \"Kayıt alındı\"",
        "    def baslat(self):",
        "        return self.log()",
        "srv = Servis(); print(srv.baslat())"
      ]
    ],
    output: "Kayıt alındı"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Örnek Metotlarında İlk Parametre",
    summary: "Örnek metotlarının ilk parametresi daima geçerli nesne örneğini temsil eden 'self' olmalıdır[cite: 16].",
    template: "class Motor:\n    def calis({slot0}):\n        return \"Motor devrede\"\nm = Motor()\nprint(m.{slot1}())",
    slots: ["slot0", "slot1"],
    options: ["self", "calis", "cls", "this"],
    validCombinations: [
      { slot0: "self", slot1: "calis" }
    ],
    output: "Motor devrede"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: Sınıf Üzerinden self Referansı Gönderme",
    summary: "Sinif.metot(nesne) çağrısında nesne referansı ilk argüman olarak self parametresine iletilir[cite: 16].",
    template: "class Profil:\n    def __init__(self, ad): self.ad = ad\n    def selam(self): return f\"Merhaba {self.ad}\"\np = Profil(\"Efe\")\nprint({slot0}.selam({slot1}))",
    slots: ["slot0", "slot1"],
    options: ["Profil", "p", "self", "Profil()"],
    validCombinations: [
      { slot0: "Profil", slot1: "p" }
    ],
    output: "Merhaba Efe"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Metot İçinde Diğer Metodu Tetikleme",
    summary: "Aynı sınıftaki diğer yardımcı metodu çalıştırmak için 'self.metot_adi()' sözdizimi kullanılır[cite: 16].",
    template: "class Kasa:\n    def bakiye(self): return 100\n    def durum(self):\n        return {slot0}.{slot1}()\nk = Kasa(); print(k.durum())",
    slots: ["slot0", "slot1"],
    options: ["self", "bakiye", "Kasa", "durum"],
    validCombinations: [
      { slot0: "self", slot1: "bakiye" }
    ],
    output: "100"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Örnek Niteliğine self ile Atama",
    summary: "Metot parametresinden gelen veri 'self.nitelik = deger' şeklinde nesneye bağlanır[cite: 16].",
    template: "class Veri:\n    def guncelle({slot0}, x):\n        self.sayi = {slot1}\nv = Veri(); v.guncelle(42); print(v.sayi)",
    slots: ["slot0", "slot1"],
    options: ["self", "x", "self.x", "sayi"],
    validCombinations: [
      { slot0: "self", slot1: "x" }
    ],
    output: "42"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: PEP 8 İsimlendirme Standardı",
    summary: "Teknik olarak başka isimler çalışsa da PEP 8 standardı ilk parametre olarak daima 'self' kullanımını şart koşar[cite: 16].",
    template: "class Test:\n    def __init__({slot0}, deger):\n        {slot1}.deger = deger\nt = Test(99); print(t.deger)",
    slots: ["slot0", "slot1"],
    options: ["self", "self", "this", "me"],
    validCombinations: [
      { slot0: "self", slot1: "self" }
    ],
    output: "99"
  }
];

let currentStep22 = 0;
let userArrangeState22 = [];
let userFillState22 = {};

function initQuiz22() {
  loadQuestion22(currentStep22);
}

function loadQuestion22(index) {
  const q = quizData22[index];
  document.getElementById("step-badge-22").innerText = `Soru ${index + 1} / ${quizData22.length}`;
  document.getElementById("type-badge-22").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-22").style.width = `${((index + 1) / quizData22.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-22");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-22").innerText = q.title;
  
  const feedback = document.getElementById("feedback-22");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-22");
  outputContainer.style.display = "none";
  document.getElementById("code-output-22").innerText = "";
  
  document.getElementById("btn-check-22").style.display = "inline-block";
  document.getElementById("btn-next-22").style.display = "none";
  
  const workspace = document.getElementById("workspace-22");
  const pool = document.getElementById("options-pool-22");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState22 = [];
    renderArrangeWorkspace22();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange22(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState22 = {};
    q.slots.forEach(slot => userFillState22[slot] = null);
    renderFillWorkspace22();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption22(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange22(piece, btnElement) {
  userArrangeState22.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace22();
}

function removePieceFromArrange22(index) {
  const item = userArrangeState22[index];
  item.btnRef.classList.remove("used");
  userArrangeState22.splice(index, 1);
  renderArrangeWorkspace22();
}

function renderArrangeWorkspace22() {
  const workspace = document.getElementById("workspace-22");
  if (userArrangeState22.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState22.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml22(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange22(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot22 = null;

function renderFillWorkspace22() {
  const q = quizData22[currentStep22];
  const workspace = document.getElementById("workspace-22");
  let html = escapeHtml22(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState22[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot22('${slot}')">${escapeHtml22(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot22('${slot}')">${activeSlot22 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot22(slot) {
  activeSlot22 = slot;
  renderFillWorkspace22();
}

function selectFillOption22(val, btnElement) {
  const q = quizData22[currentStep22];
  let targetSlot = activeSlot22;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState22[s] === null);
  }
  
  if (targetSlot) {
    userFillState22[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot22 = null;
    renderFillWorkspace22();
  }
}

function clearSlot22(slot) {
  const pool = document.getElementById("options-pool-22");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState22[slot] = null;
  activeSlot22 = slot;
  renderFillWorkspace22();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer22() {
  const q = quizData22[currentStep22];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState22.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback22("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState22[s] !== null);
    if (!isAllFilled) {
      showFeedback22("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState22[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback22("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-22");
    const outputBox = document.getElementById("code-output-22");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-22").style.display = "none";
    document.getElementById("btn-next-22").style.display = "inline-block";
  } else {
    showFeedback22("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback22(msg, type) {
  const feedback = document.getElementById("feedback-22");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion22() {
  loadQuestion22(currentStep22);
}

function nextQuestion22() {
  if (currentStep22 < quizData22.length - 1) {
    currentStep22++;
    loadQuestion22(currentStep22);
  } else {
    document.getElementById("quiz-container-22").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">self Parametresi konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml22(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz22);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz22();
}
</script>
