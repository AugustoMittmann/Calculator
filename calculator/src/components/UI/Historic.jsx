import React from "react";

const Historic = ({history}) => {
  return (
    <>
    <div className="historic">
      {
        history.map((value, index) => {

          switch(value.operation) {
            case 1:
              return <div key={index}> {parseFloat(value.oldValue)} + {parseFloat(value.currentValue)} = {parseFloat(value.currentValue) + parseFloat(value.oldValue)}</div>
            case 2:
              return <div key={index}> {parseFloat(value.oldValue)} - {parseFloat(value.currentValue)} = {parseFloat(value.oldValue) - parseFloat(value.currentValue)}</div>
            case 3:
              return <div key={index}> {parseFloat(value.oldValue)} x {parseFloat(value.currentValue)} = {parseFloat(value.currentValue) * parseFloat(value.oldValue)}</div>
            case 4:
              return <div key={index}> {parseFloat(value.oldValue)} ÷ {parseFloat(value.currentValue)} = {parseFloat(value.currentValue) / parseFloat(value.oldValue)}</div>
            default:
              return null
          }
        })
      } 
    </div>
  </>
  )
}


export default Historic