import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches depuis localStorage au démarrage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Ma Liste de Tâches</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
