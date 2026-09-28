import { RefObject, useEffect } from 'react'

/* Un IntersectionObserver compartido por todos los elementos que se revelan. */
const callbacks = new WeakMap<Element, () => void>()
let observer: IntersectionObserver | null = null

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        callbacks.get(entry.target)?.()
        callbacks.delete(entry.target)
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  )
  return observer
}

/** Llama a `onEnter` una sola vez, cuando el elemento entra en pantalla. */
export function useInViewOnce<T extends Element>(ref: RefObject<T | null>, onEnter: (el: T) => void) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = getObserver()
    callbacks.set(el, () => onEnter(el))
    obs.observe(el)
    return () => {
      callbacks.delete(el)
      obs.unobserve(el)
    }
    // onEnter se lee solo al montar: el revelado ocurre una vez.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}
