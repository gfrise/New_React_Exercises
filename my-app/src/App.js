import { Hello } from './Hello';
import React, { useTransition } from 'react';
import { Welcome, name } from './Welcome';
import { Counter } from './Counter';
import { UncontrolledLogin } from './UncrontrolledLogin';
import { TodoList } from './TodoList';
import { Container } from './Container';
import { LanguageContext, DisplayLanguage } from './DisplayLanguage';
import { Sum } from './Sum';

export class App extends React.Component {
	number = [3, 5, 6, 6]

	onLogin = (username, password, remember) => {
		console.log({
			username,
			password,
			remember
		})
	}

	state = {
		language: "en",
	};

	handleContext = (event) => {
		this.setState({
			language: event.target.value
		})
	}

	render() {
		return (
			<>	
				<div>
					<select name="language" value={this.state.language} onChange={this.handleContext}>
						<option value="it">Italiano</option>
						<option value="en">Inglese</option>
						<option value="fr">Francese</option>
						<option value="la">Latino</option>
					</select>
				</div>
				<LanguageContext.Provider value={this.state.language}>
					<DisplayLanguage />
				</LanguageContext.Provider>
				<Sum numbers={number} />
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