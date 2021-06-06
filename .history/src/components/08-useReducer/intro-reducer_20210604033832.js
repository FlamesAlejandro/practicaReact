
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
    todo: 'Comprar'
}

let todos = todoReducer();
