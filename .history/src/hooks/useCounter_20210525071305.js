import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    
    const [state, setState] = useState(initialState)

    const increment = () => {
        setState( state + 1 );
    }

    const increment = () => {
        setState( state + 1 );
    }


}
