import { useState } from "react";

import Card from "../Layout/Card";
import Button from "../Layout/Button";
import classes from './AddToDo.module.css';
import { auth, db } from "../firebase/firebase_config";
import { set, ref } from "firebase/database";

const AddToDo = () => {
  const [newToDo, setNewToDo] = useState('');

  // Handler functions
  const newToDoChangeHandler = (event) => {
    setNewToDo(event.target.value);
  }; 

  const addItemHandler = () => {
    // const uid = uid();
    // set(ref(db, `/${auth.currentUser.uid}/${uid}`), {
    //   toDo: newToDo,
    //   uid,
    // })
  };

  // Component Return
  return (
    <Card>
      <h1>Add New Item:</h1>
      <input 
        onChange={newToDoChangeHandler}
        value={newToDo}
        type="input"
      />
      <Button onClick={addItemHandler}>Add Item</Button>
    </Card>
  );
};

export default AddToDo;