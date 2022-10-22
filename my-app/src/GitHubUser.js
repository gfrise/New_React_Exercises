import React, {useState, useEffect} from "react";

export function GitHubUser({username}) {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            setData(json)
        })
    }, [username])

    return (
        <>
            {data && <h1>{data.name}, {data.login}</h1>}
        </>
    )
}