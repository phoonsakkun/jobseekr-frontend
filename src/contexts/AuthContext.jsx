import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../api/auth-api";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  // const [admin , setAdmin] =
  //  state loading = true
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getMe(token)
      .then((rs) => {
        setUser(rs.data.user);
        // set state loading
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
