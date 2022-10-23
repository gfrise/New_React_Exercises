import React, { useState, useEffect } from "react";

export function useGithubUser({username}) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {return response.json()})
        .then(data => setData(data))
        .catch(error => setError(error))
        .then(json => {return setData(json)})
        .finally(()=> setLoading(false))
    }, [username])

    return {
        name: data.name,
        login: data.login,
        loading,
        error,
    }
}