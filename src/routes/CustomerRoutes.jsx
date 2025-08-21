
// CustomerRoutes.js - Fixed
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CustomerRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  if (user.role !== "Reader") {
    return <Navigate to="/login" replace />; // Redirect to login instead of home
  }

  return <Outlet />;
};

export default CustomerRoutes;