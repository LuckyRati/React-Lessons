import React, { useState, useEffect } from 'react';
import './App.css';

const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push({ name: `User ${i + 1}` });
  }
  return users;
};

function App() {
  const [users, setUsers] = useState(generateUsers());

  useEffect(() => {
    document.title = `${users.length} users left (10 users total)`;
  }, [users.length]);

  function deleteRandomUser() {
    const randomIndex = Math.floor(Math.random() * users.length);
    const updatedUsers = [...users];
    updatedUsers.splice(randomIndex, 1);
    setUsers(updatedUsers);
  }

  return (
    <div className="App">
      <ul>
        {users.map((user, index) => (
          <li style={{listStyle:'none'}} key={index}>{user.name}</li>
        ))}
      </ul>

      <button onClick={deleteRandomUser}>Delete Random Users</button>
    </div>
  );
}

export default App;
