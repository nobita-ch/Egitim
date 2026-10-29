<!-- PYTHON INTERACTIVE EXERCISES: NESNE NİTELİKLERİ (ATTRIBUTES) -->
<div id="quiz-container-23" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-23" class="badge">Soru 1 / 10</span>
      <span id="type-badge-23" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-23" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-23" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-23" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-23" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-23" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-23" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-23">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-23" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-23" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-23" class="btn btn-secondary" onclick="resetCurrentQuestion23()">Sıfırla</button>
      <button id="btn-check-23" class="btn btn-primary" onclick="checkAnswer23()">Kontrol Et</button>
      <button id="btn-next-23" class="btn btn-success" onclick="nextQuestion23()" style="display: none;">Sonraki Soru →</button>
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
// NESNE NİTELİKLERİ KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData23 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Sınıf Seviyesinde Güncelleme (Tüm Nesnelere Yansıma)",
    summary: "Sınıf niteliği doğrudan sınıf adı üzerinden güncellendiğinde, o sınıftan üretilen tüm nesneler yeni değeri görür.",
    pieces: [
      "class Sunucu: varsayilan_port = 80",
      "s1 = Sunucu(); s2 = Sunucu()",
      "Sunucu.varsayilan_port = 443",
      "print(s1.varsayilan_port, s2.varsayilan_port)"
    ],
    solutions: [
      [
        "class Sunucu: varsayilan_port = 80",
        "s1 = Sunucu(); s2 = Sunucu()",
        "Sunucu.varsayilan_port = 443",
        "print(s1.varsayilan_port, s2.varsayilan_port)"
      ]
    ],
    output: "443 443"
  },
  {
    type: "arrange",
    title: "2. Nesne Üzerinden Gölgeleme (Shadowing) Davranışı",
    summary: "Nesne üzerinden sınıf niteliğine atama yapılırsa sınıfın orijinal değeri değişmez, sadece o nesneye özel örnek niteliği oluşur.",
    pieces: [
      "class Depo: bolge = \"TR\"",
      "d1 = Depo(); d2 = Depo()",
      "d1.bolge = \"EU\"",
      "print(d1.bolge, d2.bolge, Depo.bolge)"
    ],
    solutions: [
      [
        "class Depo: bolge = \"TR\"",
        "d1 = Depo(); d2 = Depo()",
        "d1.bolge = \"EU\"",
        "print(d1.bolge, d2.bolge, Depo.bolge)"
      ]
    ],
    output: "EU TR TR"
  },
  {
    type: "arrange",
    title: "3. getattr() ile Güvenli Nitelik Okuma",
    summary: "getattr(nesne, 'nitelik', varsayilan) çağrısı nitelik bulunamadığında AttributeError vermek yerine varsayılan değeri döner.",
    pieces: [
      "class Profil: pass",
      "p = Profil()",
      "rol = getattr(p, \"rol\", \"Ziyaretci\")",
      "print(rol)"
    ],
    solutions: [
      [
        "class Profil: pass",
        "p = Profil()",
        "rol = getattr(p, \"rol\", \"Ziyaretci\")",
        "print(rol)"
      ]
    ],
    output: "Ziyaretci"
  },
  {
    type: "arrange",
    title: "4. @property Dekoratörü ile Kapsüllenmiş Nitelik Erişimi",
    summary: "@property metodu parantezsiz değişken gibi okumayı sağlar; setter ise değer ataması yapılırken tetiklenir.",
    pieces: [
      "class Sayac:",
      "    def __init__(self): self._deger = 10",
      "    @property",
      "    def deger(self): return self._deger",
      "s = Sayac(); print(s.deger)"
    ],
    solutions: [
      [
        "class Sayac:",
        "    def __init__(self): self._deger = 10",
        "    @property",
        "    def deger(self): return self._deger",
        "s = Sayac(); print(s.deger)"
      ]
    ],
    output: "10"
  },
  {
    type: "arrange",
    title: "5. setattr() ve hasattr() ile Çalışma Zamanı Yönetimi",
    summary: "setattr dinamik olarak nitelik eklerken, hasattr nesnede bu niteliğin var olup olmadığını Boole olarak döner.",
    pieces: [
      "class Sistem: pass",
      "s = Sistem()",
      "setattr(s, \"durum\", \"Aktif\")",
      "print(hasattr(s, \"durum\"), s.durum)"
    ],
    solutions: [
      [
        "class Sistem: pass",
        "s = Sistem()",
        "setattr(s, \"durum\", \"Aktif\")",
        "print(hasattr(s, \"durum\"), s.durum)"
      ]
    ],
    output: "True Aktif"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Sınıf Niteliği Tanımlama Alanı",
    summary: "Sınıf nitelikleri metotların dışında doğrudan sınıf gövdesinde tanımlanarak tüm nesnelerle paylaşılır.",
    template: "class Magaza:\n    {slot0} = \"Merkez\"\n\nm1 = Magaza()\nprint(m1.{slot1})",
    slots: ["slot0", "slot1"],
    options: ["konum", "konum", "self.konum", "def"],
    validCombinations: [
      { slot0: "konum", slot1: "konum" }
    ],
    output: "Merkez"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: hasattr() ile Varlık Kontrolü",
    summary: "hasattr() fonksiyonu belirtilen niteliğin hedef nesne üzerinde tanımlı olup olmadığını test eder.",
    template: "class Cihaz:\n    def __init__(self): self.ip = \"10.0.0.1\"\n\nc = Cihaz()\nprint({slot0}(c, \"{slot1}\"))",
    slots: ["slot0", "slot1"],
    options: ["hasattr", "ip", "getattr", "c.ip"],
    validCombinations: [
      { slot0: "hasattr", slot1: "ip" }
    ],
    output: "True"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: delattr() ile Nitelik Silme",
    summary: "delattr(nesne, 'nitelik_adi') fonksiyonu nesneden belirtilen özelliği dinamik olarak kaldırır.",
    template: "class Ayar:\n    def __init__(self): self.tema = \"Koyu\"\n\na = Ayar()\n{slot0}(a, \"{slot1}\")\nprint(hasattr(a, \"tema\"))",
    slots: ["slot0", "slot1"],
    options: ["delattr", "tema", "del", "getattr"],
    validCombinations: [
      { slot0: "delattr", slot1: "tema" }
    ],
    output: "False"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: @property ve Setter Sözdizimi",
    summary: "@property okuma metodunu, @nitelik.setter ise doğrulama ve atama metodunu tanımlamak için kullanılır.",
    template: "class Hiz:\n    def __init__(self): self._deger = 50\n    @{slot0}\n    def deger(self): return self._deger\n    @{slot1}.setter\n    def deger(self, v): self._deger = v",
    slots: ["slot0", "slot1"],
    options: ["property", "deger", "setter", "_deger"],
    validCombinations: [
      { slot0: "property", slot1: "deger" }
    ],
    output: "# (@property ve @deger.setter yapısı tanımlandı)"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Sınıf Üzerinden Ortak Değeri Güncelleme",
    summary: "Sınıf niteliğini tüm nesneler için tek seferde değiştirmek için atama doğrudan SınıfAdı üzerinden yapılır.",
    template: "class Ag: limit = 100\n{slot0}.limit = 200\na1 = Ag()\nprint(a1.{slot1})",
    slots: ["slot0", "slot1"],
    options: ["Ag", "limit", "a1", "Ag()"],
    validCombinations: [
      { slot0: "Ag", slot1: "limit" }
    ],
    output: "200"
  }
];

