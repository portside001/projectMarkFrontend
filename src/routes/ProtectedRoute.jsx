import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // const isAuthenticated = Boolean(localStorage.getItem("token"));
     const token = localStorage.getItem("token");
    console.log("ProtectedRoute - isAuthenticated:", token);
    if (!token) {
        // return <Navigate to="/dashboard" replace />;
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;