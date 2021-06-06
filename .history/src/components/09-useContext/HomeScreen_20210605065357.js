import {React, useContext} from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    
    const useContext = userContext(UserContext);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            
        </div>
    )
}
