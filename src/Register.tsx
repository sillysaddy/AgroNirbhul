import React, { useState } from 'react';

interface Props {
  onRegisterSuccess: () => void;
  onBack: () => void;
}

const Register: React.FC<Props> = ({ onRegisterSuccess, onBack }) => {
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+880');
  const [area, setArea] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    onRegisterSuccess();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col w-80" onSubmit={handleSubmit}>
        <div className="flex mb-2">
          <button
            type="button"
            className={`flex-1 p-2 ${method === 'email' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setMethod('email')}
          >
            Email
          </button>
          <button
            type="button"
            className={`flex-1 p-2 ${method === 'phone' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setMethod('phone')}
          >
            Phone
          </button>
        </div>
        {method === 'email' ? (
          <input
            className="mb-2 p-2 border rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        ) : (
          <input
            className="mb-2 p-2 border rounded"
            type="tel"
            placeholder="Phone (+880...)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            pattern="^\+880[0-9]{10}$"
          />
        )}
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          placeholder="Area"
          value={area}
          onChange={e => setArea(e.target.value)}
          required
        />
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          className="mb-2 p-2 border rounded"
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
          min={1}
        />
        <input
          className="mb-2 p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="mb-2 px-4 py-2 bg-blue-600 text-white rounded" type="submit">
          Register
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded" type="button" onClick={onBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Register;