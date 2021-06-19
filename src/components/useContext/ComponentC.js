import React from 'react'
import {userContext} from "../../App"

function ComponentC() {
    return (
        <div>
            <userContext.Consumer>
                {
                 user =>{
                 return <div>userContext value is {user}</div>                   
                }}
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC
