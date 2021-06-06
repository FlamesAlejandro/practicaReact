import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('utilizando el componente con effect, montado');
        return () => {
            console.log('utilizando el componente con effect');
        }
    }, []);

    return (
        <div>
            <h3>123 Has adivinado la contraseña :O</h3>
        </div>
    )
}
