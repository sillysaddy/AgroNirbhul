import React, { useState } from 'react';
import DiseaseDetection from './DiseaseDetection';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';

type Page = 'landing' | 'login' | 'register' | 'dashboard' | 'diseaseDetection';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const Dashboard = () => (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={() => setCurrentPage('diseaseDetection')}
        className="mr-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Disease Detection
      </button>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onLogin={() => setCurrentPage('login')} onRegister={() => setCurrentPage('register')} />;
      case 'login':
        return <Login onLoginSuccess={() => setCurrentPage('dashboard')} onBack={() => setCurrentPage('landing')} />;
      case 'register':
        return <Register onRegisterSuccess={() => setCurrentPage('dashboard')} onBack={() => setCurrentPage('landing')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'diseaseDetection':
        return (
          <div>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="m-4 px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              &larr; Back to Dashboard
            </button>
            <DiseaseDetection />
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
