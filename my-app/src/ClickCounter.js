import React from 'react';

export class ClickCounter extends React.Component {
    state = {
        count: 0,
    }

    shoot = () => {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }

    render () {
        return (
            <>
            <h1>Siamo a :{this.state.count}</h1>
            <button onClick={this.shoot}>Incrementa</button>
            </>
        )
    }
}