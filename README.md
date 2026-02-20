# Bebé feliz / bebé triste (3D + AR + vídeo siempre disponible)

Proyecto estático para GitHub Pages (sin build tools):
- Visor 3D con `<model-viewer>`.
- AR cuando el dispositivo/navegador lo soporta.
- Fallback garantizado con vídeo: **inline siempre visible** + overlay “Modo vídeo” + enlace directo al MP4.

## Archivos que debes subir (lista exacta)

HTML/CSS/JS:
- `index.html`
- `feliz.html`
- `triste.html`
- `styles.css`
- `script.js`
- `README.md`

Modelos 3D:
- `feliz_bebe.glb`
- `feliz_bebe.usdz`
- `bebe_triste.glb`
- `bebe_triste.usdz`

Vídeos:
- `feliz.mp4`
- `triste.mp4`

No hay posters/miniaturas en esta versión.

> Todo debe ir en la **raíz** del repositorio.

## Publicación en GitHub Pages

1. Crea (o usa) el repo `bebetriste-feliz`.
2. Sube todos los archivos a la rama `main`.
3. Ve a `Settings` → `Pages`.
4. En `Build and deployment` selecciona:
   - `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
5. Guarda y espera el despliegue.

## URLs finales (ejemplo)

- `https://TUUSUARIO.github.io/bebetriste-feliz/`
- `https://TUUSUARIO.github.io/bebetriste-feliz/feliz.html`
- `https://TUUSUARIO.github.io/bebetriste-feliz/triste.html`

Atajos directos al overlay de vídeo (siguen funcionando):
- `https://TUUSUARIO.github.io/bebetriste-feliz/feliz.html?mode=video`
- `https://TUUSUARIO.github.io/bebetriste-feliz/triste.html?mode=video`

## Compatibilidad y fallback

- El vídeo inline está siempre disponible y no depende de JavaScript.
- Cada página incluye enlace directo al MP4: **“Abrir vídeo en otra pestaña”**.
- En Samsung Internet puede fallar AR; abre la misma URL en Chrome.
- En iPhone la animación en AR depende del USDZ; usa modo vídeo si queda estático.
- Si falla el 3D o AR, la experiencia principal sigue siendo el vídeo.
