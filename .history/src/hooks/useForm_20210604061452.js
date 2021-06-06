import { useState } from 'react'

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues
    }

    const handleInputChange = ({ target }) =>{

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };

    return [ values, handleInputChange];
}
