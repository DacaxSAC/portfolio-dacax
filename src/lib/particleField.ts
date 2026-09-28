/* Campo de partículas para el fondo del hero.
   Cada partícula sigue un campo de flujo suave (suma de senos que cambia con el tiempo),
   deja una estela corta y brilla con un leve parpadeo. Canvas 2D puro, sin dependencias. */

const TAIL_POINTS = 20 // muestras de la estela
const SAMPLE_MS = 50 // cada cuánto se guarda una muestra
const FADE_FRAMES = 70 // fundido de entrada/salida de cada partícula
const TAIL_ALPHA = [0.6, 0.3, 0.1] // opacidad de los tres tramos de la estela
const POINTER_RADIUS = 150
const TEAL = 'rgb(92 200 220)'

interface Particle {
  x: number
  y: number
  age: number
  life: number
  speed: number
  size: number
  phase: number
  depth: number
  tail: Float32Array
  tailLength: number
  sampleIn: number
}

function createSprite() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(225, 250, 255, 1)')
  gradient.addColorStop(0.12, 'rgba(120, 215, 232, 0.9)')
  gradient.addColorStop(0.38, 'rgba(18, 146, 169, 0.22)')
  gradient.addColorStop(1, 'rgba(18, 146, 169, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  return canvas
}

/* Dirección del flujo: avanza en general hacia la derecha, serpenteando.
   `f` sube la frecuencia en pantallas pequeñas para que el flujo siga variando. */
function flowAngle(x: number, y: number, t: number, f: number) {
  return (
    -0.25 +
    0.75 * Math.sin(x * 0.0021 * f + t * 0.00011) +
    0.65 * Math.sin(y * 0.0029 * f - t * 0.00008) +
    0.5 * Math.sin((x - y) * 0.0013 * f + t * 0.00005)
  )
}

export interface ParticleFieldOptions {
  /** Multiplicador de la cantidad de partículas (1 = hero). */
  density?: number
}

