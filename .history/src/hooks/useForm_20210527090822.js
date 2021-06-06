import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const handleInputChange = ({ target }) =>{

        setFormState({
            ...values,
            [ target.name ]: target.value
        });
    };
}
