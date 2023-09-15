import { useContext } from 'react';

import Button from '../Layout/Button';
import Card from '../Layout/Card';
import classes from './TaskItem.module.css';
import ListContext from '../context/list-context';

const TaskItem = (props) => {
  const { 
    removeListItem,
    moveItemUp,
    moveItemDown
  } = useContext(ListContext);

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

  // Component Return
  return (
    <Card className={classes.taskItem}>
      <div>
        <p>{props.text}</p>
        <p className={classes.priority}><i>Priority: {props.priority}</i></p>
      </div>
      <div className={classes.button}>
        <div>
          <Button onClick={moveUpHandler}>&#8593;</Button>
          <Button onClick={removeTaskItemHandler}>X</Button>
          <Button onClick={moveDownHandler}>&#8595;</Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;