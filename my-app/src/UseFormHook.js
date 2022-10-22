import React, { useState } from "react";

export function useFormHook() {
    const[data, setData] = useState([])

    function handleChange(event) {
        const value = event.target.value;
    }

    setData((data) => {
        return {
            ...data, value
        }
    })

    return {data, handleChange}
}