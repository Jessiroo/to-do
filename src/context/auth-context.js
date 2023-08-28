import { createContext } from "react";

const AuthContext = createContext({
  userId: '',
  updateUser: (email, password) => {},
  createUser: (email, password, verifyEmail) => {},
  clearUser: () => {},
});

export default AuthContext;