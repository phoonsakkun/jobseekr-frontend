import Jobcard from "./JobCard";

export default function JobList({ Jobs }) {
  return (
    <div className="carousel-item">
      {JobList.map((el) => (
        <Jobcard
          key={el.id}
          src={el.profileImage}
          company={el.companyName}
          location={el.location}
          salary={el.salary}
          createdAt={el.createdAt}
          jobType={el.jobType}
          hiringType={el.hiringType}
        />
      ))}
    </div>
  );
}
