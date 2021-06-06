import React, { useState } from 'react'

export const useForm = () => {
    
    const [values, setValues] = useState(initialState)

    const handleInputChange = ({ target }) =>{

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    };
}
