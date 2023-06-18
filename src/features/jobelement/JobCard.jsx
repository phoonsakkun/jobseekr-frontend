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
  return (
    <div className="card w-64 bg-base-100 shadow-xl h-[26rem]">
      <figure>
        <img src={src} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {position}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h3>{company}</h3>
        <p>{regionId}</p>
        <p>{salary}</p>
        <p>{createdAt}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{jobtypeId}</div>
          <div className="badge badge-outline">{hiringtypeId}</div>
        </div>
      </div>
    </div>
  );
}
