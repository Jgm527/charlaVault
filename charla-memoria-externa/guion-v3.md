---
title: Guion lightning talk · Memoria externa (v3)
created: 2026-11-24
updated: 2026-11-24
type: report
tags: [charla, memoria-externa, guion, lightning-talk, slides]
---

# Memoria externa · Guion v3

> **Estado:** texto hablado conservado **tal cual lo escribiste** (solo corrijo faltas de ortografía: *lightning*, *harness*, *Moodle*, *Obsidian*). Todo lo que no es tuyo está marcado como **[nota]**, o vive en las secciones de diapositivas, problemas y opinión.
> **Duración estimada:** ~740 palabras habladas ≈ **5:20 a 140 ppm**, más **30-60 s de espera** en la demo de Discord → **~6:00 reales**. El hueco de la charla es de 5:00. Ver *Problemas → 1*.

---

## Ficha rápida

| Parte | Minutos | Palabras | Slides |
|---|---|---|---|
| 1 · Hook | 0:00–0:50 | ~95 + chiste | 2 |
| 2 · Qué es | 0:50–2:35 | ~245 | 3 |
| 3 · Obsidian | 2:35–3:20 | ~110 | 2 |
| 4 · Discord (demo) | 3:20–4:35 | ~100 + espera | 1 (+1 de rescate) |
| 5 · Otras herramientas | 4:35–5:40 | ~150 | 2 |
| 6 · Cierre | 5:40–6:00 | ~45 | 1 |
| | **~6:00** | **~740** | **11** |

---

## Parte 1 · Hook

**0:00–0:50**

### Lo que dices

> Son las 2 de la mañana, llevas 3 horas trabajando, le preguntas algo a tu modelo, pero te responde con que has alcanzado el límite, te vas a otro modelo, pero, ahora tienes que explicarle otra vez todo tu proyecto y en lo que estabas trabajando, escribiéndole el mismo contexto que ya le habías dicho al otro hace unas horas. ¿A quién no le ha pasado? El problema no es el modelo, el problema es que no se acuerda de nada, y no se acuerda porque no tiene dónde.
>
> **[nota — el chiste, opcional]** …como somos pobres no tenemos más límites. *(Decidir según el ambiente. Ver Problemas → 2.)*

### Diapositivas

**S1 · Portada (0:00)**
- Fondo negro. Solo dos líneas, gigantes: **`2:00 AM`** / `El contexto se agotó.`
- Nada más: ni tu nombre, ni logo, ni "lightning talk". El silencio de la slide vende la escena.
- **[nota]** Tarda 3-4 segundos en hablar. Que el público lea la hora antes de que empieces.

**S2 · El muro (0:20, mientras hablas del límite)**
- Collage de 3-4 capturas de *rate limit* reales: Claude, ChatGPT, Copilot, Gemini. Recortadas a la frase del límite.
- Pie de foto: **`todos tienen un límite`**.
- **[nota]** Antes de proyectar: tapa correos, nombres de cuenta, avatares y planes. Una captura con tu email en pantalla es el peor fallo posible de la charla, y no se arregla en directo.

**Sin slide para el chiste.** Un chiste con diapositiva va más lento y parece preparado. Si sale, sale hablado, con la S2 aún en pantalla.

### Notas de sala
- La frase que hay que clavar es **"no se acuerda porque no tiene dónde"**. Pausa antes. Es la tesis y la vuelves a usar en el cierre.
- "¿A quién no le ha pasado?" dicho en voz alta invita a un silencio incómodo. Mejor: **"esto nos ha pasado a todos"** y levantas la mano tú primero. Si quieres interacción real, pregunta "¿quién ha pagado un plan solo por no esperar?" y espera 2 segundos; si nadie responde, sigues sin comentarlo.

---

## Parte 2 · Qué es

**0:50–2:35 · la parte que sostiene la charla**

### Lo que dices

> Esto de aquí es una carpeta, con archivos de texto `.md`, nada especial. Lo que convierte todo esto en memoria son las reglas que le damos a los agentes para que usen estos archivos antes de trabajar. En mi caso se llama `hermes.md` porque es el harness que utilizo, pero se puede incluir en `AGENTS.md` o en cualquier otro archivo siempre y cuando lo enrutéis al modelo.
>
> En este `hermes.md` tiene estipulado que lo que hay en el vault es una fuente de la verdad, tiene definido un orden de búsqueda por prioridades en el que accede primero a identidad, luego a proyectos y por último a conocimiento. También hay un `SCHEMA.md` en el que se definen las reglas de cómo se deben tomar las notas, su formato. Sin esto el sistema crecería sin criterio, sería un cajón desastre, no una memoria organizada. Gracias a esto nunca le tengo que explicar quién soy, cómo responderme ni pegar el contexto exacto del proyecto en el que esté trabajando. Está escrito y lo lee.

