import React from 'react'

export const TodoListItem = ({ todos, index, handleDelete, handleToggle}) => {
    return (
        <li
            key={ todos.id }
            className="list-group-item"
        >
            <p 
                className={ `${ todos.done && 'complete' }` }
                onClick={ () => handleToggle( todos.id ) }
            >
                    { index + 1}. { todos.desc }
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete(todos.id) }>
                    Borrar
                </button>
        </li>
    )
}
