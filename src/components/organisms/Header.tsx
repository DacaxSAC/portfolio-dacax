import { type MouseEvent, useEffect, useRef, useState } from 'react'
import { navItems } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon'
import { Wordmark } from '../atoms/Logo'
import { NavBar } from '../molecules/Navbar'

// «contact» no está en el menú, pero se observa para que ningún enlace quede activo sobre ella.
const sectionIds = [...navItems.map((item) => item.href.slice(1)), 'contact']

export function Header() {
  const scrolled = useScrolled()
  const activeId = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Menú móvil: bloquea el scroll, cierra con Escape y mantiene el foco entre
  // el botón (que anuncia «Cerrar menú, expandido») y los enlaces del menú.
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    root.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !menuRef.current || !toggleRef.current) return
      const focusables = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>('a[href]')]
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const desktop = window.matchMedia('(min-width: 48rem)')
    const onDesktop = () => desktop.matches && setOpen(false)

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onDesktop)
    return () => {
      root.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [open])

  // Cierra el menú antes de navegar, para que el scroll suave no quede bloqueado.
  const navigateFromMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    event.preventDefault()
    setOpen(false)
    requestAnimationFrame(() => document.querySelector(href)?.scrollIntoView())
  }

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out-quart
          ${solid ? 'bg-canvas/70 shadow-[inset_0_-1px_0_var(--color-line)] backdrop-blur-xl backdrop-saturate-150' : 'bg-transparent'}`}
      >
        <div className="shell flex h-(--header-h) items-center justify-between gap-6">
          <a href="#home" aria-label="Dacax, ir al inicio" className="-m-2 rounded-lg p-2">
            <Wordmark />
          </a>

          <NavBar items={navItems} activeId={activeId} className="hidden md:block" />

          <div className="flex items-center">
            <div className="hidden md:block">
              <Button href="#contact" size="sm">
                Contáctanos
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="-mr-2.5 grid size-11 place-items-center rounded-full transition-colors duration-300 hover:bg-surface-strong md:hidden"
            >
              <span className="relative block h-3 w-4.5" aria-hidden="true">
                <span
                  className={`absolute inset-x-0 top-1/2 h-[1.5px] rounded-full bg-fg transition-transform duration-500 ease-out-expo
                    ${open ? 'rotate-45' : '-translate-y-[4px]'}`}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 h-[1.5px] rounded-full bg-fg transition-transform duration-500 ease-out-expo
                    ${open ? '-rotate-45' : 'translate-y-[3px]'}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fuera del <header>: su backdrop-filter crearía un contexto para position: fixed. */}
      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!open}
        className={`fixed inset-0 z-40 bg-canvas/80 backdrop-blur-2xl backdrop-saturate-150 transition-[opacity,visibility] duration-500 ease-out-quart md:hidden
          ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <nav aria-label="Menú" className="shell flex h-full flex-col pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[calc(var(--header-h)+1.5rem)]">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${60 + index * 45}ms` : '0ms' }}
                className={`border-b border-line transition-[opacity,transform] duration-700 ease-out-expo
                  ${open ? 'opacity-100' : 'opacity-0 motion-safe:-translate-y-2'}`}
              >
                <a
                  href={item.href}
                  onClick={navigateFromMenu}
                  aria-current={item.href === `#${activeId}` ? 'location' : undefined}
                  className="flex items-center justify-between py-4 text-title aria-[current]:text-fg"
                >
                  {item.label}
                  <Icon name="chevronRight" size={20} className="text-fg-subtle" />
                </a>
              </li>
            ))}
          </ul>

          <div
            style={{ transitionDelay: open ? '300ms' : '0ms' }}
            className={`mt-auto transition-opacity duration-700 ease-out-quart ${open ? 'opacity-100' : 'opacity-0'}`}
          >
            <Button href="#contact" onClick={navigateFromMenu} size="lg" className="w-full">
              Contáctanos
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
