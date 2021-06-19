import React, { useState } from 'react'

function UsehookObj() {
    const [name,setName] =useState({
        firstName:" ",
        place:" "
    })
    return (
        <div>
            <form action="">
                <input type="text" 
                value={name.firstName} 
                onChange={e=> 
                    setName({ ...name ,firstName:e.target.value})} 
                />
                <input type="text" 
                value={name.place} 
                onChange={e=> 
                    setName({...name ,place:e.target.value})} 
                />
                <h2>Hii {<strike>{name.firstName}</strike>} welcome </h2>
                <h2>Hii feel free from your place {name.place}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
            
        </div>
    )
}

export default UsehookObj
