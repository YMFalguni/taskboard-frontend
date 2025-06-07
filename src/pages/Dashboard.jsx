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
    <div class="task-board">
      <div class="column">Total: {total}</div>
      <div class="column">To Do: {todo}</div>
      <div class="column">In Progress: {doing}</div>
      <div class="column">Completed: {done}</div>
    </div>
    </div>
  </>
  );
}
