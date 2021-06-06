import React from 'react';
import { useCounterM } from '../../hooks/useCounterM';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement} = useCounterM();

    return (
        <>
            <h1>Counter with Hook: { 0 }</h1>
            <hr />

            <button onClick= className="btn"> +1 </button>
            <button onClick= className="btn"> -1 </button>

        </>
    )
}
