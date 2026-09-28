import type { ReactNode, SVGProps } from 'react'

/* Iconografía de trazo (24×24, trazo 1.5, extremos redondeados), en la línea de Lucide.
   Usan currentColor, así que heredan el color del texto que las rodea. */
const paths = {
  smartphone: (
    <>
      <rect width="14" height="20" x="5" y="2" rx="3" />
      <path d="M11 18h2" />
    </>
  ),
  layout: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="3" />
      <path d="M2 9h20M9 9v11" />
    </>
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  workflow: (
    <>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M20 6 9 17l-5-5" />,
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="3" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  message: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  instagram: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 20, strokeWidth = 1.5, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
