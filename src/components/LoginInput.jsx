export default function LoginInput({ label, name }) {
  const classname = " border border-[#004680] rounded-md p-2";
  return (
    <>
      <label>{label}</label>
      <input className={classname} type="text" name={name} />
    </>
  );
}
