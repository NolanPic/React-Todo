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
        
        // clear form
        this.setState({
            todoText: ''
        });
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
            </form>
        );
    }
}

export default TodoForm;
