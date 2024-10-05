import React from 'react'

function FunctionClick() {
    function ClickHandler(){
        console.log("East or West")
    }
  return (
    <div>
        <button onClick={ClickHandler}>Click Me</button>
    </div>
  )
}

export default FunctionClick