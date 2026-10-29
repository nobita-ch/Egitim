/*
 * Sayfadaki <div class="yt-video" data-video="ID"> öğelerine YouTube oynatıcısı yerleştirir.
 * Video oynarken window.EGITIM_VIDEO_OYNUYOR = true olur; giris.js bu sürede
 * fare/klavye hareketi olmasa da süreyi saymaya devam eder.
 */
(function () {
  "use strict";
  var kutular = document.querySelectorAll(".yt-video[data-video]");
  if (!kutular.length) return;

  window.EGITIM_VIDEO_OYNUYOR = false;
  var oynayanlar = 0;

  function durumDegisti(olay) {
    var oynuyor = olay.data === 1 || olay.data === 3; // 1: oynatılıyor, 3: arabelleğe alınıyor
    var oncekiOynuyor = olay.target.__oynuyor === true;
    if (oynuyor !== oncekiOynuyor) {
      oynayanlar += oynuyor ? 1 : -1;
      olay.target.__oynuyor = oynuyor;
    }
    window.EGITIM_VIDEO_OYNUYOR = oynayanlar > 0;
  }

  function oynaticilariKur() {
    Array.prototype.forEach.call(kutular, function (kutu, i) {
      var ic = document.createElement("div");
      ic.id = "yt-oynatici-" + i;
      kutu.appendChild(ic);
      new YT.Player(ic.id, {
        videoId: kutu.getAttribute("data-video"),
        host: "https://www.youtube-nocookie.com",
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
        events: { onStateChange: durumDegisti }
      });
    });
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
