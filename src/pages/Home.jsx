import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/auth-context';
import Button from '../Layout/Button';
import Card from '../Layout/Card';
import classes from './Home.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase_config';

const HomePage = () => {
  const {
    userId,
    clearUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } ;
    });
  }, []);

  // Handler Functions
  const signOutHandler = () => {
    clearUser();
  };

  // Page Return
  return (
    <Card>
      <h1>This is the home page!</h1>
      <Button onClick={signOutHandler} >Logout</Button>
    </Card>
  );
};

export default HomePage;