import { useEffect, useState } from "react";

export default function useFetch( fetchUrl ) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        
        // Emulates a 1 second delay of fetching data.
        setTimeout(() => {
            fetch(fetchUrl, { signal: abortController.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted.')
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                });
        }, 200)

        return() => {abortController.abort()};

    }, [fetchUrl])

    return { data, isPending, error };
}