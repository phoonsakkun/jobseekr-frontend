import InputForm from "./InputForm";
import { useState } from "react";
import { useAuth } from "../../../contexts/Authcontext";
import { getMe, login } from "../../../api/auth-api";
import { Link, useNavigate } from "react-router-dom";
import InputErrorMessage from "./InputErrorMesssage";

export default function LoginForm() {
  const { user, setUser } = useAuth();
  const [input, setInput] = useState({ email: "", password: "" });

  const Navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    login(input)
      .then((rs) => {
        console.log("fg", rs);
        localStorage.setItem("token", rs.data.accessToken);
        let token = localStorage.getItem("token");
        console.log("edok", token);
        return getMe(token);
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
        Navigate("/");
      })
      .catch((err) => alert(err.response.data.message));
    // .catch((err) => alert(err.response.data.error || err.message));
  };

  return (
    <>
      <div className="bg-[#004680] h-screen w-screen flex justify-center items-center ">
        <div className="p-10 w-[55%] flex flex-col bg-white rounded-md">
          <div className="flex flex-between ">
            <div className="flex-1 font-bold text-2xl">
              เข้าสู่ระบบ JOBSEEKR
            </div>
            <button className="flex-1 border border-[#004680] rounded-md text-[#004680] p-2 ">
              เข้าสู่ระบบ สำหรับผู้ประกอบการ
            </button>
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
            <span>
              <Link to="/register">
                <a href="#" className="text-[#6fbfea]">
                  ลงทะเบียน
                </a>
              </Link>
            </span>
            ด้วยอีเมลอื่น?
          </div>
        </div>
      </div>
    </>
  );
}
