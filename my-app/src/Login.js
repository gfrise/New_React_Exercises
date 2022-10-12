import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
    }

    handle = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    render() {
        return (
            <>
            <input name='username' onChange={this.handle} value={this.state.username}></input>
            <input type='password' name='password' onChange={this.handle} value={this.state.password}></input>
            <input type='checkbox' name='remember' onChange={this.handle} checked={this.state.remember}></input>
            </>
        )
    }
}