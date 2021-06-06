import {React, useState} from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    });

    const { counter1, counter2 } = counter;

    return (
        <>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => {

                    setCounter({counter1:counter1 + 1, counter2});
                }}
            >
                +1
            </button>
        </>
    )
}
