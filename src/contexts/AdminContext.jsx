import { createContext, useContext, useEffect, useState } from "react";
import { getAdmin } from "../api/auth-api";
import { useAuth } from "./AuthContext";
const AdminContext = createContext();

export default function AdminContextProvider(props) {
  const [admin, setAdmin] = useState(null);
  const { user } = useAuth();
  //  state loading = true
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") return;
    if (!token) return;
    getAdmin(token)
      .then((rs) => {
        if (!user) {
          setAdmin(rs.data.admin);
          // set state loading
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const logoutAdmin = () => {
    localStorage.removeItem("token");
    setAdmin(null);
  };

  return (
    <AdminContext.Provider value={{ admin, setAdmin, logoutAdmin }}>
      {props.children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  return useContext(AdminContext);
};
