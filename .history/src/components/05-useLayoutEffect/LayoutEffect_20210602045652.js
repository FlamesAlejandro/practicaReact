import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { useCounterM } from '../../hooks/useCounterM';
import '../02-useEffect/effect.css';

export const layout = () => {

    const { counter, increment } = useCounterM(1);
    
    const  data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    // !!data = si existe data
    const { author, quote} = !!data && data[0];

    return (
        <div>
            <h1>Breacking the Habit!</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p className="mb-0"> {quote} </p>
                <footer className="blockquote-footer"> {author} </footer>
            </blockquote>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente
            </button>


        </div>
    )
}
