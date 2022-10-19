import { Hello } from './Hello';
import React, { useTransition } from 'react';
import { Welcome, name } from './Welcome';
import { Counter } from './Counter';
import { UncontrolledLogin } from './UncrontrolledLogin';
import { TodoList } from './TodoList';
import { Container } from './Container';

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
				<Container title={<h1>My App</h1>}>
					< Hello />
					< Welcome name={name} age={18} />
					<Counter initialValue={0} increment={1} interval={1000} />
					<UncontrolledLogin onLogin={this.onLogin}/>
					<TodoList
						render={(todos, handleClick) => {
							return (
								<ul>
									{todos.map((todo, index) => (
										<li key={index}>{todo} <button onClick={() => handleClick(index)}>X</button></li>
									))}
								</ul>
							)
						}}
					/>
				</Container>	
			</>
		)
	}
}