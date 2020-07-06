// Значение, которое никогда не меняется
export const DEFAULT_BASE_SIZE = 16

export const BASE_SIZE_PROPERTY_NAME = '--components-base-size'

export const getCalculatedSize = (size: number, baseSize: number) => {
  return Math.round((size / DEFAULT_BASE_SIZE) * baseSize)
}

export const calcSize = (size: number, isVar?: boolean) => {
  const text = isVar ? `(${size} / ${DEFAULT_BASE_SIZE})` : `${size / DEFAULT_BASE_SIZE}px`
  return `calc(${text} * var(${BASE_SIZE_PROPERTY_NAME}, ${DEFAULT_BASE_SIZE}))`
}
