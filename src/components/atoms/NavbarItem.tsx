interface NavBarItemProps {
  label: string
  href: string
  active?: boolean
  onNavigate?: () => void
}

export function NavBarItem({ label, href, active = false, onNavigate }: NavBarItemProps) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      aria-current={active ? 'location' : undefined}
      className={`relative rounded-full px-3.5 py-1.5 text-small transition-colors duration-300 ease-out-quart
        ${active ? 'text-fg' : 'text-fg-muted hover:text-fg'}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-full bg-surface-strong transition-opacity duration-300 ease-out-quart ${active ? 'opacity-100' : 'opacity-0'}`}
      />
      <span className="relative">{label}</span>
    </a>
  )
}
