import CalDayAgo from "../../utils/CalDayAgo";
export default function Jobcard({
  src,
  position,
  company,
  regionId,
  salary,
  createdAt,
  jobtypeId,
  hiringtypeId,
}) {
  const now = new Date().toISOString().slice(0, 10);
  const Time = createdAt.slice(0, 10);
  const a = CalDayAgo(Time, now);
  // console.log(a);
  return (
    <div className="carousel-item">
      <div className="card w-64 bg-base-100 shadow-xl h-[26rem]">
        <figure className="h-1/3">
          <img
            src={
              src
                ? src
                : "https://images.unsplash.com/photo-1687575634846-aa07f7b18df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            }
          />
        </figure>
        <div className="card-body h-2/3">
          <h2 className="card-title">
            {position}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h3>{company}</h3>
          <p>{regionId}</p>
          <p>{salary}</p>
          <p>Posted {a}d ago</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{jobtypeId}</div>
            <div className="badge badge-outline">{hiringtypeId}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
