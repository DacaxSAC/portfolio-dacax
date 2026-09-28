import type { CSSProperties } from 'react'

interface GlowProps {
  /** Centro de la luz, relativo a su contenedor. */
  x?: string
  y?: string
  /** Diámetro (se limita a 140vw en pantallas pequeñas). */
  size?: string
  /** Intensidad del teal en el centro, de 0 a 1. */
  strength?: number
}

/**
 * Luz ambiental teal: un degradado radial estático que da profundidad al negro.
 * Va dentro de una capa `absolute -z-10` de la sección. Sin coste en scroll.
 */
export function Glow({ x = '50%', y = '50%', size = '56rem', strength = 0.16 }: GlowProps) {
  const style: CSSProperties = {
    left: x,
    top: y,
    width: `min(${size}, 140vw)`,
    background: `radial-gradient(closest-side, rgb(18 146 169 / ${strength}), rgb(18 146 169 / ${strength * 0.35}) 45%, transparent)`,
  }
  return <div aria-hidden="true" className="pointer-events-none absolute aspect-square -translate-x-1/2 -translate-y-1/2" style={style} />
}
