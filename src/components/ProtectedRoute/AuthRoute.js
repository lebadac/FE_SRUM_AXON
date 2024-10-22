import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { useNotify } from '../../hooks/useNotify';

const AuthRoute = ({ allowedRoles }) => {
  const { auth, user } = useAuth();
  const location = useLocation();
  const notify = useNotify();

  useEffect(() => {
    console.log("AuthRoute rendered. Auth state:", auth);
    console.log("User state:", user);
  }, [auth, user]);

  if (!auth.accessToken) {
    console.log("No access token found. Redirecting to login.");
    notify("Please log in to access this page.", "error");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && (!user || !allowedRoles.includes(user.role))) {
    console.log("User does not have required role. Redirecting to home.");
    notify("You don't have permission to access this page.", "error");
    return <Navigate to="/" replace />;
  }

  console.log("Access granted. Rendering protected route.");
  return <Outlet />;
};

export default AuthRoute;
