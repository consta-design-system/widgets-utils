// Значение, которое никогда не меняется
const CONSTANT_SIZE = 16
// Значение, которое изменяется при ресайзе окна и используется для расчета всех размеров
let baseSize: number

export const updateBaseSize = (size: number, element: HTMLElement | SVGElement) => {
  baseSize = size
  element.style.setProperty('--base-size', `${size}`)
}

export const getCalculatedSize = (size: number) => (size / CONSTANT_SIZE) * baseSize

export const calcSize = (size: number, isVar?: boolean) => {
  const text = isVar ? `(${size} / ${CONSTANT_SIZE})` : `${size / CONSTANT_SIZE}px`
  return `calc(${text} * var(--base-size))`
}
