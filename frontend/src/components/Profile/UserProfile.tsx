import React from 'react';
import { useAuth } from '../../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      {/* Additional profile content */}
    </div>
  );
};

export default UserProfile;
