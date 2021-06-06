import React, { useState, useMemo } from 'react';
import { useCounterM } from '../../hooks/useCounterM'
import { procesoPesado } from '../../helpers/procesoPesado';
import '../02-useEffect/effect.css';


export const MemoHook = () => {

    const { counter, increment } = useCounterM( 10 );
    const [ show, setShow ] = useState(true);

    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ]);
    
    return (
        <div>
            <h1> MemoHook </h1>
            <h3>Counter: <small>{ counter }</small> </h3>
            <hr />

            <p> {</p>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () =>{
                    setShow( !show );
                    }
                }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
            
        </div>
    )
}
