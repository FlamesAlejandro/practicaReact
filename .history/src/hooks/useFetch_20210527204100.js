import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect( () => {

        setState({ data: null, loading: true, error: null });
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setTimeout(() => {
                    
                    if ( isMounted.current)
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }, 3000);
                
            });

    }, [url]);

    return state;
}
