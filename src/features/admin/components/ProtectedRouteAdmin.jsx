import { Navigate } from "react-router-dom";
import { useAdmin } from "../../../contexts/AdminContext";

function ProtectedRouteAdmin({ Children }) {
  const { admin } = useAdmin();
  if (!admin) {
    return <Navigate to="/adminlogin" />;
  }
  return Children;
}

export default ProtectedRouteAdmin;
