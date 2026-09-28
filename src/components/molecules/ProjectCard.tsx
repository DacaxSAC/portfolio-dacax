import { Icon } from '../atoms/Icon'
import type { Project } from '../../data/content'

type ProjectCardProps = Pick<Project, 'title' | 'category' | 'description' | 'features'>

/** Ficha del caso de estudio que acompaña a la captura del proyecto. */
export function ProjectCard({ title, category, description, features }: ProjectCardProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <p className="font-mono text-caption uppercase text-fg-subtle">{category}</p>
        <h3 className="mt-4 text-title">{title}</h3>
        <p className="mt-5 max-w-[34rem] text-lead text-fg-muted">{description}</p>
      </div>

      <ul className="self-end border-t border-line lg:col-span-6 lg:col-start-7" aria-label={`Características de ${title}`}>
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-4 border-b border-line py-5 text-body">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-bright">
              <Icon name="check" size={14} strokeWidth={2} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
