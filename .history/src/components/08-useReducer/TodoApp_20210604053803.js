import React, { useReducer } from 'react'
import './Style.css'
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender react',
    done: false
}]

export const TodoApp = () => {

    const [ todos ] = useReducer( todoReducer, initialState )

    const  handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
    desc: 'aprender react',
    done: false
        }
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                    {
                        todos.map( (todo, i) => {
                            <li
                                key={ todos.id }
                                className="list-group-item"
                            >
                                <p className="text-center">{ i + 1}. { todos.desc }</p>
                                <button
                                    className="btn btn-danger">
                                        Borrar
                                    </button>
                            </li>
                        })
                    }
                    </ul>
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
