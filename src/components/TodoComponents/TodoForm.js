import React, { Component } from 'react';
import { StyledTodoForm } from '../styled';

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
            <StyledTodoForm onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="What to do..."
                    value={this.state.todoText}
                    onChange={this.handleChange}
                />
                <button className="add-todo" type="submit">Add</button>
                <button className="clear-todos" onClick={this.handleClearCompleted}>Clear completed</button>
            </StyledTodoForm>
        );
    }
}

export default TodoForm;
