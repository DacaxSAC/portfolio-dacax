import { NavBarItem } from '../atoms/NavbarItem'

interface NavItem {
  label: string
  href: string
}

interface NavBarProps {
  items: NavItem[]
  /** id de la sección visible, para marcar el enlace activo. */
  activeId?: string
  className?: string
}

export function NavBar({ items, activeId, className = '' }: NavBarProps) {
  return (
    <nav aria-label="Principal" className={className}>
      <ul className="flex items-center gap-0.5">
        {items.map((item) => (
          <li key={item.href}>
            <NavBarItem label={item.label} href={item.href} active={item.href === `#${activeId}`} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
