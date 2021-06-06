import React, { useEffect, useState } from 'react'
import './effect.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        
    }, []);

    const handleInputChange = (e) =>{

    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                 />
            </div>
        </>
    )
}
