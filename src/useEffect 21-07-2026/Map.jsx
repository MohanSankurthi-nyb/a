import { useState } from "react";

function Map() {
  const [users, setUsers] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/users";
  // GET Button - Fetch Users
  const getUsers = async () => {
    const response = await fetch(API);
    const data = await response.json();

    setUsers(data);
  };
  // POST Button - Add User
  const addUser = async () => {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New User",
        email: "newuser@gmail.com",
      }),
    });
    const data = await response.json();
    setUsers([...users, data]);
  };
  // PUT Button - Update User
  const updateUser = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Updated User",
        email: "updated@gmail.com",
      }),
    });
    const updatedUser = await response.json();
    setUsers(
      users.map((user) =>
        user.id === id ? updatedUser : user
      )
    );
  };
  // DELETE Button - Delete User
  const deleteUser = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });


    setUsers(
      users.filter((user) => user.id !== id)
    );
  };
  return (
    <div>
      <h1>User Data</h1>
      {/* HTTP Method Buttons */}
      <button onClick={getUsers}>
        GET Users
      </button>
      <button onClick={addUser}>
        POST Add User
      </button>
      {
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button
              onClick={() => updateUser(user.id)}>
              PUT Update
            </button>
            <button
              onClick={() => deleteUser(user.id)}>
              DELETE Remove
            </button>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default Map;