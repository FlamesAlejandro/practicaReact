import React from 'react'

export const TodoListItem = () => {
    return (
        <li
            key={ todos.id }
            className="list-group-item"
        >
            <p 
                className={ `${ todos.done && 'complete' }` }
                onClick={ () => handleToggle( todos.id ) }
            >
                    { i + 1}. { todos.desc }
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete(todos.id) }>
                    Borrar
                </button>
        </li>
    )
}
