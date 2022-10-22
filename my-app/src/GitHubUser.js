import React, {useState, useEffect} from "react";
import { useGithubUser } from "./useGithubUser";

export function GitHubUser({username}) {
    const {name, login} = useGithubUser({username})

    return (
        <>
            {name && <h1>{data.name}</h1>}
            {login && <h1>{data.login}</h1>}
        </>
    )
}