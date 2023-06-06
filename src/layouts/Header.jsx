import { Link, Outlet } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="Flex">
        <div>
          <Link>Logo</Link>
        </div>
        <div>login</div>
        <div>Register</div>
      </header>
      <Outlet />
    </>
  );
}
