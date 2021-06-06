
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if ( action.type === 'agregar' )
    
    return state;
}

let todos = todoReducer();

const newTodo = {

    id:2,
    todo: 'Comprar mantequilla',
    done: false
}

const addState = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, addState);


