import React from 'react';
import { useCounterM } from '../../hooks/useCounterM'
import '../02-useEffect/effect.css';


export const Memorize = () => {

    const { counter, increment } = useCounterM( 10 );
    
    return (
        <div>
            <h1>Counter: <small></small></h1>
            
        </div>
    )
}
