import { type CSSProperties, type ElementType, type ReactNode, useRef } from 'react'
import { useInViewOnce } from '../../hooks/useInView'

interface RevealProps {
  as?: ElementType
  /** `up`: fundido + subida ligera (por defecto). `scale`: fundido + escala. `fade`: solo fundido. */
  variant?: 'up' | 'scale' | 'fade'
  /** Retraso en ms, para escalonar elementos hermanos. */
  delay?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
  id?: string
}

/**
 * Revela su contenido la primera vez que entra en pantalla.
 * El estado se escribe directamente en el DOM (data-visible) para no re-renderizar.
 */
export function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className, style, children, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  useInViewOnce(ref, (el) => el.setAttribute('data-visible', ''))

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal={variant}
      className={className}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
