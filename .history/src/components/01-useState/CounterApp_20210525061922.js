import {React, useState} from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState(10);

    return (
        <>
            <h1>Counter {counter}</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => {

                    
                }}>
                +1
            </button>
        </>
    )
}
