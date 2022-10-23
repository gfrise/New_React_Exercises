import {useEffect, useRef } from "react";

export function CardDetails({initialData}) {
    const formReference = useRef(null)
    
    useEffect(()=> {
        formReference.current.reset()
    }, [initialData])

    return (
        <>
            <form ref={formReference}>
                <input name="model" value={initialData.model}></input>
                <input name="year" value={initialData.year}></input>
                <input name="color" value={initialData.color}></input>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}