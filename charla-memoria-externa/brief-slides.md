# Brief de diapositivas — memoria externa

Especificación de slide para slide. **El texto literal que se dice está en
[`guion-v3.md`](guion-v3.md)**; aquí solo va lo que la slide muestra y lo que el
agente necesita para construirla.

- Deck: `charla-memoria-externa/slides/index.html` (un archivo, sin build).
- Motor: `../vendor/reveal/dist/` (reveal.js 6.0.1 local, sin CDN).
- Capturas: `../recursos/`.
- Configuración y paleta: ver `AGENTS.md`.

## Reglas no negociables

1. **12 palabras por slide como máximo.** Ni una viñeta. Las únicas excepciones
   son S4 y S6, que son capturas de archivos y *son* el argumento, y S5, que es el
   mapa del vault: siete nombres más su descripción, porque enseñar cuatro de siete
   carpetas era mentir sobre la estructura.
2. S1 y S14 comparten tipografía, negro y posición: tienen que parecer la misma
   pantalla con dos palabras cambiadas.
3. El guion literal va en `<aside class="notes">` de cada slide de contenido.
   La slide nunca lleva el texto que se dice.
4. Nada de «gracias», «¿preguntas?» ni logo: el cierre es S14 y después, silencio.
5. Capturas normalizadas a la misma altura y con correos/avatares tapados y
   aplanados en el PNG (no un rectángulo encima).

## Las 13 secciones

| # | Parte | Qué se ve | Recurso |
|---|---|---|---|
| S1 | Hook | `2:00 AM` + `El contexto se agotó.` | tipografía |
| S2 | Hook | 3 capturas de *rate limit*, misma altura, + `todos tienen un límite` | `recursos/limite_claude.jpg`, `limite_codex.png`, `limite_opencode.webp` |
| S3 | Qué es | captura del explorador en la raíz del vault + `una carpeta. nada especial.` | **pendiente de capturar** |
| S4 | Qué es | `03-identity/hermes.md` como **extracto**: numeración real, elipsis y `⋯ 56 líneas · 7 secciones`; resaltadas la fuente de verdad y dónde guarda lo aprendido | bloque mono |
| S5 | Qué es | **Una sola lista con las siete carpetas en orden numérico** (`00-inbox` … `05-logs`), mismo tamaño y una descripción bajo cada nombre. Sin flechas: el orden de búsqueda (identity → projects → knowledge → inbox) se dice en voz alta. En blanco **solo las tres que se comentan** (`01-knowledge`, `02-projects`, `03-identity`); el resto (`00-inbox`, `00-raw`, `04-skills`, `05-logs`) en gris apagado: nombre `#64757f` y descripción `#44515c`, para que el contraste con las tres primeras sea evidente | tipografía mono |
| S6 | Qué es | `SCHEMA.md` como **extracto** (`⋯ 74 líneas · 6 secciones`): frontmatter + la regla de los 2 wikilinks + `sin formato, esto es un cajón desastre` | bloque mono |
| S7 | Obsidian | `VAULT = los archivos` / `OBSIDIAN = la ventana` | tipografía |
| S8 | Obsidian | el grafo a pantalla completa, 4 s, sin texto | **pendiente de capturar** |
| S9 | Discord | `¿qué fue del scraper de Moodle?` | tipografía |
| S10 | Discord | *(no es slide: es el portátil, Discord en directo)* | — |
| S11 | Rescate | `El modelo no recordaba nada. El disco sí.` | `data-visibility="hidden"` |
| S12 | Cuatro piezas | `un agente · una carpeta · un visor · un canal` + `REGLAS` como **fragment** | tipografía |
| S13 | Cuatro piezas | **un** número: `casi 7.000 notas` | tipografía |
| S14 | Cierre | `El contexto se agota.` / `El disco no.` | tipografía |

S11 va oculta y se enseña solo si la demo falla. Nunca forma parte del recorrido.

## Lo que no se toca

Estas cuatro frases son las que se llevan; cualquier reescritura las estropea:

- «no se acuerda porque no tiene dónde»
- «no es la carpeta, son las reglas»
- «el contexto se agota, el disco no»
- «no es un backup: te devuelve el porqué»

## Cifras

`6.943 notas` está desfasada: `index.md` del vault marcaba **6945** páginas el
24/11. Por eso S13 lleva un solo número redondeado. Si se quiere precisión,
leer `D:/Brain/index.md` la mañana del evento y no antes.

## Sistema tipográfico (decidido 24/11)

Base: dirección A. De B se toma solo la tipografía del cierre. Tres roles, no dos estilos:

| Rol | Tipo | Dónde |
|---|---|---|
| **La máquina** | Cascadia Code / Consolas | La hora y los identificadores: `2:00 AM`, `hermes.md`, `SCHEMA.md`, `REGLAS`, `¿qué fue del scraper de Moodle?` |
| **La voz** | Segoe UI 300 | Pies, etiquetas y cifras: `El contexto se agotó.`, `un agente`, `casi 7.000 notas` (`tabular-nums`) |
| **El remate** | Segoe UI 800 | **solo S14**. Una vez por mazo |

El 800 no se repite: si aparece en S13 o en S1, deja de ser un remate. El cursor
parpadea solo en S1; S14 cierra con un punto en el acento cian, no con cursor.
**Un solo acento en todo el mazo**: `#5cc8ff`. Nada de ámbar ni de un segundo color.

## Pendiente de decisión

- **Dirección visual**: híbrida (`slides-preview/direccion-hibrida.html`) — base A
  con el cierre de B, pendiente de aprobación final.
- S2 con 3 capturas o con 4 (la de Copilot mide 355×446 y se ve blanda).
- Duración objetivo: **620 palabras** de guion + 40 s de demo.
