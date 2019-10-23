const mutate = (arr, mutation) => {
  const tmpArr = [...arr]

  return mutation(tmpArr)
}

module.exports = {
  mutate
}
