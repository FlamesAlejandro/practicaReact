import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('utilizando el componente con effect');
        return () => {
            console.log('utilizando el componente con effect');
        }
    }, [input])

    return (
        <div>
            <h3>123 Has adivinado la contraseña :O</h3>
        </div>
    )
}
