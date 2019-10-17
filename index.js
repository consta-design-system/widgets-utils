// Значение, которое никогда не меняется
const CONSTANT_SIZE = 16
// Значение, которое изменяется при ресайзе окна и используется для расчета всех размеров
let baseSize

const updateBaseSize = (size, element) => {
  baseSize = size
  element.style.setProperty('--base-size', `${size}`)
}

const getCalculatedSize = size => (size / CONSTANT_SIZE) * baseSize

const calcSize = (size, isVar) => {
  const text = isVar ? `(${size} / ${CONSTANT_SIZE})` : `${size / CONSTANT_SIZE}px`
  return `calc(${text} * var(--base-size))`
}

module.exports = {
  calcSize,
  getCalculatedSize,
  updateBaseSize,
}
