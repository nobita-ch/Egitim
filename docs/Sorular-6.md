<!-- PYTHON INTERACTIVE EXERCISES: STRINGS (METİN İŞLEMLERİ - TERMINAL ÇIKTILI) -->
<div id="quiz-container-6" class="interactive-quiz">
  <!-- Üst Bar / İlerleme -->
  <div class="quiz-header">
    <div class="quiz-step-info">
      <span id="step-badge-6" class="badge">Soru 1 / 10</span>
      <span id="type-badge-6" class="badge badge-type">Sıralama</span>
    </div>
    <div class="quiz-progress-bar">
      <div id="progress-fill-6" class="progress-fill"></div>
    </div>
  </div>

  <!-- Sabit Konu Bilgilendirme Kutusu (Sorunun Üstünde) -->
  <div id="topic-summary-6" class="summary-box"></div>

  <!-- Soru Alanı -->
  <div class="quiz-body">
    <h3 id="question-title-6" class="q-title"></h3>

    <!-- Kod / Boşluk Doldurma Konteyneri (Beyaz Arka Plan) -->
    <div id="workspace-6" class="workspace-box"></div>

    <!-- Doğru Cevap Sonrası Konsol/Terminal Çıktı Kutusu -->
    <div id="code-output-container-6" class="output-wrapper" style="display: none;">
      <div class="output-title">Terminal / Konsol Çıktısı:</div>
      <div id="code-output-6" class="output-box"></div>
    </div>

    <!-- Parça Havuzu -->
    <div id="pool-section-6">
      <div class="pool-header">Parçalar (Seçmek / Çıkarmak için dokunun):</div>
      <div id="options-pool-6" class="options-container"></div>
    </div>
  </div>

  <!-- Geri Bildirim ve Butonlar -->
  <div class="quiz-footer">
    <div id="feedback-6" class="feedback-msg"></div>
    <div class="action-buttons">
      <button id="btn-reset-6" class="btn btn-secondary" onclick="resetCurrentQuestion6()">Sıfırla</button>
      <button id="btn-check-6" class="btn btn-primary" onclick="checkAnswer6()">Kontrol Et</button>
      <button id="btn-next-6" class="btn btn-success" onclick="nextQuestion6()" style="display: none;">Sonraki Soru →</button>
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
// STRINGS (METİN İŞLEMLERİ) SORU HAVUZU VE ÇIKTI VERİLERİ
const quizData6 = [
  /* ================= 5 ADET SIRALAMA / TIKLA-BIRAK ================= */
  {
    type: "arrange",
    title: "1. String Dilimleme ile Metni Tersine Çevirme",
    summary: "Dilimleme sözdiziminde [::-1] adımı step değerini -1 yaparak string'i baştan sona tersine çevirir[cite: 6].",
    pieces: [
      "kelime = \"yazilim\"",
      "ters = kelime[::-1]",
      "print(ters)"
    ],
    solutions: [
      [
        "kelime = \"yazilim\"",
        "ters = kelime[::-1]",
        "print(ters)"
      ]
    ],
    output: "miliyaz"
  },
  {
    type: "arrange",
    title: "2. split() ile Bölme ve join() ile Birleştirme",
    summary: "split() metni belirtilen ayırıcıya göre listeye böler, join() ise bir listenin elemanlarını araya karakter koyarak tek bir metne birleştirir[cite: 6].",
    pieces: [
      "metin = \"elma-armut-muz\"",
      "meyveler = metin.split(\"-\")",
      "sonuc = \", \".join(meyveler)",
      "print(sonuc)"
    ],
    solutions: [
      [
        "metin = \"elma-armut-muz\"",
        "meyveler = metin.split(\"-\")",
        "sonuc = \", \".join(meyveler)",
        "print(sonuc)"
      ]
    ],
    output: "elma, armut, muz"
  },
  {
    type: "arrange",
    title: "3. strip() ile Boşluk Temizleme ve upper() Dönüşümü",
    summary: "strip() metnin başındaki ve sonundaki gereksiz boşlukları siler; upper() ise tüm harfleri büyük harfe çevirir[cite: 6].",
    pieces: [
      "ham_metin = \"   giris yapildi   \"",
      "temiz_metin = ham_metin.strip()",
      "print(temiz_metin.upper())"
    ],
    solutions: [
      [
        "ham_metin = \"   giris yapildi   \"",
        "temiz_metin = ham_metin.strip()",
        "print(temiz_metin.upper())"
      ]
    ],
    output: "GIRIS YAPILDI"
  },
  {
    type: "arrange",
    title: "4. format() Metodu ile Konumsal İndeks Kullanımı",
    summary: "str.format() yönteminde yer tutuculara {0}, {1} gibi konumsal indeksler verilerek argüman sırası belirlenebilir[cite: 6].",
    pieces: [
      "sablon = \"{1} dili ile {0} gelistirme\"",
      "mesaj = sablon.format(\"web\", \"Python\")",
      "print(mesaj)"
    ],
    solutions: [
      [
        "sablon = \"{1} dili ile {0} gelistirme\"",
        "mesaj = sablon.format(\"web\", \"Python\")",
        "print(mesaj)"
      ]
    ],
    output: "Python dili ile web gelistirme"
  },
  {
    type: "arrange",
    title: "5. replace() Metodu ile Metin Parçası Güncelleme",
    summary: "replace(eski, yeni) metodu orijinal metni değiştirmeden hedeflenen parçayı yenisiyle değiştirilmiş olarak döndürür[cite: 6].",
    pieces: [
      "cumle = \"merhaba dunya\"",
      "yeni_cumle = cumle.replace(\"dunya\", \"evren\")",
      "print(yeni_cumle)"
    ],
    solutions: [
      [
        "cumle = \"merhaba dunya\"",
        "yeni_cumle = cumle.replace(\"dunya\", \"evren\")",
        "print(yeni_cumle)"
      ]
    ],
    output: "merhaba evren"
  },

  /* ================= 5 ADET BOŞLUK DOLDURMA ================= */
  {
    type: "fill",
    title: "6. Boşluk Doldurma: String Uzunluğu (len) ve in Kontrolü",
    summary: "len() fonksiyonu toplam karakter sayısını döner; 'in' işleci ise bir alt metnin string içinde var olup olmadığını kontrol eder[cite: 6].",
    template: "bilgi = \"Veri Tabani\"\nuzunluk = {slot0}(bilgi)\nvar_mi = \"Veri\" {slot1} bilgi\nprint(uzunluk, var_mi)",
    slots: ["slot0", "slot1"],
    options: ["len", "in", "count", "is"],
    validCombinations: [
      { slot0: "len", slot1: "in" }
    ],
    output: "11 True"
  },
  {
    type: "fill",
    title: "7. Boşluk Doldurma: f-string Ondalık Biçimlendirici (:.2f)",
    summary: "f-string içinde ':.2f' format belirteci, ondalıklı sayının virgülden sonra sabit 2 basamak olarak yazdırılmasını sağlar[cite: 6].",
    template: "fiyat = 19.8564\nprint({slot0}\"Tutar: {fiyat{slot1}} TL\")",
    slots: ["slot0", "slot1"],
    options: ["f", ":.2f", ":2d", "str"],
    validCombinations: [
      { slot0: "f", slot1: ":.2f" }
    ],
    output: "Tutar: 19.86 TL"
  },
  {
    type: "fill",
    title: "8. Boşluk Doldurma: Kaçış Karakterleri (\\n ve \\t)",
    summary: "Ters bölü kaçış dizilerinden '\\n' yeni satıra geçmeyi, '\\t' ise bir sekme (tab) boşluğu bırakmayı sağlar[cite: 6].",
    template: "metin = \"Baslik{slot0}Alt Metin{slot1}Sutun 2\"\nprint(metin)",
    slots: ["slot0", "slot1"],
    options: ["\\n", "\\t", "/n", "/t"],
    validCombinations: [
      { slot0: "\\n", slot1: "\\t" }
    ],
    output: "Baslik\nAlt Metin\tSutun 2"
  },
  {
    type: "fill",
    title: "9. Boşluk Doldurma: startswith() ve endswith() Kontrolü",
    summary: "startswith() dize belirtilen metinle başlıyorsa, endswith() ise belirtilen uzantı/metinle bitiyorsa True döndürür[cite: 6].",
    template: "adres = \"https://python.org\"\nbaslangic = adres.{slot0}(\"https\")\nbitis = adres.{slot1}(\".org\")\nprint(baslangic, bitis)",
    slots: ["slot0", "slot1"],
    options: ["startswith", "endswith", "find", "index"],
    validCombinations: [
      { slot0: "startswith", slot1: "endswith" }
    ],
    output: "True True"
  },
  {
    type: "fill",
    title: "10. Boşluk Doldurma: f-string Hata Ayıklama Modu (= Belirteci)",
    summary: "f-string içinde değişken adının yanına '=' konulduğunda (örn: {deger=}) hem değişkenin adı hem de değeri ekrana yazılır[cite: 6].",
    template: "skor = 95\nprint(f\"{slot0}skor{slot1}{slot2}\")",
    slots: ["slot0", "slot1", "slot2"],
    options: ["{", "=", "}", ":", "$"],
    validCombinations: [
      { slot0: "{", slot1: "=", slot2: "}" }
    ],
    output: "skor=95"
  }
];

