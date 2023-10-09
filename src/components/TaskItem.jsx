import { useContext, useState } from 'react';

import Button from '../Layout/Button';
import Card from '../Layout/Card';
import EditModal from './EditModal';
import classes from './TaskItem.module.css';
import ListContext from '../context/list-context';
import ColorContext from '../context/color-context';

const TaskItem = (props) => {
  const [openEdit, setOpenEdit] = useState(false);
  const { 
    removeListItem,
    moveItemUp,
    moveItemDown
  } = useContext(ListContext);
  const { colors } = useContext(ColorContext);

  // Click Handlers
  const removeTaskItemHandler = () => {
    removeListItem(props.id);
    props.onUpdate();
  };

  const moveUpHandler = () => {
    moveItemUp(props.id);
    props.onUpdate();
  };

  const moveDownHandler = () => {
    moveItemDown(props.id);
    props.onUpdate();
  };

  const openEditHandler = () => {
    setOpenEdit(true);
  };

  const closeEditHandler = () => {
    setOpenEdit(false);
  };

  // Component Return
  return (
    <Card className={classes.taskItem} priority={props.priority}>
      {openEdit && 
        <EditModal 
          id={props.id}
          text={props.text}
          priority={props.priority}
          onClose={closeEditHandler} 
          onUpdate={props.onUpdate}
        />
      }
      <div className={classes.left}>
        <div className={classes.button}>
          <div>
            <Button onClick={moveUpHandler}>&#8593;</Button>
            <Button onClick={moveDownHandler}>&#8595;</Button>
          </div>
        </div>
        <div>
          <p>{props.text}</p>
          <p className={classes.priority}><i>Priority: {props.priority}</i></p>
        </div>
      </div>
      <div className={classes.button}>
        <div>
          <Button onClick={removeTaskItemHandler}>X</Button>
          <Button onClick={openEditHandler}>&#x270E;</Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;