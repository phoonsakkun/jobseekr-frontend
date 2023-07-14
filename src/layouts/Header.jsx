import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const hdllogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <header className="flex justify-between gap-4 p-4 bg-blue-600 ">
        <div className="flex-1">
          <Link to="/">
            <button className="btn btn-ghost w-[8rem] text-white font-bold text-2xl">
              JOBSEEKR
            </button>
          </Link>
        </div>

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <div className="avatar cursor-pointer">
                <div className="w-12 rounded-full">
                  <img src={user.profileImage} />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              <li>
                <Link to="/profile">Edit Profile</Link>
              </li>
              <li>
                <a onClick={hdllogout}>Log out</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div>
              <Link to="/login">
                <button className="btn btn-primary w-[8rem] ">
                  เข้าสู่ระบบ
                </button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <button className="btn btn-ghost w-[8rem] text-white">
                  สมัครสมาชิก
                </button>
              </Link>
            </div>
          </>
        )}
      </header>
    </>
  );
}
