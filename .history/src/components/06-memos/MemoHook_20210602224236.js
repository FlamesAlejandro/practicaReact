import React, { useState } from 'react';
import { useCounterM } from '../../hooks/useCounterM'
import '../02-useEffect/effect.css';


export const MemoHook = () => {

    const { counter, increment } = useCounterM( 10 );
    const [show, setShow] = useState(true);
    
    return (
        <div>
            <h3>Counter: <small></small>{ counter } /></h3>
            <hr />

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
