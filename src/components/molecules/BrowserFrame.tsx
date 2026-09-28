import type { ReactNode } from 'react'

interface BrowserFrameProps {
  /** Texto de la barra de direcciones. */
  label: string
  children: ReactNode
  className?: string
}

/** Ventana neutra para presentar capturas de producto sin el ruido del navegador real. */
export function BrowserFrame({ label, children, className = '' }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-[0.875rem] border border-line-strong bg-elevated shadow-float
                  sm:rounded-[1.25rem] lg:rounded-[1.5rem] ${className}`}
    >
      <div className="relative flex h-8 items-center border-b border-line px-3.5 sm:h-11 sm:px-5" aria-hidden="true">
        <div className="flex gap-1.5 sm:gap-2">
          <span className="size-2 rounded-full bg-fg/15 sm:size-2.5" />
          <span className="size-2 rounded-full bg-fg/15 sm:size-2.5" />
          <span className="size-2 rounded-full bg-fg/15 sm:size-2.5" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 rounded-md bg-surface-strong px-3 py-0.5 text-caption tracking-normal text-fg-subtle sm:px-10 sm:py-1">
          {label.toLowerCase()}
        </span>
      </div>
      {children}
    </div>
  )
}
