import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Layout/Button';
import classes from './Home.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase_config';
import AddToDo from '../components/AddToDo';
import useAuth from '../hooks/use-auth';

const HomePage = () => {
  // const [userAuthId, setUserAuthId] = useState(null);
  const { clearUser } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {
        // const userId = user.uid;
        // setUserAuthId(userId);
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