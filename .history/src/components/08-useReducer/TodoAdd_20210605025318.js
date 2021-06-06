
import React from 'react'

export const TodoAdd = () => {
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
