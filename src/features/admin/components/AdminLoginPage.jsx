import React from "react";
import InputForm from "../../auth/components/InputForm";
import { Link } from "react-router-dom";
import InputErrorMessage from "../../auth/components/InputErrorMesssage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdmin, loginAdmin } from "../../../api/auth-api";
import validateLogin from "../../auth/validate/validateLogin";
import { useAuth } from "../../../contexts/Authcontext";
import { useAdmin } from "../../../contexts/AdminContext";

function AdminLoginPage() {
  const { admin, setAdmin } = useAdmin();
  // const { user, setUser } = useAuth();

  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };

  const Navigate = useNavigate();

  const hdlSubmit = (e) => {
    e.preventDefault();
    loginAdmin(input)
      .then((rs) => {
        // console.log("fg", rs);
        localStorage.setItem("token", rs.data.accessToken);
        let token = localStorage.getItem("token");
        // console.log("edok", token);
        // const result = validateLogin(input);
        // if (result) {
        //   return setError(result);
        // }
        // setError({});
        return getAdmin(token);
      })
      .then((rs) => {
        console.log(rs.data);
        setAdmin(rs.data);
        // console.log(admin);
        Navigate("/admin");
      })
      .catch((err) => alert(err.response.data.message));
    // .catch((err) => alert(err.response.data.error || err.message));
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center relative">
        <img
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          alt="background"
          className="max-h-full"
        />

        <div className="p-10 w-[55%] flex flex-col bg-white rounded-md ml-8 ">
          <div className="flex flex-between ">
            <div className="flex-1 font-bold text-2xl">
              เข้าสู่ระบบ JOBSEEKR
            </div>
            <Link to="/login">
              <button className="flex-1 border border-[#004680] rounded-md text-[#004680] p-2">
                เข้าสู่ระบบ สำหรับผู้สมัครงาน
              </button>
            </Link>
          </div>
          <form onSubmit={hdlSubmit}>
            <div className="flex flex-col mt-8">
              <InputForm
                label="Email"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                type={"text"}
              />
              {/* <InputErrorMessage message={error.email} /> */}
              <div className="mt-2"></div>
              <InputForm
                label="Password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
                type={"password"}
              />
              {/* <InputErrorMessage message={error.password} /> */}
            </div>
            <button className="bg-[#004680] text-white leading-[3rem] px-8 rounded-md text-xl font-bold mt-8 hover:bg-[#005599]">
              เข้าสู่ระบบ
            </button>
          </form>
          <div className="mt-8">
            หรือ
            <Link to="/adminregister">
              <span className="text-[#6fbfea]">ลงทะเบียน</span>
            </Link>
            ด้วยอีเมลอื่น?
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLoginPage;
