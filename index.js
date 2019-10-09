const calcSize = (size, isVar) => {
  const text = isVar ? `(${size} / 16)` : `${size / 16}px`
  return `calc(${text} * var(--base-size))`
}

module.exports = {
  calcSize,
}
