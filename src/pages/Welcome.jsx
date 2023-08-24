import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/auth-context';
import Card from '../Layout/Card';
import Button from '../Layout/Button';
import classes from './Welcome.module.css';

const WelcomePage = () => {
  const {
    userId,
    updateUser,
   } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  // AuthState useEffect
  useEffect(() => {
    if (userId) {
      navigate('/');
    };
  }, [userId]);

  // Handler Functions
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = () => {
    updateUser(email, password);
  };

  const createAccountHandler = () => {
    setIsRegistering(true);
  };

  return (
    <Card>
      <input onChange={emailChangeHandler} type="email" />
      <input onChange={passwordChangeHandler} type="password" />
      <Button onClick={signInHandler} >Submit</Button>
      <Button onClick={createAccountHandler}>Create an Account</Button>
    </Card>
  );
};

export default WelcomePage;