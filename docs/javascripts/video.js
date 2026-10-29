/*
 * Sayfadaki <div class="yt-video" data-video="ID"> öğelerine YouTube oynatıcısı yerleştirir
 * ve videonun GERÇEKTEN oynadığı süreyi ölçer.
 *
 * Her saniye videonun zaman konumuna bakılır; yalnızca video ilerlediyse o ilerleme
 * sayılır. Böylece yükleme (buffering), reklam, duraklatma ve ileri sarma sayılmaz.
 *
 *   window.EGITIM_VIDEO_OYNUYOR  -> şu an video ilerliyor mu (giris.js hareketsizlik için kullanır)
 *   window.EGITIM_VIDEO_SANIYE   -> gönderilmeyi bekleyen izlenmiş video saniyesi (giris.js okur)
 */
(function () {
  "use strict";
  var kutular = document.querySelectorAll(".yt-video[data-video]");
  if (!kutular.length) return;

  var EN_FAZLA_ADIM = 2.5; // 1 sn'de en fazla bu kadar ilerleme sayılır (2x hız dahil); fazlası ileri sarmadır

  window.EGITIM_VIDEO_OYNUYOR = false;
  window.EGITIM_VIDEO_SANIYE = 0;
  var oynaticilar = [];

  function olc() {
    var ilerliyor = false;
    oynaticilar.forEach(function (p) {
      var oynatiliyor = false;
      try { oynatiliyor = p.getPlayerState() === 1; } catch (e) { /* henüz hazır değil */ }
      if (!oynatiliyor) { p.__sonKonum = null; return; }
      var konum = p.getCurrentTime();
      if (typeof p.__sonKonum === "number") {
        var adim = konum - p.__sonKonum;
        if (adim > 0 && adim <= EN_FAZLA_ADIM) {
          window.EGITIM_VIDEO_SANIYE += adim;
          ilerliyor = true;
        }
      }
      p.__sonKonum = konum;
    });
    window.EGITIM_VIDEO_OYNUYOR = ilerliyor;
  }

  function oynaticilariKur() {
    Array.prototype.forEach.call(kutular, function (kutu, i) {
      var ic = document.createElement("div");
      ic.id = "yt-oynatici-" + i;
      kutu.appendChild(ic);
      oynaticilar.push(new YT.Player(ic.id, {
        videoId: kutu.getAttribute("data-video"),
        host: "https://www.youtube-nocookie.com",
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1 }
      }));
    });
    setInterval(olc, 1000);
  }

  if (window.YT && window.YT.Player) {
    oynaticilariKur();
  } else {
    var onceki = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof onceki === "function") onceki();
      oynaticilariKur();
    };
    var s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.async = true;
    document.head.appendChild(s);
  }
})();
