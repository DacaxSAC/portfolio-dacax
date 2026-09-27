import { services } from '../../data/content'
import { FadeImage } from '../atoms/FadeImage'
import { Glow } from '../atoms/Glow'
import { Reveal } from '../atoms/Reveal'
import { SectionHeader } from '../molecules/SectionHeader'
import { ServiceCard } from '../molecules/ServiceCard'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative isolate overflow-x-clip py-section">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[70%] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_75%_30%,#000_10%,transparent_75%)]">
          <FadeImage
            src="/images/services-texture.webp"
            alt=""
            width={1280}
            height={854}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
        <Glow x="50%" y="62%" size="72rem" strength={0.2} />
      </div>

      <div className="shell">
        <SectionHeader
          id="services-title"
          eyebrow="Nuestros servicios"
          title="Descubre lo que podemos crear juntos."
          lead="Seis disciplinas con un mismo estándar: productos digitales bien pensados, bien construidos y fáciles de usar."
        />

        {/* Rejilla de líneas finas: el fondo del contenedor asoma entre las celdas como separador de 1px.
            Las celdas son translúcidas, así que la luz de detrás tiñe las líneas. */}
        <Reveal className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line bg-clip-padding sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
