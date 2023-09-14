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
    <Card>
      <p>{props.text}</p>
      <h3>Priority: {props.priority}</h3>
      <Button onClick={removeTaskItemHandler}>X</Button>
    </Card>
  );
};

export default TaskItem;