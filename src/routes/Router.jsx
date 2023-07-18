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
import EditProfileInfo from "../features/profile/components/EditProfileInfo";
import ProfileForm from "../features/profile/components/Profileform";
import NotFound from "../pages/NotFound";
import { useAuth } from "../contexts/AuthContext";
import AdminLoginPage from "../features/admin/components/AdminLoginPage";
import AdminRegisterPage from "../features/admin/components/AdminRegisterPage";
import AdminPage from "../pages/AdminPage";
import NavbarAdmin from "../layouts/NavbarAdmin";
import JobPostPage from "../pages/JobPostPage";
import AdminSetting from "../pages/AdminSetting";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import RediretedIfAdmin from "../features/admin/components/RediretedIfAdmin";
import PostInputForm from "../pages/PostInputForm";
export default function Router() {
  const { user } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticated>
          <LoginPage />
        </RedirectIfAuthenticated>
      ),
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
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
          path: "/searchjob",
          element: <SearchJobPage />,
        },
        {
          path: "/applyjob",
          element: user ? <Applyjob /> : <Navigate to="/" />,
        },
        {
          path: "/profileinfo",
          element: user ? <EditProfileInfo /> : <Navigate to="/" />,
        },
        {
          path: "/profile",
          element: user ? <ProfileForm /> : <Navigate to="/" />,
        },
      ],
    },
    {
      path: "/adminlogin",
      element: (
        <RediretedIfAdmin>
          <AdminLoginPage />
        </RediretedIfAdmin>
      ),
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
            <NavbarAdmin />
            <Outlet />
          </div>
        </>
      ),
      children: [
        { path: "/admin", element: <AdminPage /> },
        { path: "/admin/post", element: <JobPostPage /> },
        { path: "/admin/setting", element: <AdminSetting /> },
      ],
    },
    {
      path: "/postjob",
      element: <PostInputForm />,
    },
  ]);

  return <RouterProvider router={router} />;
}
