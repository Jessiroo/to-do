import { createContext } from "react";

const AuthContext = createContext({
  userId: '',
  updateUser: (email, password) => {},
  clearUser: () => {},
});

export default AuthContext;