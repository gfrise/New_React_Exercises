import React from "react";

export function Sum({numbers=[3, 5, 6]}) {
    const x = numbers.reduce((accumulatore, corrente) => corrente += accumulatore)


    return <h1>Il risultato è: {x}</h1>
}