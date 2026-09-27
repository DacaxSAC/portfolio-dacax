import { RefObject, useEffect } from 'react'
import { subscribeFrame } from '../lib/frameLoop'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/** [punto del elemento, punto del viewport] — 0 = borde superior, 1 = borde inferior. */
export type ScrollAnchor = [element: number, viewport: number]

interface Options {
  /** Momento en que el progreso vale 0. Por defecto: la parte superior del elemento toca el borde inferior del viewport. */
  start?: ScrollAnchor
  /** Momento en que el progreso vale 1. Por defecto: la parte inferior del elemento toca el borde superior del viewport. */
  end?: ScrollAnchor
}

/**
 * Escribe en el elemento la variable CSS `--progress` (0 → 1) según su posición
 * en el viewport. No provoca renders de React: el CSS consume la variable.
 * Con `prefers-reduced-motion` no se escribe nada y el CSS usa su valor de reposo.
 */
export function useScrollProgress<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { start = [0, 1], end = [1, 0] }: Options = {},
) {
  const reduced = usePrefersReducedMotion()
  const [startEl, startVp] = start
  const [endEl, endVp] = end

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    let current = -1
    let next = 0

    const unsubscribe = subscribeFrame({
      read() {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const from = vh * startVp - rect.height * startEl
        const to = vh * endVp - rect.height * endEl
        const progress = from === to ? 1 : (from - rect.top) / (from - to)
        next = Math.min(1, Math.max(0, progress))
      },
      write() {
        if (Math.abs(next - current) < 0.0005) return
        current = next
        el.style.setProperty('--progress', next.toFixed(4))
      },
    })

    return () => {
      unsubscribe()
      el.style.removeProperty('--progress')
    }
  }, [ref, reduced, startEl, startVp, endEl, endVp])
}
