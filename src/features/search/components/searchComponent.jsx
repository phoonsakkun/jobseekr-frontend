import { useEffect, useState } from "react";
import SearchBar from "../../../layouts/SearchContainer";
import Jobcard from "../../jobelement/Jobcard";
import { getSearchJob, searchJob } from "../../../api/auth-api";
import { getJob } from "../../../api/auth-api";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchComponent() {
  const [jobs, setJobs] = useState([]);
  const [jobPost, SetJobPost] = useState({});

  const Navigate = useNavigate();

  const location = useLocation();
  // console.log(location);

  const hdlClick = (el) => {
    SetJobPost(el);
    console.log("el", el);
  };

  const hdlClickJob = () => {
    Navigate("/applyjob");
  };

  const clickPageBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const clickNextPage = () => {
    if (page < jobs.length / capacity) {
      setPage(page + 1);
    }
  };

  const [page, setPage] = useState(1);
  const capacity = 5;
  const startPage = (page, capacity) => page * capacity - capacity;
  const endPage = (page, capacity) => page * capacity;

  const pagination = (page, capacity, items) => {
    const start = startPage(page, capacity);
    const end = endPage(page, capacity);
    return items.slice(start, end);
  };
  const showPage = pagination(page, capacity, jobs);
  // console.log(page);
  const start = startPage(page, capacity);
  const end = endPage(page, capacity);
  const job = showPage.map((el) => (
    <div
      className="card w-[36rem] bg-base-100 shadow-xl"
      key={el.id}
      onClick={() => hdlClick(el)}
    >
      <div className="card-body">
        <h2 className="card-title">
          {el.position}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{el.jobDescription}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{el.JobType.jobTypeName}</div>
          <div className="badge badge-outline">
            {el.Hiringtype.hiringTypeName}
          </div>
        </div>
      </div>
    </div>
  ));

  // useEffect(()=>{
  //   const id = setTimeout(()=> {
  //     searchJob({search : searchValue}).then()
  //   })
  // })
  useEffect(() => {
    const { state } = location;
    // const arr = ['textinput=aaa', 'location=4']
    // arr.join('&') // textinput=aaa&location=4

    const query = [];
    if (state?.textinput) {
      query.push(`textinput=${state.textinput}`); // ['textinput=']
    }
    if (state?.locationOption) {
      query.push(`location=${state.locationOption}`);
    }
    if (state?.jobtype) {
      query.push(`jobtype=${state.jobtype}`);
    }

    const allQuery = query.join("&");

    console.log(allQuery);

    getSearchJob(allQuery).then((rs) => {
      setJobs(rs.data);
      console.log(rs.data);
    });
    // console.log("first");
  }, [location]);

  console.log(jobPost);
  console.log(jobPost.Employer);

  return (
    <>
      <SearchBar />
      <div className="flex">
        <div className="h-[100vh] basis-2/5 overflow-auto">
          <div className="flex justify-between">
            <p className="p-1">
              <span className="font-bold">
                {+start + 1} - {end}
              </span>{" "}
              จาก
              <span className="font-bold"> {jobs.length} </span>
              ตำแหน่งงาน
            </p>
            <div className="flex gap-2 mr-5 items-center">
              <div>
                <button
                  onClick={clickPageBack}
                  className="bg-primary rounded-lg w-[30px] h-[20px] text-base-100 flex justify-center items-center"
                >
                  &lt;
                </button>
              </div>
              <div>
                <button
                  onClick={clickNextPage}
                  className="bg-primary rounded-lg w-[30px] h-[20px]  text-base-100 flex justify-center items-center"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            {/* {jobs.map((el) => (
              <div className="card w-[36rem] bg-base-100 shadow-xl" key={el.id}>
                <div className="card-body">
                  <h2 className="card-title">
                    {el.position}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{el.jobDescription}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      {el.JobType.jobTypeName}
                    </div>
                    <div className="badge badge-outline">
                      {el.Hiringtype.hiringTypeName}
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
            {job}
          </div>
        </div>
        <div className="bg-slate-500 h-[100vh] basis-3/5 overflow-auto">
          {jobPost?.Employer ? (
            <div className="flex flex-col">
              <button
                className="btn btn-accent w-[8rem] font-bold text-white m-2"
                onClick={hdlClickJob}
              >
                สมัครงาน
              </button>
              <div className="max-h-64 overflow-auto">
                <img
                  src={
                    jobPost?.Employer?.coverImage
                      ? jobPost?.Employer?.coverImage
                      : "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  }
                />
              </div>
              <div>
                <div className="p-4">
                  <h2 className="card-title">
                    {jobPost.position}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <h3>{jobPost?.Employer?.companyName}</h3>
                  <p></p>
                  <p>{jobPost.salary}</p>
                  <p>{jobPost.createdAt.slice(0, 10)}</p>
                </div>
                <div>
                  <div className="p-4 bg-slate-400">
                    <h4>job highlight</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam corporis architecto natus accusamus amet, error
                      dolore animi quam magnam fugit aut dolor neque incidunt
                      saepe nisi fugiat aliquam enim exercitationem?
                    </p>
                  </div>
                  <div className="p-4">
                    <h4>job details</h4>
                    <p>{jobPost.jobDescription}</p>
                  </div>
                  <div className="px-4  bg-gray-500">
                    <h4>Company desciption</h4>
                    <p>{jobPost?.Employer?.companyDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
