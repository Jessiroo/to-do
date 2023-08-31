import { useContext, useState } from "react";

import Card from "../Layout/Card";
import Button from "../Layout/Button";
import ListContext from "../context/list-context";
import classes from './AddToDo.module.css';

const AddToDo = (props) => {
  const { addNewListItem } = useContext(ListContext);
  const [newToDo, setNewToDo] = useState('');
  const [priority, setPriority] = useState('low');

  // Handler functions
  const newToDoChangeHandler = (event) => {
    setNewToDo(event.target.value);
  }; 

  const setPriorityHandler = (event) => {
    setPriority(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if (newToDo.trim() === '') {
      return;
    };
    addNewListItem(newToDo, priority);
    setNewToDo('');
    props.changesPresent();
  };

  // Component Return
  return (
    <Card className={classes.addCard}>
      <form>
        <h1>Add New Item:</h1>
        <div>
          <label htmlFor="toDo">New Item:</label>
          <input 
            id="toDo"
            onChange={newToDoChangeHandler}
            value={newToDo}
            type="input"
          />
        </div>
        <fieldset>
          <h2>Priority:</h2>
          <div className={classes.inputs}>
            <div>
              <input 
                type="radio"
                id="low"
                name="priority"
                value="Low"
                onChange={setPriorityHandler}
              />
              <label htmlFor="low">Low</label>
            </div>
            <div>
              <input 
                type="radio"
                id="med"
                name="priority"
                value="Med"
                onChange={setPriorityHandler}
              />
              <label htmlFor="med">Medium</label>
            </div>
            <div>
              <input 
                type="radio"
                id="high"
                name="priority"
                value="High"
                onChange={setPriorityHandler}
              />
              <label htmlFor="high">High</label>
            </div>
          </div>
        </fieldset>
        <Button onClick={addItemHandler}>Add Item</Button>
      </form>
    </Card>
  );
};

export default AddToDo;