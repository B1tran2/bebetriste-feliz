# Bebé feliz / bebé triste (3D + AR + modo vídeo)

Proyecto estático para GitHub Pages con prioridad en móviles:
- Visor 3D con `<model-viewer>`.
- AR cuando el dispositivo/navegador lo soporte.
- Fallback sin instalación con **Modo vídeo** para que nadie se quede sin ver contenido.

## Archivos que debes subir (lista exacta)

HTML/CSS/JS:
- `index.html`
- `feliz.html`
- `triste.html`
- `styles.css`
- `script.js`
- `README.md`

Modelos 3D (ya existentes):
- `bebe_triste.glb`
- `bebe_triste.usdz`
- `feliz_bebe.glb`
- `feliz_bebe.usdz`

Vídeos/posters (nuevos):
- `feliz.mp4`
- `triste.mp4`
- `poster_feliz.jpg` (opcional recomendado)
- `poster_triste.jpg` (opcional recomendado)

> Todos estos archivos van en la **raíz** del repositorio.

## Publicación en GitHub Pages

1. Crea (o usa) el repositorio `bebetriste-feliz`.
2. Sube todos los archivos anteriores a la rama `main`.
3. Ve a `Settings` → `Pages`.
4. En `Build and deployment`, selecciona:
   - `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
5. Guarda y espera el despliegue.

## URLs finales (ejemplo)

- `https://TUUSUARIO.github.io/bebetriste-feliz/`
- `https://TUUSUARIO.github.io/bebetriste-feliz/feliz.html`
- `https://TUUSUARIO.github.io/bebetriste-feliz/triste.html`
- Atajos directos a vídeo:
  - `https://TUUSUARIO.github.io/bebetriste-feliz/feliz.html?mode=video`
  - `https://TUUSUARIO.github.io/bebetriste-feliz/triste.html?mode=video`

## Recomendaciones importantes

- Si en **Samsung** no abre AR, prueba en **Chrome para Android**.
- En **iPhone**, la animación en AR depende del `.usdz`; si aparece estático, usa **Modo vídeo**.
- Si el 3D no carga o AR no está disponible, el sitio muestra opción de vídeo para mantener una experiencia fluida.
