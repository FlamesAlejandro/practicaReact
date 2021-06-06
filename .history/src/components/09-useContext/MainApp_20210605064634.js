import React from 'react'
import { AppRouter } from './AppRouter'


export const MainApp = () => {

    cosnt user = {
        id: 123,
        name: 'Alejandro',
        
    }

    return (
        <div>
            <AppRouter />
        </div>
    )
}
