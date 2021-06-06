import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    UserContext

    cosnt user = {
        id: 123,
        name: 'Alejandro',
        email: 'flames@kazu.cl'
    }

    return (
        <div>
            
            <AppRouter />
        </div>
    )
}
