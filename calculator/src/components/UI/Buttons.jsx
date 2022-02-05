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
 const [history, setHistory] = useState([])

  function ac() {
    setCurrentValue(0)
    setOldValue(0)
    setDisplay(0)
    setOperation(0)
  }

  function plusLess(value){
    if(operation === 0 && currentValue === 0) {
      setOldValue(parseFloat(oldValue)*(-1))
      setCurrentValue(parseFloat(oldValue)*(-1))
      setDisplay(parseFloat(oldValue)*(-1))
    } else {
      setCurrentValue(parseFloat(value)*(-1))
      setDisplay(parseFloat(value)*(-1))
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

    if(currentValue === 0) setDisplay(value)
  }
  
  function sum() {
    if(operation === 0) {
      if(oldValue !== 0) {
        setOldValue(parseFloat(oldValue))
        setDisplay(parseFloat(oldValue))
        setCurrentValue(0)
        setOperation(1)
      } else {
        setOldValue(parseFloat(currentValue))
        setDisplay(parseFloat(currentValue))
        setCurrentValue(0)
        setOperation(1)
      }
    }
    if(operation === 1) {
      setOldValue(parseFloat(oldValue) + parseFloat(currentValue))
      setDisplay(parseFloat(oldValue) + parseFloat(currentValue))
      setCurrentValue(0)
    } else {
      equal()
      setOperation(1)
    }
  }

  function subtration() {
    if(operation === 0) {
      if(oldValue !== 0) {
        setOldValue(parseFloat(oldValue))
        setDisplay(parseFloat(oldValue))
        setCurrentValue(0)
        setOperation(2) //set subtration 
      } else {
        setOldValue(parseFloat(currentValue))
        setDisplay(parseFloat(currentValue))
        setCurrentValue(0)
        setOperation(2) //set subtration 
      }
    }  else if(operation === 2) {
      setDisplay(parseFloat(oldValue) - parseFloat(currentValue))
      setOldValue(parseFloat(oldValue) - parseFloat(currentValue))
      setCurrentValue(0)
    } else {
      equal()
      setOperation(2)
    }
  }

  function multiplication() {
    if(operation === 0) {
      if(oldValue !== 0) {
        setOldValue(parseFloat(oldValue))
        setDisplay(parseFloat(oldValue))
        setCurrentValue(0)
        setOperation(3) //set multiplication 
      } else {
        setOldValue(parseFloat(currentValue))
        setDisplay(parseFloat(currentValue))
        setCurrentValue(0)
        setOperation(3) //set multiplication
      }
    }  else if(operation === 3) {
      setDisplay(parseFloat(oldValue) * parseFloat(currentValue))
      setOldValue(parseFloat(oldValue) * parseFloat(currentValue))
      setCurrentValue(0)
    } else {
      equal()
      setOperation(3)
    }
  }
  
  function division() {
    if(operation === 0) {
      if(oldValue !== 0) {
        setOldValue(parseFloat(oldValue))
        setDisplay(parseFloat(oldValue))
        setCurrentValue(0)
        setOperation(4) //set division 
      } else {
        setOldValue(parseFloat(currentValue))
        setDisplay(parseFloat(currentValue))
        setCurrentValue(0)
        setOperation(4) //set division
      }
    }  else if(operation === 3) {
      setDisplay(parseFloat(oldValue) / parseFloat(currentValue))
      setOldValue(parseFloat(oldValue) / parseFloat(currentValue))
      setCurrentValue(0)
    } else {
      equal()
      setOperation(4)
    }
  }

  function equal() {
    if(operation === 1) { //sum
      setDisplay(parseFloat(oldValue) + parseFloat(currentValue))
      setOldValue(parseFloat(oldValue) + parseFloat(currentValue))
      setCurrentValue(0)
      setOperation(0)
    }
    if(operation === 2) { //subtration
      setDisplay(parseFloat(oldValue) - parseFloat(currentValue))
      setOldValue(parseFloat(oldValue) - parseFloat(currentValue))
      setCurrentValue(0)
      setOperation(0)
    }
    if(operation === 3) { //multiplication
      setDisplay(parseFloat(oldValue) * parseFloat(currentValue))
      setOldValue(parseFloat(oldValue) * parseFloat(currentValue))
      setCurrentValue(0)
      setOperation(0)
    }
    if(operation === 4) { //division
      setDisplay(parseFloat(oldValue) / parseFloat(currentValue))
      setOldValue(parseFloat(oldValue) / parseFloat(currentValue))
      setCurrentValue(0)
      setOperation(0)
    }
  }

  changeDisplay(display)
  return (
  <>
    <div className="buttons">
      <div className="button topButton" onClick={() => ac()}>AC</div>
      <div className="button topButton" onClick={() => plusLess(currentValue)}>+/-</div>
      <div className="button topButton">%</div>
      <div className="button sideButton buttonDiv"onClick={() => division()}>÷</div>
      <div className="button sideButton buttonMult" onClick={() => multiplication()}>X</div>
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