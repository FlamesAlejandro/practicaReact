import React from 'react'
import { AppRouter } from './AppRouter'
import { UseContext } from './UserContext'


export const MainApp = () => {

    const user = {
        id: 123,
        name: 'Alejandro',
        email: 'flames@kazu.cl'
    }

    return (
        <div>
            <UserContext.Provider value={ user }>
                <AppRouter />
            </UseContext.Provider>
        </div>
    )
}
