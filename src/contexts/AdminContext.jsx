import { createContext, useContext, useEffect, useState } from "react";
import { getAdmin } from "../api/auth-api";

const AdminContext = createContext();

export default function AdminContextProvider(props) {
  const [admin, setAdmin] = useState(null);
  //  state loading = true
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getAdmin(token)
      .then((rs) => {
        setAdmin(rs.data.admin);
        // set state loading
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
