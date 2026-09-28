import type { ImgHTMLAttributes } from 'react'

const markLoaded = (img: HTMLImageElement) => img.setAttribute('data-loaded', '')

/** <img> que aparece con un fundido cuando termina de cargar (también si ya estaba en caché). */
export function FadeImage({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      className={`img-fade ${className}`}
      ref={(el) => {
        if (el?.complete && el.naturalWidth > 0) markLoaded(el)
      }}
      onLoad={(event) => markLoaded(event.currentTarget)}
    />
  )
}
