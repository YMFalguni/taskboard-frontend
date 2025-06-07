import React from "react";

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">
      <div>{task.title}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete} style={{color:"red"}}>Delete</button>
      </div>
    </div>
  );
}