import { useAuth } from "../../../contexts/Authcontext";
import InputForm from "../../auth/components/InputForm";
import { useEffect, useState } from "react";
import {
  createWorkExp,
  deleteWorkExp,
  editWorkExp,
  getMe,
} from "../../../api/auth-api";
export default function ProfileForm() {
  const { user, setUser } = useAuth();

  const [workExps, setWorkExps] = useState([]);

  const [workExp, setWorkExp] = useState("");
  console.log(workExps);
  const handleChangeInput = (e) => {
    // console.log(e);

    if (e.target.name == "addToResume" || e.target.name == "neverWorkBefore") {
      console.log(e.target.checked);
      console.log(e.target.name);
      setWorkExp({ ...workExp, [e.target.name]: e.target.checked });
    } else {
      setWorkExp({ ...workExp, [e.target.name]: e.target.value });
    }
  };

  const hldEdit = (workExp) => {
    setWorkExp(workExp);
  };

  const hldDelete = (e) => {
    const deletebutton = e.target.id;
    const index = workExps.findIndex((el) => el.id == deletebutton);
    console.log(index);
    const token = localStorage.getItem("token");

    deleteWorkExp(deletebutton, token).then(() => {
      const newWorkExp = [...workExps];
      newWorkExp.splice(index, 1);
      setWorkExps(newWorkExp);
    });
  };

  const hdlSubmitInput1 = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    // if edit or add
    setWorkExp("");

    console.log("workExps----->", workExps);
    if (workExp.id) {
      editWorkExp(workExp.id, workExp, token)
        .then((rs) => {
          let token = localStorage.getItem("token");
          return getMe(token);
        })
        .then((rs) => {
          console.log(rs.data);
          setWorkExps(rs.data.WorkExperience);
          // setUser(rs.data.user);
        })
        .catch((err) => alert(err.response.data.error || err.message));
    } else {
      createWorkExp(workExp, token)
        .then((rs) => {
          let token = localStorage.getItem("token");
          return getMe(token);
        })
        .then((rs) => {
          console.log(rs.data);
          setWorkExps(rs.data.WorkExperience);
          // setUser(rs.data.user);
        })
        .catch((err) => alert(err.response.data.error || err.message));
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getMe(token)
      .then((rs) => {
        console.log(rs.data);
        setWorkExps(rs.data.WorkExperience);
        // setUser(rs.data.user);
      })
      .catch((err) => alert(err.response.data.error || err.message));
  }, []);

  console.log(user);
  console.log("---------------->", workExps);

  return (
    <>
      <div className="navbar bg-blue-200 h-fit  px-[4rem] py-4 ">
        <div className="flex-1 ">
          <div className="flex-col">
            <h1 className="font-bold text-4xl text-white ">
              {user.firstName} {user.lastName}
            </h1>
            <h5 className="m-2 text-white">{user.email}</h5>
            <button className="btn btn-outline btn-primary  m-2">
              แก้ไขข้อมูลโปรไฟล์
            </button>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className=" avatar w-[14rem]">
              <div className=" rounded-full cursor-pointer ">
                <img src={user.profileImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
            >
              <li>
                <a>เปลี่ยนรูปภาพโปรไฟล์</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-slate-500 h-[100vh] basis-3/5 overflow-auto">
          <div className="flex flex-col items-center ">
            <div className="card w-[48rem] bg-base-100 shadow-xl mt-4 ">
              <div className="card-body">
                <h2 className="card-title">ประวัติการทำงาน</h2>
                {/* work exp showcase */}
                <div>
                  {workExps.map((el) => (
                    <div key={el.id} id={el.id} className="flex flex-col m-4 ">
                      <h2 className="font-bold">{el.jobPosition}</h2>
                      <h2>{el.companyName}</h2>
                      <h2>{`${el.startDate} to ${el.endDate}`}</h2>
                      <h2>{el.achievementsTasks}</h2>
                      <div className="flex gap-4 m-4">
                        <button className="btn btn-outline btn-primary">{` neverWorkBefore ${el.neverWorkBefore}`}</button>
                        <button className="btn btn-outline btn-primary">{` addToResume ${el.addToResume}`}</button>
                        {/* <button
                          className="btn btn-outline btn-primary"
                          id={el.id}
                          onClick={hldEdit}
                        > */}
                        <div className="drawer-content">
                          {/* Page content here */}
                          <label
                            htmlFor="my-drawer-4"
                            className="drawer-button btn btn-primary"
                            id={el.id}
                            onClick={() => hldEdit(el)}
                          >
                            Edit
                          </label>
                        </div>
                        {/* </button> */}
                        <button
                          id={el.id}
                          className="btn btn-outline btn-primary"
                          onClick={hldDelete}
                        >
                          Delete
                        </button>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
                <div className="drawer drawer-end">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button btn btn-primary"
                    >
                      เพิ่มตำแหน่งงาน
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                      {/* Sidebar content here */}
                      <form onSubmit={hdlSubmitInput1}>
                        <li>
                          <InputForm
                            label="ตำแหน่งงาน"
                            name="jobPosition"
                            value={workExp.jobPosition}
                            onChange={handleChangeInput}
                            type={"text"}
                          />
                        </li>
                        <li>
                          <InputForm
                            label="บริษัท"
                            name="companyName"
                            value={workExp.companyName}
                            onChange={handleChangeInput}
                            type={"text"}
                          />
                        </li>
                        <li>
                          <InputForm
                            label="วันที่เริ่ม"
                            name="startDate"
                            value={workExp.startDate}
                            onChange={handleChangeInput}
                            type={"date"}
                          />
                        </li>
                        <li>
                          <InputForm
                            label="วันสิ้นสุด"
                            name="endDate"
                            value={workExp.endDate}
                            onChange={handleChangeInput}
                            type={"date"}
                          />
                        </li>
                        <li>
                          <InputForm
                            label="รายละเอียด"
                            name="achievementsTasks"
                            value={workExp.achievementsTasks}
                            onChange={handleChangeInput}
                            type={"text"}
                          />
                        </li>
                        <li>
                          <InputForm
                            label="เพิ่มในเรซูเม่ของฉัน"
                            name="addToResume"
                            value={workExp.addToResume}
                            onChange={handleChangeInput}
                            type={"checkbox"}
                          />
                        </li>
                        <li>
                          <InputForm
                            label="ไม่เคยทำงานมาก่อน"
                            name="neverWorkBefore"
                            value={workExp.neverWorkBefore}
                            onChange={handleChangeInput}
                            type={"checkbox"}
                          />
                        </li>
                        <li className="mt-4">
                          <button>บันทึก</button>
                        </li>
                        {/* <li className="mt-4">
                          <button type="cancel">ยกเลิก</button>
                        </li> */}
                      </form>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 h-[100vh] basis-2/5 overflow-auto"></div>
      </div>
    </>
  );
}
