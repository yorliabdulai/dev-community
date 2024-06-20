import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';


const Register = () => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 border rounded-md"
        />
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
