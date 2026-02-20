const ua = navigator.userAgent || "";
const platform = navigator.platform || "";
const isIOS = /iPhone|iPad|iPod/i.test(ua) || (platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isAndroid = /Android/i.test(ua);
const isMobile = isIOS || isAndroid;
const isSamsungInternet = /SamsungBrowser/i.test(ua);

const page = document.querySelector("[data-page]");
const modelViewer = document.querySelector("model-viewer");
const deviceNote = document.querySelector("[data-device-note]");
const arNote = document.querySelector("[data-ar-note]");
const modelError = document.querySelector("[data-model-error]");
const viewerCard = document.querySelector("[data-viewer-card]");
const openVideoButton = document.querySelector("[data-open-video]");
const closeVideoButton = document.querySelector("[data-close-video]");
const fullscreenButton = document.querySelector("[data-fullscreen]");
const videoOverlay = document.querySelector("[data-video-overlay]");
const videoElement = document.querySelector("video[data-video]");
const arSlotButton = modelViewer?.querySelector("[slot='ar-button']");

const showMessage = (node, text) => {
  if (!node) return;
  node.textContent = text;
  node.hidden = false;
};

const toVideoPriority = (message) => {
  document.body.classList.add("video-priority");
  showMessage(arNote, message);
};

const ensureVideoSource = () => {
  if (!videoElement) return;
  if (!videoElement.getAttribute("src")) {
    const src = videoElement.dataset.src;
    if (src) {
      videoElement.src = src;
      videoElement.load();
    }
  }
};

const openVideoMode = async () => {
  if (!videoOverlay || !videoElement) return;
  ensureVideoSource();
  videoOverlay.hidden = false;
  videoOverlay.setAttribute("aria-hidden", "false");

  try {
    await videoElement.play();
  } catch {
    showMessage(arNote, "Pulsa play para iniciar el vídeo.");
  }
};

const closeVideoMode = () => {
  if (!videoOverlay || !videoElement) return;
  videoOverlay.hidden = true;
  videoOverlay.setAttribute("aria-hidden", "true");
  videoElement.pause();
};

const setHappyDefaultAnimation = () => {
  if (!modelViewer || page?.dataset.page !== "feliz") return;

  const applyAnimation = () => {
    const names = modelViewer.availableAnimations || [];
    if (names.length > 1) {
      modelViewer.animationName = names[1];
      modelViewer.autoplay = true;
      modelViewer.play({ repetitions: Infinity });
    }
  };

  modelViewer.addEventListener("load", applyAnimation, { once: true });
};

const evaluateARSupport = () => {
  if (!modelViewer || !arSlotButton) return;

  if (!isMobile) {
    document.body.classList.add("no-ar");
    toVideoPriority("Abre esto en móvil para AR. Aquí tienes modo vídeo.");
    return;
  }

  if (isSamsungInternet) {
    showMessage(deviceNote, "En Samsung Internet puede fallar AR. Si pasa, abre esta página en Chrome.");
  }

  setTimeout(() => {
    const canAR = Boolean(modelViewer.canActivateAR);
    if (!canAR) {
      document.body.classList.add("no-ar");
      toVideoPriority("AR no disponible en este dispositivo; usa el modo vídeo.");
    }
  }, 500);
};

if (modelViewer) {
  modelViewer.addEventListener("error", () => {
    if (modelError) {
      modelError.hidden = false;
    }
    if (viewerCard) {
      viewerCard.hidden = true;
    }
    toVideoPriority("No se pudo cargar el 3D. Mostramos el modo vídeo.");
    openVideoMode();
  });

  setHappyDefaultAnimation();
  evaluateARSupport();
}

openVideoButton?.addEventListener("click", openVideoMode);
closeVideoButton?.addEventListener("click", closeVideoMode);

fullscreenButton?.addEventListener("click", async () => {
  if (!videoElement) return;
  ensureVideoSource();
  if (videoElement.requestFullscreen) {
    await videoElement.requestFullscreen();
  }
});

if (new URLSearchParams(window.location.search).get("mode") === "video") {
  openVideoMode();
}
