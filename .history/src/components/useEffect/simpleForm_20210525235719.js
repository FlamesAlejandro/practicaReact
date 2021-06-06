import React, { useEffect, useState } from 'react'
import './effect.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('Inicio de la app');
    }, [] );

    useEffect( () => {
        // console.log('Cambio el FormState');
    }, [formState] );

    useEffect( () => {
        // console.log('Cambio el campo de email');
    }, [email] );

    const handleInputChange = ({ target }) =>{

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
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

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                 />
            </div>

            {  }
        </>
    )
}
