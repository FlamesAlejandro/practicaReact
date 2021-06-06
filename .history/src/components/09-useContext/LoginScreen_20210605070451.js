import React, { useContext, useState } from 'react'

export const LoginScreen = () => {

    const [user, setUser] = useContext(UserContext)

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
        </div>
    )
}
