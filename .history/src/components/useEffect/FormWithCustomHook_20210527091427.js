import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    return (
        <form>
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="**********"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                 />
            </div>

        </form>
    )
}
