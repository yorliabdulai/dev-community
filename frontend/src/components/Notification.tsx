import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
//Define the type for a Notification object
type Notification = {
  _id: string;
  message: string;
};

const Notification = () => {
  //Use the Notification type for the notifications state
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { user } = useAuth();
  

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/notifications/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, [user]);

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <ul className="mt-4 space-y-4">
        {notifications.map((notification) => (
          <li key={notification._id} className="p-4 border rounded-md">
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
