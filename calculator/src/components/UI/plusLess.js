export const plusLessCalc = value => {
  const newValue = parseFloat(value)
  return newValue === 0 ? 0 : newValue*(-1)
}