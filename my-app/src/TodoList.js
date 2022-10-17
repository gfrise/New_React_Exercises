import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['Hi', 'My', 'Name', 'is', 'Joe']
    }

    handle = (event) => {
        event.preventDefault()

        const toAdd = event.target.todo.value

        this.setState((state)=>{
            return {
                items: [...state.items, toAdd]
            }
        })
    }

    render () {
        return (
            <>
            <ul>{this.state.items.map((el, index) => <li key={index}>{el}</li>)}</ul>
            <form onSubmit={this.handle}>
            <input name="todo"></input>
            <button type="submit">Add</button>
            </form>
            </>
        )
    }
}