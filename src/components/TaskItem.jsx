import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, toggleComplete, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!updatedTask.name.trim() || !updatedTask.description.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    updateTask(updatedTask);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleUpdate} className="card mb-3 p-3">
        <input 
          type="text" 
          className="form-control mb-2"
          value={updatedTask.name}
          onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })}
        />
        <textarea 
          className="form-control mb-2"
          value={updatedTask.description}
          onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
        ></textarea>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">Enregistrer</button>
          <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Annuler</button>
        </div>
      </form>
    );
  }

  return (
    <div className={`card mb-3 p-3 ${task.completed ? 'completed' : ''}`}>
      <h5>{task.name}</h5>
      <p>{task.description}</p>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-success" onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Marquer comme active' : 'Marquer comme terminée'}
        </button>
        <button className="btn btn-outline-primary" onClick={() => setIsEditing(true)}>Modifier</button>
        <button className="btn btn-outline-danger" onClick={() => deleteTask(task.id)}>Supprimer</button>
      </div>
    </div>
  );
};

export default TaskItem;
