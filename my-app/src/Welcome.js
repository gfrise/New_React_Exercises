import React from 'react';

class Welcome extends React.Component {
    render () {
        return (
            <>
           <p>Welcome {this.props.name}!</p>
           {this.props.age && <p>Your age is {this.props.age}</p>}
            </>
        )
    }
}

export default Welcome;