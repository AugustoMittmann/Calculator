import React, {useState} from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import Historic from "./Historic";

import '../style.css'

function Calculator ({}) {

  const [currentValue, setCurrentValue] = useState(0)
  const [history, setHistory] = useState([])

  function changeDisplay(value) {
    setCurrentValue(value)
  }
  const changeHistory = (value) => {
    setHistory(history => [...history, value])  
  }
 
  return (
    <>
    <section className="container">
        <Display setDisplay={currentValue}/>
        <Buttons changeDisplay={changeDisplay} changeHistory={changeHistory}/>
      </section>
      <Historic history={history}/>
    </>
  )
}

export default Calculator
