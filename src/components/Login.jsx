import { useContext, useState } from 'react';

import Card from '../Layout/Card';
import Button from '../Layout/Button';
import classes from './Login.module.css';
import AuthContext from '../context/auth-context';

const Login = () => {
  const { updateUser, createUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Handler Functions
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const verifyPasswordHandler = (event) => {
    setVerifyPassword(event.target.value);
  };

  const signInHandler = () => {
    updateUser(email, password);
  };

  const createAccountHandler = () => {
    setIsRegistering(true);
  };

  const registerHandler = () => {
    createUser(email, password, verifyPassword);
  };

  const cancelRegisterHandler = () => {
    setIsRegistering(false);
  };

  // Default Content
  let content = (
    <>
      <input 
        onChange={emailChangeHandler} 
        type="email" 
        placeholder="Email"
      />
      <input 
        onChange={passwordChangeHandler} 
        type="password" 
        placeholder="Password"
      />
      <Button onClick={signInHandler}>Submit</Button>
      <Button onClick={createAccountHandler}>Create an Account</Button>
    </>
  );

  // Content if Registering
  if (isRegistering) {
    content = (
      <>
        <input 
          onChange={emailChangeHandler} 
          type="email" 
          placeholder="Email" 
        />
        <input 
          onChange={passwordChangeHandler} 
          type="password" 
          placeholder="Password" 
        />
        <input 
          onChange={verifyPasswordHandler} 
          type="password" 
          placeholder="Confirm Password" 
        />
        <Button onClick={registerHandler}>Register</Button>
        <Button onClick={cancelRegisterHandler}>Cancel</Button>
      </>
    );
  };

  // Component Return
  return (
    <Card>
      {content}
    </Card>
  );
};

export default Login;