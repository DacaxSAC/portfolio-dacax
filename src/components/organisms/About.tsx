import { type CSSProperties, Fragment, useRef } from 'react'
import { about } from '../../data/content'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { Eyebrow } from '../atoms/Eyebrow'
import { Glow } from '../atoms/Glow'
import { Reveal } from '../atoms/Reveal'

const words = about.statement.split(' ')

export function About() {
  const statementRef = useRef<HTMLParagraphElement>(null)
  // El texto se ilumina mientras cruza la mitad inferior de la pantalla.
  useScrollProgress(statementRef, { start: [0, 0.85], end: [1, 0.5] })

  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate overflow-x-clip py-section">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Glow x="14%" y="36%" size="64rem" strength={0.22} />
        <Glow x="90%" y="86%" size="44rem" strength={0.12} />
      </div>

      <div className="shell">
        <Reveal>
          <Eyebrow as="h2" id="about-title">
            Sobre nosotros
          </Eyebrow>
        </Reveal>

        <p
          ref={statementRef}
          className="word-reveal mt-6 max-w-[21em] text-title"
          style={{ '--n': words.length } as CSSProperties}
        >
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="word" style={{ '--i': i } as CSSProperties}>
                {word}
              </span>{' '}
            </Fragment>
          ))}
        </p>

        <ul className="mt-20 grid gap-10 sm:mt-24 md:grid-cols-3 md:gap-8">
          {about.pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 100} className="relative border-t border-line pt-6">
              <span aria-hidden="true" className="accent-line absolute -top-px left-0 h-px w-14 bg-accent-bright" />
              <p className="font-mono text-caption text-fg-subtle">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-6 text-heading">{pillar.title}</h3>
              <p className="mt-3 max-w-[22rem] text-body text-fg-muted">{pillar.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
