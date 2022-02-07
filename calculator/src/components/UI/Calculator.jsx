import React, {useState} from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import Historic from "./Historic";

import '../style.css'

function Calculator ({}) {

  const [currentValue, setCurrentValue] = useState(0)

  function changeDisplay(value) {
    setCurrentValue(value)
  }
  
  return (
    <>
      <section className="container">
        <Display setDisplay={currentValue} />
        <Buttons changeDisplay={changeDisplay} />
      </section>
    </>
  )
}

export default Calculator
