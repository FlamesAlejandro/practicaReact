import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, index, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todos, i) => (
                    <TodoListItem 
                        todo={ todos }
                        index= { todos.id }
                        handleDelete = { todos.id }
                    />
                ))
            }
        </ul>
    )
}
