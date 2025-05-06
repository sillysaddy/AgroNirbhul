import React from 'react';

interface Props {
  onLogin: () => void;
  onRegister: () => void;
}

const LandingPage: React.FC<Props> = ({ onLogin, onRegister }) => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-8">Welcome</h1>
    <div>
      <button className="px-6 py-2 bg-green-600 text-white rounded mr-4" onClick={onLogin}>
        Login
      </button>
      <button className="px-6 py-2 bg-blue-600 text-white rounded" onClick={onRegister}>
        Register
      </button>
    </div>
  </div>
);

export default LandingPage;