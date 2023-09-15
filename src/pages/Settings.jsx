import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase_config";
import { useNavigate } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { Fragment, useEffect } from "react";

import Navbar from "../Layout/Navbar";
import Card from '../Layout/Card';
import classes from './Settings.module.css';

const SettingsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {
        onValue(ref(db, `/${auth.currentUser.uid}/userSettings`), snapshot => {
          console.log(snapshot.val(), 'userSettings');
        });
      }
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={classes.main}>
        <Card className={classes.settings}>
          <h1>Settings:</h1>
          <p>More customization options coming soon!</p>
        </Card>
      </div>
    </Fragment>
  );
};

export default SettingsPage;