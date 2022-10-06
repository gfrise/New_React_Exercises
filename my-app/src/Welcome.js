import React from 'react';

class Welcome extends React.Component {
    render () {
        return (
            <>
           <p>Welcome {this.props.name}!</p>
           {this.props.age > 18 && this.props.age < 65 && this.props.name === 'John' && <p>Your age is {this.props.age}</p>}
            </>
        )
    }
}

export default Welcome;