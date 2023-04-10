import React, {useState,useEffect} from 'react';


const generateUsers =()=> 
{
return  (
    [
{id:"user1", name:"John"}
  ,{id:"user2", name:"Jane"},
  {id:"user3", name:"Mary"},
  {id:"user4", name:"Sarah"},
  {id:"user5", name:"Mike"},
  {id:"user6", name:"George"},
  {id:"user7", name:"David"},
  {id:"user8", name:"Paul"},
  {id:"user9", name:"Jake"},
  {id:"user10", name:"Trevor"}
    ]
) 

}
function Sxvapp () {
    const [users,setUsers] =useState(generateUsers())

    useEffect (()=>{
document.title=`${users.length} users left (10 users total)`
    },[users.length])



function deleteRandomUser() {
    const randomIndex = Math.floor(Math.random() * users.length);
    const updatedUsers = [...users];
    updatedUsers.splice(randomIndex, 1);
    setUsers(updatedUsers);
}
    return (
        <div className='Sxvapp'>
          <h1>List of Users</h1>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          <button onClick={deleteRandomUser}>delete random user</button>
        </div>
      );
    }
    
    export default Sxvapp