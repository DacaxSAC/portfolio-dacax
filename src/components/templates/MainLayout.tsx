import type { ReactNode } from 'react'
import { Footer } from '../organisms/Footer'
import { Header } from '../organisms/Header'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-5 focus:py-2.5 focus:text-small focus:text-canvas"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
