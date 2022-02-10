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
})

describe('subtration function', () => {
  it('subRight', () => { //old, current, operation
    expect(calculos(2, 3, 2)).toBe(-1)
  })
})

describe('multiplication function', () => {
  it('multRight', () => { //old, current, operation
    expect(calculos(2, 2, 3)).toBe(4)
  })
})

describe('division function', () => {
  it('divRight', () => { //old, current, operation
    expect(calculos(10, 5, 4)).toBe(2)
  })
})