// Значение, которое никогда не меняется
const CONSTANT_SIZE = 16

const PROPERTY_NAME = '--dashboard-constructor-base-size'

export const updateBaseSize = (size: number, element: HTMLElement | SVGElement) => {
  element.style.setProperty(PROPERTY_NAME, `${size}`)
}

export const getCalculatedSize = (size: number, baseSize: number) => {
  return Math.round((size / CONSTANT_SIZE) * baseSize)
}

export const calcSize = (size: number, isVar?: boolean) => {
  const text = isVar ? `(${size} / ${CONSTANT_SIZE})` : `${size / CONSTANT_SIZE}px`
  return `calc(${text} * var(${PROPERTY_NAME}))`
}
