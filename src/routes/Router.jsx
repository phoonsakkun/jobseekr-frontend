import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SearchJobPage from "../pages/SearchJobsPage";
import Header from "../layouts/Header";
import Applyjob from "../features/profile/components/Applyjob";
import EditProfileForm from "../features/profile/components/EditProfileForm";
import ProfileForm from "../features/profile/components/Profileform";
import NotFound from "../pages/NotFound";
import { useAuth } from "../contexts/AuthContext";
import AdminLoginPage from "../features/admin/components/AdminLoginPage";
import AdminRegisterPage from "../features/admin/components/AdminRegisterPage";
import AdminPage from "../pages/AdminPage";
import NavbarAdmin from "../layouts/NavbarAdmin";
import JobPostPage from "../pages/JobPostPage";
import AdminSetting from "../pages/AdminSetting";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import { useAdmin } from "../contexts/AdminContext";
import ProtectedRouteAdmin from "../features/admin/components/ProtectedRouteAdmin";

export default function Router() {
  const { user } = useAuth();
  // const user = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      // errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: user ? <Navigate to="/" /> : <LoginPage />,
        },
        {
          path: "/register",
          element: user ? <Navigate to="/" /> : <RegisterPage />,
        },
        {
          path: "/searchjob",
          element: <SearchJobPage />,
        },
        {
          path: "/applyjob",
          element: user ? <Navigate to="/" /> : <Applyjob />,
        },
        {
          path: "/profileinfo",
          element: user ? <EditProfileForm /> : <Navigate to="/" />,
        },
        {
          path: "/profile",
          element: user ? <ProfileForm /> : <Navigate to="/" />,
        },
      ],
    },
    {
      path: "/adminlogin",
      element: <AdminLoginPage />,
    },
    {
      path: "/adminregister",
      element: <AdminRegisterPage />,
    },
    {
      path: "/admin",
      element: (
        <>
          <div className="flex">
            {/* <ProtectedRouteAdmin> */}
            <>
              <NavbarAdmin />
              <Outlet />
            </>
            {/* </ProtectedRouteAdmin> */}
          </div>
        </>
      ),
      children: [
        { path: "/admin", element: <AdminPage /> },
        { path: "/admin/post", element: <JobPostPage /> },
        { path: "/admin/setting", element: <AdminSetting /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