### Diapositivas

**S3 · La carpeta (0:50)**
- Captura del explorador de archivos en la raíz del vault, con las carpetas visibles y el disco a la vista.
- Título pequeño: **`una carpeta. nada especial.`**
- **[nota]** Aquí **no** abras Obsidian todavía. La primera impresión tiene que ser "esto es aburrido", porque el asombro viene después.

**S4 · El contrato con el agente (1:15)**
- `hermes.md` abierto, pero **zoom a 3 líneas**, no el archivo entero:
  1. `el vault es la fuente de verdad`
  2. `orden: identidad → proyectos → conocimiento`
  3. `toda respuesta sustancial se documenta`
- Título: **`no es la carpeta. son las reglas.`**
- **[nota]** Si el archivo tiene 200 líneas y proyectas 200 líneas, el público deja de leer. Tres frases subrayadas valen más que el documento completo.

**S5 · El orden de búsqueda (1:50)**
- Tres bloques grandes con flechas: **`03-identity → 02-projects → 01-knowledge`**, y debajo, pequeño: `00-inbox · 04-skills · 05-logs`.
- Subtítulo: **`por eso no le explico quién soy`**.
- **[nota]** Esto y la S4 pueden ser la misma slide si vas justo de tiempo: el orden de búsqueda es el gráfico más explicativo de toda la charla.

**S6 · SCHEMA.md, el otro contrato (2:15)**
- Panel partido: a la izquierda, el frontmatter de una nota real (`title / created / updated / type / tags`); a la derecha, una nota con **2 wikilinks** visibles.
- Título: **`sin formato, esto es un cajón desastre`**.
- **[nota]** Cierra el bloque con esa frase tuya. Es la que contesta "¿y por qué no guardo todo en un Notion y ya?" sin que nadie pregunte.

### Otras diapositivas que podrías meter aquí
Por orden de rentabilidad si consigues un hueco más:
1. **Una nota real completa** (frontmatter + enlaces + fecha de actualización). Es la prueba de que el contrato se cumple, no solo se escribe.
2. **`index.md`** como mapa maestro: miles de líneas con una frase por página. Impresiona por volumen y explica por qué el agente no duplica notas.
3. **La skill de tomar notas**, aunque no la menciones: una slide de "el cómo se hace, escrito una vez y reutilizado" refuerza el argumento de las reglas. **No la añadas si no vas a decirla en voz alta**: una slide que no se comenta distrae.
4. **Un commit o el log del día**: "lo que no se documenta, no ha pasado". Fuerte, pero es material del final, no del bloque 2.

---

## Parte 3 · Obsidian

**2:35–3:20**

### Lo que dices

> Hay que diferenciar 2 cosas: el vault y Obsidian. El vault es la carpeta, los archivos, la información; Obsidian simplemente se usa como un visor, una interfaz sencilla para ver notas de forma gráfica a través del grafo o crear y editar las existentes. Nada más. Se podría usar Visual Studio o Notepad, cualquier cosa que abra un `.md` sirve para lo mismo, pero Obsidian tiene sus ventajas, como poder ver grafos, y añadir otras utilidades en forma de extensiones.

### Diapositivas

**S7 · La diferencia (2:35)**
- Slide partida en dos mitades separadas por una línea:
  - **`VAULT = los archivos`** (izquierda, tipografía monoespaciada, como una carpeta)
  - **`OBSIDIAN = la ventana`** (derecha, captura del grafo)
- Pie: **`si mañana desaparece Obsidian, la memoria sigue ahí`**.
- **[nota]** Esta es la slide que desactiva la objeción "esto es un anuncio de Obsidian". Ponla antes de que la piensen.

**S8 · El grafo (2:55, 4 segundos)**
- El grafo a pantalla completa, sin texto. Solo para que se vea el volumen.
- **[nota]** Cuatro segundos y fuera. El grafo es bonito y no significa nada: si te quedas, el público empieza a buscar sus propias notas ahí dentro.

---

## Parte 4 · Discord (la demo)

**3:20–4:35**

### Lo que dices

> Pero ¿cómo se usa todo esto? Vamos con algo más práctico. Tengo en Discord un bot conectado con Hermes: él lee el vault y responde. Vamos a preguntarle algo sencillo. Hace tiempo hice un scraper de Moodle y no sé del todo qué fue de él, vamos a preguntarle.
>
> **`[preguntas en Discord y esperas]`**
>
> *(mientras está pensando)* Que sepáis que esta charla me ha costado 2 euros, cabrones. No tenía pensado pagar nada de IA este mes, pero para enseñaros esto hubo que aflojar.
>
> *(cuando responde)* Mirad lo que ha devuelto. Todo eso lo hicimos hace 6 meses y ni me acordaba de cómo está implementado, pero ahí está todo bien documentado.

