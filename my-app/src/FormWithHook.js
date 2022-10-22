import React from "react";
import { useFormHook } from "./UseFormHook";

export function FormWithHooks() {
    const {data, handleChange} = useFormHook()

    return (
        <>
            <input type="text" name="username" onChange={handleChange} value={data.username}/>
            <input type="password" name="password" onChange={handleChange} value={data.password}/>
        </>
    )
}