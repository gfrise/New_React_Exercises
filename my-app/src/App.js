import React from 'react';
import Welcome from './Welcome';

class App extends React.Component {
    render () {
        return <Welcome name={<strong>Joe</strong>} age={6}/>
    }
}

export default App;