import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MentorshipList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('/api/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };
    fetchMentors();
  }, []);

  return (
    <div className="p-6 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-2xl font-bold">Mentors</h2>
      <ul className="mt-4 space-y-4">
        {mentors.map((mentor) => (
          <li key={mentor._id} className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">{mentor.user.name}</h3>
            <p>{mentor.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorshipList;
