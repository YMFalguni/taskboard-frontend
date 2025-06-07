import React, { useState } from "react";
import TaskModal from "../components/TaskModal";
import TaskCard from "../components/TaskCard";

export default function TaskBoard({ tasks, onAdd, onUpdate, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const openModal = (task) => {
    setEditTask(task);
    setShowModal(true);
  };
  const closeModal = () => {
    setEditTask(null);
    setShowModal(false);
  };
  const saveTask = (task) => {
    if (task.id) onUpdate(task);
    else onAdd(task);
    closeModal();
  };

  return (
    <div>
      <h2>Task Board</h2>
      <button className="add-task-btn"onClick={() => openModal(null)}>+ Add Task</button>
      <div className="task-board">
        {["To Do", "In Progress", "Done"].map(status => (
          <div key={status} className="column">
            <h3>{status}</h3>
            {tasks.filter(t => t.status === status).map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => openModal(task)}
                onDelete={() => onDelete(task.id)}
              />
            ))}
          </div>
        ))}
      </div>
      {showModal && (
        <TaskModal
          task={editTask}
          onClose={closeModal}
          onSave={saveTask}
        />
      )}
    </div>
  );
}