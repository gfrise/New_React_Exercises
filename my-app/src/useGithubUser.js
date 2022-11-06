import React, { useState, useEffect } from "react";
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export function useGithubUser(username) {
    const {data, error, callFn} = useSWR(() => username ? `https://api.github.com/users/${username}` : null, fetcher)

    return {
        name: data.name,
        login: data.login,
        error,
        callFn,
    }
}