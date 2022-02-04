import React, { useState } from "react";

const Buttons = ({changeDisplay}) => {
  const numberButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','] //Layout
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

  function numberClick(value) {  //on click numbers
    setCurrentValue(CurrentValue => CurrentValue+value)
    
    display === 0 ? //conditional to check if it is the first click
    setDisplay(CurrentValue => value)
    : setDisplay(CurrentValue => CurrentValue+value)
    
    if(currentValue === 0) setDisplay(value)
  }
  
  function sum() {
    setOperation(1)
    setOldValue(parseInt(oldValue) + parseInt(currentValue))
    setDisplay(parseInt(oldValue) + parseInt(currentValue))
    setCurrentValue(0)
  }
  function subtration() {
    if(operation === 2 || oldValue !== 0) {
      setOldValue(parseInt(oldValue) - parseInt(currentValue))
      setDisplay(parseInt(oldValue) - parseInt(currentValue))
      setCurrentValue(0)
    } else {
      setOldValue(parseInt(currentValue) - parseInt(oldValue))
      setDisplay(parseInt(currentValue) - parseInt(oldValue))
      setCurrentValue(0)
      setOperation(2)
    }
  }
  
  function equal() {
    if(operation === 1) { //sum
      setDisplay(parseInt(oldValue) + parseInt(currentValue))
      setOldValue(parseInt(oldValue) + parseInt(currentValue))
      setCurrentValue(0)
    }
    if(operation === 2) { //subtration
      setDisplay(parseInt(oldValue) - parseInt(currentValue))
      setOldValue(parseInt(oldValue) - parseInt(currentValue))
      setCurrentValue(0)
    }

  }

  changeDisplay(display)
  return (
  <>
    <div className="buttons">
      <div className="button topButton">AC</div>
      <div className="button topButton">+/-</div>
      <div className="button topButton">%</div>
      <div className="button sideButton buttonDiv">÷</div>
      <div className="button sideButton buttonMult">X</div>
      <div className="button sideButton buttonSub" onClick={() => subtration()}>-</div>
      <div className="button sideButton buttonSum" onClick={() => sum()}>+</div>
      <div className="button sideButton buttonIgu" onClick={() => equal()}>=</div>
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