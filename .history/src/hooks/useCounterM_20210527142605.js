import { useState } from 'react';

export const useCounterM = (initialState = 10) => {
    
    const [counter, setState] = useState(initialState)

    const increment = (  ) => {
        setState( counter + 1 );
    }

    const decrement = (  ) => {
        setState( counter - 1 );
    }
     
    const reset = () => {
        setState( initialState );
    }

    return {
        state: counter,
        increment,
        decrement,
        reset
    };


}
