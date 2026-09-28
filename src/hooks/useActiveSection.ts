import { useEffect, useState } from 'react'

/** Devuelve el id de la sección que ocupa la franja central del viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    key.split(',').forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [key])

  return active
}
