import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase_config";

const useAuth = () => {
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch(err => alert(err.message));
  };
  
  const createUser = (email, password, verifyPassword) => {
    if (password === verifyPassword) {
      createUserWithEmailAndPassword(auth, email, password).catch(err => alert(err.message));
    } else {
      alert('Passwords must match!')
    }
  };

  const clearUser = () => {
    signOut(auth).catch(err => alert(err.message));
  };

  return {
    signInUser,
    createUser,
    clearUser,
  };
};

export default useAuth;