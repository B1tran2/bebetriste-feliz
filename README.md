# Bebé triste / Bebé feliz - AR sin app

Proyecto web estático listo para GitHub Pages que abre AR desde QR sin app adicional. Compatible con iOS (AR Quick Look) y Android (Scene Viewer).

## Pasos para publicar

1. **Crea un repositorio en GitHub** llamado `bebetriste-feliz`.
2. **Copia estos archivos** (`index.html`, `triste.html`, `feliz.html`, `styles.css`, `script.js`, `README.md`) en la raíz del repo.
3. **Añade los 4 modelos 3D en la raíz** del repo con estos nombres exactos:
   - `bebe_triste.glb`
   - `bebe_triste.usdz`
   - `feliz_bebe.glb`
   - `feliz_bebe.usdz`
4. **Activa GitHub Pages**:
   - `Settings → Pages → Deploy from branch`
   - Branch: `main`
   - Folder: `/(root)`
5. **URLs finales (ejemplo)**:
   - `https://B1tran2.github.io/bebetriste-feliz/triste.html`
   - `https://TUUSUARIO.github.io/bebetriste-feliz/feliz.html`
6. **Crea 2 códigos QR** apuntando a esas URLs y compártelos.

---

### Notas
- El visor 3D usa `<model-viewer>` desde CDN oficial.
- Si un modelo no carga, se mostrará: **"Modelo no encontrado o no compatible"**.
- En escritorio, el botón de AR se desactiva con el mensaje: **"Abre esto en un móvil para AR"**.
- En móviles sin AR, se mostrará: **"AR no disponible en este dispositivo; usa el visor 3D"**.
