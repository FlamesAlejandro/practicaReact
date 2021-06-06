import React from 'react'
import { AppRouter } from './AppRouter'


export const MainApp = () => {

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
