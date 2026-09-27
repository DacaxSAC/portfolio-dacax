import type { ElementType, ReactNode } from 'react'

interface EyebrowProps {
  as?: ElementType
  id?: string
  className?: string
  children: ReactNode
}

/** Etiqueta de sección: mono, mayúsculas, en el acento de marca. */
export function Eyebrow({ as: Tag = 'p', id, className = '', children }: EyebrowProps) {
  return (
    <Tag id={id} className={`font-mono text-caption font-medium uppercase text-accent-bright ${className}`}>
      {children}
    </Tag>
  )
}
