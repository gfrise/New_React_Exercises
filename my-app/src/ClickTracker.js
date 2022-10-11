import React from "react";

export class ClickTracker extends React.Component {
    state = {
        clickedButton: null,
    }

    handle = (event) => {
        this.setState({
            clickedButton: event.target.name
        })
    }

    render () {
        return (
            <>
            <h1>{this.state.clickedButton}</h1>
            <button name="1" onClick={this.handle}>First</button>
            <button name="2" onClick={this.handle}>Second</button>
            <button name="3" onClick={this.handle}>Third</button>
            </>
        )
    }
}