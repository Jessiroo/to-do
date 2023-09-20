import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Welcome.module.css';
import Login from '../components/Login';
import { auth } from '../firebase/firebase_config';
import { onAuthStateChanged } from 'firebase/auth';

const WelcomePage = () => {
  const navigate = useNavigate();

  // AuthState useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home');
      };
    });
  }, []);

  return (
    <div className={classes.mainDivider}>
      <div className={classes.welcome}>
        <h2>Sign In or Create an Account</h2>
        <h3>for your own</h3>
        <h1>Interactive Task List</h1>
      </div>
      <div className={classes.divider}>
        <Login />
      </div>
    </div>
  );
};

export default WelcomePage;