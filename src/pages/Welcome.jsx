import { Fragment, useEffect } from 'react';
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
    <Fragment>
      <div className={classes.mainDivider}>
        <div className={classes.divider}>
          <Login />
        </div>
        <div className={classes.divider}>
          <h1>Stuff here</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default WelcomePage;