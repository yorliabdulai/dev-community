import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const AssignProject = () => {
  const { user } = useAuth();
  const [projectId, setProjectId] = useState('');
  const [menteeId, setMenteeId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/mentorship/assign', { projectId, menteeId, mentorId: user._id }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjectId('');
      setMenteeId('');
    } catch (error) {
      console.error('Project assignment failed:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Assign Project to Mentee</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          placeholder="Project ID"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          value={menteeId}
          onChange={(e) => setMenteeId(e.target.value)}
          placeholder="Mentee ID"
          className="w-full p-3 border rounded-md"
        />
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Assign Project
        </button>
      </form>
    </div>
  );
};

export default AssignProject;
