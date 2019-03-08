var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 and 4 to get 5', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })

  it('should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('should multipy 3 by 5 and get 15', function(){
    calculator.previousTotal = 5
    calculator.multiply(3)
    assert.equal(15, calculator.runningTotal)
  })

  it('should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('should concat multiple number button clicks', function(){
    calculator.runningTotal = 0
    calculator.numberClick(5)
    calculator.numberClick(3)
    assert.equal(53, calculator.runningTotal)
  })

  it('should chain multiple operations together', function(){
    calculator.runningTotal = 0
    calculator.numberClick(5)
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(60, calculator.runningTotal)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 0
    calculator.numberClick(5)
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

});
