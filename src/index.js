import React from 'react';
import './index.css';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupInterceptors } from './api/axios';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

// Custom hook to setup interceptors
const useSetupInterceptors = () => {
  const { getAccessToken, logout } = useAuth();
  React.useEffect(() => {
    setupInterceptors(getAccessToken, logout);
  }, [getAccessToken, logout]);
};

// Main App component
const MainApp = () => {
  useSetupInterceptors();
  return <App />;
};

// Find the root element in the HTML
const rootElement = document.getElementById('root');

// Ensure the element exists before rendering
if (rootElement) {
  const root = createRoot(rootElement); // Using createRoot for React 18+
  root.render(
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <MainApp />
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
}

// Measuring performance (optional)
reportWebVitals();
