import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todos, index) => (
                    <TodoListItem 
                        key = { todos.id }
                        todos ={ todos }
                        index = { index }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                    />
                ))
            }
        </ul>
    )
}
