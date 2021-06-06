import React from 'react';
import { useCounterM } from '../../hooks/useCounterM';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {} useCounterM();

    return (
        <>
            <h1>Counter with Hook: { 0 }</h1>
            <hr />

            <button className="btn"> +1 </button>
            <button className="btn"> -1 </button>

        </>
    )
}
