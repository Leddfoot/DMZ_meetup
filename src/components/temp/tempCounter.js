import React, { useState } from 'react'

const TempCounter = () => {

    const [ counterValue, setCounterValue ]= useState(0)
    const [ inputValue, setInputValue ]= useState(1)

    const incrementCounter =()=>{
        setCounterValue(counterValue + inputValue)
    }

  return (
    <div>
    <h1>Temporary test examples</h1>
        <h2 data-testid='counter'>{counterValue}</h2>
        <input  data-testid='input' 
        type='number' 
        defaultValue={inputValue} 
        onChange={(e)=>{
            setInputValue(parseInt(e.target.value))
        }}
        />
        <button data-testid='subtract'>-</button>
        <button data-testid='add'
        onClick={incrementCounter}
        >+</button>
    </div>
  )
}

export default TempCounter