import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, toggleEditTodo, updateTodo, toggleCompleteTodo }) => {
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newPriority, setNewPriority] = useState(todo.priority);

  const handleUpdate = () => {
    if (newDescription.trim()) {
      updateTodo(todo.id, newDescription, newPriority);
    }
  };

  const priorityColor = newPriority === '1' ? 'bg-danger' : 
                        newPriority === '2' ? 'bg-warning' : 
                        'bg-success';

  return (
    <li className={`list-group-item ${priorityColor} mb-3`}>
      {!todo.editEnabled ? (
        <div className="item">
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => toggleCompleteTodo(todo.id)} 
              className="me-2"
            />
            <span className={`${todo.completed ? 'strike-through' : ''}`}>{todo.description}</span>
            <img
              src="images/edit1.png"
              alt="Edit"
              onClick={() => toggleEditTodo(todo.id)}
              className="action-icon"
              style={{ cursor: 'pointer' }}
            />
            <img
              src="images/deleted.png"
              alt="Delete"
              onClick={() => deleteTodo(todo.id)}
              className="action-icon"
              style={{ cursor: 'pointer' }}
            />
        </div>
      ) : (
        <div className="w-100 position-relative">
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description"
              className="form-control"
              style={{ height: '150px', width: '500px', resize: 'none' }}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select 
              id="priority" 
              className="form-control"
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
            >
              <option value="1">High Priority</option>
              <option value="2">Medium Priority</option>
              <option value="3">Low Priority</option>
            </select>
          </div>

          <div className="d-flex justify-content-end position-absolute">
            <button 
              className="btn btn-success"
              onClick={handleUpdate}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
