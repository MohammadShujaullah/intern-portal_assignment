// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === '') return;

    // Save dummy login info
    localStorage.setItem('internName', name);
    localStorage.setItem('referralCode', name.toLowerCase() + '2025');
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow rounded w-80">
        <h2 className="text-xl font-semibold mb-4">Intern Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="border px-4 py-2 w-full mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}
