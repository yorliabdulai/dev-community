import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const GrantManager = () => {
  const { user } = useAuth();
  const [managerId, setManagerId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/admin/grant-manager', { managerId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setManagerId('');
    } catch (error) {
      console.error('Granting manager access failed:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Grant Manager Access</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
          placeholder="Manager ID"
          className="w-full p-3 border rounded-md"
        />
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Grant Access
        </button>
      </form>
    </div>
  );
};

export default GrantManager;
