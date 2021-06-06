import { useState } from 'react';

export const useCounterM = (initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState)

    const increment = (  ) => {
        setCounter( counter + 1 );
    }

    const decrement = (  ) => {
        setCounter( counter - 1 );
    }
     
    const reset = () => {
        setCounter( initialState );
    }

    return {
        state: counter,
        increment,
        decrement,
        reset
    };


}
