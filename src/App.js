import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { Main } from './components/styled';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: []
    };
  }

  addTodo = todoText => {
    const newTodo = {
      task: todoText,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoItems: [ ...this.state.todoItems, newTodo ]
    });
  }

  completeTodo = id => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if(item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  }

  clearCompleted = () => {
    this.setState({
      todoItems: this.state.todoItems
        .filter(item => !item.completed)
    });
  }
  
  render() {
    return (
      <Main>
        <TodoForm
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          todoItems={this.state.todoItems}
          completeTodo={this.completeTodo}
        />
      </Main>
    );
  }
}

export default App;
