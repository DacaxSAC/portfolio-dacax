import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { startParticleField } from '../../lib/particleField'

/**
 * Partículas teal que fluyen como corrientes. Ocupa todo su contenedor.
 * Con prefers-reduced-motion no se renderiza: queda solo la textura estática.
 */
interface ParticleFieldProps {
  className?: string
  /** Multiplicador de la cantidad de partículas (1 = hero). */
  density?: number
}

export function ParticleField({ className = '', density = 1 }: ParticleFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced || !containerRef.current || !canvasRef.current) return
    return startParticleField(containerRef.current, canvasRef.current, { density })
  }, [reduced, density])

  if (reduced) return null

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  )
}
