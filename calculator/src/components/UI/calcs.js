export const calculos = (oldValue, currentValue, operation) => {
    const newValue = parseFloat(currentValue)
    switch(operation) {
      case 0:
        return oldValue
      case 1:
        return oldValue + newValue
      case 2:
        return oldValue - newValue
      case 3:
        return oldValue * newValue
      case 4:
        return oldValue / newValue
      default:
        return null
    }
}