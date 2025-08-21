
// PublicRoute.js - New component for handling public routes
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = () => {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    // If user is already logged in, redirect to appropriate dashboard
    if (user) {
        if (user.role === "Writer") {
            return <Navigate to="/admin/dashboard" replace />;
        } else if (user.role === "Reader") {
            return <Navigate to="/" replace />;
        }
    }

    return <Outlet />;
};

export default PublicRoute;