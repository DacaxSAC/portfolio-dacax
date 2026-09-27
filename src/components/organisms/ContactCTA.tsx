import { type CSSProperties, useRef } from 'react'
import { contact, contactChannels } from '../../data/content'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { Button } from '../atoms/Button'
import { Eyebrow } from '../atoms/Eyebrow'
import { FadeImage } from '../atoms/FadeImage'
import { Icon } from '../atoms/Icon'
import { ParticleField } from '../atoms/ParticleField'
import { Reveal } from '../atoms/Reveal'

const socials = contactChannels.filter((channel) => channel.label === 'LinkedIn' || channel.label === 'Instagram')
const external = { target: '_blank', rel: 'noopener noreferrer' }

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref)

  return (
    <section id="contact" ref={ref} aria-labelledby="contact-title" className="relative isolate overflow-hidden py-section">
      {/* Cierre visual: la misma luz teal del hero, ahora como un horizonte */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="scroll-drift absolute inset-x-0 -top-[15%] h-[130%]" style={{ '--drift': '12%' } as CSSProperties}>
          <div className="size-full opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_55%,#000_10%,transparent_75%)]">
            <FadeImage
              src="/images/cta-texture.webp"
              alt=""
              width={1280}
              height={853}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-[58%] aspect-[1.8] w-[min(80rem,170vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgb(18_146_169/0.3),rgb(18_146_169/0.08)_55%,transparent)]" />
        <div className="scroll-drift absolute inset-x-0 -top-[5%] h-[110%]" style={{ '--drift': '6%' } as CSSProperties}>
          <div className="size-full [mask-image:radial-gradient(ellipse_75%_65%_at_50%_55%,#000_25%,transparent_80%)]">
            <ParticleField density={0.55} className="size-full" />
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-canvas to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-canvas to-transparent" />
      </div>

      <div className="shell-narrow flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Contacto</Eyebrow>
        </Reveal>
        <Reveal as="h2" id="contact-title" variant="scale" delay={80} className="mt-6 text-display">
          ¿Tienes una idea?
        </Reveal>
        <Reveal as="p" delay={160} className="mt-6 text-lead text-fg-muted">
          Conversemos y hagámosla realidad.
        </Reveal>

        <Reveal delay={240} className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <Button href={contact.whatsapp} size="lg" icon="message" {...external}>
            Escríbenos por WhatsApp<span className="sr-only"> (se abre en una pestaña nueva)</span>
          </Button>
          <Button href={contact.email} size="lg" variant="secondary" icon="mail">
            Enviar un correo
          </Button>
        </Reveal>

        <Reveal as="ul" delay={320} className="mt-12 flex items-center gap-2">
          {socials.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...external}
                className="group inline-flex h-11 items-center gap-2 rounded-full px-4 text-small text-fg-muted transition-colors duration-300 hover:bg-surface-strong hover:text-fg"
              >
                <Icon name={channel.icon} size={16} />
                {channel.label}
                <Icon
                  name="arrowUpRight"
                  size={14}
                  className="text-fg-subtle transition-transform duration-300 ease-out-quart motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                />
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
