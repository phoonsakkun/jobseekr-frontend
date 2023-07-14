import { useEffect, useState } from "react";
import { getLocation, getJobtype } from "../api/auth-api";
import useForm from "../hook/useForm";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [location, setLocation] = useState([]);
  const [jobtype, setJobtype] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getLocation().then((rs) => {
      // console.log(rs.data);
      setLocation(rs.data);
    });
    getJobtype().then((rs) => {
      // console.log(rs.data);
      setJobtype(rs.data);
    });
  }, []);

  const Navigate = useNavigate();

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };

  const hdlsubmit = async (e) => {
    try {
      e.preventDefault();
      Navigate("/searchjob", { state: input });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-evenly p-8 bg-slate-100">
      <div>
        <input
          type="text"
          name="textinput"
          placeholder="ชื่อตำแหน่งงาน หรือชื่อบริษัท"
          className="input input-bordered w-[28rem] max-w-xs"
          onChange={hdlChangeInput}
        />
      </div>
      <div>
        <select
          className="select select-bordered w-[28rem] max-w-xs"
          id="locationOption"
          name="locationOption"
          onChange={hdlChangeInput}
        >
          <option value="">สถานที่ทำงานทั้งหมด</option>
          {location.map((el) => (
            <option key={el.id} value={el.id} id="locationOption">
              {el.regionName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="select select-bordered w-[28rem] max-w-xs"
          id="jobtype"
          name="jobtype"
          onChange={hdlChangeInput}
        >
          <option value="">ประเภทงานทั้งหมด</option>
          {jobtype.map((el) => (
            <option key={el.id} value={el.id} id="jobtype">
              {el.jobTypeName}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary w-[16rem]" onClick={hdlsubmit}>
        SEARCH
      </button>
    </div>
  );
}
