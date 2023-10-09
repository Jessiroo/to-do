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
import ChangeColors from "../components/user/ChangeColors";

const SettingsPage = () => {
  const [changeColors, setChangeColors] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const navigate = useNavigate();

  // Retrieve User Settings
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {
        // onValue(ref(db, `/users/${auth.currentUser.uid}/userSettings`), snapshot => {
        //   console.log(snapshot.val(), 'userSettings');
        // });
      }
    });
  }, []);

  // Handlers
  const openColorChangeHandler = () => {
    setChangeColors(true);
  };
  const closeColorChangeHandler = () => {
    setChangeColors(false);
  };

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
          <h2>Color Options:</h2>
          {!changeColors &&
            <div className={classes.button}>
              <Button onClick={openColorChangeHandler}>Update Colors</Button>
            </div>
          }
          {changeColors && <ChangeColors onClose={closeColorChangeHandler} />}
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