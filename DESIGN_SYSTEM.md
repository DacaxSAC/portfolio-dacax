# Dacax Design System

Sistema visual de la landing de Dacax. Los tokens viven en [`src/index.css`](src/index.css) (bloque `@theme` de Tailwind v4) y el contenido en [`src/data/content.ts`](src/data/content.ts).

## Principios

1. **Un solo acento.** El teal de marca aparece solo donde guía la mirada: etiquetas, iconos, luz, foco. Todo lo demás es neutro.
2. **La jerarquía la dan el tamaño y el espacio**, no el color ni las cajas. Menos bordes, más aire.
3. **El movimiento tiene propósito.** Cada animación revela contenido, conecta secciones o confirma una acción. El único movimiento continuo son las partículas de marca, que abren (hero) y cierran (contacto) la página.
4. **Vidrio solo con contenido detrás** (header, menú móvil, controles flotantes). Nunca como decoración.

---

## Tokens

### Color

La escala de color por defecto de Tailwind está desactivada (`--color-*: initial`): solo existen estos colores.

| Token | Valor | Uso | Contraste sobre `canvas` |
|---|---|---|---|
| `canvas` | `#000000` | Fondo de página | — |
| `elevated` | `#0b0b0c` | Superficies sólidas (marcos, paneles) | — |
| `fg` | `#f5f5f7` | Texto principal, botón primario | 19.3 : 1 |
| `fg-muted` | `#a1a1a6` | Texto secundario, párrafos | 8.2 : 1 |
| `fg-subtle` | `#86868b` | Metadatos, numeración | 5.8 : 1 |
| `line` | `white / 8%` | Separadores de 1px | — |
| `line-strong` | `white / 14%` | Bordes de controles y marcos | — |
| `surface` | `white / 3.5%` | Fondo de hover suave | — |
| `surface-strong` | `white / 7%` | Estado activo, hover de controles | — |
| `accent` | `#1292a9` | Teal de marca: luz, rellenos, trazos | 5.7 : 1 |
| `accent-bright` | `#5cc8dc` | Acento para texto pequeño e iconos | 10.7 : 1 |

Los tonos intermedios se obtienen con opacidad (`bg-accent/12`, `ring-fg/25`), nunca con un color nuevo.

### Tipografía

- **Inter** (variable, con tamaño óptico): toda la interfaz.
- **Roboto Mono**: solo etiquetas en mayúsculas y numeración (continuidad con la identidad anterior).

Escala fluida (`clamp`), de móvil a escritorio. Cada clase ya incluye interlineado, tracking y peso:

| Clase | Tamaño | Interlineado | Tracking | Uso |
|---|---|---|---|---|
| `text-display` | 42 → 108px | 1.0 | −0.045em | Hero, CTA final |
| `text-headline` | 36 → 76px | 1.04 | −0.038em | Titular `<h2>` de sección |
| `text-title` | 28 → 52px | 1.12 | −0.03em | Declaraciones, títulos de proyecto |
| `text-lead` | 17 → 21px | 1.5 | −0.012em | Entradillas |
| `text-heading` | 20px | 1.3 | −0.018em | Títulos de tarjeta `<h3>` |
| `text-body` | 16px | 1.6 | −0.006em | Párrafos |
| `text-small` | 14px | 1.5 | — | Navegación, botones, footer |
| `text-caption` | 12px | 1.4 | +0.14em | Etiquetas mono en mayúsculas |

### Espaciado y layout

| Token | Valor | Uso |
|---|---|---|
| `py-section` | 96 → 176px | Ritmo vertical entre secciones |
| `--spacing-gutter` | 20 → 40px | Margen lateral (dentro de `shell`) |
| `shell` | máx. 1216px | Contenedor estándar |
| `shell-narrow` | máx. 928px | Contenido centrado (CTA) |

El resto usa la escala de Tailwind (múltiplos de 4px). Breakpoints por defecto: `sm` 640, `md` 768, `lg` 1024.

### Radios

| Elemento | Radio |
|---|---|
| Botones, pills, controles | `rounded-full` |
| Mosaico de icono | 14px |
| Rejilla de servicios | 28px |
| Marco de navegador | 14 → 24px (según breakpoint) |

