import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <pre>
                
            </pre>
        </div>
    )
}
