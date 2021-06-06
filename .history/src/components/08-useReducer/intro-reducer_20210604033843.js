
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    
    return state;
}

const newTodo = {

    id:2,
    todo: 'Comprar mantequilla',
    done: false
}

let todos = todoReducer();
