import React, {useState} from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import Historic from "./Historic";

import '../style.css'

function Calculator ({}) {

  const [showHistory, setShowHistory] = useState(false)

  const [currentValue, setCurrentValue] = useState(0)

  function changeDisplay(value) {
    setCurrentValue(value)
  }

  function onMouseEnter() {
    setShowHistory(true)
  }
  function onMouseDown() {
    setShowHistory(false)
    console.log('weq');
  }
  
  return (
    <>
      <section className="container">
        <Display setDisplay={currentValue} onMouseEnter={onMouseEnter} onMouseDown={onMouseDown}/>
        <Buttons changeDisplay={changeDisplay} />
      </section>
      {
        showHistory === true ?
        <Historic /> :
        null
      }
    </>
  )
}

export default Calculator
