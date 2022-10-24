import React, { useContext } from 'react'
import { Context } from './Context'

export function DisplayLanguage() {
    const strings = {
        en: 'This is the English Language',
        it: 'Questa è la lingua Italiana',
        fr: "C'est la langue Francaise",
        lat: 'Haec lingva latina est'
    }

    const language = useContext(Context)
    return (
        <>
            <h1>{strings[language]}</h1>
        </>
    )
}