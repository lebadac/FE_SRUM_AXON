import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom'; // Add Navigate to the import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthProvider";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import Signup from './components/Signup';
import AuthRoute from './components/ProtectedRoute/AuthRoute';
import Dashboard from './components/Admin/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import ProjectList from './components/projectlist';
import AfterSubmit from './components/aftersubmit';
import EditProject from './components/editproject';
import StudentRegister from './components/StudentRegister';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/studentregister" element={<StudentRegister />} />

            {/* Protected route for all authenticated users */}
            <Route element={<AuthRoute />}>
              <Route path="/" element={<HomePage />} />
              {/* Protected route for ADMIN users only */}
              <Route element={<AuthRoute allowedRoles={['ADMIN']} />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route element={<AuthRoute allowedRoles={['LEADER']} />}>
                <Route path="/projectlist" element={<ProjectList />} />
                <Route path="/aftersubmit" element={<AfterSubmit />} />
                <Route path="/editproject" element={<EditProject />} />
              </Route>
            </Route>

            {/* Catch-all route for 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </AuthProvider>
  );
}


export default App;
