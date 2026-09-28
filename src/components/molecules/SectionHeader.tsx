import { Eyebrow } from '../atoms/Eyebrow'
import { Reveal } from '../atoms/Reveal'

interface SectionHeaderProps {
  /** id del <h2>, para el aria-labelledby de la sección. */
  id: string
  eyebrow: string
  title: string
  lead?: string
  align?: 'start' | 'center'
}

/** Patrón común de cabecera: etiqueta → titular → entradilla, revelados en cascada. */
export function SectionHeader({ id, eyebrow, title, lead, align = 'start' }: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div className={`flex flex-col ${centered ? 'mx-auto max-w-[62rem] items-center text-center' : 'max-w-[50rem]'}`}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal as="h2" id={id} delay={80} className="mt-5 text-headline">
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={160} className="mt-6 max-w-[40rem] text-lead text-fg-muted">
          {lead}
        </Reveal>
      )}
    </div>
  )
}
