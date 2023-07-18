import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import validateWorkExp from "../validators/WorkExpValidate";
import { getMe } from "../../../api/auth-api";
import useForm from "../../../hook/useForm";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../../../component/Modal";
import EditProfileForm from "./EditProfileForm";

export default function ProfileForm() {
  const { user, setUser } = useAuth();
  const { input, setInput, error, setError } = useForm({
    jobPosition: "",
    companyName: "",
    startDate: "",
    endDate: "",
    achievementsTasks: "",
    addToResume: false,
    neverWorkBefore: false,
  });
  console.log(input);
  const [workExps, setWorkExps] = useState([]);
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   getMe(token)
  //     .then((rs) => {
  //       setUser(rs.data.user);
  //     })
  //     .catch((err) => alert(err.response.data.error || err.message));
  // }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/users/workexp", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    console.log(res.data);
    // setWorkExp(...res.data.WorkExperience);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!user) return null;

  return (
    <>
      <div className="navbar bg-blue-200 h-fit  px-[4rem] py-4 ">
        <div className="flex-1 ">
          <div className="flex-col">
            <h1 className="font-bold text-4xl text-white ">
              {user?.firstName} {user?.lastName}
            </h1>
            <h5 className="m-2 text-white">{user?.email}</h5>
            <Link to="/profileinfo">
              <button className="btn btn-outline btn-primary  m-2">
                แก้ไขข้อมูลโปรไฟล์
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className=" avatar w-[14rem]">
              <div className=" rounded-full cursor-pointer ">
                <img src={user?.profileImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
            >
              <li>
                <a onClick={() => setOpen(true)}>เปลี่ยนรูปภาพโปรไฟล์</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-slate-500 h-[100vh] basis-3/5 overflow-auto">
          <WorkExperienceForm
            user={user}
            setUser={setUser}
            input={input}
            setInput={setInput}
            workExps={workExps}
            setWorkExps={setWorkExps}
            error={error}
            setError={setError}
          />
          {/* <EducationForm /> */}
        </div>
        <Modal
          title="Edit profile"
          open={open}
          onClose={() => setOpen(false)}
          width={44}
        >
          <EditProfileForm />
        </Modal>
        <div className="bg-blue-600 h-[100vh] basis-2/5 overflow-auto"></div>
      </div>
    </>
  );
}
