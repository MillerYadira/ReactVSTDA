import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleEditTodo, updateTodo, toggleCompleteTodo }) => {
  return (
    <div>
      <h3 className="mb-4">View Todos</h3>
      <ul className="list-group">
        {todos.length === 0 ? (
          <li className="list-group-item">No todos available</li>
        ) : (
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              deleteTodo={deleteTodo} 
              toggleEditTodo={toggleEditTodo}
              updateTodo={updateTodo}
              toggleCompleteTodo={toggleCompleteTodo}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
