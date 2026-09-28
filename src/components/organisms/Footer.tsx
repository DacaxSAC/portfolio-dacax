import { contactChannels, navItems, services } from '../../data/content'
import { Icon } from '../atoms/Icon'
import { Wordmark } from '../atoms/Logo'

const heading = 'font-mono text-caption uppercase text-fg-subtle'
const link = 'text-small text-fg-muted transition-colors duration-300 hover:text-fg'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-12 py-16 sm:py-20 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Wordmark />
          <p className="mt-5 max-w-[18rem] text-small text-fg-muted">
            Transformamos ideas en realidad con tecnología de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8 md:gap-8">
          <nav aria-label="Pie de página">
            <h2 className={heading}>Explorar</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={heading}>Servicios</h2>
            <ul className="mt-5 space-y-3 text-small text-fg-muted">
              {services.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>Contacto</h2>
            <ul className="mt-5 space-y-3">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    className={`${link} inline-flex items-center gap-2`}
                  >
                    <Icon name={channel.icon} size={15} />
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="flex flex-col-reverse gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-fg-subtle">© {year} Dacax. Todos los derechos reservados.</p>
          <a href="#home" className={`${link} group inline-flex items-center gap-2`}>
            Volver arriba
            <Icon
              name="arrowUp"
              size={15}
              className="transition-transform duration-300 ease-out-quart motion-safe:group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
