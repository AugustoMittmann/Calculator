const { calculos } = require ('./calcs.js')

/*  OPERATION
 * 1 - sum 
 * 2 - subtration
 * 3 - multiplication
 * 4 - division
*/

describe('sum function', () => {
  it('sumRight', () => { //old, current, operation
    expect(calculos(2, 3, 1)).toBe(5)
  })
  it('sumWrong', () => { //old, current, operation
    expect(calculos(1, 2, 1)).toBe(5)
  })
})

describe('subtration function', () => {
  it('subRight', () => { //old, current, operation
    expect(calculos(2, 3, 2)).toBe(-1)
  })
  it('subWrong', () => { //old, current, operation
    expect(calculos(2, 5, 2)).toBe(2)
  })
})

describe('multiplication function', () => {
  it('multRight', () => { //old, current, operation
    expect(calculos(2, 2, 3)).toBe(4)
  })
  it('multWrong', () => { //old, current, operation
    expect(calculos(2, 5, 3)).toBe(-10)
  })
})

describe('division function', () => {
  it('divRight', () => { //old, current, operation
    expect(calculos(10, 5, 4)).toBe(2)
  })
  it('divWrong', () => { //old, current, operation
    expect(calculos(3, 2, 4)).toBe(2)
  })
})