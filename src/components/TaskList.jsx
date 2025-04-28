import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleComplete, updateTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center">Aucune tâche pour le moment.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete}
            updateTask={updateTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
