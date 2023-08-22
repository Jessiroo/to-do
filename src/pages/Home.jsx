import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase_config';
import { useNavigate } from 'react-router-dom';

import Button from '../Layout/Button';
import Card from '../Layout/Card';
import classes from './Home.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  // Handler Functions
  const signOutHandler = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((err) => {
      alert(err.message)
    });
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