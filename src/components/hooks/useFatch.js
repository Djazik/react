import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setLoading(true)
        axios
            .get(url)
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))
    }, [])
    return {data,loading,error}
}