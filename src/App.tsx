import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import DashboardPage from './DashboardPage';
import DiseaseDetection from './DiseaseDetection'; // Import DiseaseDetection

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Here you would typically handle the actual login logic (e.g., API call)
    // For now, we'll just simulate a successful login
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleRegisterSuccess = () => {
    // Similar to login, handle registration then navigate
    setIsLoggedIn(true);
    navigate('/dashboard'); // Or navigate to login first: navigate('/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage />} // Pass navigate if needed for buttons, or use Link in LandingPage
      />
      <Route
        path="/login"
        element={
          !isLoggedIn ? (
            <LoginPage onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
      />
      <Route
        path="/register"
        element={
          !isLoggedIn ? (
            <RegistrationPage onRegisterSuccess={handleRegisterSuccess} />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <DashboardPage userName="Current User" onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/dashboard/detect"
        element={
          isLoggedIn ? (
            <DiseaseDetection />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      {/* Fallback route for unknown paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
