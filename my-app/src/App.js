import { Hello } from './Hello';
import React from 'react';
import { Welcome, name } from './Welcome';
import { Counter } from './Counter';

export class App extends React.Component {
	render() {
		return (
			<>
				< Hello />
				< Welcome name={name} age={18} />
				<Counter />
			</>
		)
	}
}