
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
            break;
    
        default:
            break;
    }

}