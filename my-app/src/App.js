import { Hello } from './Hello';
import React, { useTransition } from 'react';
import { Welcome, name } from './Welcome';
import { Counter } from './Counter';
import { UncontrolledLogin } from './UncrontrolledLogin';
import { TodoList } from './TodoList';
import { Container } from './Container';
import { DisplayLanguage } from './DisplayLanguage';
import { Sum } from './Sum';
import { ClickCounter } from './ClickCounter';
import { GitHubUser } from './GitHubUser';
import { GitHubUserList } from './GitHubUserList';
import { FormWithHooks } from './FormWithHook';
import { CardDetails } from './CardDetails';
import { useState } from 'react';
import { Context } from './Context';
import { HookCounter } from './HookCounter';
import { FilteredList } from './FilteredList';
import {BrowserRouter as Routes, Route, useParams} from 'react-router-dom'

export function ShowGithubUser() {
	const {username} = useParams()
	return (
		<GitHubUser username={username} />
	)
}

export function App() {
	number = [3, 5, 6, 6]

	onLogin = (username, password, remember) => {
		console.log({
			username,
			password,
			remember
		})
	}

	dati = {
		model: 'ford',
		year: 2002,
		color: 'yellow'
	}

	const list = [
		{
			name: 'John',
			age: 18,
			id: 1
		},
		{
			name: 'Jim',
			age: 134,
			id: 2
		},
		{
			name: 'Tom',
			age: 23,
			id: 3
		},
	]

	const [language, setLanguage] = useState('en')

	function handle(event) {
  	  setLanguage(event.target.value)
  	}

		return (
			<>	
			<h1>Links</h1>
			<p>
				<Link to={'/'}>Welcome</Link> | 
				<Link to={'/counter'}>ClickCounter</Link> | 
				<Link to={'/gfrise'}>GitHubUser</Link>
			</p>
			<Routes>
				<Route path="/" element={<Welcome name={'Joe'} />}/>
				<Route path="/counter" element={<ClickCounter />}/>
				<Route path="/users/:username" element={<ShowGithubUser />}/>
				<Route path="*" element={<p>ERROR 404</p>} />
			</Routes>
			
			
				    {/* <FilteredList list={list}/>
				<HookCounter />
				<div>
				<Context.Provider value={language}>
					<select value={language} onChange={handle}>
					<option value={'en'}>English</option>
					<option value={'it'}>Italiano</option>
					<option value={'lat'}>Latinvs</option>
					<option value={'fr'}>Francais</option>
					</select>
				<DisplayLanguage />
    			</Context.Provider>
				</div>
				<GitHubUserList/>
				<GitHubUser username={'gfrise'}/>
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
				<ClickCounter props={onCounterChange} />
				<FormWithHooks />
				<CardDetails initialData={dati}/> */}
			</>
		)
}