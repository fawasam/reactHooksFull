import React,{useState,useEffect} from 'react'

function EffectMouse() {
    const [x ,setX] =useState(0)
    const [y ,setY] =useState(0)

    const logMousePostion =(e)=>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    };

    useEffect(()=>{
        console.log("called")
        window.addEventListener("mousemove",logMousePostion)
        //clean up code here 
        return()=>{
            console.log("unmouted")
            window.removeEventListener("mousemove",logMousePostion)
        }
    },[])
    return (
        <div>
            Hooks X -{x} Y -{y}
        </div>
    )
}

export default EffectMouse
