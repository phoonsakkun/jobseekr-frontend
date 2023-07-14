import React from "react";
import InputForm from "../../auth/components/InputForm";
import { useState } from "react";

function EducationForm() {
  const [education, setEducation] = useState("");
  const [educations, setEducations] = useState([]);
  const handleChangeInput = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="card w-[48rem] bg-base-100 shadow-xl mt-4 ">
        <div className="card-body">
          <h2 className="card-title">ประวัติการศึกษา</h2>
          {/* work exp showcase */}
          <div>
            {educations.map((el) => (
              <div key={el.id} id={el.id} className="flex flex-col m-4 ">
                <h2 className="font-bold">{el.jobPosition}</h2>
                <h2>{el.companyName}</h2>
                <h2>{`${el.startDate} to ${el.endDate}`}</h2>
                <h2>{el.achievementsTasks}</h2>
                <div className="flex gap-4 m-4">
                  <button className="btn btn-outline btn-primary">{` neverWorkBefore ${el.neverWorkBefore}`}</button>
                  <button className="btn btn-outline btn-primary">{` addToResume ${el.addToResume}`}</button>

                  <div className="drawer-content">
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button btn btn-primary"
                      id={el.id}
                      onClick={() => hldEdit(el)}
                    >
                      Edit
                    </label>
                  </div>

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
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-5"
                className="drawer-button btn btn-primary"
              >
                เพิ่มการศึกษา
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <form>
                  <li>
                    <InputForm
                      label="คณะ"
                      name="faculty"
                      value={education.faculty}
                      onChange={handleChangeInput}
                      type={"text"}
                    />
                  </li>
                  <li>
                    <InputForm
                      label="มหาวิทยาลัย"
                      name="companyName"
                      value={education.university}
                      onChange={handleChangeInput}
                      type={"text"}
                    />
                  </li>
                  <li>
                    <InputForm
                      label="วันที่เริ่ม"
                      name="startDate"
                      value={education.startDate}
                      onChange={handleChangeInput}
                      type={"date"}
                    />
                  </li>
                  <li>
                    <InputForm
                      label="วันสิ้นสุด"
                      name="endDate"
                      value={education.endDate}
                      onChange={handleChangeInput}
                      type={"date"}
                    />
                  </li>
                  <li className="mt-4">
                    <button>บันทึก</button>
                  </li>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationForm;
