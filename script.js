const ua = navigator.userAgent || navigator.vendor || window.opera;
const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isAndroid = /Android/i.test(ua);

const arButton = document.querySelector("[data-ar-button]");
const statusMessage = document.querySelector("[data-status-message]");
const arLink = document.querySelector(".ar-link[rel='ar']");
const modelViewer = document.querySelector("model-viewer");
const errorMessage = document.querySelector("[data-error-message]");

const getAbsoluteModelUrl = (fileName) => {
  const baseUrl = new URL(".", window.location.href);
  return new URL(fileName, baseUrl).href;
};

const showStatus = (message) => {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.hidden = false;
};

const disableAR = (message) => {
  if (arButton) {
    arButton.disabled = true;
  }
  showStatus(message);
};

if (modelViewer && errorMessage) {
  modelViewer.addEventListener("error", () => {
    errorMessage.hidden = false;
  });
}

if (arButton && arLink) {
  arButton.addEventListener("click", () => {
    if (isIOS) {
      arLink.click();
      return;
    }

    if (isAndroid) {
      const glbUrl = getAbsoluteModelUrl(modelViewer?.getAttribute("src") || "");
      const encodedUrl = encodeURIComponent(glbUrl);
      const intentUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${encodedUrl}&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;`;
      const fallbackUrl = `https://arvr.google.com/scene-viewer/1.0?file=${encodedUrl}&mode=ar_only`;

      window.location.href = intentUrl;

      setTimeout(() => {
        window.location.href = fallbackUrl;
      }, 1200);
      return;
    }

    disableAR("AR no disponible en este dispositivo; usa el visor 3D");
  });

  if (!isIOS && !isAndroid) {
    disableAR("Abre esto en un móvil para AR");
  }
}
