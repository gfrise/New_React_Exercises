import React from "react";

export class Container extends React.Component {
    render () {

        const myStyle = {
            backgroundColor: 'white',
            border : '3px solid red'
        } 

        return (
            <div style={myStyle}>{this.props.children}</div>
        )
    }
}