let currentStep6 = 0;
let userArrangeState6 = [];
let userFillState6 = {};

function initQuiz6() {
  loadQuestion6(currentStep6);
}

function loadQuestion6(index) {
  const q = quizData6[index];
  document.getElementById("step-badge-6").innerText = `Soru ${index + 1} / ${quizData6.length}`;
  document.getElementById("type-badge-6").innerText = q.type === "arrange" ? "Sıralama" : "Boşluk Doldurma";
  document.getElementById("progress-fill-6").style.width = `${((index + 1) / quizData6.length) * 100}%`;
  
  // Konu kuralı kutusu
  const summaryBox = document.getElementById("topic-summary-6");
  summaryBox.innerHTML = `<strong>Konu Bilgisi:</strong> ${q.summary}`;
  
  document.getElementById("question-title-6").innerText = q.title;
  
  const feedback = document.getElementById("feedback-6");
  feedback.innerText = "";
  feedback.className = "feedback-msg";

  // Terminal çıktısını gizle ve sıfırla
  const outputContainer = document.getElementById("code-output-container-6");
  outputContainer.style.display = "none";
  document.getElementById("code-output-6").innerText = "";
  
  document.getElementById("btn-check-6").style.display = "inline-block";
  document.getElementById("btn-next-6").style.display = "none";
  
  const workspace = document.getElementById("workspace-6");
  const pool = document.getElementById("options-pool-6");
  workspace.innerHTML = "";
  pool.innerHTML = "";
  
  if (q.type === "arrange") {
    userArrangeState6 = [];
    renderArrangeWorkspace6();
    
    const shuffled = [...q.pieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = piece;
      btn.onclick = () => addPieceToArrange6(piece, btn);
      pool.appendChild(btn);
    });
  } else if (q.type === "fill") {
    userFillState6 = {};
    q.slots.forEach(slot => userFillState6[slot] = null);
    renderFillWorkspace6();
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "code-chip";
      btn.innerText = opt;
      btn.dataset.rawVal = opt;
      btn.onclick = () => selectFillOption6(opt, btn);
      pool.appendChild(btn);
    });
  }
}

