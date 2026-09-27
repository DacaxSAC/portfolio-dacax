interface LogoProps {
  className?: string
}

/** Isotipo «D‹» — protagonista del hero. */
export function LogoMark({ className = '' }: LogoProps) {
  return (
    <img
      src="/images/logo-mark.webp"
      alt=""
      width={400}
      height={300}
      decoding="async"
      className={`h-auto select-none ${className}`}
    />
  )
}

/** Logotipo completo «Dacax» — header y footer. */
export function Wordmark({ className = '' }: LogoProps) {
  return (
    <img
      src="/images/Dacax-Banner.png"
      alt="Dacax"
      width={420}
      height={104}
      decoding="async"
      className={`h-[1.375rem] w-auto select-none ${className}`}
    />
  )
}
