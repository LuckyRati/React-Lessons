import React from 'react'

const UserList = ({isUserLoggedIn,usersList}) => {

  if (!isUserLoggedIn) {
    return <h1>you are not authorized to see user list.</h1>
  }

  if(!usersList?.length){
    return <h1> no users in the system.</h1>
  }


  return (
    <>
    {
      usersList.map((user) => {
        return (
          <div style={{display:'flex'}}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{user.surname}</h1>
          <h1>{user.id}</h1>
          </div>
        )
      })
    }
    </>

  )
}

export default UserList