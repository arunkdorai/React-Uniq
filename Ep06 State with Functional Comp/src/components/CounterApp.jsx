import React, { useState } from 'react'

const CounterApp = () => {

    // let count = 0;

    let [count, setCount] = useState(0)

    function returnState() {
        console.log(100)
        return 100
    }

    let [sample, setSample] = useState(() => returnState())

    function handleIncrease() {
        
        setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1)
        // count +=1
        // console.log(count)
    }
    
    function handleDecrease() {

        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
        // count -=1
        // console.log(count)
    }
    

  return (
    <div>
        <h1> Counter Application - {count} - {sample}</h1>
        <button onClick={ handleIncrease }>Increase</button>
        <button onClick={ handleDecrease }>Decrease</button>
    </div>
  )
}

export default CounterApp