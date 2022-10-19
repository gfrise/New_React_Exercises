import React, { useState } from 'react';

export function ClickCounter() {
    const [count, setCount] = useState(0)

    const shoot = () => {
        setCount((count) => count + 1)
    }

    return (
        <>
            <h1>Siamo a :{count}</h1>
            <button onClick={shoot}>Incrementa</button>
        </>
    )
}