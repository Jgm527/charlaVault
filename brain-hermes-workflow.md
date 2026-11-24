---
title: Brain + Hermes — Workflow, conexiones y calidad de vida
created: 2026-11-23
updated: 2026-11-23
type: report
tags: [hermes, brain, workflow, automatizacion, vault, discord, minecraft, n8n]
---

# Brain + Hermes — Workflow, conexiones y calidad de vida

> **Alcance:** revisión de `D:\Brain` a 23/11/2026 (`index.md`, `SCHEMA.md`, 30 logs, `hermes-bootstrap/`, `04-skills/`, proyectos y scripts).
> **Limitación:** la máquina usada para la revisión tiene WSL con Debian y docker-desktop, **no** la Ubuntu donde vive `~/.hermes`. Por tanto esto es el estado **documentado en la bóveda**, no una inspección del runtime en vivo.

---

## 1. Qué es Brain

Brain no es una libreta: es **el disco de arranque de la identidad digital**. Vive en un disco externo (`D:\Brain` en Windows, `/mnt/d/Brain` en WSL), viaja entre PCs y es la única pieza que Hermes necesita para reconstruirse.

### Las tres capas (`vault-assisted-workflow`)

```
Captura         →  00-inbox/ (ideas) · 00-raw/ (fuentes inmutables) · #inbox de Discord
Procesamiento   →  Hermes + skills: busca contexto, investiga, trabaja, documenta
Conocimiento    →  01-knowledge/ · 02-projects/ · 04-skills/ · index.md · git
```

El principio rector está en `03-identity/hermes.md`: **el vault es la fuente de verdad**; se prefiere información existente antes que inventar, y toda respuesta sustancial se documenta. La frase de `user.md` lo cierra: *"El conocimiento se guarda SIEMPRE en el vault, no en la memoria interna del agente — el vault viaja en el disco D:, la memoria no"*.

---

## 2. Estructura y volumen real

| Carpeta | Contenido | Ficheros |
|---|---|---|
| `00-inbox/` | Ideas sin clasificar, scripts del servidor, Europass, diseños | 38 |
| `00-raw/` | Fuentes originales (artículos, papers, PDFs, Atlantic Airlines, reels) | 7.459 |
| `01-knowledge/concepts` | Conceptos técnicos (Java, SQL, redes, ATC-79, GNÓTHI, Minecraft…) | 611 |
| `01-knowledge/entities` | Herramientas, tecnologías, mods, buques, canciones | 2.965 |
| `01-knowledge/comparisons` | Comparativas (PS Vita, homebrew 3DS, SaaS, salas) | 5 |
| `02-projects/` | 17+ proyectos vivos (Maneva, GNÓTHI, ATC-79, Losy, airshow-map…) | 650 |
| `03-identity/` | Perfil de usuario + 1.574 artistas + portabilidad del agente | 1.585 |
| `04-skills/` | Catálogos + espejo de skills + skills legacy | 1.088 |
| `05-logs/` | Un log por día/mes desde 2026-05-08 hasta 2026-11-21 | 30 |
| `hermes-bootstrap/` | Sistema portable de reinstalación | 72 |
| `index.md` | Índice maestro: 710 líneas, declara 6.943 páginas | — |
| `sql/` | DDL y seed del leaderboard de ATC-79 | 2 |

**Git:** 430 commits, rama `master`, **sin remoto configurado**. Hay cambios sin commitear (`.obsidian/*`, notas de Minecraft, borrados del scraper de Moodle).

---

## 3. Convenciones que sostienen todo (`SCHEMA.md`)

- **Frontmatter obligatorio**: `title`, `created`, `updated`, `type` (concept / entity / comparison / project / log / raw / identity), `tags`, `confidence` opcional, `sources` opcional.
- **Taxonomía de tags cerrada** por familias: tecnología, herramientas/ecosistema, dominio intelectual, meta.
- **Mínimo 2 `[[wikilinks]]`** por nota de conocimiento; actualizar `updated:` al editar.
- **`00-raw/` es inmutable** — nunca se modifica una fuente.
- **Umbral de creación**: solo se crea página si el tema es central o aparece en 2+ fuentes; se añade a existente si ya hay nota; se divide a partir de ~200 líneas.
- **Nombres** en minúsculas con guiones.
- `.gitattributes` fuerza LF en markdown/yaml/py/json y marca binarios; `.gitignore` excluye JARs, ZIPs, ISO, binarios de Minecraft y los vídeos/imágenes de reels (se conserva el manuscrito: docs, metadata, resumen).

