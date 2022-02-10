const { plusLessCalc } = require('./plusLess')

/*  +- */

describe('invert number', () => {
  it('a - ', () => { //old, current, operation
    expect(plusLessCalc(2)).toBe(-2)
  })
  it('b - ', () => { //old, current, operation
    expect(plusLessCalc(-2)).toBe(2)
  })
  it('c - ', () => { //old, current, operation
    expect(plusLessCalc(0)).toBe(0)
  })
})