import LoginInput from "./LoginInput";
export default function LoginForm() {
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
          <div className="flex flex-col mt-8">
            <LoginInput label="Email" name="email" />
            <div className="mt-2"></div>
            <LoginInput label="Password" name="password" />
          </div>
          <button className="bg-[#004680] text-white leading-[3rem] rounded-md text-xl font-bold mt-8">
            เข้าสู่ระบบ
          </button>
          <div className="mt-8">
            หรือ
            <span> ลงทะเบียน </span>
            ด้วยอีเมลอื่น?
          </div>
        </div>
      </div>
    </>
  );
}
