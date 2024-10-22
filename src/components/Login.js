import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth, setUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/auth/token', {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        const { accessToken } = response.result.token;
        console.log("Login successful. Token received:", { accessToken });
        
        // Update auth state and storage
        setAuth({ accessToken });
        if (data.rememberMe) {
          localStorage.setItem('accessToken', accessToken);
        } else {
          sessionStorage.setItem('accessToken', accessToken);
        }

        // // Fetch user data using the new token
        // try {
        //   const userResponse = await axiosInstance.get('/user');
        //   console.log('Fetched user data:', userResponse.data);
        //   setUser(userResponse.data);
        // } catch (userError) {
        //   console.error('Error fetching user data:', userError);
        // }

        toast.success("Login successful!", { autoClose: 1000 });

        // Navigate to the intended page or home page
        const from = location.state?.from?.pathname || "/";
        console.log("Navigating to:", from);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      } 
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error.response?.data?.message || "An error occurred during login. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 font-jakarta">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 mx-auto md:h-screen md:px-6 lg:px-8 lg:py-12">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white font-poppins">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-inter">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder="Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-inter"
                />
                {errors.email && <p className="text-red-500 mt-2 font-inter">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-inter">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-inter"
                />
                {errors.password && <p className="text-red-500 mt-2 font-inter">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="rememberMe"
                      {...register("rememberMe")}
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="rememberMe" className="text-gray-500 dark:text-gray-300 font-inter">Remember me</label>
                  </div>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary-600 hover:underline dark:text-primary-500 font-inter">Forgot password?</Link>
              </div>

              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-poppins rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign in
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 font-inter">
                Don't have an account yet? <Link to="/signup" className="text-primary-600 hover:underline dark:text-primary-500 font-inter">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Toast container to display notifications */}
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default Login;
