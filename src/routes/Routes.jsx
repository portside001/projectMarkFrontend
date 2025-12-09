import HrmDropDown from "../components/hrm/HrmDropDown";
import DashBoard from "../pages/DashBoard";

export const protectedRoutes = [
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/hrm",
    element: <HrmDropDown />,
  },
];
