<!-- PYTHON INTERACTIVE EXERCISES: HATA YÖNETİMİ (TRY - EXCEPT - FINALLY) -->
<div id="quiz-container-19" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-19" class="badge">Soru 1 / 10</span>
      <span id="type-badge-19" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-19" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-19" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-19" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-19" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-19" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-19" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-19">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-19" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-19" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-19" class="btn btn-secondary" onclick="resetCurrentQuestion19()">Sıfırla</button>
      <button id="btn-check-19" class="btn btn-primary" onclick="checkAnswer19()">Kontrol Et</button>
      <button id="btn-next-19" class="btn btn-success" onclick="nextQuestion19()" style="display: none;">Sonraki Soru →</button>
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
// HATA YÖNETİMİ (EXCEPTIONS) KONUSU SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData19 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. Sıfıra Bölme Hatasını (ZeroDivisionError) Yakalama",
    summary: "try bloğundaki matematiksel sıfıra bölme hatası except ZeroDivisionError tarafından yakalanır.",
    pieces: [
      "try:",
      "    sonuc = 20 / 0",
      "except ZeroDivisionError:",
      "    print(\"Sıfıra bölünemez\")"
    ],
    solutions: [
      [
        "try:",
        "    sonuc = 20 / 0",
        "except ZeroDivisionError:",
        "    print(\"Sıfıra bölünemez\")"
      ]
    ],
    output: "Sıfıra bölünemez"
  },
  {
    type: "arrange",
    title: "2. try - except - else - finally Blok Hiyerarşisi",
    summary: "Hata çıkmazsa else bloğu devreye girer; finally bloğu ise her koşulda en son çalıştırılır.",
    pieces: [
      "try:",
      "    deger = int(\"40\")",
      "except ValueError:",
      "    print(\"Hata\")",
      "else:",
      "    print(\"Dönüşüm Başarılı\")",
      "finally:",
      "    print(\"İşlem Sona Erdi\")"
    ],
    solutions: [
      [
        "try:",
        "    deger = int(\"40\")",
        "except ValueError:",
        "    print(\"Hata\")",
        "else:",
        "    print(\"Dönüşüm Başarılı\")",
        "finally:",
        "    print(\"İşlem Sona Erdi\")"
      ]
    ],
    output: "Dönüşüm Başarılı\nİşlem Sona Erdi"
  },
  {
    type: "arrange",
    title: "3. raise ile Koşullu ValueError Fırlatma",
    summary: "raise anahtar kelimesiyle belirli bir kural bozulduğunda bilinçli olarak istisna fırlatılır.",
    pieces: [
      "puan = -5",
      "try:",
      "    if puan < 0:",
      "        raise ValueError(\"Puan negatif olamaz\")",
      "except ValueError as e:",
      "    print(e)"
    ],
    solutions: [
      [
        "puan = -5",
        "try:",
        "    if puan < 0:",
        "        raise ValueError(\"Puan negatif olamaz\")",
        "except ValueError as e:",
        "    print(e)"
      ]
    ],
    output: "Puan negatif olamaz"
  },
  {
    type: "arrange",
    title: "4. Hataları Demet Halinde Gruplayarak Yakalama",
    summary: "Birden fazla hata türü parantez içinde virgülle ayrılarak tek bir except bloğunda yakalanabilir.",
    pieces: [
      "try:",
      "    x = int(\"metin\")",
      "except (ValueError, TypeError, ZeroDivisionError):",
      "    print(\"Geçersiz veri veya işlem\")"
    ],
    solutions: [
      [
        "try:",
        "    x = int(\"metin\")",
        "except (ValueError, TypeError, ZeroDivisionError):",
        "    print(\"Geçersiz veri veya işlem\")"
      ]
    ],
    output: "Geçersiz veri veya işlem"
  },
  {
    type: "arrange",
    title: "5. Özel Hata Sınıfı (Custom Exception) Oluşturma ve Yakalama",
    summary: "Exception sınıfından türetilen özel sınıflar raise ile tetiklenir ve except ile yakalanır.",
    pieces: [
      "class LimitHatasi(Exception): pass",
      "try:",
      "    raise LimitHatasi(\"Aşıldı\")",
      "except LimitHatasi as h:",
      "    print(f\"Özel İstisna: {h}\")"
    ],
    solutions: [
      [
        "class LimitHatasi(Exception): pass",
        "try:",
        "    raise LimitHatasi(\"Aşıldı\")",
        "except LimitHatasi as h:",
        "    print(f\"Özel İstisna: {h}\")"
      ]
    ],
    output: "Özel İstisna: Aşıldı"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: try ve except Blok Başlatıcıları",
    summary: "Hata yakalama kurgusunda riskli kodlar 'try:', yakalama işlemi 'except:' ile tanımlanır.",
    template: "{slot0}:\n    sayi = int(\"abc\")\n{slot1} ValueError:\n    print(\"Sayıya çevrilemedi\")",
    slots: ["slot0", "slot1"],
    options: ["try", "except", "catch", "finally"],
    validCombinations: [
      { slot0: "try", slot1: "except" }
    ],
    output: "Sayıya çevrilemedi"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: finally Bloğunun Her Durumda Çalışması",
    summary: "finally bloğu try içinde hata oluşsa da oluşmasa da mutlaka en son çalışır.",
    template: "try:\n    x = 10\n{slot0}:\n    print(\"Temizlik {slot1}\")",
    slots: ["slot0", "slot1"],
    options: ["finally", "Yapıldı", "else", "except"],
    validCombinations: [
      { slot0: "finally", slot1: "Yapıldı" }
    ],
    output: "Temizlik Yapıldı"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: raise ile TypeError Fırlatma",
    summary: "Tür uyumsuzluklarında bilinçli olarak TypeError fırlatmak için 'raise' anahtar kelimesi kullanılır.",
    template: "veri = 3.14\nif not isinstance(veri, int):\n    {slot0} {slot1}(\"Tam sayı bekleniyordu\")",
    slots: ["slot0", "slot1"],
    options: ["raise", "TypeError", "throw", "ValueError"],
    validCombinations: [
      { slot0: "raise", slot1: "TypeError" }
    ],
    output: "# (TypeError: Tam sayı bekleniyordu hatası üretilir)"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: else Bloğunun Hatasız Durumda Tetiklenmesi",
    summary: "try bloğunda hiçbir hata fırlatılmadığı zaman 'else:' bloğu çalıştırılır.",
    template: "try:\n    toplam = 15 + 25\nexcept Exception:\n    print(\"Hata\")\n{slot0}:\n    print(\"Sonuc: \", {slot1})",
    slots: ["slot0", "slot1"],
    options: ["else", "toplam", "finally", "toplam + 1"],
    validCombinations: [
      { slot0: "else", slot1: "toplam" }
    ],
    output: "Sonuc:  40"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: Exception Sınıfından Kalıtım Alma",
    summary: "Kullanıcı tanımlı özel bir hata sınıfı oluştururken yerleşik 'Exception' sınıfından miras alınır.",
    template: "class BaglantiHatasi({slot0}):\n    pass\n\ntry:\n    raise BaglantiHatasi(\"Koptu\")\nexcept {slot1} as e:\n    print(e)",
    slots: ["slot0", "slot1"],
    options: ["Exception", "BaglantiHatasi", "BaseError", "Error"],
    validCombinations: [
      { slot0: "Exception", slot1: "BaglantiHatasi" }
    ],
    output: "Koptu"
  }
];

