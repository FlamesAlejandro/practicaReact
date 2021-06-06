import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    useSt

    return (
        <div>
            <UserContext.Provider value={ user }>
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}
