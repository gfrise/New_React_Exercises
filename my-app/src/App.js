import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

class App extends React.Component {
    render () {
        return <Welcome name="Joe" />
    }
}

export default App;