import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHook = () => {
    
    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/1` );
    console.log(state);

    return (
        <div>
            <h1>Breacking the Habit!</h1>
            <hr />

            <div className="alert alert-info text-center">
                Loading...
            </div>

            <blockquote className="blockquote text-right">
                <p className="mb-0"> Hola mundo </p>
                <footer className="blockquote-footer"
            </blockquote>
        </div>
    )
}
