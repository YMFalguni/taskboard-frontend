
# TaskBoard – ReactJS Sample Project (`reactjs-sample-0225`)

This is a fully deployed and responsive task management web application built with React, Express, and MongoDB. It allows users to add, update, and track tasks, and manage their profile data.

---

## Live Demo Links

| Service     | URL |

| Frontend  | [https://taskboard-frontend-pearl.vercel.app](https://taskboard-frontend-pearl.vercel.app) |
| Backend API | [https://taskboard-backend-3vs4.onrender.com/api/tasks](https://taskboard-backend-3vs4.onrender.com/api/tasks) |
| Loom Video | https://www.loom.com/share/b9ae3ec0c26e47b59199221fa74b7a0a?sid=5267814c-2f52-40ad-8d29-5fcc384e86d8 |

---

## Features

- Dashboard showing summary of tasks
- dd, update, delete tasks with status tracking (To Do / In Progress / Done)
- User profile management with editable name/email
- Profile image loaded from external API (`https://picsum.photos`)
- Backend with CORS and `.env` integration
- Mobile-responsive design
- Deployed on **Vercel** (Frontend) and **Render** (Backend)

---

## Tech Stack

- **Frontend:** React.js, fetch API, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Hosting:** Vercel (frontend), Render (backend)
- **Extras:** dotenv, cors, RESTful API

---

## Installation (for local setup)

1. **Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

2. **Backend**
   ```bash
   cd backend
   npm install
   touch .env
   ```

   In `.env`:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

   Then run:
   ```bash
   node server.js
   ```

---

## Author

**Falguni Mahashabde**  
Submission for Better – ReactJS Sample Project (`reactjs-sample-0225`)
