import React, { useState } from 'react';

interface Props {
  onLoginSuccess: () => void;
  onBack: () => void;
}

const Login: React.FC<Props> = ({ onLoginSuccess, onBack }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    onLoginSuccess();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="flex flex-col w-80" onSubmit={handleSubmit}>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          placeholder="Email or Phone (+880...)"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          required
        />
        <input
          className="mb-2 p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="mb-2 px-4 py-2 bg-green-600 text-white rounded" type="submit">
          Login
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded" type="button" onClick={onBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Login;