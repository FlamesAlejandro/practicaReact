import {React, useState} from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    });

    // para modificar el 1 y el 2
    const { counter1, counter2 } = counter;

    return (
        <>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    // Operador spread para no perder las otras variables
                    setCounter({
                        ...counter,
                        counter1: counter1 + 1
                    });
                }}
            >
                +1
            </button>
        </>
    )
}
