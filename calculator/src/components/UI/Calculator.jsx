import React, {useState, useEffect} from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import Historic from "./Historic";
import '../style.css'
const { calculos } = require('./calcs')

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
      setDisplay(parseFloat(currentValue))
      setOldValue(parseFloat(currentValue))
    }

    if(oldValue !== 0) {
      console.log('eita');
        const result = calculos(oldValue, currentValue, operation)
        setDisplay(result)
        setOldValue(result)
        console.log(result);
        setHistory(history => [...history, {oldValue, operation, currentValue}])  
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
