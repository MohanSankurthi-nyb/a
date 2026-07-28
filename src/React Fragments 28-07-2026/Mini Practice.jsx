import React, { useState, useEffect } from "react";

// Custom Hook
function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
}


// Higher Order Component (HOC)
function withLoading(Component) {
  return function EnhancedComponent({ loading }) {
    if (loading) {
      return <h2>Loading Users...</h2>;
    }

    return <Component />;
  };
}


// Component using Fragment and Custom Hook
function UserList() {
  const users = useUsers();

  return (
    <>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}


// Applying HOC
const EnhancedUserList = withLoading(UserList);


// Main Component
function MiniPractice() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>React Mini Practice</h1>

      <EnhancedUserList loading={loading} />
    </div>
  );
}

export default MiniPractice;
