import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom'; // Import Routes và Route
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthProvider";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from './components/Signup';
import AuthRoute from './components/ProtectedRoute/AuthRoute';
import ProjectList from './components/projectlist';
import AfterSubmit from './components/aftersubmit';
import EditProject from './components/editproject';
import StudentRegister from './components/StudentRegister';

function App() {
    return (
      <>
        <Routes>
          <Route path="/projectlist" element={<ProjectList />} />
          <Route path="/aftersubmit" element={<AfterSubmit />} />
          <Route path="/editproject" element={<EditProject />} />
        </Routes>
      </>
    );
  }

export default App;
