# AGENTS.md — charlaVault

Materiales de una charla de 5 minutos sobre memoria externa para agentes:
sitio estático en HTML/CSS/JS, sin build, todo en español.

## Presentaciones

La skill instalada es **slide-wright** (`.agents/skills/slide-wright/`). Su flujo
—previsualizar direcciones, esperar aprobación, construir— se mantiene. Para este
proyecto se sustituyen estas reglas suyas:

| Regla de slide-wright | En este proyecto |
|---|---|
| reveal.js y fuentes por CDN | Motor local en `charla-memoria-externa/vendor/reveal/dist/` (356 KB). Solo tipografía del sistema. **Ningún `http(s)://` en el deck** |
| `.frame` sobre lienzo 1920×1080 | Se mantiene: `width:1920, height:1080, margin:0, center:false` |
| Cuerpo mínimo 28px | Se mantiene como suelo, pero manda la regla de 12 palabras |
| «Palabras grandes solas solo en separadores y cierre» | **Anulada.** S1, S7 y S14 son palabras grandes solas: es el recurso principal de la charla |
| Portada con título grande y firma | No hay portada con título: S1 abre en negro, sin nombre ni logo |
| Animación opcional | Solo fragmentos donde el guion los pide (S12: `REGLAS`) |
| Exportar a PPTX | No. PDF como respaldo |
| Inventar direcciones nuevas por mazo | Ya están en `charla-memoria-externa/slides-preview/`. No proponer otras sin que se pidan |

No editar `.agents/skills/slide-wright/**`: se reinstala con `npx skills add`.
Las excepciones viven en este archivo y en `charla-memoria-externa/brief-slides.md`.

### Configuración fija del deck

```js
Reveal.initialize({
  width: 1920, height: 1080, margin: 0, center: false,
  controls: false, progress: true, hash: true,
  transition: 'fade', transitionSpeed: 'fast',
  pdfSeparateFragments: false,
  plugins: [RevealNotes],
});
```

La barra de progreso va activa en **todas** las slides y en el acento: es la única
señal de recorrido del mazo. Arranca a cero en la portada y se llena en el cierre.
Nada de barras decorativas que aparezcan en tres slides y no avancen.

Paleta y tipos salen de `charla-memoria-externa/assets/style.css`:
`#0b0f14` fondo · `#e8eef5` tinta · `#5cc8ff` acento · `#1e2a35` líneas.
Segoe UI para texto, Cascadia Code/Consolas para archivos, prompts y números.

### Verificación antes de dar un mazo por bueno

1. `node .agents/skills/slide-wright/slide-wright/scripts/check-deck.mjs <deck.html> --sheet <carpeta>/sheet.png`
   y arreglar cada defecto que imprima, salvo estas dos excepciones esperadas:
   - *«fonts that did not load»*: usamos la pila del sistema, no hay fuentes web.
   - *«no signature on the title slide»*: S1 no lleva firma dibujada a propósito;
     es negro con dos líneas. Se acepta y se verifica a ojo en la hoja de contacto.
   Comprobado el 24/11 contra el motor vendoreado: el script arranca, detecta el
   deck y genera la hoja; solo devuelve esa segunda queja.
2. Abrir el deck y comprobar que no hay ninguna petición de red (DevTools → Network).
3. PDF de respaldo con `?print-pdf`; para decktape hace falta servidor local
   (`python -m http.server` en la carpeta del deck).
