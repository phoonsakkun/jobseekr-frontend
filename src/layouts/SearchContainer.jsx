import { useEffect, useState } from "react";
import { getLocation, getJobtype } from "../api/auth-api";

export default function SearchBar() {
  const [location, setLocation] = useState([]);
  const [jobtype, setJobtype] = useState([]);
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
  return (
    <div className="flex justify-evenly p-8 bg-slate-100">
      <div>
        <input
          type="text"
          placeholder="ชื่อตำแหน่งงาน หรือชื่อบริษัท"
          className="input input-bordered w-[28rem] max-w-xs"
        />
      </div>
      <div>
        <select className="select select-bordered w-[28rem] max-w-xs ">
          {/* <option disabled selected>
            สถานที่ทำงานทั้งหมด
          </option> */}
          {location.map((el) => (
            <option key={el.id}>{el.regionName}</option>
          ))}
        </select>
      </div>
      <div>
        <select className="select select-bordered w-[28rem] max-w-xs">
          {/* <option disabled selected>
            ประเภทงานทั้งหมด
          </option> */}
          <option defaultValue={""}>ประเภทงานทั้งหมด</option>
          {jobtype.map((el) => (
            <option key={el.id}>{el.jobTypeName}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary w-[16rem]">SEARCH</button>
    </div>
  );
}
