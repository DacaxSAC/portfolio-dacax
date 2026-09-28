import { type CSSProperties, useRef } from 'react'
import { processSteps } from '../../data/content'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { Glow } from '../atoms/Glow'
import { Reveal } from '../atoms/Reveal'
import { SectionHeader } from '../molecules/SectionHeader'

export function Process() {
  const timelineRef = useRef<HTMLDivElement>(null)
  // La línea se completa mientras la lista cruza la parte central de la pantalla.
  useScrollProgress(timelineRef, { start: [0, 0.8], end: [1, 0.55] })

  return (
    <section id="process" aria-labelledby="process-title" className="relative isolate overflow-x-clip py-section">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Glow x="88%" y="30%" size="52rem" strength={0.18} />
        <Glow x="20%" y="85%" size="44rem" strength={0.11} />
      </div>

      <div className="shell">
        <SectionHeader
          id="process-title"
          eyebrow="Cómo trabajamos"
          title="De la idea al lanzamiento, paso a paso."
          lead="Un proceso claro y colaborativo, en el que siempre sabes en qué punto está tu proyecto."
        />

        <div
          ref={timelineRef}
          className="relative mt-16 sm:mt-20"
          style={{ '--n': processSteps.length } as CSSProperties}
        >
          {/* Vertical en móvil y tablet, horizontal en escritorio */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-line lg:inset-x-0 lg:bottom-auto lg:top-[0.4375rem] lg:h-px lg:w-auto"
          >
            <div className="timeline-fill size-full bg-linear-to-b from-accent to-accent-bright lg:bg-linear-to-r" />
          </div>

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <li key={step.title} className="relative pl-10 lg:pl-0 lg:pt-12" style={{ '--i': i } as CSSProperties}>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 size-[0.9375rem] rounded-full border border-line-strong bg-canvas"
                >
                  <span className="timeline-lit absolute inset-[3px] rounded-full bg-accent-bright shadow-[0_0_14px_rgb(92_200_220/0.8)]" />
                </span>
                <Reveal delay={i * 90}>
                  <p className="font-mono text-caption uppercase text-fg-subtle">Paso {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 text-heading">{step.title}</h3>
                  <p className="mt-3 max-w-[20rem] text-body text-fg-muted">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