---

## 4. Workflow real con Hermes

### 4.1 Stack de ejecución

```
Windows 11
└── WezTerm (Tokyo Night, FiraCode Nerd Font, opacidad 0.92, WSL por defecto)
    └── WSL2 Ubuntu (systemd=true, usuario javier)
        ├── Hermes Agent en ~/.hermes/
        │   ├── config.yaml      (modelo, toolsets, memoria, cron…)
        │   ├── .env             (API keys y tokens)
        │   ├── skills/          (183 activas, 26 categorías)
        │   ├── scripts/         (brain-scan.py, brain-extract.py)
        │   ├── cron/jobs.json   (brain-raw-ingest)
        │   ├── memories/        (MEMORY.md + USER.md)
        │   ├── SOUL.md          (personalidad: "Hermes")
        │   └── kanban.db, sessions/
        ├── hermes-gateway.service (systemd --user, linger activo)
        └── /mnt/d/Brain         (el vault)
```

Modelo y proveedor: **`deepseek-v4-flash` vía `opencode-go`** (`https://opencode.ai/zen/go/v1`, modo `chat_completions`), ~10 $/mes. `config.yaml` fija 90 turnos máximos, timeouts de gateway de 1.800 s, compresión de contexto al 50 % con ratio 0,2 y protección de los últimos 20 mensajes.

### 4.2 Protocolo de arranque de cada sesión

Documentado en `hermes-complete-guide.md`; es literalmente lo primero que hace Hermes:

1. **Verificar que `/mnt/d/Brain` está montado** (si no, avisa antes de nada).
2. **Leer `03-identity/user.md`** — contexto completo del usuario.
3. **Consultar `index.md`** — qué existe ya, para no duplicar.
4. Buscar en orden: `03-identity` → `02-projects` → `01-knowledge` → `00-inbox`.

### 4.3 Protocolo obligatorio al terminar (9 pasos)

1. Fuentes externas → `00-raw/articles/` o `00-raw/papers/`
2. Conceptos nuevos → `01-knowledge/concepts/`
3. Entidades nuevas → `01-knowledge/entities/`
4. Comparativas → `01-knowledge/comparisons/`
5. Si toca un proyecto → actualizar `02-projects/`
6. Si aprendió algo del usuario → actualizar `03-identity/user.md`
7. Entrada en `05-logs/YYYY-MM-log.md`
8. Añadir las notas nuevas a `index.md`
9. `git add -A && git commit -m "session: …"`

**Consecuencia práctica:** una sesión de chat no se pierde. El log de octubre documenta decisiones, bugs, lecciones y pendientes del despliegue on-demand con un nivel de detalle que un chat normal jamás conservaría.

### 4.4 Memoria y personalidad

- **Memoria persistente**: `MEMORY.md` (2,2 KB) + `USER.md` (1,4 KB), límites de 2.200 y 1.375 caracteres, con *nudge* cada 10 turnos y flush mínimo a los 6. Guarda preferencias y hechos del entorno, no progreso de tareas.
- **Personalidad**: `SOUL.md` (667 B) → el "Hermes" directo y técnico.
- **Estilo**: directo, técnico, sin relleno, sin mencionar qué skill usa, en español, proponiendo mejoras al vault.

### 4.5 Sistema de skills

