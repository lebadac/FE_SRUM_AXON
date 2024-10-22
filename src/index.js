import React from 'react';
import './index.css';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

// Find the root element in the HTML
const rootElement = document.getElementById('root');

// Ensure the element exists before rendering
if (rootElement) {
  const root = createRoot(rootElement); // Using createRoot for React 18+
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

// Measuring performance (optional)
reportWebVitals();
