import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEditTodo = this.toggleEditTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompleteTodo = this.toggleCompleteTodo.bind(this);
  }

  addTodo(description, priority) {
    const newTodo = {
      id: this.state.todos.length + 1,
      description,
      priority,
      editEnabled: false,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  deleteTodo(id) {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: filteredTodos });
  }

  toggleEditTodo(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, editEnabled: !todo.editEnabled };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  updateTodo(id, newDescription, newPriority) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, description: newDescription, priority: newPriority, editEnabled: false };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompleteTodo(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="white text-center mb-4">Very Simple Todo App</h1>
        <h4 className="white text-center mb-4">Track all of the things</h4>

        <div className="row">
          <div className="col-md-6">
            <AddTodoForm addTodo={this.addTodo} />
          </div>
          <div className="col-md-6">
            <TodoList 
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              toggleEditTodo={this.toggleEditTodo}
              updateTodo={this.updateTodo}
              toggleCompleteTodo={this.toggleCompleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
