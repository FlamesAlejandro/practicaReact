import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
    //   una forma  document.querySelector('input').select();
    inputRef.current.select();
    // }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}

}
