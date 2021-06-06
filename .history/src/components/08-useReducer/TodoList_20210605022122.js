import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todos, index) => (
                    <TodoListItem 
                        todo ={ todos }
                        index = { index }
                        handleDelete = { todos.id }
                    />
                ))
            }
        </ul>
    )
}
