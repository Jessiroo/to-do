import { useState } from "react";
import AuthContext from "./auth-context";
import { auth } from "../firebase/firebase_config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// AuthProvider
const AuthProvider = (props) => {
  const [userId, setUserId] = useState(null);

  // Dispatch Handlers
  const updateUserHandler = (email, password) => {
    const user = signInWithEmailAndPassword(auth, email, password).catch(err => alert(err.message));
    setUserId(user.uid);
  };

  const clearUserHandler = () => {
    signOut(auth).catch(err => alert(err.message));
    setUserId(null);
  };

  // Provided authContext
  const authContext = {
    userId,
    updateUser: updateUserHandler,
    clearUser: clearUserHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;