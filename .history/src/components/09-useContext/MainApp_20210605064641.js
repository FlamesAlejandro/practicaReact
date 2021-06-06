import React from 'react'
import { AppRouter } from './AppRouter'


export const MainApp = () => {

    cosnt user = {
        id: 123,
        name: 'Alejandro',
        email: 'flames@kazu'
    }

    return (
        <div>
            <AppRouter />
        </div>
    )
}
