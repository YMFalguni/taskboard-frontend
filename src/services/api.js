const API = "http://localhost:4000/api";

// Tasks
export async function getTasks() {
  const res = await fetch(`${API}/tasks`);
  return res.json();
}
export async function addTask(task) {
  const res = await fetch(`${API}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
}
export async function updateTask(task) {
  const res = await fetch(`${API}/tasks/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
}
export async function deleteTask(id) {
  await fetch(`${API}/tasks/${id}`, { method: "DELETE" });
}

// User
export async function getUser() {
  const res = await fetch(`${API}/user`);
  return res.json();
}
export async function updateUser(user) {
  const res = await fetch(`${API}/user`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}