/* Sıralama Mantığı */
function addPieceToArrange6(piece, btnElement) {
  userArrangeState6.push({ text: piece, btnRef: btnElement });
  btnElement.classList.add("used");
  renderArrangeWorkspace6();
}

function removePieceFromArrange6(index) {
  const item = userArrangeState6[index];
  item.btnRef.classList.remove("used");
  userArrangeState6.splice(index, 1);
  renderArrangeWorkspace6();
}

function renderArrangeWorkspace6() {
  const workspace = document.getElementById("workspace-6");
  if (userArrangeState6.length === 0) {
    workspace.innerHTML = '<span style="color: #94a3b8; font-style: italic;">Seçeneklere dokunarak buraya ekleyin...</span>';
    return;
  }
  workspace.innerHTML = "";
  userArrangeState6.forEach((item, idx) => {
    const line = document.createElement("div");
    line.className = "sortable-line";
    line.innerHTML = `<span>${escapeHtml6(item.text)}</span> <span style="color:#ef4444; font-size:0.8rem; font-weight:600;">✕ Kaldır</span>`;
    line.onclick = () => removePieceFromArrange6(idx);
    workspace.appendChild(line);
  });
}

/* Boşluk Doldurma Mantığı */
let activeSlot6 = null;

function renderFillWorkspace6() {
  const q = quizData6[currentStep6];
  const workspace = document.getElementById("workspace-6");
  let html = escapeHtml6(q.template);
  
  q.slots.forEach((slot) => {
    const val = userFillState6[slot];
    const slotHtml = val 
      ? `<span class="code-slot filled" onclick="clearSlot6('${slot}')">${escapeHtml6(val)}</span>`
      : `<span class="code-slot" onclick="setActiveSlot6('${slot}')">${activeSlot6 === slot ? '?' : '___'}</span>`;
    html = html.replace(`{${slot}}`, slotHtml);
  });
  
  workspace.innerHTML = html;
}

