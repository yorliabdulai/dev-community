import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const { login, loginWithGoogle, loginWithGithub } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
    } catch (error) {
      console.error('Github login failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
          Login
        </button>
      </form>
      <div className="mt-4 space-y-2">
        <button
          onClick={handleGoogleLogin}
          className="w-full p-3 flex items-center justify-center bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          <FaGoogle className="mr-2" /> Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="w-full p-3 flex items-center justify-center bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          <FaGithub className="mr-2" /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
