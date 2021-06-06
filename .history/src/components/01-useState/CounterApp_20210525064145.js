import {React, useState} from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20
    });

    return (
        <>
            <h1>Counter1 {counter}</h1>
            <h1>Counter2 {counter}</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => {

                    setCounter( counter + 1);
                }}
            >
                +1
            </button>
        </>
    )
}
