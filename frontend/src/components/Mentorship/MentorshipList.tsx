import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaUser } from 'react-icons/fa';

type Mentor = {
  _id: string;
  bio: string;
  availability: string;
  techStack: string[];
  githubProfile: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    email: string;
  };
  user: {
    name: string;
    avatar: string;
  };
};

const MentorshipList: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get<Mentor[]>('/api/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };
    fetchMentors();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md mt-6">
      <h2 className="text-3xl font-bold text-center mb-6">Mentors</h2>
      <ul className="space-y-6">
        {mentors.map((mentor) => (
          <li key={mentor._id} className="p-6 bg-white border rounded-md shadow-sm flex flex-col md:flex-row">
            <div className="flex-shrink-0">
              <img src={mentor.user.avatar} alt={mentor.user.name} className="h-24 w-24 rounded-full object-cover mr-4" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{mentor.user.name}</h3>
              <p className="mt-2 text-gray-600">{mentor.bio}</p>
              <div className="mt-4">
                <span className="font-semibold">Availability: </span>{mentor.availability}
              </div>
              <div className="mt-2">
                <span className="font-semibold">Tech Stack: </span>
                {mentor.techStack.join(', ')}
              </div>
              <div className="mt-4 flex space-x-4">
                <a href={`mailto:${mentor.socialLinks.email}`} className="text-gray-500 hover:text-gray-700">
                  <FaEnvelope size={24} />
                </a>
                <a href={mentor.socialLinks.twitter} className="text-gray-500 hover:text-gray-700">
                  <FaTwitter size={24} />
                </a>
                <a href={mentor.socialLinks.linkedin} className="text-gray-500 hover:text-gray-700">
                  <FaLinkedin size={24} />
                </a>
                <a href={mentor.githubProfile} className="text-gray-500 hover:text-gray-700">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorshipList;
