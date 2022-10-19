import React, { createContext } from "react";

export const LanguageContext = createContext('en')

const Strings = {
    en : {
        current: 'english language'
    },
    it : {
        current: 'lingua italiana'
    },
    fr : {
        current: 'langue francaise'
    },
    la : {
        current: 'lingva latina'
    }
}

export class DisplayLanguage extends React.Component {
    render () {
        return (
            <>
                <LanguageContext.Consumer>
                  {(language) => <h1>{Strings[language].current}</h1>}
                </LanguageContext.Consumer>
            </>
        )
    }
}
