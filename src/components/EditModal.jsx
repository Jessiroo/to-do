import { useContext, useState } from "react";

import Modal from "../Layout/Modal";
import classes from './EditModal.module.css';
import Button from "../Layout/Button";
import ListContext from "../context/list-context";

const EditModal = (props) => {
  const [text, setText] = useState(props.text);
  const [priority, setPriority] = useState(props.priority);
  const { updateListItem } = useContext(ListContext);

  // Value Handlers
  const updateTextHandler = (event) => {
    setText(event.target.value);
  };
  const updatePriorityHandler = (event) => {
    setPriority(event.target.value);
  };

  // Click Handlers
  const updateItemHandler = (event) => {
    event.preventDefault();
    updateListItem(props.id, text, priority);
    props.onClose();
    props.onUpdate();
  };
  const cancelEditHandler = (event) => {
    event.preventDefault();
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Edit:</h1>
      <form>
        <div>
          <label htmlFor="toDo">Text:</label>
          <input 
            id="toDo"
            onChange={updateTextHandler}
            value={text}
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
                onChange={updatePriorityHandler}
              />
              <label htmlFor="low">Low</label>
            </div>
            <div>
              <input 
                type="radio"
                id="med"
                name="priority"
                value="Med"
                onChange={updatePriorityHandler}
              />
              <label htmlFor="med">Medium</label>
            </div>
            <div>
              <input 
                type="radio"
                id="high"
                name="priority"
                value="High"
                onChange={updatePriorityHandler}
              />
              <label htmlFor="high">High</label>
            </div>
          </div>
        </fieldset>
        <div className={classes.buttons}>
          <Button onClick={updateItemHandler}>Save</Button>
          <Button onClick={cancelEditHandler}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;