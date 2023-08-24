import { useContext, useState } from 'react';

import Card from '../Layout/Card';
import Button from '../Layout/Button';
import classes from './Login.module.css';
import AuthContext from '../context/auth-context';

const Login = () => {
  const { updateUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

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

  // Content
  let content = (
    <>
      <input onChange={emailChangeHandler} type="email" />
      <input onChange={passwordChangeHandler} type="password" />
      <Button onClick={signInHandler}>Submit</Button>
      <Button onClick={createAccountHandler}>Create an Account</Button>
    </>
  );

  if (isRegistering) {
    content = (
      <>
        <input onChange={emailChangeHandler} type="email" />
        <input onChange={passwordChangeHandler} type="password" />
        {/* <Button onClick={signInHandler}>Register</Button> */}
      </>
    );
  };

  // component Return
  return (
    <Card>
      {content}
    </Card>
  );
};

export default Login;