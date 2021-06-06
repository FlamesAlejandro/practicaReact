import React, { useState } from 'react'
import './effect.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    
            </div>
        </>
    )
}