- **183 skills activas** en 26 categorías (medido el 21/11 en `agent-portability.md`), 72 archivadas, 0 duplicados, todo kebab-case.
- **131 son puramente procedimentales + CLI** (yt-dlp, ffmpeg, gh, python, git) → portables tal cual; 52 mencionan tools de Hermes; 23 tienen rutas `~/.hermes`; 79 descripciones pasan de 200 caracteres.
- **Skills custom propias**: `raw-ingest`, `vault-document-decisions`, `vault-health`, `vault-concept-splitting`, `spotify-playlist-analyzer`, `lyrics-fetching`, `project-exposition-presentations`, `revealjs-presentations`, `skill-creator`, `hermes-replication`, `maneva-protocol`.
- **Regla de carga**: si una skill es relevante aunque sea parcialmente, se carga y se sigue; si al usarla está desactualizada, **se parchea en el momento**; si una tarea compleja (5+ tool calls) revela un workflow no trivial, se ofrece guardarlo como skill.
- **Meta-skill `skill-creator`** con evals, comparador, grader y viewer: las skills no son texto muerto, se miden.

### 4.6 Catálogo de tools reales

`04-skills/tools-catalog.md` documenta los toolsets: `hermes-cli` (terminal, read/write/patch/search), `web`, `browser` (Chrome headless con snapshot, click, type, consola, visión), `file`, `image_gen`, `kanban`, `skills`, `spotify`, `memory`, `session_search`, `todo`, `send_message`, `delegate_task`, `clarify`, `tts`, `cronjob`, `vision_analyze`, `execute_code`.

Capacidades declaradas y usadas: investigación con extracción de páginas bloqueadas (403/paywall/WAF), descarga de vídeo/audio, transcripción, OCR, generación de imágenes, presentaciones Reveal, Excalidraw, GitHub (PR/issues/review/releases), subagentes en paralelo, scraping autenticado, DevOps con systemd/cron/webhooks, Office (docx/xlsx/pptx), PDF, email, Linear, monitor de precios, pentesting con Strix y las 50 skills de marketing/negocio.

### 4.7 Delegación, kanban, voz y compresión

- **Subagentes**: hasta 3 hijos concurrentes, profundidad 1, 50 iteraciones, timeout de 600 s, herencia de MCP toolsets.
- **Kanban** multi-agente con dispatcher cada 60 s, `heartbeat` y bloqueo con input humano.
- **Voz**: STT local con faster-whisper (`base`), TTS por edge (`en-US-AriaNeural`), grabación con `Ctrl+B`, detección de silencio.
- **Compresión**: al 50 % del contexto, resume el medio y protege los últimos 20 mensajes.
- **Curator** semanal (168 h) que archiva skills obsoletas a los 30 días y las borra a los 90, con backup de 5 copias.
- **Aprobaciones manuales** con timeout de 60 s y **Tirith** activo (fail-open, 5 s).

---

## 5. Todo lo que está conectado

### 5.1 Discord de Hermes — Piano Táctico

| Canal | ID | Comportamiento |
|---|---|---|
| `#general` | `1509282750631514264` | Responde a todo, crea hilo automático |
| `#inbox` | `1509286280662355999` | **Bypass total del agente**: guarda texto/adjuntos en `00-inbox/unprocessed/` con cero tokens |
| `#notificaciones` | `1509282838451847191` | Solo lectura, destino de cron |

- Bot **Hermes#6795**, owner `883351748939505674`, `require_mention: false` en general e inbox.
- Gateway como **systemd --user** (`hermes-gateway.service`), arranque automático con `loginctl enable-linger`.
- **Pitfall documentado y corregido**: los canales deben ir por **ID numérico**; con nombres se descartaban todos los mensajes en silencio.
- **Text batching**: agrupa los chunks de 2.000 caracteres de Discord; `HERMES_DISCORD_TEXT_BATCH_DELAY_SECONDS=0` lo desactiva.
- **El parche del inbox es manual** y hay que replicarlo tras reinstalar (`gateway/platforms/discord.py`).

### 5.2 Pipeline de ingestión automática

```
Dejas un archivo en 00-raw/  (o lo mandas a #inbox)
        ↓
cron brain-raw-ingest  (cada 60 min, --no-agent, deliver local)
        ↓
brain-scan.py  → detecta archivos SIN sidecar .meta.yaml
                 clasifica image/pdf/text/binary, calcula sha256 de cabecera
        ↓
skill brain-vault/raw-ingest
   PDF   → brain-extract.py (pymupdf, página a página)
   Imagen→ vision tool
   Texto → lectura directa (utf-8 / latin-1 / utf-16)
        ↓
notas atómicas en 01-knowledge/ + sidecar [archivo].meta.yaml
        ↓
nunca se reprocesa
```

