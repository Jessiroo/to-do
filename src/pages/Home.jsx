import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/auth-context';
import Button from '../Layout/Button';
import Card from '../Layout/Card';
import classes from './Home.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase_config';
import AddToDo from '../components/AddToDo';

const HomePage = () => {
  const {
    getUserId,
    clearUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {
        const userId = user.uid;
        console.log(userId);
      }
    });
  }, []);

  // Handler Functions
  const signOutHandler = () => {
    clearUser();
  };

  // Page Return
  return (
    <div className={classes.mainDivider}>
      <div className={classes.divider}>
        <AddToDo />
      </div>
      <div className={classes.divider}>
        <h1>Stuff here</h1>
        <Button onClick={signOutHandler}>Logout</Button>
      </div>
    </div>
  );
};

export default HomePage;