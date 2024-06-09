import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const CreateJob = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/jobs', { title, description, createdBy: user._id }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Job creation failed:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Create Job</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
          className="w-full p-3 border rounded-md"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
          className="w-full p-3 border rounded-md"
        />
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Create Job
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