let currentStep19 = 0;
let userArrangeState19 = [];
let userFillState19 = {};

function initQuiz19() {
  loadQuestion19(currentStep19);
}

function loadQuestion19(index) {
  const q = quizData19[index];
  document.getElementById("step-badge-19").innerText = `Soru ${index + 1} / ${quizData19.length}`;
  document.getElementById("type-badge-19").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-19").style.width = `${((index + 1) / quizData19.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-19");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-19").innerText = q.title;
  
  const feedback = document.getElementById("feedback-19");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-19");
  outputContainer.style.display = "none";
  document.getElementById("code-output-19").innerText = "";
  
  document.getElementById("btn-check-19").style.display = "inline-block";
  document.getElementById("btn-next-19").style.display = "none";
  
  const workspace = document.getElementById("workspace-19");
  const pool = document.getElementById("options-pool-19");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState19 = [];
    renderArrangeWorkspace19();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange19(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState19 = {};
    q.slots.forEach(slot => userFillState19[slot] = null);
    renderFillWorkspace19();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption19(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange19(piece, btnElement) {
  userArrangeState19.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace19();
}

function removePieceFromArrange19(index) {
  const item = userArrangeState19[index];
  item.btnRef.classList.remove("used");
  userArrangeState19.splice(index, 1);
  renderArrangeWorkspace19();
}

function renderArrangeWorkspace19() {
  const workspace = document.getElementById("workspace-19");
  if (userArrangeState19.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState19.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml19(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange19(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot19 = null;

function renderFillWorkspace19() {
  const q = quizData19[currentStep19];
  const workspace = document.getElementById("workspace-19");
  let html = escapeHtml19(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState19[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot19('${slot}')">${escapeHtml19(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot19('${slot}')">${activeSlot19 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot19(slot) {
  activeSlot19 = slot;
  renderFillWorkspace19();
}

function selectFillOption19(val, btnElement) {
  const q = quizData19[currentStep19];
  let targetSlot = activeSlot19;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState19[s] === null);
  }
  
  if (targetSlot) {
    userFillState19[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot19 = null;
    renderFillWorkspace19();
  }
}

function clearSlot19(slot) {
  const pool = document.getElementById("options-pool-19");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState19[slot] = null;
  activeSlot19 = slot;
  renderFillWorkspace19();
}

/* Cevap Kontrolü ve Terminal Çıktısı Gösterme */
function checkAnswer19() {
  const q = quizData19[currentStep19];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState19.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback19("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState19[s] !== null);
    if (!isAllFilled) {
      showFeedback19("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState19[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback19("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-19");
    const outputBox = document.getElementById("code-output-19");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-19").style.display = "none";
    document.getElementById("btn-next-19").style.display = "inline-block";
  } else {
    showFeedback19("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback19(msg, type) {
  const feedback = document.getElementById("feedback-19");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion19() {
  loadQuestion19(currentStep19);
}

function nextQuestion19() {
  if (currentStep19 < quizData19.length - 1) {
    currentStep19++;
    loadQuestion19(currentStep19);
  } else {
    document.getElementById("quiz-container-19").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">Hata ve İstisna Yönetimi (Exceptions) konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml19(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz19);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz19();
}
</script>
