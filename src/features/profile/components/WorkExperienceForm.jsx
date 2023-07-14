import React from "react";
import InputForm from "../../auth/components/InputForm";
import { useEffect } from "react";
import WorkExpValidate from "../validators/WorkExpValidate";

import {
  createWorkExp,
  deleteWorkExp,
  editWorkExp,
  getMe,
} from "../../../api/auth-api";
import { useRef } from "react";
import InputErrorMessage from "../../auth/components/InputErrorMesssage";

function WorkExperienceForm({
  user,
  setUser,
  input,
  setInput,
  workExps,
  setWorkExps,
  error,
  validate,
  setError,
}) {
  const ref = useRef();
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
  const handleChangeInput = (e) => {
    // console.log(e);

    if (e.target.name == "addToResume" || e.target.name == "neverWorkBefore") {
      console.log(e.target.checked);
      console.log(e.target.name);
      setInput({ ...input, [e.target.name]: e.target.checked });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  };

  const hldEdit = (input) => {
    console.log(input);
    setInput(input);
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
    const { id, userId, createdAt, updatedAt, ...rest } = input;
    const result = WorkExpValidate(rest);
    console.log(result);
    if (result) {
      return setError(result);
    }
    setError({});

    setInput({ id: input.id });
    ref.current.checked = false;

    // console.log("workExps----->", workExps);
    if (input.id) {
      console.log("first");
      editWorkExp(input.id, input, token)
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
      createWorkExp(input, token)
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

  // console.log(user);
  // console.log("---------------->", workExps);

  return (
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
              ref={ref}
            />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-primary"
                onClick={() => {
                  console.log("clicked");
                  setInput({
                    jobPosition: "",
                    companyName: "",
                    startDate: "",
                    endDate: "",
                    achievementsTasks: "",
                    addToResume: false,
                    neverWorkBefore: false,
                  });
                  // setInput("");
                }}
              >
                เพิ่มตำแหน่งงาน
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <form onSubmit={hdlSubmitInput1}>
                  <li>
                    <InputForm
                      label="ตำแหน่งงาน"
                      name="jobPosition"
                      value={input.jobPosition}
                      onChange={handleChangeInput}
                      type={"text"}
                    />
                    <InputErrorMessage message={error.jobPosition} />
                  </li>
                  <li>
                    <InputForm
                      label="บริษัท"
                      name="companyName"
                      value={input.companyName}
                      onChange={handleChangeInput}
                      type={"text"}
                    />
                    <InputErrorMessage message={error.companyName} />
                  </li>
                  <li>
                    <InputForm
                      label="วันที่เริ่ม"
                      name="startDate"
                      value={input.startDate}
                      onChange={handleChangeInput}
                      type={"date"}
                    />
                    <InputErrorMessage message={error.startDate} />
                  </li>
                  <li>
                    <InputForm
                      label="วันสิ้นสุด"
                      name="endDate"
                      value={input.endDate}
                      onChange={handleChangeInput}
                      type={"date"}
                    />
                    <InputErrorMessage message={error.endDate} />
                  </li>
                  <li>
                    <InputForm
                      label="รายละเอียด"
                      name="achievementsTasks"
                      value={input.achievementsTasks}
                      onChange={handleChangeInput}
                      type={"text"}
                    />
                    <InputErrorMessage message={error.achievementsTasks} />
                  </li>
                  <li>
                    <InputForm
                      label="เพิ่มในเรซูเม่ของฉัน"
                      name="addToResume"
                      value={input.addToResume}
                      onChange={handleChangeInput}
                      type={"checkbox"}
                    />
                    <InputErrorMessage message={error.addToResume} />
                  </li>
                  <li>
                    <InputForm
                      label="ไม่เคยทำงานมาก่อน"
                      name="neverWorkBefore"
                      value={input.neverWorkBefore}
                      onChange={handleChangeInput}
                      type={"checkbox"}
                    />
                    <InputErrorMessage message={error.neverWorkBefore} />
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
  );
}

export default WorkExperienceForm;
