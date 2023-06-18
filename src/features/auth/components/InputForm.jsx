export default function InputForm({ label, name, value, onChange, type }) {
  const defaultClassname = " border border-[#004680] rounded-md p-2";
  // console.log(type);
  return (
    <>
      {type == "checkbox" ? (
        <div className="flex">
          <label>{label}</label>
          <input
            className={defaultClassname}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <>
          <label>{label}</label>
          <input
            className={defaultClassname}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        </>
      )}
    </>
  );
}
