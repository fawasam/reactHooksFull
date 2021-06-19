import React, { useState } from 'react'

function CounterHook() {
    const initial=0
    const [count ,setCount] =useState(initial)
    //always use the prevCount => prevCount +
    const incrementFive = ()=>{
             setCount(prevCount => prevCount+5) 
    }
    return (
        <div>
            Count :{count}
            <button onClick={()=> 
                setCount(initial)}>Reset</button>    
            <button onClick={()=> 
                setCount(prevCount => prevCount+1)}>Increment</button>    
            <button onClick={()=> 
                setCount(prevCount => prevCount-1)}>Decrement</button>    
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default CounterHook
