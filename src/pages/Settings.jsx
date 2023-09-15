import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase_config";
import { useNavigate } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react";

import Navbar from "../Layout/Navbar";

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
    <div>
      <Navbar />
      <h1>Settings</h1>
    </div>
  );
};

export default SettingsPage;