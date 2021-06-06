import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const user = {
        id: 123,
        name: 'Alejandro',
        email: 'flames@kazu.cl'
    }

    return (
        <div>
            <UseContext.Provider value={ user }>
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}