- **143 sidecars** ya generados en `00-raw/`.
- El sidecar es el marcador de "procesado"; el escaneo ignora `.meta.yaml`, ocultos y basura del sistema.
- **Tirith** bloquea el cron si el prompt ensamblado contiene patrones destructivos (`rm -rf /…`) — incluso dentro de bloques de código markdown. Eso mantuvo el cron muerto desde el 9 de mayo hasta que se documentó y se reescribió la skill.
- Test manual: `python3 ~/.hermes/scripts/brain-scan.py`.

### 5.3 Bot de Discord del servidor Losy (independiente de Hermes)

Python + discord.py en el portátil-servidor (`piano@192.168.0.5`, systemd `discord-bot.service`), hablando con Minecraft por **RCON en 127.0.0.1:25575**.

- **Chat bidireccional** Minecraft ↔ Discord (filtra `/`, limpia prefijos de rango FTB).
- **Embeds** de conexión/desconexión, logros, muertes y estado, con **convención de colores fijada**: verde/rojo = estado, azul/gris = jugadores, naranja/cian = backups, amarillo = logros, morado = muertes.
- **Slash commands**: `/online`, `/status` (TPS vía Spark, RAM y uptime de `/proc`), `/anunciar`, `/whitelist`, `/start`, `/close`.
- **Whitelist por reacción ✅** con toggle: quitar la reacción revoca, expulsa del juego y retira el rol.
- **Modo on-demand (27/10)**: el Java no arranca al boot; `/start` lo levanta (3-6 min con 468 mods) y `/close` hace cuenta atrás de 60 s **dentro del juego**, `save-all`, `stop` graceful y fallback a `systemctl stop`.
- **Auto-cierre por inactividad** a los 30 min con 0 jugadores, con aviso ⏲️.
- **Vigilante de estado** cada 30 s que solo emite embed en cambio real (lock para evitar duplicados) y se sincroniza sin emitir al arrancar.
- **Lector de log tolerante** a 2/3/4 prefijos `[...]` — el bug anterior descartaba joins en silencio.
- `/start` y `/close` restringidos al rol **Minecraft Verificado** y al canal `#mc-info`; sudoers NOPASSWD limitado exactamente a `systemctl start|stop minecraft`.

### 5.4 Servidor Minecraft Losy

- Portátil i5-1135G7 / 16 GB como servidor dedicado en Ubuntu Server nativo (dual boot), tapa cerrada con override de `logind` y `conservation_mode`.
- **Forge 1.20.1**, 492 mods cliente / 468 servidor, pack cerrado el 04/08; mundo de **47 GB** migrado por rsync; pregeneración completa de 19 dimensiones (overworld 667.755 chunks, nether 1.002.001, End 769.129).
- **FTB Ranks + FTB Essentials**: 4 rangos automáticos por playtime, kit inicial, warps, `/rtp`.
- **Knightmare's Shop**: 1.116 items en 9 categorías, compra/venta verificadas (sustituyó a SDMShop, cuyo formato NBT se descifró antes).
- **Web**: Astro + Tailwind en Vercel, landing de una pantalla, catálogo de 494 mods generado desde la propia wiki del vault (`generate-mods-data.mjs`), descargas por Google Drive. BlueMap se quitó (50 GB de render).
- **Backup diario a las 9:00** con doble modo:
  - servidor arriba → aviso en juego, parada graceful, `tar --zstd` de `world` + `config` + `server.properties`, rearranque;
  - servidor parado → copia offline silenciosa, sin tocar servicios;
  - rotación a 2 copias, limpieza de logs >7 días y crash-reports >30 días, flag `/tmp/mc-backup-running` con `trap` de limpieza, embeds 💾/✅ por webhook.
- **Hooks**: `aviso-inicio` deshabilitado (mentía con el `Done` viejo del log), `aviso-apagado` se mantiene (el 🔴 real al apagar el portátil).
- `bootfix-losy.sh` y `desplegar-losy.sh`: diagnóstico de quién arranca el Java al boot, limpieza de `Wants/Requires`, verificación con `visudo -c` y checklist post-deploy.

