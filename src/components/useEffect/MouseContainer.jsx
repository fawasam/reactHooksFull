import React,{useState} from 'react'
import EffectMouse from './EffectMouse'
function MouseContainer() {
    const [display,setDisplay] =useState(false)
    return (
        <div>
            <button onClick={()=>
                setDisplay(!display)}>
                Toggle display</button>
            {display && <EffectMouse/>}        
        </div>
    )
}

export default MouseContainer
