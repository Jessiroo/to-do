import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Layout/Button';
import classes from './Home.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/firebase_config';
import AddToDo from '../components/AddToDo';
import useAuth from '../hooks/use-auth';
import ListContext from '../context/list-context';
import useSaveList from '../hooks/use-save-list';
import TaskCard from '../components/TaskCard';
import { onValue, ref } from 'firebase/database';

const HomePage = () => {
  const [changesPresent, setChangesPresent] = useState(false);
  const saveList = useSaveList();
  const { list, setList } = useContext(ListContext);
  const { clearUser } = useAuth();
  const navigate = useNavigate();
  
  // Auth State useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {
        onValue(ref(db, `/${auth.currentUser.uid}/toDoList`), snapshot => {
          setList(snapshot.val());
        });
      }
    });
  }, []);

  // Save List if Changes Present and No Recent Activity
  useEffect(() => {
    console.log(list, 'list');
    console.log(changesPresent, 'changesPresent');

    if (changesPresent) {
      const saveTimeout = setTimeout(() => {
        saveList(list);
      }, 10000);

      return () => {
        clearTimeout(saveTimeout);
      };
    };
  }, [list, changesPresent])

  // Handler Functions
  const signOutHandler = async () => {
    if (changesPresent) {
      await saveList(list);
    };
    clearUser();
  };

  const changesPresentHandler = () => {
    setChangesPresent(true);
  };

  // Page Return
  return (
    <div className={classes.mainDivider}>
      <div className={classes.divider}>
        <AddToDo changesPresent={changesPresentHandler}/>
      </div>
      <div className={classes.divider}>
        <h1>Stuff here</h1>
        <TaskCard />
        <Button onClick={signOutHandler}>Logout</Button>
      </div>
    </div>
  );
};

export default HomePage;