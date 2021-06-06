import React, { useEffect, useReducer } from 'react'
import './Style.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';

const init = () => {

    // sacar los todos del localstorage, y pasarlos a objetos, o devolver uno vacio
    return JSON.parse( localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'aprender react',
    //     done: false
    // }];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [ todos] )

    const handleAddTodo = ( newTodo ) => {
        
    }

    const handleDelete = ( todoId )  => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const  handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
        reset();
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleDelete = { handleDelete}
                        handleToggle = { handleToggle }                

                    />
                </div>                

                <div className="col-5">
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
                </div>
            </div>

        </div>
    )
}
