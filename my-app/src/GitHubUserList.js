import React, {useState, useEffect} from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUserList() {
    const [val, setVal] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const element = event.target.elements.username.value
        setVal([...val, element])
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input name="user" />
        <button type="submit">Submit</button>
        </form>
        <ul>
            {val.map((el, key) => <li key={key}>
                <GitHubUser username={el}/>
            </li>)}
        </ul>
        </>
    )
}