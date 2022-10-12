import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        value: '',
    }

    handle = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render () {
        return (
            <>
            <input name='my_input' onChange={this.handle}></input>
            <Welcome name={this.state.value}/>
            </>
        )
    }
}