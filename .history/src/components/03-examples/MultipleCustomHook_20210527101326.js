import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHook = () => {
    
    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/1` );

    return (
        <div>
            <h1>Custom Hooks!</h1>
        </div>
    )
}
