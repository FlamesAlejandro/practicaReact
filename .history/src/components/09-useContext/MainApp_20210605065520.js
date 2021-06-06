import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const [user, setUser] = useState({
        
            id: 123,
            name: 'Alejandro',
            email: 'flames@kazu.cl'
        
    });

    return (
        <div>
            <UserContext.Provider value={ user }>
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}
