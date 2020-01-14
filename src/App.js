import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { Main } from './components/styled';
import { saveTodos, getTodos } from './db';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: getTodos()
    };
  }

  addTodo = todoText => {
    if(todoText.length) {
      const newTodo = {
        task: todoText,
        id: Date.now(),
        completed: false
      };

      this.setState({
        todoItems: [ ...this.state.todoItems, newTodo ]
      }, () => saveTodos(this.state.todoItems));
    }
    
  }

  completeTodo = id => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if(item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    }, () => saveTodos(this.state.todoItems));
  }

  clearCompleted = () => {
    this.setState({
      todoItems: this.state.todoItems
        .filter(item => !item.completed)
    }, () => saveTodos(this.state.todoItems));
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
