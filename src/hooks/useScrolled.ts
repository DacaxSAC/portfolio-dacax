import { useEffect, useState } from 'react'
import { subscribeFrame } from '../lib/frameLoop'

/** `true` en cuanto la página se ha desplazado más de `threshold` píxeles. */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let next = false
    return subscribeFrame({
      read() {
        next = window.scrollY > threshold
      },
      write() {
        setScrolled(next)
      },
    })
  }, [threshold])

  return scrolled
}
