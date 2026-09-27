import { type CSSProperties, type KeyboardEvent, useRef, useState } from 'react'
import { projects } from '../../data/content'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { FadeImage } from '../atoms/FadeImage'
import { Glow } from '../atoms/Glow'
import { BrowserFrame } from '../molecules/BrowserFrame'
import { ProjectCard } from '../molecules/ProjectCard'
import { SectionHeader } from '../molecules/SectionHeader'

export function ProjectShowcase() {
  const [index, setIndex] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  // La ventana se endereza desde que asoma por abajo hasta que su borde superior llega al 30% del viewport.
  useScrollProgress(stageRef, { start: [0, 1], end: [0, 0.3] })

  const project = projects[index]
  const hasMany = projects.length > 1

  const select = (next: number) => {
    const wrapped = (next + projects.length) % projects.length
    setIndex(wrapped)
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[wrapped]?.focus()
  }

  const onTabKeyDown = (event: KeyboardEvent) => {
    const moves: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: projects.length - 1 }
    if (!(event.key in moves)) return
    event.preventDefault()
    select(moves[event.key])
  }

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative isolate overflow-x-clip py-section">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Glow x="50%" y="14%" size="64rem" strength={0.16} />
        <Glow x="8%" y="86%" size="44rem" strength={0.09} />
      </div>

      <div className="shell">
        <SectionHeader
          id="projects-title"
          align="center"
          eyebrow="Proyectos recientes"
          title="Conoce lo que hemos creado para nuestros clientes."
        />

        {hasMany && (
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Proyectos"
            onKeyDown={onTabKeyDown}
            className="glass mx-auto mt-10 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1 ring-1 ring-inset ring-line"
          >
            {projects.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`project-tab-${item.id}`}
                aria-selected={i === index}
                aria-controls="project-panel"
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`h-9 shrink-0 rounded-full px-4 text-small transition-colors duration-300 ease-out-quart
                  ${i === index ? 'bg-fg text-canvas' : 'text-fg-muted hover:text-fg'}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}

        <div
          id="project-panel"
          role={hasMany ? 'tabpanel' : undefined}
          aria-labelledby={hasMany ? `project-tab-${project.id}` : undefined}
        >
          <div ref={stageRef} className="relative mt-14 sm:mt-20">
            {/* Luz bajo la ventana: crece a medida que el producto se endereza */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-[10%] -bottom-[20%] top-[20%] bg-[radial-gradient(closest-side,rgb(18_146_169/0.36),transparent)]"
              style={{ opacity: 'var(--progress, 1)' }}
            />
            <div className="scroll-tilt [--tilt:10deg] md:[--tilt:20deg]">
              <BrowserFrame label={project.title}>
                <FadeImage
                  key={project.id}
                  src={project.image.src}
                  srcSet={project.image.srcSet}
                  sizes="(min-width: 76rem) 71rem, calc(100vw - 2.5rem)"
                  width={project.image.width}
                  height={project.image.height}
                  alt={project.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </BrowserFrame>
            </div>
          </div>

          <div key={project.id} className={`mt-16 sm:mt-20 ${hasMany ? 'swap-in' : ''}`} style={{ '--enter-delay': '0ms' } as CSSProperties}>
            <ProjectCard {...project} />
          </div>
        </div>
      </div>
    </section>
  )
}
