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
import { useAuth } from "../contexts/Authcontext";

export default function Router() {
  const { user } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      errorElement: <NotFound />,
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
          element: <EditProfileForm />,
        },
        {
          path: "/profile",
          element: user ? <ProfileForm /> : <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
