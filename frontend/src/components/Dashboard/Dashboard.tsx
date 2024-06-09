import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p>Welcome, {user?.name}</p>
      {/* Additional dashboard content */}
    </div>
  );
};

export default Dashboard;
