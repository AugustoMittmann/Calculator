import React, { useState } from "react";

const Buttons = ({changeDisplay}) => {
  const numberButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'] //Layout
  const [currentValue, setCurrentValue] = useState(0)
  const [oldValue, setOldValue] = useState(0)
  const [display, setDisplay] = useState(0)
  const [operation, setOperation] = useState(0) /*
  * 0 -> no operation
  * 1 -> sum
  * 2 -> subtration
  * 3 -> multiplication
  * 4 -> division
  */

  function ac() { //on click AC
    setCurrentValue(0)
    setOldValue(0)
    setDisplay(0)
    setOperation(0)
  }

  function plusLess(){ //on click +/-
    if(operation === 0 && currentValue === 0) {
      setOldValue(parseFloat(oldValue)*(-1))
      setCurrentValue(parseFloat(oldValue)*(-1))
      setDisplay(parseFloat(oldValue)*(-1))
    } else if(currentValue === 0){
      setCurrentValue('-')
      setDisplay('-')
    } else {
      setCurrentValue(parseFloat(currentValue)*(-1))
      setDisplay(parseFloat(currentValue)*(-1))
    }
  }

  function numberClick(value) {  //on click numbers
    setCurrentValue(currentValue => currentValue+value)
    
    if(operation === 0){  //if already did a calc and start a new calc only clicking in a new number 
      setOldValue(0)
    }
    
    if(display === 0 && operation === 0) { //conditional to check if it is the first click
      setDisplay(currentValue => value)
    } else {
      setDisplay(currentValue => currentValue+value)
    }
    
    if(currentValue === 0) {
      setDisplay(value)
    }
  }
  
  function equal(nextOperation) {
    if(operation === 0) {
      if(oldValue === 0) {
        setOldValue(parseFloat(currentValue))
        setDisplay(parseFloat(currentValue))
      }
    }
    if(oldValue !== 0) {  //if click two times
      if(operation === 1) { //sum
        setDisplay(parseFloat(oldValue) + parseFloat(currentValue))
        setOldValue(parseFloat(oldValue) + parseFloat(currentValue))
      }
      if(operation === 2) { //subtration
        setDisplay(parseFloat(oldValue) - parseFloat(currentValue))
        setOldValue(parseFloat(oldValue) - parseFloat(currentValue))
      }
      if(operation === 3) { //multiplication
        setDisplay(parseFloat(oldValue) * parseFloat(currentValue))
        setOldValue(parseFloat(oldValue) * parseFloat(currentValue))
      }
      if(operation === 4) { //division
        setDisplay(parseFloat(oldValue) / parseFloat(currentValue))
        setOldValue(parseFloat(oldValue) / parseFloat(currentValue))
      }
    }
    
    setCurrentValue(0)
    setOperation(nextOperation)
  }
  
  changeDisplay(display)

  return (
    <>
    <div className="buttons">
      <div className="button topButton" onClick={() => ac()}>AC</div>
      <div className="button topButton" onClick={() => plusLess()}>+/-</div>
      <div className="button topButton">%</div>
      <div className="button sideButton buttonDiv"onClick={() => equal(4)}>÷</div>
      <div className="button sideButton buttonMult" onClick={() => equal(3)}>X</div>
      <div className="button sideButton buttonSub" onClick={() => equal(2)}>-</div>
      <div className="button sideButton buttonSum" onClick={() => equal(1)}>+</div>
      <div className="button sideButton buttonIgu" onClick={() => equal(0)}>=</div>
    {
      numberButtons.map((button) => {
        const buttonClass = 'button' + ' ' + 'numberButton' + ' ' + `button_${button}`
        return <div key={button} className={buttonClass} onClick={() => numberClick(button)}>{button}</div>;
      })
    }

    </div>
  </>
  )
}

export default Buttons