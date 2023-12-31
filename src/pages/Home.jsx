import { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Home.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/firebase_config';
import AddToDo from '../components/AddToDo';
import useAuth from '../hooks/use-auth';
import ListContext from '../context/list-context';
import useSaveList from '../hooks/use-save-list';
import TaskCard from '../components/TaskCard';
import { onValue, ref } from 'firebase/database';
import Navbar from '../Layout/Navbar';
import ColorContext from '../context/color-context';

const HomePage = () => {
  const [changesPresent, setChangesPresent] = useState(false);
  const saveList = useSaveList();
  const { list, setList } = useContext(ListContext);
  const { showSavedColors } = useContext(ColorContext);
  const { clearUser } = useAuth();
  const navigate = useNavigate();
  
  // Auth State useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {    
        onValue(ref(db, `/users/${auth.currentUser.uid}/toDoList`), snapshot => {
          setList(snapshot.val());
        });
        onValue(ref(db, `/users/${auth.currentUser.uid}/userColorSettings`), snapshot => {
          showSavedColors(snapshot.val());
        });
      }
    });
  }, []);

  // Save List if Changes Present and No Recent Activity
  useEffect(() => {
    if (changesPresent) {
      const saveTimeout = setTimeout(() => {
        saveList(list);
      }, 10000);

      return () => {
        clearTimeout(saveTimeout);
      };
    };
  }, [list, changesPresent]);

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
    <Fragment>
      <Navbar onSignOut={signOutHandler}/>
      <div className={classes.mainDivider}>
        <div className={classes.divider}>
          <AddToDo changesPresent={changesPresentHandler}/>
        </div>
        <div className={classes.divider}>
          <TaskCard onUpdate={changesPresentHandler}/>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;