### Elevación

| Token | Uso |
|---|---|
| `shadow-float` | Capturas de producto: sombra profunda + halo teal |
| `glass` | Vidrio: degradado blanco 8→3.5%, reflejo interior de 1px, `blur(20px) saturate(160%)` |

### Movimiento

| Token | Valor | Uso |
|---|---|---|
| `--dur-micro` | 150ms | Pulsación, color |
| `--dur-state` | 300ms | Hover, apertura de menús |
| `--dur-reveal` | 1000ms | Contenido que entra al hacer scroll |
| `--dur-hero` | 1300ms | Entrada de la primera pantalla |
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas: rápido al inicio, aterrizaje suave |
| `ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Cambios de estado |
| `ease-in-out-quart` | `cubic-bezier(0.76, 0, 0.24, 1)` | Destellos y recorridos completos |

Solo se animan `transform` y `opacity` (el blur solo en la entrada única del logo del hero).

---

## Componentes

Estructura de diseño atómico en `src/components/`.

### Átomos

| Componente | Props clave | Notas |
|---|---|---|
| `Button` | `variant`: `primary` · `secondary` · `ghost`; `size`: `sm` 36px · `md` 44px · `lg` 52px; `icon`, `trailingIcon`; `href` lo convierte en `<a>` | Estados: hover (brillo o halo), pulsado (`scale 0.97`), foco (anillo `accent-bright`). El icono final se desplaza 2px al pasar el cursor. |
| `Icon` | `name`, `size`, `strokeWidth` | SVG de trazo 1.5 con `currentColor`. Siempre `aria-hidden`: el texto de al lado da el significado. |
| `Eyebrow` | `as`, `id` | Etiqueta de sección. Úsala como `<h2>` cuando la sección no tiene otro titular. |
| `Reveal` | `variant`: `up` · `scale` · `fade`; `delay` | Revela al entrar en pantalla, una sola vez. Escribe `data-visible` en el DOM: no provoca renders. |
| `FadeImage` | igual que `<img>` | Aparece con un fundido al cargar, también si venía de caché. |
| `ParticleField` | `density` (1 = hero) | Partículas teal que fluyen con estela corta, en canvas ([`src/lib/particleField.ts`](src/lib/particleField.ts)). Densidad, velocidad y estela se adaptan al ancho; se pausa fuera de pantalla; el cursor aparta e ilumina las cercanas. |
| `Glow` | `x`, `y`, `size`, `strength` | Luz ambiental teal estática (degradado radial). Sin coste en scroll. |
| `LogoMark` / `Wordmark` | `className` | Isotipo (hero, con halo teal) y logotipo (header, footer). |
| `NavBarItem` | `active` | La pastilla activa aparece con un fundido; expone `aria-current="location"`. |

### Moléculas

| Componente | Uso |
|---|---|
| `SectionHeader` | Etiqueta → titular `<h2>` → entradilla, en cascada (0 / 80 / 160ms). `align`: `start` · `center`. |
| `ServiceCard` | Celda de la rejilla de servicios. Foco de luz que sigue al cursor (solo con puntero fino). |
| `BrowserFrame` | Ventana neutra para capturas de producto. |
| `ProjectCard` | Ficha del caso: categoría, título, descripción y lista de características. |
| `NavBar` | Navegación principal de escritorio. |

### Organismos (secciones)

| Sección | Rol en la narrativa | Efecto principal |
|---|---|---|
| `Header` | Navegación persistente | Se vuelve vidrio al hacer scroll; menú móvil a pantalla completa |
| `Hero` | Promesa | Partículas en movimiento sobre la textura (dos capas con parallax distinto), entrada escalonada, titular revelado tras máscara, salida con escala |
| `About` | Quiénes somos | Declaración que se ilumina palabra a palabra; acento teal que se dibuja sobre cada pilar |
| `Services` | Qué hacemos | Rejilla translúcida de líneas de 1px, teñida por la luz; foco que sigue al cursor |
| `ProjectShowcase` | Prueba | La ventana del producto se endereza al entrar; pestañas si hay más de un proyecto |
| `Process` | Cómo trabajamos | La línea de tiempo se completa con el scroll |
| `ContactCTA` | Acción | Titular a escala display; las partículas y la luz del hero vuelven como cierre |
| `Footer` | Referencia | Navegación, servicios y canales |

---

## Patrones

### Anatomía de una sección

```tsx
<section id="…" aria-labelledby="…-title" className="py-section">
  <div className="shell">
    <SectionHeader id="…-title" eyebrow="…" title="…" lead="…" />
    <div className="mt-16 sm:mt-20">{/* contenido */}</div>
  </div>
