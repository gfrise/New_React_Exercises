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
				<Counter initialValue={0} increment={1} interval={1000} />
			</>
		)
	}
}