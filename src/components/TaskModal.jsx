import React, { useState } from "react";

export default function TaskModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [status, setStatus] = useState(task ? task.status : "To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ ...task, title, status });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h4>{task ? "Edit Task" : "Add Task"}</h4>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" />
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <div style={{marginTop:"10px"}}>
            <button className="add-task-btn" type="submit">{task ? "Save" : "Add"}</button>
            <button  className="add-task-btn"type="button" onClick={onClose} style={{marginLeft:"10px"}}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}