</section>
```

### Atmósfera

Ninguna sección es negro plano: cada una lleva una capa `absolute inset-0 -z-10` con luces `Glow` en posiciones distintas, para dar ritmo de una sección a otra. Las secciones usan `isolate overflow-x-clip`, así la luz puede extenderse suavemente hacia la sección vecina sin generar scroll horizontal.

| Sección | Atmósfera |
|---|---|
| Hero | Textura topográfica + partículas (densidad 1) + luz central |
| Sobre nosotros | Luz a la izquierda (0.22) y contraluz abajo a la derecha (0.12) |
| Servicios | Textura de circuito arriba a la derecha + luz tras la rejilla translúcida (0.2) |
| Proyectos | Luz tras el titular (0.16) + luz bajo la ventana, ligada al scroll |
| Proceso | Luz a la derecha sobre la línea de tiempo (0.18) |
| Contacto | Textura + partículas (densidad 0.55) + luz central |

Rango de intensidad de `Glow`: 0.08 a 0.22. Por encima, la luz empieza a competir con el contenido.

### Efectos ligados al scroll

`useScrollProgress(ref, { start, end })` escribe `--progress` (0 → 1) en el elemento; el CSS lo consume. Cada ancla es `[punto del elemento, punto del viewport]`, donde 0 es el borde superior y 1 el inferior.

| Clase | Efecto | Valor en reposo |
|---|---|---|
| `scroll-exit` | Se aleja y desvanece al salir | `0` (sin efecto) |
| `scroll-drift` | Parallax; intensidad en `--drift` | `0` |
| `scroll-tilt` | Inclinación 3D que se endereza; ángulo en `--tilt` | `1` (plano) |
| `word-reveal` | Palabras que se iluminan; requiere `--n` y `--i` | `1` (todo visible) |
| `timeline-fill` / `timeline-lit` | Línea y nodos del proceso | `1` (completo) |

Todas las lecturas de layout se agrupan en un único bucle de `requestAnimationFrame` ([`src/lib/frameLoop.ts`](src/lib/frameLoop.ts)).

### Movimiento reducido

Con `prefers-reduced-motion: reduce`:
- No se escribe `--progress`: cada efecto queda en su valor de reposo (contenido visible, sin parallax ni inclinación).
- El campo de partículas no se renderiza: el hero queda con la textura estática.
- Las entradas pasan a ser un fundido simple, sin desplazamiento.
- El scroll suave se desactiva y los desplazamientos de hover usan `motion-safe:`.

### Accesibilidad

- Enlace «Saltar al contenido» como primer elemento enfocable.
- Cada sección tiene `aria-labelledby` apuntando a su titular.
- Menú móvil: `aria-expanded`, Escape para cerrar, foco retenido entre el botón y los enlaces, `inert` cuando está cerrado.
- Showcase con varios proyectos: patrón de pestañas (`tablist` / `tab` / `tabpanel`) con flechas, Inicio y Fin.
- Zonas táctiles de 44px como mínimo; enlaces externos anuncian «se abre en una pestaña nueva».

---

## Reglas de uso

| ✅ Haz | ❌ Evita |
|---|---|
| Usar `fg-muted` para párrafos y `fg` para titulares | Añadir colores nuevos o hex sueltos |
| Escalonar hermanos con `Reveal delay={i * 70–100}` | Envolver en `Reveal` un elemento que ya anima su `transform` en hover |
| Un botón `primary` por vista; el resto `secondary` o `ghost` | Dos botones primarios juntos |
| Poner luz teal detrás del elemento protagonista | Usar la luz como fondo genérico de sección |
| Añadir proyectos y servicios en `content.ts` | Escribir contenido directamente en los componentes |