### Diapositivas

**S9 · La pregunta, escrita (3:20)**
- Solo la pregunta, grande y legible desde la última fila:
  **`¿qué fue del scraper de Moodle?`** + `hace 6 meses`.
- **[nota]** Sirve para dos cosas: el público lee la pregunta mientras tú escribes en Discord, y si el audio de la sala es malo, la pregunta sigue entendiéndose.

**S10 · Pantalla de Discord** (no es una slide: es el portátil)
- Durante la demo **no cambies de diapositiva**. El proyector se queda en Discord, con el zoom alto para que el mensaje se lea.
- Cada salto de slide durante la espera rompe la ilusión de "esto está pasando ahora".

**S11 · Rescate (oculta, solo si falla)**
- Slide preparada en la presentación, al final: **`El modelo no recordaba nada. El disco sí.`**
- Si el bot no contesta, pasas a la grabación de 30 s y **dejas esta slide puesta mientras hablas**. No se depura en directo.

### Notas de sala
- **[nota importante]** El chiste depende de la latencia: si el bot contesta en 8 segundos, te lo comes con patatas. **Dilo justo antes de pulsar enviar**, no mientras esperas. Así está garantizado y no depende de nada.
- Si contesta muy rápido, la frase de cierre es la tuya: *"todo eso lo hicimos hace 6 meses"*. Ahí está la tesis, no en el chiste.
- Ten la grabación de 30 s en el escritorio, con nombre reconocible, y el terminal **cerrado**: cualquier pestaña con claves, cookies o IDs de canal a la vista es un fallo que no se olvida.

---

## Parte 5 · Otras herramientas

**4:35–5:40**

### Lo que dices

> Esto no es una herramienta, es una combinación de 4 piezas: un agente, una carpeta, un visor y un canal de comunicación. En cada casilla se puede poner una cosa y el sistema sigue funcionando. Puedes cambiar el vault a otro, y te responderá de otra forma totalmente diferente; se puede hasta hacer un vault por proyecto para tener todo bien separado, y que se use automáticamente al trabajar en ese proyecto.
>
> Lo llevo usando durante el último año y medio: se acuerda de todo, cómo está montado mi servidor de Minecraft, mis playlists analizadas de Spotify, descargas de Moodle, temario de clase, proyectos personales, todo. Sabe más de mí que yo. Lo que más me sorprendió últimamente fue justo lo de Moodle: el scraper llevaba hecho 6 meses y ni me acordaba, le pregunté por él porque lo volví a necesitar el mes pasado y lo encontró en 2 segundos, documentado y listo para usar, incluso con detalles de implementación de los que ni me acordaba. No es un backup, es mejor: esto te devuelve el porqué, tus decisiones pasadas y otras consideraciones.

### Diapositivas

**S12 · Las cuatro casillas (4:35)**
- Cuatro cajas en cruz: **`AGENTE` · `CARPETA` · `VISOR` · `CANAL`**, y en el centro, si aceptas la corrección del Problema 3: **`REGLAS`**.
- Flecha inferior: **`cambia cualquier casilla → sigue funcionando`**.
- **[nota]** Es la slide que convierte anécdotas en arquitectura. Tiene que quedarse en pantalla **todo el bloque**: es la que la gente fotografía.

**S13 · Los recibos (5:10)**
- Una sola línea de datos, en monoespaciada: **`1 año y medio · 6.943 notas · 7.459 fuentes · 430 commits`**.
- Debajo, tu frase: **`no es un backup: te devuelve el porqué`**.
- **[nota]** Un número basta. Elige **uno** de los tres (yo diría 6.943 notas) y dilo en voz alta; los demás son decorado para quien mire la slide de cerca.
- **[nota]** La lista de casos (Minecraft, Spotify, Moodle, temario, proyectos) **no va escrita en la slide**: si está escrita, el público lee en vez de escucharte. La dices y ya.

---

## Parte 6 · Cierre

**5:40–6:00**

### Lo que dices

> Ahora son las 2 de la mañana y sé que el problema no es el modelo, era que no se acordaba. El contexto se agota, el disco no.

### Diapositivas

