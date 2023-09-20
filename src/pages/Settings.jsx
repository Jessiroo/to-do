import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase_config";
import { useNavigate } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { Fragment, useEffect, useState } from "react";

import Navbar from "../Layout/Navbar";
import ChangePassword from '../components/user/ChangePassword';
import Card from '../Layout/Card';
import classes from './Settings.module.css';
import Button from "../Layout/Button";

const SettingsPage = () => {
  const [changePassword, setChangePassword] = useState();
  const navigate = useNavigate();

  // Retrieve User Settings
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {
        onValue(ref(db, `/users/${auth.currentUser.uid}/userSettings`), snapshot => {
          console.log(snapshot.val(), 'userSettings');
        });
      }
    });
  }, []);

  // Handlers
  const openPasswordChangeHandler = () => {
    setChangePassword(true);
  };

  const closePasswordChangeHandler = () => {
    setChangePassword(false);
  };

  return (
    <Fragment>
      <Navbar />
      <div className={classes.main}>
        <Card className={classes.settings}>
          <h1>Settings:</h1>
          <p>More customization options coming soon!</p>
          <h2>Password:</h2>
          {!changePassword && 
            <div className={classes.button}>
              <Button onClick={openPasswordChangeHandler}>Change Password</Button>
            </div> 
          }
          {changePassword && <ChangePassword onClose={closePasswordChangeHandler}/>}
        </Card>
      </div>
    </Fragment>
  );
};

export default SettingsPage;