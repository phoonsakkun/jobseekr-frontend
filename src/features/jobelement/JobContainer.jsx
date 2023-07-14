import { useEffect, useState } from "react";
import JobList from "./Joblist";
import axios from "axios";

export default function JobContainer() {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  const fetchJob = async () => {
    const res = await axios.get("http://localhost:8080/jobs", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    setJobs(res.data.jobs);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <div className="carousel carousel-center p-4 space-x-4 bg-neutral max-w-[100vw]">
      <JobList Jobs={jobs} />
    </div>
  );
}
