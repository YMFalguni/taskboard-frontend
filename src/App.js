import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import TaskBoard from "./pages/TaskBoard";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import * as api from "./services/api";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({ name: "", email: "" });

  // Fetch tasks/user on mount
  useEffect(() => {
    api.getTasks().then(setTasks);
    api.getUser().then(setUser);
  }, []);

  // API wrappers for TaskBoard & UserProfile
 const handleAddTask = async (task) => {
  const newTask = await api.addTask(task);
  // Normalize _id → id
  setTasks((tasks) => [...tasks, { ...newTask, id: newTask._id }]);
};

const handleUpdateTask = async (task) => {
  const updated = await api.updateTask(task);
  setTasks((tasks) =>
    tasks.map((t) => t.id === task.id ? { ...updated, id: updated._id } : t)
  );
};

const handleDeleteTask = async (id) => {
  await api.deleteTask(id);
  setTasks((tasks) => tasks.filter((t) => t.id !== id));
};

  const handleUpdateUser = async (userObj) => {
    const updated = await api.updateUser(userObj);
    setUser(updated);
  };

  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      <div className="container">
        {page === "dashboard" && <Dashboard tasks={tasks} />}
        {page === "board" &&
          <TaskBoard
            tasks={tasks}
            onAdd={handleAddTask}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />}
        {page === "profile" &&
          <UserProfile user={user} onUpdate={handleUpdateUser} />}
      </div>
    </div>
  );
}