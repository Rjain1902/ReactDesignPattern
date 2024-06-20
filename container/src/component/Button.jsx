import React from 'react'

export function Button(props) {
    

    return (
        <>
         <button onClick={props.clickHandler}>{props.label}{props.children}</button>
            
        </>
    )
}
