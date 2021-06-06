import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';

import '../02-useEffect/effect.css';

export const RealExampleRef = () => {

    const [ show, setShow ] = useState(false);

    return (
        <div>
            <h1>Real Example</h1>
            < hr />

            { show && < MultipleCustomHook />}

            <button>
                
            </button>
        </div>
    )
}
