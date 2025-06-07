import React from "react";

export default function Dashboard({ tasks }) {
  const total = tasks.length;
  const todo = tasks.filter((t) => t.status === "To Do").length;
  const doing = tasks.filter((t) => t.status === "In Progress").length;
  const done = tasks.filter((t) => t.status === "Done").length;

  return (
  <>
    <div className="dashboard">
      <h1>Task Dashboard</h1>
      <p>Welcome to your task dashboard! Here you can see an overview of your tasks.</p>
    <div className="task-board">
      <div className="column">Total: {total}</div>
      <div className="column">To Do: {todo}</div>
      <div className="column">In Progress: {doing}</div>
      <div className="column">Completed: {done}</div>
    </div>
    </div>
  </>
  );
}
