import { useContext } from 'react';

import Card from '../Layout/Card';
import ListContext from '../context/list-context';
import TaskItem from './TaskItem';
import classes from './TaskCard.module.css';

const TaskCard = () => {
  const { list } = useContext(ListContext);

  let content = (
    <p>No tasks found...</p>
  );

  if (list.length > 0) {
    content = list.map((task) => (
      <TaskItem 
        id={task.id}
        key={task.id}
        text={task.text}
        priority={task.priority}
      />
    ));
  }

  return (
    <Card className={classes.taskCard}>
      <h1>Tasks:</h1>
      {content}
    </Card>
  );
};

export default TaskCard;