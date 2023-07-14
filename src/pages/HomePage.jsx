import { useEffect, useState } from "react";
import JobAdvertising from "../features/jobelement/JobAdvertising";
import Jobcard from "../features/jobelement/Jobcard";
import Footer from "../layouts/Footer";
import LogoContainer from "../layouts/LogoContainer";
import SearchBar from "../layouts/SearchContainer";
import { getJob, getCompany } from "../api/auth-api";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [companys, setCompanys] = useState([]);
  useEffect(() => {
    getJob().then((rs) => {
      // console.log(rs.data);
      setJobs(rs.data);
    });
    getCompany().then((rs) => {
      // console.log(rs.data);
      setCompanys(rs.data);
    });
  }, []);

  // console.log("111", jobs);
  return (
    <>
      <div>
        <SearchBar />
        <div className="mt-4">
          <div className="carousel carousel-center p-4 space-x-4 w-full">
            {jobs?.map((el) => (
              <Jobcard
                key={el.id}
                src={el.Employer.coverImage}
                position={el.position}
                company={el.Employer.companyName}
                regionId={el.Region.regionName}
                salary={el.salary}
                createdAt={el.createdAt}
                jobtypeId={el.JobType.jobTypeName}
                hiringtypeId={el.Hiringtype.hiringTypeName}
              />
            ))}
          </div>
        </div>
        <div className="w-[70%] mx-auto">
          <JobAdvertising />
        </div>
        <div className="flex justify-center gap-4 mt-4 w-[50%] mx-auto bg-slate-200 flex-wrap p-8">
          {companys.slice(0, 12).map((el) => (
            <LogoContainer key={el.id} src={el.profileImage} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
