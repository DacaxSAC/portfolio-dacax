import { type CSSProperties, useRef } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { Button } from '../atoms/Button'
import { Eyebrow } from '../atoms/Eyebrow'
import { FadeImage } from '../atoms/FadeImage'
import { LogoMark } from '../atoms/Logo'
import { ParticleField } from '../atoms/ParticleField'

const delay = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  // 0 con la página arriba del todo → 1 cuando el hero ha salido por completo.
  useScrollProgress(ref, { start: [0, 0], end: [1, 0] })

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-[calc(var(--header-h)+3rem)]"
    >
      {/* Atmósfera: dos capas con parallax distinto (profundidad) + la luz que ilumina el logo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Capa lejana: textura estática, se desplaza más lento */}
        <div className="scroll-drift absolute inset-x-0 -top-[8%] h-[116%]" style={{ '--drift': '22%' } as CSSProperties}>
          <div className="size-full opacity-50 [mask-image:radial-gradient(ellipse_75%_62%_at_50%_42%,#000_20%,transparent_78%)]">
            <FadeImage
              src="/images/hero-texture.webp"
              alt=""
              width={1280}
              height={830}
              fetchPriority="high"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div
          className="enter-fade absolute left-1/2 top-[40%] aspect-[1.6] w-[min(72rem,150vw)] -translate-x-1/2 -translate-y-1/2
                     bg-[radial-gradient(closest-side,rgb(18_146_169/0.26),rgb(18_146_169/0.07)_52%,transparent)]"
          style={delay(200)}
        />
        {/* Capa cercana: partículas en movimiento, con menos parallax que la textura */}
        <div className="scroll-drift absolute inset-x-0 -top-[4%] h-[108%]" style={{ '--drift': '10%' } as CSSProperties}>
          <div
            className="enter-fade size-full [mask-image:radial-gradient(ellipse_95%_80%_at_50%_45%,#000_40%,transparent_88%)]"
            style={delay(500)}
          >
            <ParticleField className="size-full" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-b from-transparent to-canvas" />
      </div>

      <div className="scroll-exit shell flex flex-col items-center text-center">
        <div className="brand-mark">
          <LogoMark />
        </div>

        <div className="enter mt-10 sm:mt-12" style={delay(300)}>
          <Eyebrow>Estudio de desarrollo de software</Eyebrow>
        </div>

        <h1 id="hero-title" className="mt-5 text-display">
          <span className="line-mask" style={delay(380)}>
            <span>Impulsando</span>
          </span>
          <span className="line-mask" style={delay(480)}>
            <span>
              la innovación<span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        <p className="enter mt-7 max-w-[34rem] text-lead text-fg-muted" style={delay(680)}>
          Transformamos ideas en realidad con tecnología de vanguardia y un enfoque centrado en el usuario.
        </p>

        <div
          className="enter mt-10 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
          style={delay(820)}
        >
          <Button href="#services" size="lg" trailingIcon="arrowRight">
            Conoce nuestros servicios
          </Button>
          <Button href="#contact" size="lg" variant="secondary">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}
