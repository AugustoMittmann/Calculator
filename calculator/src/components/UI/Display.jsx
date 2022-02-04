import React from "react";

const Display = ({setDisplay}) => {

  return (
  <>
    <div className="display">
        <div className="topBar">
          <div className="topBall redBall"></div>
          <div className="topBall yellowBall"></div>
          <div className="topBall greenBall"></div>
        </div>
        <div className="numberDisplay">
          {setDisplay}
        </div>
      </div>
  </>
  )
}

export default Display