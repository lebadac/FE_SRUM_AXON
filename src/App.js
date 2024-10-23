import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthProvider';
import HomePage from './components/Home'
import Login from './components/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from './components/Signup';
import AuthRoute from './components/ProtectedRoute/AuthRoute';
import ProjectList from './components/projectlist';
import AfterSubmit from './components/aftersubmit';
import EditProject from './components/editproject';
function App() {
  return (
    // <AuthProvider>
    //   <div className="flex flex-col min-h-screen">
    //     <Header />
    //     <main className="flex-grow">
    //       <Routes>
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/signup" element={<Signup />} />
            
    //         {/* Protected route for all authenticated users */}
    //         <Route element={<AuthRoute />}>
    //           <Route path="/" element={<HomePage />} />
    //         </Route>
            
    //         {/* Protected route for ADMIN users only */}
    //         {/* <Route element={<AuthRoute allowedRoles={['ADMIN']} />}>
    //           <Route path="/dashboard" element={<Dashboard />} />
    //         </Route> */}

    //         {/* Catch-all route for 404 */}
    //         <Route path="*" element={<Navigate to="/" replace />} />
    //       </Routes>
    //     </main>
    //     <Footer />
    //     <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    //   </div>
    // </AuthProvider>
    <EditProject/>

  );
}

export default App;
