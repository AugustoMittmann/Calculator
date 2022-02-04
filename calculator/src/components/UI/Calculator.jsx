import React, {useState, useEffect} from "react";
import Buttons from "./Buttons";
import Display from "./Display";

import '../style.css'

function Calculator ({}) {

  const [currentValue, setCurrentValue] = useState(0)
  const [oldValue, setOldValue] = useState(0)
  const [changeValue, setChangeValue] = useState(0)

  function changeDisplay(value) {
    setCurrentValue(value)
  }

  return (
    <section className="container">
      <Display setDisplay={currentValue}/>
      <Buttons changeDisplay={changeDisplay}/>
    </section>
  )
}

export default Calculator
