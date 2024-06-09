import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const GrantMentor = () => {
  const { user } = useAuth();
  const [mentorId, setMentorId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/admin/grant-mentor', { mentorId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMentorId('');
    } catch (error) {
      console.error('Granting mentor access failed:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Grant Mentor Access</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
          placeholder="Mentor ID"
          className="w-full p-3 border rounded-md"
        />
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Grant Access
        </button>
      </form>
    </div>
  );
};

export default GrantMentor;
