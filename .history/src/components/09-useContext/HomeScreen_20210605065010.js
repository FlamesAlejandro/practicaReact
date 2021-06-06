import {React, UserContext} from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    
    const userContext = useContext(contextValue);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            
        </div>
    )
}
