import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['Hi', 'My', 'Name', 'is', 'Joe']
    }

    handle = (event) => {
        event.preventDefault()

        const toAdd = event.target.elements.todo.value

        event.target.elements.todo.value= ''

        this.setState((state)=>{
            return {
                items: [...state.items, toAdd]
            }

        })
    }

    resetta = () => {
        this.setState((state)=>{
            return {
                items: []
            }
        })
    }

    handleremove = (index_to_delete) => {
        this.setState((state) => {
            return {
                items: state.items.filter((element, index) => index !== index_to_delete)
            }
        })
    }

    render () {
        return (
            <>
            {this.props.render(this.state.items, this.handleremove)}
            
                <form onSubmit={this.handle}>
                    <input name="todo"></input>
                    <button type="submit">Add</button>
                    <button type="reset" onClick={this.resetta}>Resetta</button>
                </form>
            </>
        )
    }
}
