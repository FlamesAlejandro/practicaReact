import React from 'react';
import { useCounterM } from '../../hooks/useCounterM';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement} = useCounterM(50);

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn"> +1 </button>
            <button onClick={ () => decrement(2) } className="btn"> -1 </button>
            <button onClick={ () => decrement(2) } className="btn"> -1 </button>

        </>
    )
}
