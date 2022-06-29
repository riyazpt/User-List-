import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
const AddUser= props=>{
    const [userName,setUsername]= useState('');
    const [userAge,setUserAge]= useState('');
    const [error, setError] = useState();
    const addUserHandler=(event)=>{
        event.preventDefault();
        if(userName.length===0 || userAge.length===0)
        {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
          return;
        }
        if(+userAge<1)
        {
          setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
          return ;

        }
        console.log(userName,userAge);
        props.onAddUser(userName,userAge);
        setUsername('');
        setUserAge('');
      };
      const userNameChangedHandler=(event)=>{
        setUsername(event.target.value);

      };
      const userAgeChangedHandler=(event)=>{
        setUserAge(event.target.value);

    };
    const errorHandler = () => {
      setError(null);
    };
  
   return( 
     <div>
        {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
     
       <Card className={classes.input}>
   <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" value={userName} onChange={userNameChangedHandler}></input>
        <label htmlFor="age" >Age (year)</label>
        <input id="age" type="number" value={userAge} onChange={userAgeChangedHandler}></input>
        <Button type="submit">Add user</Button>
    </form>
    </Card>
    </div>
    );
}
export default AddUser;