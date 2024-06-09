import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const ApplyMentor = () => {
  const { user } = useAuth();
  const [bio, setBio] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/mentors/apply', { bio, userId: user._id }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBio('');
    } catch (error) {
      console.error('Mentor application failed:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Apply as Mentor</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Your Bio"
          className="w-full p-3 border rounded-md"
        />
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyMentor;
