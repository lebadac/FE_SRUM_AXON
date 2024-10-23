import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../api/axios'; // Make sure this import path is correct

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    const storedUser = localStorage.getItem('user');
    if (storedAuth) setAuth(JSON.parse(storedAuth));
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (authData) => {
    try {
      // Set the auth data first
      setAuth(authData);
      localStorage.setItem('auth', JSON.stringify(authData));

      // Then fetch user data
      const userResponse = await axiosInstance.get('/users/myInfo', {
        headers: { Authorization: `Bearer ${authData.accessToken}` }
      });
      console.log("User response:", userResponse.data.result.roles[0].name);
      // Set user data
      setUser(userResponse.data.result);
      localStorage.setItem('user', JSON.stringify(userResponse.data.result));

      return userResponse.data; // Return user data in case it's needed in the component
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Rethrow the error so it can be handled in the component
    }
  };

  const logout = () => {
    setAuth({});
    setUser(null);
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
