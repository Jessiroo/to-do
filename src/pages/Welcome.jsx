import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase_config';
import { useNavigate } from 'react-router-dom';

import classes from './Welcome.module.css';
import Card from '../Layout/Card';
import Button from '../Layout/Button';

const WelcomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // AuthState useEffect
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/home');
      };
    });
  }, []);

  // Handler Functions
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate('/home');
    }).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <Card>
      <input onChange={emailChangeHandler} type="email" />
      <input onChange={passwordChangeHandler} type="password" />
      <Button onClick={signInHandler} >Submit</Button>
    </Card>
  );
};

export default WelcomePage;