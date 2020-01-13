import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChange = e => {
        this.setState({
            todoText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        
        // submit to parent state
        this.props.addTodo(this.state.todoText);
        
        // clear form
        this.setState({
            todoText: ''
        });
    }

    handleClearCompleted = e => {
        e.preventDefault();
        this.props.clearCompleted();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="What to do..."
                    value={this.state.todoText}
                    onChange={this.handleChange}
                />
                <button type="submit">Add</button>
                <button onClick={this.handleClearCompleted}>Clear completed</button>
            </form>
        );
    }
}

export default TodoForm;