let currentStep23 = 0;
let userArrangeState23 = [];
let userFillState23 = {};

function initQuiz23() {
  loadQuestion23(currentStep23);
}

function loadQuestion23(index) {
  const q = quizData23[index];
  document.getElementById("step-badge-23").innerText = `Soru ${index + 1} / ${quizData23.length}`;
  document.getElementById("type-badge-23").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-23").style.width = `${((index + 1) / quizData23.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-23");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-23").innerText = q.title;
  
  const feedback = document.getElementById("feedback-23");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-23");
  outputContainer.style.display = "none";
  document.getElementById("code-output-23").innerText = "";
  
  document.getElementById("btn-check-23").style.display = "inline-block";
  document.getElementById("btn-next-23").style.display = "none";
  
  const workspace = document.getElementById("workspace-23");
  const pool = document.getElementById("options-pool-23");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState23 = [];
    renderArrangeWorkspace23();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange23(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState23 = {};
    q.slots.forEach(slot => userFillState23[slot] = null);
    renderFillWorkspace23();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption23(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange23(piece, btnElement) {
  userArrangeState23.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace23();
}

function removePieceFromArrange23(index) {
  const item = userArrangeState23[index];
  item.btnRef.classList.remove("used");
  userArrangeState23.splice(index, 1);
  renderArrangeWorkspace23();
}

function renderArrangeWorkspace23() {
  const workspace = document.getElementById("workspace-23");
  if (userArrangeState23.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState23.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml23(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange23(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot23 = null;

function renderFillWorkspace23() {
  const q = quizData23[currentStep23];
  const workspace = document.getElementById("workspace-23");
  let html = escapeHtml23(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState23[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot23('${slot}')">${escapeHtml23(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot23('${slot}')">${activeSlot23 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot23(slot) {
  activeSlot23 = slot;
  renderFillWorkspace23();
}

function selectFillOption23(val, btnElement) {
  const q = quizData23[currentStep23];
  let targetSlot = activeSlot23;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState23[s] === null);
  }
  
  if (targetSlot) {
    userFillState23[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot23 = null;
    renderFillWorkspace23();
  }
}

function clearSlot23(slot) {
  const pool = document.getElementById("options-pool-23");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState23[slot] = null;
  activeSlot23 = slot;
  renderFillWorkspace23();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer23() {
  const q = quizData23[currentStep23];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState23.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback23("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState23[s] !== null);
    if (!isAllFilled) {
      showFeedback23("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState23[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback23("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-23");
    const outputBox = document.getElementById("code-output-23");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-23").style.display = "none";
    document.getElementById("btn-next-23").style.display = "inline-block";
  } else {
    showFeedback23("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback23(msg, type) {
  const feedback = document.getElementById("feedback-23");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion23() {
  loadQuestion23(currentStep23);
}

function nextQuestion23() {
  if (currentStep23 < quizData23.length - 1) {
    currentStep23++;
    loadQuestion23(currentStep23);
  } else {
    document.getElementById("quiz-container-23").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Nesne Nitelikleri (Class vs Instance Attributes) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml23(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz23);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz23();
}
</script>
