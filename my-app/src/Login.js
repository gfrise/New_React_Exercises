import React, { useState } from "react";

export function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    const handle = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        setFormData((formData) => {
            return {
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleClick = () => {
        props.onLogin(formData)
    }

    const myStyle = {
        backgroundColor: formData.password.length < 8 ? 'red' : 'green'
    }

    return (
        <>
                <input name="username" onChange={handle} value={formData.username}></input>
                <input name="password" onChange={handle} type="password" value={formData.password}></input>
                <input name="remember" onChange={handle} type="checkbox" checked={formData.remember}></input>
                <button style={myStyle} onClick={handleClick} disabled={!formData.username || !formData.password}>Login</button>
        </>
    )
}