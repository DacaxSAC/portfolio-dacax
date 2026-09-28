import type { PointerEvent } from 'react'
import { Icon } from '../atoms/Icon'
import { Reveal } from '../atoms/Reveal'
import type { Service } from '../../data/content'

interface ServiceCardProps extends Service {
  index: number
}

/* El foco de luz sigue al cursor escribiendo variables CSS, sin re-renderizar. */
function trackPointer(event: PointerEvent<HTMLElement>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  el.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <article
      onPointerMove={trackPointer}
      className="spotlight group relative bg-canvas/85 bg-linear-to-b from-fg/[0.035] to-transparent to-60%"
    >
      <Reveal delay={index * 70} className="relative flex h-full min-h-[17.5rem] flex-col p-7 sm:p-9">
        <div className="flex items-start justify-between">
          <span
            className="grid size-12 place-items-center rounded-[0.9rem] bg-accent/12 text-accent-bright ring-1 ring-inset ring-accent/25
                       transition-[background-color,box-shadow] duration-500 ease-out-quart group-hover:bg-accent/20 group-hover:ring-accent/45"
          >
            <Icon name={icon} size={22} />
          </span>
          <span className="font-mono text-caption text-fg-subtle transition-colors duration-500 group-hover:text-accent-bright">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="mt-auto pt-12 text-heading">{title}</h3>
        <p className="mt-3 text-body text-fg-muted">{description}</p>
      </Reveal>
    </article>
  )
}
