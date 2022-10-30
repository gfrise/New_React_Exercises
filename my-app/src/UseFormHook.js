import React, { useState } from "react";

export function useFormHook() {
    const[data, setData] = useState([])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked
        
        setData((data) => {
            return {
                ...data, [name]:type === "checkbox"? checked: value
            }
        })
    }

    return {data, handleChange}
}