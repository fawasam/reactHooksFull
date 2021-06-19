import React, { useState } from 'react'

function UsehookArray() {
    const [items,setItems] =useState([])
   const addItem=()=>{
       //here firstly make a copy of items then without change add a new obj to the items array
       setItems([...items,
       {
           id:items.length,
           value:Math.floor(Math.random()*10000) +1
       }])
   }
   console.log(items);
    return (
        <div>
            <button onClick={addItem}>Click</button>
            <ul>
                {
                items.map(item=>
                     <li key={item.id} 
                     style={{listStyle:"none"}}>
                    {item.value}</li>
                )}
            </ul>
        </div>
    )
}

export default UsehookArray
