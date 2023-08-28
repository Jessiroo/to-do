import { useContext, useState } from 'react';

import Card from '../Layout/Card';
import Button from '../Layout/Button';
import classes from './Login.module.css';
import AuthContext from '../context/auth-context';
import { set } from 'firebase/database';

const Login = () => {
  const { updateUser, createUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [verifyPassword, setVerifyPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    verifyPassword: "",
  });

  // Sign In Handlers
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  // const verifyPasswordHandler = (event) => {
  //   setVerifyPassword(event.target.value);
  // };

  const signInHandler = () => {
    updateUser(email, password);
  };

  // Create Account Handlers
  const createAccountHandler = () => {
    setIsRegistering(true);
  };

  const registerEmailChangeHandler = (event) => {
    setRegisterInfo({
      email: event.target.value,
      password: registerInfo.password,
      verifyPassword: registerInfo.verifyPassword,
    });
  };

  const registerPasswordChangeHandler = (event) => {
    setRegisterInfo({
      email: registerInfo.email,
      password: event.target.value,
      verifyPassword: registerInfo.verifyPassword,
    });
  };

  const registerVerifyPasswordHandler = (event) => {
    setRegisterInfo({
      email: registerInfo.email,
      password: registerInfo.password,
      verifyPassword: event.target.value,
    });
  };

  const registerUserHandler = () => {
    createUser(registerInfo.email, registerInfo.password, registerInfo.verifyPassword);
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
        value={email}
      />
      <input 
        onChange={passwordChangeHandler} 
        type="password" 
        placeholder="Password"
        value={password}
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
          onChange={registerEmailChangeHandler} 
          type="email" 
          placeholder="Email" 
          value={registerInfo.email}
        />
        <input 
          onChange={registerPasswordChangeHandler} 
          type="password" 
          placeholder="Password" 
          value={registerInfo.password}
        />
        <input 
          onChange={registerVerifyPasswordHandler} 
          type="password" 
          placeholder="Confirm Password" 
          value={registerInfo.verifyPassword}
        />
        <Button onClick={registerUserHandler}>Register</Button>
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