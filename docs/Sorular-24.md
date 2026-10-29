<!-- PYTHON INTERACTIVE EXERCISES: KAPSÜLLEME (ENCAPSULATION) -->
<div id="quiz-container-27" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-27" class="badge">Soru 1 / 10</span>
      <span id="type-badge-27" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-27" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-27" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-27" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-27" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-27" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-27" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-27">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-27" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-27" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-27" class="btn btn-secondary" onclick="resetCurrentQuestion27()">Sıfırla</button>
      <button id="btn-check-27" class="btn btn-primary" onclick="checkAnswer27()">Kontrol Et</button>
      <button id="btn-next-27" class="btn btn-success" onclick="nextQuestion27()" style="display: none;">Sonraki Soru →</button>
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
// KAPSÜLLEME (ENCAPSULATION) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData27 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Özel (Private) Nitelik ve Getter/Setter ile Doğrulama",
    summary: "Başına çift alt çizgi (__) alan nitelikler private olur; değer atamaları setter metoduyla doğrulanarak güvenli yapılır[cite: 21].",
    pieces: [
      "class Hesap:",
      "    def __init__(self): self.__bakiye = 100",
      "    def bakiye_guncelle(self, m):",
      "        if m >= 0: self.__bakiye = m",
      "    def bakiye_al(self): return self.__bakiye",
      "h = Hesap(); h.bakiye_guncelle(250); print(h.bakiye_al())"
    ],
    solutions: [
      [
        "class Hesap:",
        "    def __init__(self): self.__bakiye = 100",
        "    def bakiye_guncelle(self, m):",
        "        if m >= 0: self.__bakiye = m",
        "    def bakiye_al(self): return self.__bakiye",
        "h = Hesap(); h.bakiye_guncelle(250); print(h.bakiye_al())"
      ]
    ],
    output: "250"
  },
  {
    type: "arrange",
    title: "2. Name Mangling ile Arka Planda İsim Dönüşümü",
    summary: "Python __nitelik tanımlarını arka planda '_SinifAdi__nitelik' formatına dönüştürür[cite: 21].",
    pieces: [
      "class Kasa:",
      "    def __init__(self, sifre): self.__sifre = sifre",
      "k = Kasa(\"Gizli99\")",
      "print(k._Kasa__sifre)"
    ],
    solutions: [
      [
        "class Kasa:",
        "    def __init__(self, sifre): self.__sifre = sifre",
        "k = Kasa(\"Gizli99\")",
        "print(k._Kasa__sifre)"
      ]
    ],
    output: "Gizli99"
  },
  {
    type: "arrange",
    title: "3. @property ve @setter ile Pythonik Kapsülleme",
    summary: "@property değişken gibi okumayı sağlarken, @nitelik.setter atama anında doğrulama mantığını çalıştırır[cite: 21].",
    pieces: [
      "class Sensor:",
      "    def __init__(self, isi): self.__isi = isi",
      "    @property",
      "    def isi(self): return self.__isi",
      "    @isi.setter",
      "    def isi(self, v): self.__isi = v if v > 0 else 0",
      "s = Sensor(20); s.isi = -10; print(s.isi)"
    ],
    solutions: [
      [
        "class Sensor:",
        "    def __init__(self, isi): self.__isi = isi",
        "    @property",
        "    def isi(self): return self.__isi",
        "    @isi.setter",
        "    def isi(self, v): self.__isi = v if v > 0 else 0",
        "s = Sensor(20); s.isi = -10; print(s.isi)"
      ]
    ],
    output: "0"
  },
  {
    type: "arrange",
    title: "4. Yalnızca Okunabilir (Read-Only) Nitelik Tasarımı",
    summary: "Bir özelliğe yalnızca @property tanımlayıp @setter eklenmezse dışarıdan değiştirilemeyen salt-okunur nitelik elde edilir[cite: 21].",
    pieces: [
      "class Kimlik:",
      "    def __init__(self, uid): self.__uid = uid",
      "    @property",
      "    def uid(self): return self.__uid",
      "k = Kimlik(1042); print(k.uid)"
    ],
    solutions: [
      [
        "class Kimlik:",
        "    def __init__(self, uid): self.__uid = uid",
        "    @property",
        "    def uid(self): return self.__uid",
        "k = Kimlik(1042); print(k.uid)"
      ]
    ],
    output: "1042"
  },
  {
    type: "arrange",
    title: "5. Private Metot ile Dahili İşlem Gizleme",
    summary: "Sınıf dışından erişilemeyen __metot() fonksiyonları dahili hesaplama ve doğrulama için sınıf içi metotlarca çağrılır[cite: 21].",
    pieces: [
      "class Islemci:",
      "    def __formatla(self, metin): return metin.strip().upper()",
      "    def calistir(self, veri): return self.__formatla(veri)",
      "p = Islemci(); print(p.calistir(\" python \"))"
    ],
    solutions: [
      [
        "class Islemci:",
        "    def __formatla(self, metin): return metin.strip().upper()",
        "    def calistir(self, veri): return self.__formatla(veri)",
        "p = Islemci(); print(p.calistir(\" python \"))"
      ]
    ],
    output: "PYTHON"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: Tam Özel (Private) Nitelik Belirteci",
    summary: "Python'da tam-özel (private) nitelik tanımlamak için değişken adının başına iki adet alt çizgi (__) konur[cite: 21].",
    template: "class Profil:\n    def __init__(self, pin):\n        self.{slot0}pin = pin\n\np = Profil(1234)\nprint(hasattr(p, \"{slot1}\"))",
    slots: ["slot0", "slot1"],
    options: ["__", "__pin", "_", "pin"],
    validCombinations: [
      { slot0: "__", slot1: "__pin" }
    ],
    output: "False"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: @property Getter Tanımı",
    summary: "Getter oluşturmak için ilgili metodun başına '@property' dekoratörü eklenir[cite: 21].",
    template: "class Cihaz:\n    def __init__(self, volt): self.__volt = volt\n    @{slot0}\n    def volt(self): return self.__{slot1}\n\nc = Cihaz(220); print(c.volt)",
    slots: ["slot0", "slot1"],
    options: ["property", "volt", "getter", "setter"],
    validCombinations: [
      { slot0: "property", slot1: "volt" }
    ],
    output: "220"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: @setter Dekoratörü ile Değer Atama",
    summary: "Özellik üzerinde değer yazılmasını denetlemek için '@nitelik.setter' yapısı kullanılır[cite: 21].",
    template: "class Hiz:\n    def __init__(self): self.__val = 0\n    @property\n    def val(self): return self.__val\n    @{slot0}.{slot1}\n    def val(self, v): self.__val = v\n\nh = Hiz(); h.val = 80; print(h.val)",
    slots: ["slot0", "slot1"],
    options: ["val", "setter", "property", "val.setter"],
    validCombinations: [
      { slot0: "val", slot1: "setter" }
    ],
    output: "80"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: Name Mangling Formatı",
    summary: "Private değişkenlere Name Mangling gereği '_SinifAdi__nitelik' kalıbıyla erişilebilir[cite: 21].",
    template: "class Depo:\n    def __init__(self): self.__kod = \"A1\"\n\nd = Depo()\nprint(d._{slot0}__{slot1})",
    slots: ["slot0", "slot1"],
    options: ["Depo", "kod", "d", "__kod"],
    validCombinations: [
      { slot0: "Depo", slot1: "kod" }
    ],
    output: "A1"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: @deleter Dekoratörü ile Nitelik Silme",
    summary: "del nesne.nitelik komutu çalıştırıldığında tetiklenmesi için '@nitelik.deleter' kullanılır[cite: 21].",
    template: "class Veri:\n    def __init__(self): self.__v = 10\n    @property\n    def v(self): return self.__v\n    @{slot0}.{slot1}\n    def v(self): self.__v = 0\n\nx = Veri(); del x.v; print(x.v)",
    slots: ["slot0", "slot1"],
    options: ["v", "deleter", "del", "setter"],
    validCombinations: [
      { slot0: "v", slot1: "deleter" }
    ],
    output: "0"
  }
];

