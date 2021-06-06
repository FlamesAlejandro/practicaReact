
import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value = { description }
                    onChange={ handleInputChange }
                />

                <button
                type="submit"
                    className="btn btn-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
