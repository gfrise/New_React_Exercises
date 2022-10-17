import React, {createRef} from "react";

export class UncontrolledLogin extends React.Component {
    _ref = createRef()

    state = {
        disabled: false,
    }

    componentDidMount() {
        this._ref.current.elements.username.focus()
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        this.props.OnLogin({username, password, remember})
    }

    handle = () => {
        const name = this._ref.current.elements.username.value
        const password = this._ref.current.elements.password.value

        this.setState({
            disabled: !!username && !!password
        })

    }

    render() {
        return (
            <>
            <form ref={this._ref} onSubmit={this.handleSubmit}>
                <input name='username' onChange={this.handle}></input>
                <input name='password' onChange={this.handle} type='password' ></input>
                <input name='remember' type='checkbox' ></input>

                <button type='submit' disabled={!this.state.disabled}>Login</button>
                <button type='reset'>Reset</button>
            </form>
            </>
        )
    }
}