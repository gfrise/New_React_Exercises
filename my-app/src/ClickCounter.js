import React, { useState, useEffect } from 'react';

export function ClickCounter({onCounterChange}) {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        onCounterChange(count)
    }, [count, onCounterChange])
    

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