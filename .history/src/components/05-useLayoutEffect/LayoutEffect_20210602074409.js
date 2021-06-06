import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

import { useCounterM } from '../../hooks/useCounterM';
import 'layout.css';

export const Layout = () => {

    const { counter, increment } = useCounterM(1);
    
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    // !!data = si existe data
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [state, setstate] = useState(initialState)

    useLayoutEffect( () => {
        
        console.log( pTag.current.getBoundingClientRect() );
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                > 
                { quote }
                </p>                
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente
            </button>


        </div>
    )
}
