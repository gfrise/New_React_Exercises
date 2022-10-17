import { Hello } from './Hello';
import React, { useTransition } from 'react';
import { Welcome, name } from './Welcome';
import { Counter } from './Counter';
import { UncontrolledLogin } from './UncrontrolledLogin';

export class App extends React.Component {
	onLogin = (username, password, remember) => {
		console.log({
			username,
			password,
			remember
		})
	}

	render() {
		return (
			<>
				< Hello />
				< Welcome name={name} age={18} />
				<Counter initialValue={0} increment={1} interval={1000} />
				<UncontrolledLogin onLogin={this.onLogin}/>
			</>
		)
	}
}