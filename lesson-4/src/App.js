import React, { Component } from 'react';
import './App.css';

const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push({ name: `User ${i + 1}` });
  }
  return users;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: generateUsers(),
    };
  }

  componentDidMount() {
    document.title = `${this.state.users.length} users left (10 users total)`;
  }

  componentDidUpdate() {
    document.title = `${this.state.users.length} users left (10 users total)`;
  }

  deleteRandomUser = () => {
    const { users } = this.state;
    const randomIndex = Math.floor(Math.random() * users.length);
    const updatedUsers = [...users];
    updatedUsers.splice(randomIndex, 1);
    this.setState({ users: updatedUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <ul>
          {users.map((user, index) => (
            <li style={{listStyle:'none'}} key={index}>{user.name}</li>
          ))}
        </ul>

        <button onClick={this.deleteRandomUser}>Delete Random Users</button>
      </div>
    );
  }
}

export default App;