let currentStep27 = 0;
let userArrangeState27 = [];
let userFillState27 = {};

function initQuiz27() {
  loadQuestion27(currentStep27);
}

function loadQuestion27(index) {
  const q = quizData27[index];
  document.getElementById("step-badge-27").innerText = `Soru ${index + 1} / ${quizData27.length}`;
  document.getElementById("type-badge-27").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-27").style.width = `${((index + 1) / quizData27.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-27");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-27").innerText = q.title;
  
  const feedback = document.getElementById("feedback-27");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-27");
  outputContainer.style.display = "none";
  document.getElementById("code-output-27").innerText = "";
  
  document.getElementById("btn-check-27").style.display = "inline-block";
  document.getElementById("btn-next-27").style.display = "none";
  
  const workspace = document.getElementById("workspace-27");
  const pool = document.getElementById("options-pool-27");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState27 = [];
    renderArrangeWorkspace27();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange27(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState27 = {};
    q.slots.forEach(slot => userFillState27[slot] = null);
    renderFillWorkspace27();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption27(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange27(piece, btnElement) {
  userArrangeState27.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace27();
}

function removePieceFromArrange27(index) {
  const item = userArrangeState27[index];
  item.btnRef.classList.remove("used");
  userArrangeState27.splice(index, 1);
  renderArrangeWorkspace27();
}

function renderArrangeWorkspace27() {
  const workspace = document.getElementById("workspace-27");
  if (userArrangeState27.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState27.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml27(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange27(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot27 = null;

function renderFillWorkspace27() {
  const q = quizData27[currentStep27];
  const workspace = document.getElementById("workspace-27");
  let html = escapeHtml27(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState27[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot27('${slot}')">${escapeHtml27(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot27('${slot}')">${activeSlot27 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot27(slot) {
  activeSlot27 = slot;
  renderFillWorkspace27();
}

function selectFillOption27(val, btnElement) {
  const q = quizData27[currentStep27];
  let targetSlot = activeSlot27;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState27[s] === null);
  }
  
  if (targetSlot) {
    userFillState27[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot27 = null;
    renderFillWorkspace27();
  }
}

function clearSlot27(slot) {
  const pool = document.getElementById("options-pool-27");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState27[slot] = null;
  activeSlot27 = slot;
  renderFillWorkspace27();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer27() {
  const q = quizData27[currentStep27];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState27.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback27("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState27[s] !== null);
    if (!isAllFilled) {
      showFeedback27("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState27[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback27("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-27");
    const outputBox = document.getElementById("code-output-27");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-27").style.display = "none";
    document.getElementById("btn-next-27").style.display = "inline-block";
  } else {
    showFeedback27("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback27(msg, type) {
  const feedback = document.getElementById("feedback-27");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion27() {
  loadQuestion27(currentStep27);
}

function nextQuestion27() {
  if (currentStep27 < quizData27.length - 1) {
    currentStep27++;
    loadQuestion27(currentStep27);
  } else {
    document.getElementById("quiz-container-27").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Kapsülleme (Encapsulation & @property) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml27(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz27);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz27();
}
</script>