function setActiveSlot6(slot) {
  activeSlot6 = slot;
  renderFillWorkspace6();
}

function selectFillOption6(val, btnElement) {
  const q = quizData6[currentStep6];
  let targetSlot = activeSlot6;
  if (!targetSlot) {
    targetSlot = q.slots.find(s => userFillState6[s] === null);
  }
  
  if (targetSlot) {
    userFillState6[targetSlot] = val;
    btnElement.classList.add("used");
    btnElement.dataset.assignedSlot = targetSlot;
    activeSlot6 = null;
    renderFillWorkspace6();
  }
}

function clearSlot6(slot) {
  const pool = document.getElementById("options-pool-6");
  const buttons = pool.querySelectorAll(".code-chip");
  buttons.forEach(b => {
    if (b.dataset.assignedSlot === slot) {
      b.classList.remove("used");
      delete b.dataset.assignedSlot;
    }
  });
  
  userFillState6[slot] = null;
  activeSlot6 = slot;
  renderFillWorkspace6();
}

/* Cevap Kontrolü ve Konsol Çıktısı Gösterme */
function checkAnswer6() {
  const q = quizData6[currentStep6];
  let isCorrect = false;

  if (q.type === "arrange") {
    const userAns = userArrangeState6.map(i => i.text);
    if (userAns.length !== q.pieces.length) {
      showFeedback6("Lütfen tüm parçaları yerleştirin.", "error");
      return;
    }
    isCorrect = q.solutions.some(sol => JSON.stringify(sol) === JSON.stringify(userAns));
  } else if (q.type === "fill") {
    const isAllFilled = q.slots.every(s => userFillState6[s] !== null);
    if (!isAllFilled) {
      showFeedback6("Lütfen boşlukları doldurun.", "error");
      return;
    }
    isCorrect = q.validCombinations.some(comb => {
      return q.slots.every(slot => userFillState6[slot] === comb[slot]);
    });
  }

  if (isCorrect) {
    showFeedback6("✓ Tebrikler! Kod doğru çalıştı.", "success");
    
    // Doğru cevap verildiğinde Terminal çıktısını ekranda göster
    const outputContainer = document.getElementById("code-output-container-6");
    const outputBox = document.getElementById("code-output-6");
    outputBox.innerText = q.output;
    outputContainer.style.display = "block";

    document.getElementById("btn-check-6").style.display = "none";
    document.getElementById("btn-next-6").style.display = "inline-block";
  } else {
    showFeedback6("✕ Yanlış seçim yapıldı. Üstteki konu bilgisini inceleyip tekrar deneyin.", "error");
  }
}

function showFeedback6(msg, type) {
  const feedback = document.getElementById("feedback-6");
  feedback.innerText = msg;
  feedback.className = `feedback-msg ${type}`;
}

function resetCurrentQuestion6() {
  loadQuestion6(currentStep6);
}

function nextQuestion6() {
  if (currentStep6 < quizData6.length - 1) {
    currentStep6++;
    loadQuestion6(currentStep6);
  } else {
    document.getElementById("quiz-container-6").innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <h2 style="color: #16a34a; margin-bottom: 0.5rem; font-size: 1.5rem;">Bölüm Tamamlandı 🎉</h2>
        <p style="color: #334155; font-size: 1rem;">String ve Metin İşlemleri konusundaki tüm alıştırmaları başarıyla bitirdiniz.</p>
      </div>
    `;
  }
}

function escapeHtml6(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initQuiz6);
if (document.readyState === "interactive" || document.readyState === "complete") {
  initQuiz6();
}
</script>
