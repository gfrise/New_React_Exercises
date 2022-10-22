import React from "react";

export function UseCounter() {
    const[counter, setCounter] = useState(0)

    const plus = function increment() {
        setCounter((counter) => {
            return counter + 1
        })
    }

    const minus = function decrement() {
        setCounter((counter)=> {
            return counter - 1
        })
    }

    const reinitialize = function reset() {
        setCounter((counter) => {
            return 0
        })
    }

    return {
        counter: counter,
        toIncrement : plus,
        toDecrement: minus,
        toReset: reinitialize
    }
}