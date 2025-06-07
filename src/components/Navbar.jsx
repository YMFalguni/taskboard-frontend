import React from "react";

export default function Navbar({ page, setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("dashboard")} className={page === "dashboard" ? "active" : ""}>
        Dashboard
      </button>
      <button onClick={() => setPage("board")} className={page === "board" ? "active" : ""}>
        Task Board
      </button>
      <button onClick={() => setPage("profile")} className={page === "profile" ? "active" : ""}>
        Profile
      </button>
    </nav>
  );
}