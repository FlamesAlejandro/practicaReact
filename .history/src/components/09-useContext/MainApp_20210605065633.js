import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <div>
            <UserContext.Provider value={{
                user,
                setUser,
                temporal: 123
            }}>
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}
