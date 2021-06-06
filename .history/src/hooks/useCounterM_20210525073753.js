import { useState } from 'react';

export const useCounterM = (initialState = 10) => {
    
    const [state, setState] = useState(initialState)

    const increment = ( factor = 1) => {
        setState( state + 1 );
    }

    const decrement = () => {
        setState( state - 1 );
    }

    return {
        state,
        increment,
        decrement
    };


}
