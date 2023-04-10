import UserList from './UserList';
import './App.css';

function App() {
  const usersList = [
    {name: 'John', age: 36,surname: 'Doe', id:'5557114'},
    {name: 'John1', age: 26,surname: 'Doel', id:'6558114'},
    {name: 'John2', age: 16,surname: 'Does', id:'4557114'},
    {name: 'John3', age: 46,surname: 'Doer', id:'5557123'}
  ]

  const userListEmpty = []



  return (
    <div className="App">
     <UserList  isUserLoggedIn={true} usersList={usersList}/>
     <UserList  isUserLoggedIn={false} usersList={usersList}/>
     <UserList isUserLoggedIn={true} usersList={userListEmpty}/>
    </div>
  );
}

export default App;
