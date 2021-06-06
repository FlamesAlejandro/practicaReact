import React, { useReducer } from 'react'
import './Style.css'

const initialState = [{
    id: new Date().getTime(),
    
}]

export const TodoApp = () => {

    const [state] = useReducer( reducer, initialState )

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul>
                <li>Dota2</li>
                <li>Apex Legends</li>
                <li>Counter Strike</li>
            </ul>

        </div>
    )
}
