import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/layout/Layout";
import { protectedRoutes } from "./Routes";


const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Login />}></Route>
      {/* PRIVATE ROUTES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {protectedRoutes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
