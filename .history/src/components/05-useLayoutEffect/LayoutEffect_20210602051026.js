import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';

import { useCounterM } from '../../hooks/useCounterM';
import 'layout.css';

export const Layout = () => {

    const { counter, increment } = useCounterM(1);
    
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    // !!data = si existe data
    const { quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect( () => {
        
        return () => {
            
        };
    }, [])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}> {quote} </p>                
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
