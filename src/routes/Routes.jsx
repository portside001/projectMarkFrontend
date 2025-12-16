// import HrmDropDown from "../components/hrm/HrmDropDown";
import HrmLayout from "../components/hrm/HrmLayout";
import DashBoard from "../pages/DashBoard";

export const protectedRoutes = [
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/hrm",
    element: <HrmLayout />,
  },
];
