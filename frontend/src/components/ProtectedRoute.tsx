
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        // You can replace this with a proper loading spinner component
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (!isAuthenticated) {
        // Redirect to login page while saving the attempted location
        return <Navigate to="/authentication/sign-in" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
