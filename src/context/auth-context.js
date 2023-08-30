import { createContext } from "react";

const AuthContext = createContext({
  updateUser: (email, password) => {},
  createUser: (email, password, verifyEmail) => {},
  clearUser: () => {},
});

export default AuthContext;