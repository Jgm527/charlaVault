# charlaVault

Materiales de la charla **«Memoria externa»** (5 minutos): un vault en Markdown
usado como memoria de un agente. La tesis, en una línea: no es un backup, te
devuelve el porqué.

## El mazo

Abre `charla-memoria-externa/slides/index.html` en Chrome. Sin instalar nada, sin
servidor y sin conexión: reveal.js y las capturas viven dentro del repo.

- `F` pantalla completa · `S` notas de orador y cronómetro · `B` pantalla negra

## Contenido

| Ruta | Qué es |
|---|---|
| `charla-memoria-externa/guion-v3.md` | guion literal, mapa de diapositivas y los 10 problemas detectados |
| `charla-memoria-externa/brief-slides.md` | especificación slide a slide: reglas, textos y pendientes |
| `charla-memoria-externa/slides/index.html` | el mazo: 13 secciones, 12 visibles |
| `charla-memoria-externa/slides-preview/` | las tres direcciones de diseño comparadas |
| `charla-memoria-externa/vendor/reveal/` | reveal.js 6.0.1 vendorizado (sin CDN) |
| `charla-memoria-externa/assets/` | la web del proyecto: paleta y estilos |
| `recursos/` | capturas de los límites de uso (Claude, Codex, OpenCode), la raíz del vault y el grafo |
| `AGENTS.md` | excepciones del proyecto a la skill de presentaciones |

## Herramientas (no versionadas)

Un clon no necesita instalar nada. Las utilidades de trabajo quedan fuera del
repo a propósito: la skill de presentaciones se instala con
`npx skills add arifszn/slide-wright` y el verificador del deck vive en
`.agents/skills/`. Nada de eso hace falta para presentar.

## Pendiente

- Ensayo cronometrado: objetivo 620 palabras más 40 segundos de demo.
