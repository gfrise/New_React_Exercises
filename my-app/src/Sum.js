import React from "react";

export function Sum(props) {
    const x = props.numbers.reduce((accumulatore, corrente) => corrente += accumulatore)


    return <h1>Il risultato è: {x}</h1>
}