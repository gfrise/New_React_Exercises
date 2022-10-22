import React, { useState, useEffect } from "react";

export function useGithubUser({username}) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            return setData(json)
        })
    }, [username])

    return {
        name: data.name,
        login: data.login
    }
}