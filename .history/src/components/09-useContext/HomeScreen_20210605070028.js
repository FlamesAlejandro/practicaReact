import {React, useContext} from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    
    const useContext = useContext(UserContext);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                
            </pre>
            
        </div>
    )
}
