import { useContext } from 'react';

import Button from '../Layout/Button';
import Card from '../Layout/Card';
import classes from './TaskItem.module.css';
import ListContext from '../context/list-context';

const TaskItem = (props) => {
  const { removeListItem } = useContext(ListContext);

  const removeTaskItemHandler = () => {
    removeListItem(props.id);
  };

  return (
    <Card className={classes.taskItem}>
      <div>
        <p>{props.text}</p>
        <p>Priority: {props.priority}</p>
      </div>
      <div className={classes.button}>
        <Button onClick={removeTaskItemHandler}>X</Button>
      </div>
    </Card>
  );
};

export default TaskItem;