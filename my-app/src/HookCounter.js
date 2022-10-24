import React from 'react'
import { UseCounter } from './useCounter'

export function HookCounter() {
    const { counter, toIncrement, toDecrement, toReset} = UseCounter()

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={toDecrement}>Diminuisci</button>
            <button onClick={toIncrement}>Aumenta</button>
            <button onClick={toReset}>Resetta</button>
        </>
    )
}