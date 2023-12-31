import { useState } from "react";
import { register } from "../../../api/auth-api";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";
import validateRegister from "../validate/validateRegister";
import { toast } from "react-toastify";
import InputErrorMessage from "./InputErrorMesssage";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const Navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      console.log("-------input", input);
      console.log("-----result", result);
      if (result) {
        return setError(result);
      }
      setError({});
      await register(input);
      toast.success("register successfully");
      Navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
    // const { firstName, lastName, email, password, confirmPassword } = input;

    //   if (password !== confirmPassword)
    //     return alert("Password not match , recheck");
    //   register({ firstName, lastName, email, password, confirmPassword })
    //     .then((rs) => {
    //       console.log(rs);
    //     })
    //     .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1685745585332-34133f5daa21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="wave"
        />
        <div className="p-10 w-[55%] flex flex-col bg-white rounded-md absolute">
          <div className="flex-1 font-bold text-2xl">สมัครสมาชิก JOBSEEKR</div>
          <form onSubmit={hdlSubmit}>
            <div className="grid mt-8 gap-2">
              <InputForm
                label="ชื่อ"
                name="firstName"
                value={input.firstName}
                onChange={handleChangeInput}
                type={"text"}
              />
              {error.firstName && (
                <InputErrorMessage message={error.firstName} />
              )}
              <InputForm
                label="นามสกุล"
                name="lastName"
                value={input.lastName}
                onChange={handleChangeInput}
                type={"text"}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
              <InputForm
                label="อีเมล"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                type={"text"}
              />
              {error.email && <InputErrorMessage message={error.email} />}
              <InputForm
                label="รหัสผ่าน"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
                type={"password"}
              />
              {error.password && <InputErrorMessage message={error.password} />}
              <InputForm
                label="ยืนยันรหัสผ่าน"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={handleChangeInput}
                type={"password"}
              />
              {error.confirmPassword && (
                <InputErrorMessage message={error.confirmPassword} />
              )}
            </div>
            <button className="bg-[#004680] text-white leading-[3rem] rounded-md text-xl font-bold mt-8 hover:bg-[#005599] px-8">
              สร้างโปรไฟล์
            </button>
          </form>
          <div className="mt-8">
            หรือ
            <Link to="/login">
              <span className="text-[#6fbfea]"> เข้าสู่ระบบ </span>
            </Link>
            ด้วยอีเมลอื่น?
          </div>
        </div>
      </div>
    </>
  );
}
