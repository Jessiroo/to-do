import { Fragment, useContext, useState } from 'react';

import Card from '../Layout/Card';
import Button from '../Layout/Button';
import AuthContext from '../context/auth-context';
import classes from './Login.module.css';

const Login = () => {
  const { updateUser, createUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <Fragment>
      <h1>Sign In</h1>
      <div className={classes.input}>
        <label htmlFor="email">Email:</label>
        <input 
          id="email"
          onChange={emailChangeHandler} 
          type="email" 
          placeholder="Email"
          value={email}
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="password">Password:</label>
        <input 
          id="password"
          onChange={passwordChangeHandler} 
          type="password" 
          placeholder="Password"
          value={password}
        />
      </div>
      <div className={classes.buttons}>
        <Button onClick={signInHandler}>Submit</Button>
        <Button onClick={createAccountHandler}>Create an Account</Button>
      </div>
    </Fragment>
  );

  // Content if Registering
  if (isRegistering) {
    content = (
      <Fragment>
        <h1>Create an Account</h1>
        <div className={classes.input}>
          <label htmlFor="createEmail">Email:</label>
          <input 
            id="createEmail"
            onChange={registerEmailChangeHandler} 
            type="email" 
            placeholder="Email" 
            value={registerInfo.email}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="createPassword">Password:</label>
          <input 
            id="createPassword"
            onChange={registerPasswordChangeHandler} 
            type="password" 
            placeholder="Password" 
            value={registerInfo.password}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="verifyPassword">Verify Password:</label>
          <input 
            id="verifyPassword"
            onChange={registerVerifyPasswordHandler} 
            type="password" 
            placeholder="Confirm Password" 
            value={registerInfo.verifyPassword}
          />
        </div>
        <div className={classes.buttons}>
          <Button onClick={registerUserHandler}>Register</Button>
          <Button onClick={cancelRegisterHandler}>Cancel</Button>
        </div>
      </Fragment>
    );
  };

  // Component Return
  return (
    <Card className={classes.signInCard}>
      {content}
    </Card>
  );
};

export default Login;