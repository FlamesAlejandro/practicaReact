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

                <dic className="col-5">
                    Agregar
                </dic>
            </div>

        </div>
    )
}
