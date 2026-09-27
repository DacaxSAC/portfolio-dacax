import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  /** Icono a la izquierda del texto. */
  icon?: IconName
  /** Icono a la derecha; se desplaza ligeramente al pasar el cursor. */
  trailingIcon?: IconName
  className?: string
  children: ReactNode
}

type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
export type ButtonProps = ButtonAsLink | ButtonAsButton

const base =
  'group relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium ' +
  'transition-[background-color,color,box-shadow,transform] duration-300 ease-out-quart ' +
  'motion-safe:active:scale-[0.97] motion-safe:active:duration-150 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright'

const variants: Record<Variant, string> = {
  primary:
    'bg-fg text-canvas shadow-[0_1px_0_rgb(255_255_255/0.4)_inset,0_10px_30px_-10px_rgb(255_255_255/0.25)] ' +
    'hover:bg-white hover:shadow-[0_1px_0_rgb(255_255_255/0.4)_inset,0_14px_40px_-12px_rgb(92_200_220/0.55)]',
  secondary: 'glass text-fg ring-1 ring-inset ring-line-strong hover:bg-surface-strong hover:ring-fg/25',
  ghost: 'text-fg-muted hover:text-fg',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-small',
  md: 'h-11 px-5 text-small',
  lg: 'h-13 px-7 text-body',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', icon, trailingIcon, className = '', children, ...rest } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const iconSize = size === 'lg' ? 18 : 16

  const content = (
    <>
      {icon && <Icon name={icon} size={iconSize} className="shrink-0" />}
      <span>{children}</span>
      {trailingIcon && (
        <Icon
          name={trailingIcon}
          size={iconSize}
          className="shrink-0 transition-transform duration-300 ease-out-quart motion-safe:group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  )
}
