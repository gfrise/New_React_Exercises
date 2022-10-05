import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

class App extends React.Component {
    render () {
        return <Welcome />
    }
}

export default App;

// if no name prop is passed, the component renders without no name value. Below, how to pass default values

Welcome.defaultProps = {
    name: 'joe',
}