### 5.5 n8n Cloud — Atlantic Airlines

Workflow `ahCudNQyQXRunJkr`, activo, todos los días a las 09:00: **Schedule → RSS (aviation24.be, 5 noticias) → Code (monta el texto) → HTTP a OpenCode/Gemini → webhook de Discord** en `#comunicados-externos`. Está exportado en la raíz del vault (`atlantic-airlines-n8n-workflow.json`), con la API key y la URL del webhook como placeholders.

### 5.6 Spotify

Plugin propio de ~3.400 líneas y 8 familias de tools (`search`, `playback`, `playlists`, `library`, `devices`, `queue`, `albums`). La skill `spotify-playlist-analyzer` convierte una playlist en un grafo del vault: canciones en `entities/songs/`, artistas en `03-identity/artists/`, géneros en `concepts/genres/`, con letras, traducciones EN/ES y audio features. Resultado actual: **2.359 canciones analizadas, 1.574 artistas, 1.116+ con perfil**.

### 5.7 Instagram / reels

Pipeline ya probado (09/06): `yt-dlp --cookies` + `gallery-dl`, 4-10 frames por vídeo, OCR con tesseract, metadata y notas. En `00-raw/articles/instagram-reels/2026-08-29/` hay **86 documentos, 16 carpetas con OCR, metadata JSON y 4 repos de skills originales** (marketing, emilkowalski, remotion, strix). Sin cuenta de agente: usa las cookies del usuario, que caducan ~48 h.

### 5.8 Otros conectados

- **Obsidian**: solo plugins core (sync, bases, daily notes, templates, canvas, properties, graph, backlinks, outline, word count, file recovery). **Cero plugins de comunidad** — el vault está deliberadamente "a pelo".
- **Google Drive** para distribución del modpack; **Vercel** para la web; **Supabase/n8n** en la arquitectura de Maneva; **Moodle** con scraper propio (sesión HTTP + API REST); **PostgreSQL/MongoDB** en Atlantic Airlines y ATC-79.
- **Git local** como capa de versionado, sin remoto.
- **Bus de portabilidad** (`agent-portability.md`): `D:\Brain\agent\` como fuente de verdad con `AGENTS.md`, skills planas, `env.example` y `sync.sh`; `~/.agents/skills` lo leen OpenCode y Gemini gratis, Claude Code por symlinks, Codex por AGENTS.md. Export revisable de 13,4 MB / 1.261 archivos en el Escritorio, con secretos excluidos.

---

## 6. Calidad de vida construida

### En Hermes

- **Bootstrap de un comando** que reconstruye todo el entorno en un PC nuevo: detecta el vault, configura WSL, PATH, dependencias, instala Hermes, restaura `config.yaml` (con backup), crea `.env` interactivo pidiendo cada key con explicación de dónde sacarla, copia skills y scripts, crea el cron y ejecuta `hermes doctor --fix`. El `.ps1` además instala WSL, WezTerm y 18 variantes de FiraCode, y lanza el `.sh` como root.
- Instalación **idempotente**: no sobreescribe config, no re-pide keys ya puestas, verifica 0 errores al final.
- Memoria con límites de caracteres (no se infla), compresión automática, curator que archiva skills muertas, checkpoints, guardrails de tool-loop con avisos y parada dura.
- Sesiones buscables (`session_search`), logs de trayectoria, TTS/STT, personalidades múltiples.

### En el vault

- `index.md` como catálogo maestro con resumen de una línea por página — el mapa que evita duplicados.
- `vault-health` para auditar wikilinks rotos, huérfanos, ghost artifacts y conteos desfasados.
- `vault-concept-splitting` para no crear monolitos.
- `vault-document-decisions`: toda respuesta técnica se guarda; lo no documentado se considera trabajo perdido.
- Logs con formato rico: decisión, motivación, verificación, bugs, lecciones, pendientes y "cómo volver atrás".
- `00-inbox` como buffer sin fricción y `#inbox` de Discord como entrada desde el móvil sin gastar tokens.
- `.gitignore` / `.gitattributes` afinados para que el repo no se infle ni se rompa entre Windows y WSL.
- Documentación de pitfalls reales (IDs de canal, Tirith, `UnboundLocalError` en `on_ready`, sync de comandos, WiFi vs servidor, cookies de Instagram).

