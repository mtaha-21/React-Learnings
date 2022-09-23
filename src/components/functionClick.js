import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Buton clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick