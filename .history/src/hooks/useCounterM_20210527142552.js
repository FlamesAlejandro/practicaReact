import { useState } from 'react';

export const useCounterM = (initialState = 10) => {
    
    const [state, setState] = useState(initialState)

    const increment = (  ) => {
        setState( state + factor );
    }

    const decrement = (  ) => {
        setState( state - factor );
    }
     
    const reset = () => {
        setState( initialState );
    }

    return {
        state,
        increment,
        decrement,
        reset
    };


}
