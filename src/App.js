import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthProvider";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import AuthRoute from "./components/ProtectedRoute/AuthRoute";
import Dashboard from "./components/Admin/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import StudentRegister from "./components/StudentRegister";

function App() {
  return <StudentRegister />;
}

export default App;
