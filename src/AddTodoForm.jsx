import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() && priority !== '') {
      addTodo(description, priority);
      setDescription('');
      setPriority('');
    }
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4">Add New Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">I want to...</label>
          <textarea 
            id="description"
            className="create-todo-text form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="priority">How much of a priority is this?</label>
          <select 
            id="priority" 
            className="create-todo-priority form-control"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select a Priority</option> {/* Default option */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
