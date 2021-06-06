import React, { useState } from 'react';
import { useCounterM } from '../../hooks/useCounterM'
import '../02-useEffect/effect.css';
import { Small } from './small';


export const Memorize = () => {

    const { counter, increment } = useCounterM( 10 );
    const [show, setShow] = useState(true);
    
    return (
        <div>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                Show/Hide {}
            </button>
            
        </div>
    )
}
