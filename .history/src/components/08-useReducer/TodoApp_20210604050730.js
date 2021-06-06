import React, { useReducer } from 'react'
import './Style.css'
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender react',
    done: false
}]

export const TodoApp = () => {

    const [ todos ] = useReducer( todoReducer, initialState )

    return (
        <div>
            <h1>TodoApp( { todos.length })</h1>
            <hr />
            
            <ul>
                <li>Dota2</li>
                <li>Apex Legends</li>
                <li>Counter Strike</li>
            </ul>

        </div>
    )
}
