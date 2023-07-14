import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";
import { useNavigate } from "react-router-dom";

function NavbarAdmin() {
  const { logoutAdmin } = useAdmin();
  const navigate = useNavigate();
  const hdllogout = () => {
    logoutAdmin();
    navigate("/adminlogin");
  };
  return (
    <ul className="menu bg-base-200 w-56 h-full gap-2">
      <Link to="/admin">
        <li>My Profile</li>
      </Link>
      <Link to="/admin/post">
        <li>My Post</li>
      </Link>
      <Link to="/admin/setting">
        <li>Setting</li>
      </Link>
      <li onClick={hdllogout}>Logout</li>
    </ul>
  );
}

export default NavbarAdmin;
