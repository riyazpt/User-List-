import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList,setUserList] =useState([]);
  const addUserHandler=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge}]

    })

  }
  return (
    <div>
<AddUser onAddUser={addUserHandler}/>
<UserList users={usersList}/>
    </div>
  );
}

export default App;
