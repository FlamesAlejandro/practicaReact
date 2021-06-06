import { useState } from 'react';

export const useCounterM = (initialState = 10) => {
    
    const [state, setState] = useState(initialState)

    const increment = ( factor = 1 ) => {
        setState( state + factor );
    }

    const decrement = ( factor = 1 ) => {
        setState( state - factor );
    }
     
    const reset 

    return {
        state,
        increment,
        decrement
    };


}