---

## 7. Cosas frágiles o pendientes

1. **Secretos dentro del repo.** `hermes-bootstrap/.env.template` contiene una API key real y un token de Discord reales; `00-inbox/backup.sh` lleva la contraseña de RCON en claro; `instagram-cookies.txt` está en la raíz; y `02-projects/moodle-scraper/.env` aparece trackeado en `git status`. Están en el historial de git, así que **rotarlos es más urgente que borrarlos**.
2. **El espejo de skills está desfasado**: `04-skills/system/` tiene 112 skills frente a las 183 reales (faltan 115, sobran 44). `04-skills/index.md` todavía habla de 110. La fuente de verdad es `~/.hermes/skills`, no el vault.
3. **No hay remoto de git.** 430 commits viven solo en el disco externo: si ese disco muere, se pierde el historial (el conocimiento en markdown sigue ahí, pero sin versiones).
4. **El índice miente en los números**: declara 6.943 páginas, hay ~6.900 ficheros en total, y arrastra líneas corruptas (`||`, `|-`) y enlaces a notas que ya no existen. `vault-health` debería pasar más a menudo.
5. **El parche del inbox y los hooks `aviso-*` son manuales** tras reinstalar; el bootstrap no los restaura. Es el punto donde una migración "funciona" pero pierde una función silenciosa.
6. **RCON y 25565 estaban abiertos a la LAN** (22/25565/25575) según el log del 27/10; el firewall quedó pendiente.
7. **Las cookies de Instagram caducan en ~48 h** y el pipeline falla en silencio; la propia nota de cuentas de plataforma lo identifica como el freno real.
8. **`Sin título.canvas` vacío y el JSON de n8n suelto en la raíz**: ruido que rompe la convención de nombres del propio `SCHEMA.md`.

---

## 8. Resumen en una frase

Tienes un **sistema operativo personal**, no una bóveda de notas: captura sin fricción, un agente que lee tu perfil antes de responder, un cron que convierte `00-raw` en conocimiento atómico cada hora, documentación obligatoria con commit, y una capa de automatizaciones reales (Discord, Minecraft on-demand con backups, n8n, Spotify, Moodle) gobernada desde un disco que viaja contigo.

Lo que le falta para ser sólido no es más funcionalidad: es **sacar los secretos del repo, ponerle remoto a git y automatizar la resincronización de skills**.

---

## 9. Fuentes inspeccionadas

- `index.md`, `SCHEMA.md`, `.gitignore`, `.gitattributes`
- `03-identity/hermes.md`, `03-identity/hermes-complete-guide.md`, `03-identity/user.md`, `03-identity/agent-portability.md`
- `01-knowledge/concepts/hermes-bootstrap.md`, `hermes-discord-config.md`, `hermes-discord-gateway.md`, `hermes-cron-tirith-security.md`, `vault-assisted-workflow.md`
- `01-knowledge/entities/hermes-discord-bot.md`
- `04-skills/index.md`, `04-skills/skills-catalog.md`, `04-skills/tools-catalog.md`, `hermes-bootstrap/skills/**`
- `hermes-bootstrap/config.yaml`, `.env.template`, `hermes-bootstrap.ps1`, `hermes-bootstrap.sh`, `wsl.conf`, `.wezterm.lua`
- `hermes-bootstrap/scripts/brain-scan.py`, `brain-extract.py`
- `00-inbox/bot.py`, `backup.sh`, `bootfix-losy.sh`, `desplegar-losy.sh`, `discord-bot.service`, `minecraft.service`
- `02-projects/minecraft-server/minecraft-server-overview.md`, `02-projects/atlantic-airlines-discord-automation.md`, `02-projects/cuentas-plataformas-agentes-ia.md`
- `05-logs/index.md` y logs 2026-06 a 2026-11
- `atlantic-airlines-n8n-workflow.json`, `.obsidian/*`, `git log` / `git status`