**S14 · Cierre (5:40)**
- Negro, la misma tipografía de la S1: **`El contexto se agota.`** / **`El disco no.`**
- Debajo, pequeño y en gris: `gracias`.
- **[nota]** Vuelve visualmente a la portada (misma tipografía, mismo negro) para que el círculo se cierre sin explicarlo. Y **no digas "¿preguntas?"**: di "gracias" y aguanta dos segundos de silencio.

---

## Mapa de diapositivas (para construir esta noche)

| # | Parte | Contenido | En pantalla |
|---|---|---|---|
| S1 | Hook | `2:00 AM` / `El contexto se agotó.` | 0:00–0:20 |
| S2 | Hook | Collage de *rate limits* + `todos tienen un límite` | 0:20–0:50 |
| S3 | Qué es | Explorador en la raíz del vault | 0:50–1:15 |
| S4 | Qué es | `hermes.md` con 3 líneas resaltadas | 1:15–1:50 |
| S5 | Qué es | `identidad → proyectos → conocimiento` | 1:50–2:15 |
| S6 | Qué es | `SCHEMA.md` + nota con frontmatter y wikilinks | 2:15–2:35 |
| S7 | Obsidian | `VAULT = archivos` / `OBSIDIAN = ventana` | 2:35–3:20 |
| S8 | Obsidian | El grafo, sin texto | 4 s inside |
| S9 | Discord | `¿qué fue del scraper de Moodle?` | 3:20–3:35 |
| — | Discord | **Discord en directo** | 3:35–4:20 |
| S11 | Rescate | `El modelo no recordaba nada. El disco sí.` | solo si falla |
| S12 | Otras | 4 cajas (+ reglas en el centro) | 4:35–5:10 |
| S13 | Otras | `1 año y medio · 6.943 notas · 430 commits` | 5:10–5:40 |
| S14 | Cierre | `El contexto se agota.` / `El disco no.` | 5:40–6:00 |

**Regla de construcción:** ninguna slide con más de 12 palabras, salvo S4 y S6, que son capturas y se perdonan porque *son* el argumento.

---

## Problemas que le veo

### 1. Dura como 6:00, no 5:00
~740 palabras a 140 ppm son 5:20, más 30-60 s de espera real del bot. Si el hueco es de 5 minutos, te comes el cierre, que es lo mejor que tienes escrito. **Recorte de 1:00 sin perder nada:**
- Compresión de Obsidian (S7 + S8) a **20 s**: quita la frase de Visual Studio/Notepad y deja "Obsidian es el visor, no la memoria".
- En la parte 2, **una sola slide** con `hermes.md` y el orden de búsqueda juntos (fusiona S4 y S5): ahorras 25 s.
- Parte 5: quita la enumeración completa de casos ("Minecraft, Spotify, Moodle, temario, proyectos") y deja dos.
- Si aun así vas justo: **elimina el chiste**. Es lo único de la charla que no sostiene nada.

### 2. El chiste de los 2 euros tiene tres filos
- **Contradice tu propia slide de cifras.** En tu `config.yaml` el modelo son **~10 $/mes**. "No tenía pensado pagar nada de IA este mes" solo es verdad si los 2 € fueron una cuenta aparte. Si alguien del público te conoce, se ríe *de* la frase y no *con* ella.
- **"Cabrones"** funciona con amigos y puede caer mal en un auditorio mixto o con profesorado delante. Ten preparada la versión neutra: *"esta charla me ha costado dos euros; los mejores dos euros del mes"*.
- **Depende del tiempo de respuesta.** Si el bot tarda 6 segundos, no hay hueco para el chiste. Solución: decirlo **antes** de enviar, no durante la espera.

### 3. La parte 5 se contradice con la parte 2 (el problema más serio)
En la parte 2 dices que **lo que convierte la carpeta en memoria son las reglas** (`hermes.md` + `SCHEMA.md`). En la parte 5 dices que **son 4 piezas: agente, carpeta, visor y canal**… y las reglas desaparecen. Es justo tu tesis. Tienes dos salidas:
- **Poner `REGLAS` en el centro de las cuatro cajas** (mi recomendación, es una corrección de 2 segundos y refuerza el bloque 2), o
- decir "4 piezas **y un contrato**" al presentarlas.

Además, "en cada casilla se puede poner una cosa y el sistema sigue funcionando" es tu afirmación más fuerte y **no es exactamente cierta**: si cambias el vault, hay que cambiar las reglas, porque el orden de búsqueda y el esquema apuntan a *tus* carpetas. Puedes decirlo así —"cambias el vault y cambias el contrato, y el resto sigue"— y quedas mejor que si te lo pillan en preguntas.

### 4. El título de la parte 5 no describe lo que cuenta
"Otras herramientas" hace esperar un catálogo (Notion, Logseq, RAG…) y lo que cuentas es que **no es una herramienta**. Retitula: *"No es una herramienta: son cuatro piezas"*. Es más largo y mejor.

