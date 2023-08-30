import AuthContext from "./auth-context";
import { auth } from "../firebase/firebase_config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// AuthProvider
const AuthProvider = (props) => {

  const updateUserHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch(err => alert(err.message));
  };

  const createUserHandler = (email, password, verifyPassword) => {
    if (password === verifyPassword) {
      createUserWithEmailAndPassword(auth, email, password).catch(err => alert(err.message));
    } else {
      alert('Passwords must match!')
    }
  };

  const clearUserHandler = () => {
    signOut(auth).catch(err => alert(err.message));
  };

  // Provided authContext
  const authContext = {
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