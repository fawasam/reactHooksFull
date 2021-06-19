import React,{useState,useEffect} from 'react'

function EffectCounter() {
    
    const [count,setCount] =useState(0)
    const [name,setName] =useState('')
    useEffect(()=>{
        console.log("updated");
        document.title =`you clicked ${count} times`

    },[count])
    return (
        <div>
            <input type="text" 
            value={name} onChange ={e => setName(e.target.value)} />
            <button onClick={() => 
                setCount(prevCount => prevCount +1)}>Click {count}</button>
        </div>
    )
}

export default EffectCounter

