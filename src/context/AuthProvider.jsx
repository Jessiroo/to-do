import { useState } from "react";
import AuthContext from "./auth-context";
import { auth } from "../firebase/firebase_config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// AuthProvider
const AuthProvider = (props) => {
  const [userId, setUserId] = useState(null);

  // Handlers
  const updateUserHandler = (email, password) => {
    const user = signInWithEmailAndPassword(auth, email, password).catch(err => alert(err.message));
    setUserId(user.uid);
  };

  const createUserHandler = (email, password, verifyPassword) => {
    if (password === verifyPassword) {
      const user = createUserWithEmailAndPassword(auth, email, password).catch(err => alert(err.message));
      setUserId(user.uid);
    } else {
      alert('Passwords must match!')
    }
  };

  const clearUserHandler = () => {
    signOut(auth).catch(err => alert(err.message));
    setUserId(null);
  };

  // Provided authContext
  const authContext = {
    userId,
    updateUser: updateUserHandler,
    createUser: createUserHandler,
    clearUser: clearUserHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;