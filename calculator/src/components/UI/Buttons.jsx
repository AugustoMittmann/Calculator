import React from "react";

const Buttons = ({calcs, ac, numberClick, plusLess}) => {
  const numberButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'] //Layout

  return (
    <>
    <div className="buttons">
      <div className="button topButton" onClick={() => ac()}>AC</div>
      <div className="button topButton" onClick={() => plusLess()}>+/-</div>
      <div className="button topButton">%</div>
      <div className="button sideButton buttonDiv" onClick={() => calcs(4)}>÷</div>
      <div className="button sideButton buttonMult" onClick={() => calcs(3)}>X</div>
      <div className="button sideButton buttonSub" onClick={() => calcs(2)}>-</div>
      <div className="button sideButton buttonSum" onClick={() => calcs(1)}>+</div>
      <div className="button sideButton buttonIgu" onClick={() => calcs(0)}>=</div>
    {
      numberButtons.map((button) => {
        const buttonClass = `button numberButton button_${button}`
        return <div key={button} className={buttonClass} onClick={() => numberClick(button)}>{button}</div>;
      })
    }

    </div>
  </>
  )
}

export default Buttons