export function startParticleField(
  container: HTMLElement,
  canvas: HTMLCanvasElement,
  { density = 1 }: ParticleFieldOptions = {},
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return () => {}

  const sprite = createSprite()
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const pointer = { clientX: 0, clientY: 0, active: false }

  let width = 0
  let height = 0
  let scale = 1 // 1 en escritorio ancho, ~0.5 en móvil: velocidad, estela y flujo se adaptan
  let particles: Particle[] = []
  let frame = 0
  let last = 0
  let time = 0
  let visible = true

  const spawn = (p?: Particle, scattered = false): Particle => {
    const life = 500 + Math.random() * 700
    const particle = p ?? ({ tail: new Float32Array(TAIL_POINTS * 2) } as Particle)
    particle.x = Math.random() * width
    particle.y = Math.random() * height
    particle.life = life
    particle.age = scattered ? Math.random() * life : 0
    particle.speed = 0.35 + Math.random() * 0.7
    particle.size = 0.7 + Math.random() ** 2.5 * 2.5 // la mayoría pequeñas, unas pocas brillantes
    particle.phase = Math.random() * Math.PI * 2
    particle.depth = 0.55 + Math.random() * 0.45
    particle.tailLength = 0
    particle.sampleIn = 0
    return particle
  }

  const resize = () => {
    const rect = container.getBoundingClientRect()
    width = rect.width
    height = rect.height
    scale = Math.min(1, Math.max(0.5, width / 1440))
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    // Densidad según el área: ~45 en móvil, hasta 200 en pantallas grandes.
    const target = Math.round(Math.min(200, Math.max(45, (width * height) / 7000)) * density)
    while (particles.length < target) particles.push(spawn(undefined, true))
    particles.length = target
  }

  const draw = (now: number) => {
    frame = requestAnimationFrame(draw)
    const dt = Math.min(now - (last || now), 50) / 16.667
    last = now
    time += dt * 16.667

    let px = -1e6
    let py = -1e6
    if (pointer.active) {
      const rect = container.getBoundingClientRect()
      px = pointer.clientX - rect.left
      py = pointer.clientY - rect.top
    }
    const r2 = POINTER_RADIUS * POINTER_RADIUS

    ctx.clearRect(0, 0, width, height)
    ctx.globalCompositeOperation = 'lighter'
    ctx.strokeStyle = TEAL
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    for (const p of particles) {
      p.age += dt
      if (p.age > p.life || p.x < -40 || p.x > width + 40 || p.y < -40 || p.y > height + 40) {
        spawn(p)
        continue
      }

      const angle = flowAngle(p.x, p.y, time, 1 / scale)
      const speed = p.speed * p.depth * scale
      let vx = Math.cos(angle) * speed
      let vy = Math.sin(angle) * speed

      // El cursor aparta con suavidad las partículas cercanas y las ilumina.
      let boost = 1
      const dx = p.x - px
      const dy = p.y - py
      const d2 = dx * dx + dy * dy
      if (d2 < r2) {
        const force = 1 - d2 / r2
        const d = Math.sqrt(d2) || 1
        vx += (dx / d) * force * 0.9
        vy += (dy / d) * force * 0.9
        boost += force * 1.2
      }

      p.x += vx * dt
      p.y += vy * dt

      p.sampleIn -= dt * 16.667
      if (p.sampleIn <= 0) {
        p.tail.copyWithin(2, 0, TAIL_POINTS * 2 - 2)
        p.tail[0] = p.x
        p.tail[1] = p.y
        p.tailLength = Math.min(TAIL_POINTS, p.tailLength + 1)
        p.sampleIn = SAMPLE_MS
      }

      const fade = Math.min(1, p.age / FADE_FRAMES, (p.life - p.age) / FADE_FRAMES)
      const alpha = fade * p.depth * boost

      // Estela en tres tramos que se desvanecen hacia la cola.
      if (p.tailLength > 1) {
        ctx.lineWidth = 0.5 + p.size * 0.5
        const chunk = Math.ceil(p.tailLength / TAIL_ALPHA.length)
        for (let c = 0; c < TAIL_ALPHA.length; c++) {
          const from = c * chunk
          const to = Math.min(p.tailLength - 1, from + chunk)
          if (from >= to) break
          ctx.globalAlpha = Math.min(1, alpha * TAIL_ALPHA[c] * (0.5 + 0.5 * scale))
          ctx.beginPath()
          if (c === 0) ctx.moveTo(p.x, p.y)
          else ctx.moveTo(p.tail[from * 2], p.tail[from * 2 + 1])
          for (let i = from; i <= to; i++) ctx.lineTo(p.tail[i * 2], p.tail[i * 2 + 1])
          ctx.stroke()
        }
      }

      const twinkle = 0.6 + 0.4 * Math.sin(time * 0.0021 + p.phase)
      const glow = p.size * 16
      ctx.globalAlpha = Math.min(1, alpha * twinkle)
      ctx.drawImage(sprite, p.x - glow / 2, p.y - glow / 2, glow, glow)
    }

    ctx.globalAlpha = 1
    ctx.globalCompositeOperation = 'source-over'
  }

  const start = () => {
    if (frame || !visible) return
    last = 0
    frame = requestAnimationFrame(draw)
  }

  const stop = () => {
    cancelAnimationFrame(frame)
    frame = 0
  }

  const onPointerMove = (event: PointerEvent) => {
    pointer.clientX = event.clientX
    pointer.clientY = event.clientY
    pointer.active = true
  }
  const onPointerLeave = () => {
    pointer.active = false
  }

  // Solo se anima mientras el hero está en pantalla.
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) start()
    else stop()
  })
  const ro = new ResizeObserver(resize)

  resize()
  io.observe(container)
  ro.observe(container)
  if (finePointer) {
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
  }
  start()

  return () => {
    stop()
    io.disconnect()
    ro.disconnect()
    window.removeEventListener('pointermove', onPointerMove)
    document.documentElement.removeEventListener('pointerleave', onPointerLeave)
  }
}
