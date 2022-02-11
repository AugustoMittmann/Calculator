import React, {useState, useEffect} from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import Historic from "./Historic";
import '../style.css'
const { calculos } = require('./calcs')
const { plusLessCalc } = require('./plusLess')

function Calculator () {

  const [valueDisplay, setValueDisplay] = useState(0)
  const [history, setHistory] = useState([])
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
  
  const calcs = (nextOperation) => {
    if(operation === 0) {
      setDisplay(parseFloat(currentValue))  //keep display with currentValue until a number click 
      setOldValue(parseFloat(currentValue)) //save in the memory the currentValue
    }
    if(oldValue !== 0) {
      if(currentValue === 0) {  //if click 2 times at "X" or "/"
        setDisplay(oldValue)
        setOldValue(oldValue)
      } else {
        const result = calculos(oldValue, currentValue, operation)
        setDisplay(result)
        setOldValue(result)
        setHistory(history => [...history, {oldValue, operation, currentValue}])
      }
    }
    
    setCurrentValue(0)  
    setOperation(nextOperation)
  }

  function ac(){
    setCurrentValue(0)
    setOldValue(0)
    setDisplay(0)
    setOperation(0)
  }

  function numberClick(value) {  //on click numbers
    setCurrentValue(currentValue => currentValue+value)
    
    if(operation === 0){  //if already did a calc and start a new calc only clicking in a new number 
      setOldValue(0)
    }
    
    if(display === 0 && operation === 0) { //conditional to check if it is the first click
      setDisplay(value)
    } else {
      setDisplay(currentValue => currentValue+value)
    }
    
    if(currentValue === 0) {
      setDisplay(value)
    }
  }

  function plusLess(){ //on click +/-
    if(currentValue === 0) {
      if(operation === 0) {
        const result = plusLessCalc(oldValue)
        setOldValue(result)
        setCurrentValue(result)
        setDisplay(result)
      } else {
        setCurrentValue('-')
        setDisplay('-')
      }
    } else {
      const result = plusLessCalc(currentValue)
      setCurrentValue(result)
      setDisplay(result)
    }
  }


  useEffect(() => {
    setValueDisplay(display)
  }, [display])

  return (
    <>
    <section className="container">
        <Display valueDisplay={valueDisplay}/>
        <Buttons calcs={calcs} ac={ac} plusLess={plusLess} numberClick={numberClick}/>
      </section>
      <Historic history={history}/>
    </>
  )
}

export default Calculator
