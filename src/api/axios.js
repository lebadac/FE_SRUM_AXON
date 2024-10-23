import axios from 'axios';

const BASE_URL = "http://localhost:8080/scrum-project";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,  // Add this line
});

export const setupInterceptors = (getAccessToken, logout) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getAccessToken();
      if (accessToken) {
        console.log('Adding access token to request:', accessToken); // Debugging line
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        logout();
      }
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
