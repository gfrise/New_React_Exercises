import React, { useCallback } from "react";
import { useState } from "react";

export function UseCounter() {
    const[counter, setCounter] = useState(0)

    const plus = useCallback(()=> {
        setCounter((counter) => {
            return counter + 1
        })
    })

    const minus = useCallback(() => {
        setCounter((counter)=> {
            return counter - 1
        })
    })

    const reinitialize = useCallback(() => {
        setCounter((counter) => {
            return 0
        })
    })
    

    return {
        counter: counter,
        toIncrement : plus,
        toDecrement: minus,
        toReset: reinitialize
    }
}