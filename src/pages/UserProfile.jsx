import React, { useState } from "react";

export default function UserProfile({ user, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(user);

  // Sync with user prop updates
  React.useEffect(() => setForm(user), [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
    setEdit(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <input className="edit-profile-table" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input className="edit-profile-table" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn" onClick={() => setEdit(false)} style={{marginLeft:"10px"}}>Cancel</button>
        </form>
      ) : (
        <div>
          <div className="edit-profile-table">Name: {user.name}</div>
          <div className="edit-profile-table">Email: {user.email}</div>
          <button className="profile-edit-btn" onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}