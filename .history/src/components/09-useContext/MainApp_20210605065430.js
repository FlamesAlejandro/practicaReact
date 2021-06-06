import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const [state, setstate] = useState(initialState)

    return (
        <div>
            <UserContext.Provider value={ user }>
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}
