import { Fragment, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase_config';

import Card from '../Layout/Card';
import Button from '../Layout/Button';
import classes from './Login.module.css';
import useAuth from '../hooks/use-auth';

const Login = () => {
  const {
    signInUser,
    createUser,
  } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [forgottenPassword, setForgottenPassword] = useState(false);
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
    signInUser(email, password);
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

  // Forgotten Password Handlers 
  const forgottenPasswordHandler = () => {
    setForgottenPassword(true);
  };

  const resetPasswordHandler = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      // Alert component that email sent
      setForgottenPassword(false);
    }).catch((err) => {
      // Alert component there was an error
      alert(err.message);
    });
  };

  const cancelForgottenPasswordHandler = () => {
    setForgottenPassword(false);
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
      <div className={classes.signInOptions}>
        <div>
          <p onClick={forgottenPasswordHandler}>Forgot Password</p>
          <p onClick={createAccountHandler}>Create an Account</p>
        </div>
        <div className={classes.buttons}>
          <Button onClick={signInHandler}>Submit</Button>
        </div>
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
          <Button onClick={cancelRegisterHandler}>Cancel</Button>
          <Button onClick={registerUserHandler}>Register</Button>
        </div>
      </Fragment>
    );
  };

  // Content if Forgotten Password:
  if (forgottenPassword) {
    content = (
      <Fragment>
        <h1>Reset Password:</h1>
        <p></p>
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
        <div className={classes.buttons}>
          <Button onClick={cancelForgottenPasswordHandler}>Cancel</Button>
          <Button onClick={resetPasswordHandler}>Reset Password</Button>
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