### 5. La demo de Moodle es el mayor riesgo de la charla, y mañana es tarde
- Tu informe del vault (23/11) marcaba **borrados sin commitear en el scraper de Moodle** y el `.env` del proyecto trackeado. Si la nota que responde está entre lo borrado, la demo falla por una razón tuya. **Compruébalo esta noche, en el canal real**, no mañana.
- La pregunta tiene que ser la misma que preguntarás en directo, palabra por palabra. Cada variación cambia la respuesta.
- Prepara la **grabación de 30 s** con el resultado bueno ya guardado. El público no distingue una grabación de un directo; sí distingue 40 segundos de silencio.

### 6. "Está escrito y lo lee" es tu mejor frase y no explicas cómo
En la parte 2 dices "siempre y cuando lo enrutéis al modelo" y ahí te has salvado, pero un técnico levantará la mano: *¿cómo lo enruta, si el modelo no tiene acceso a nada?*. Tu propia nota de referencia decía que el punto exacto de inyección no estaba verificado (`prefill_messages_file` vacío, la copia del config es un respaldo). Ten una respuesta de una frase lista: *"va en el archivo de identidad que el agente carga al arrancar; en otros agentes es `AGENTS.md`. No es magia: es un archivo que se lee antes de trabajar"*.

### 7. La parte 2 es la mitad de la charla
245 palabras y 1:45 para un concepto que se puede decir en 40 s. No es un error de contenido, es de proporción: el hook y el cierre son los dos momentos emocionales y duran 70 s en total. Si recortas, recorta aquí, no en el hook.

### 8. Falta un número
Toda la charla es cualitativa hasta la parte 5. Un dato temprano —"6.943 notas"— compra credibilidad antes de la demo y hace que la demo parezca consecuencia y no truco.

### 9. "Sabe más de mí que yo"
Es la frase más humana del guion y funciona… hasta que alguien piensa "¿y dónde está todo eso?". Añade seis palabras: *"todo eso está en local; el modelo solo ve lo que lee"*. Te quita el resquicio de "esto es un problema de privacidad" sin romper el chiste.

### 10. Cierre: no lo toques
"El contexto se agota, el disco no" es la mejor línea del guion. **No añadas nada después.** Ni "y eso es todo", ni "¿preguntas?", ni una slide de agradecimientos. Negro, la frase, gracias, dos segundos.

---

## Mi opinión

Esta versión es mejor que la anterior en lo que importa: **la demo ha dejado de ser un número de magia y es el centro del relato**. Y has encontrado el argumento que faltaba, el que hace que esto no sea "mi Obsidian": *no es un backup, te devuelve el porqué*. Eso es lo que se llevará la gente.

Lo que le falta es **disciplina de proporción**. Ahora mismo la charla tiene tres partes emocionales (hook, demo, cierre) y, en medio, 3 minutos de inventario: qué es, Obsidian, cuatro piezas. Ese inventario no tiene tensión; es correcto y es necesario, pero no emociona. Si recortas 60 segundos, recórtalos ahí — nunca del hook ni del cierre.

Dos cosas concretas que yo cambiaría antes de dormir:
1. **`REGLAS` en el centro de las cuatro casillas.** Hoy tu tesis está en la parte 2 y tu diapositiva más memorable la omite. Es el arreglo de dos segundos con más impacto de toda la lista.
2. **El chiste, antes de enviar.** No porque sea malo, sino porque tal como está depende de que el bot tarde. Que dependa de ti, no de la latencia.

Y una advertencia de fondo: la parte 5 dice "se acuerda de todo" cinco veces con palabras distintas. Es verdad y es tu mejor prueba, pero **el público solo retiene una**. Elige la de Moodle —la que además demuestras en directo— y deja las demás como coletilla, no como lista. La anécdota de Minecraft y la de Spotify son para las preguntas, no para los 40 segundos que tienes.

---

## Checklist de esta noche (no de mañana)

- [ ] Preguntar lo de Moodle en el canal real, con la frase exacta, y ver que la nota existe y responde bien.
- [ ] Grabar ese intercambio en 30 s y dejarlo en el escritorio.
- [ ] Comprobar que `00-inbox/unprocessed/` está como esperas y el gateway vivo.
- [ ] Tapar correos, nombres de cuenta y avatares en las capturas de *rate limits*.
- [ ] Construir S1 y S14 juntas: misma tipografía, mismo negro.
- [ ] Cronometrar una pasada con la versión recortada. Si pasa de 5:10, quitas el chiste.
