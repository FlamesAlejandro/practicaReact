
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
        
        case 'delete':
            return
            
    
        default:
            return state;
    }

}