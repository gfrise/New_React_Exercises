import React, { useState, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

function Counter({props}) {

    const [count, setCount] = useState(props.initialValue)

    useEffect(() => {
      let timer = setInterval(()=> {
        setCount((count) => count + props.increment)
      }, props.interval)

    return () => clearInterval(timer)
    }, [])

    return (
        <>
          <CounterDisplay count={count}/>
          <ClickCounter />
          <ClickTracker />
        </> 
    )
}