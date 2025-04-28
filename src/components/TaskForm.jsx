import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    addTask(task);
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nom de la tâche"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          placeholder="Description de la tâche"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">Ajouter la tâche</button>
    </form>
  );
};

export default TaskForm;
