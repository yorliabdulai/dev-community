import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';

// Define the type for a Project object
type Project = {
  _id: string;
  title: string;
  description: string;
  author: string;
  stack: string[];
  users: string[];
};

// Use the Project type for the projects state
const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const applyToProject = async (projectId: string) => {
    try {
      await axios.post(`/api/projects/${projectId}/apply`);
      // Optionally update the state or show a success message
    } catch (error) {
      console.error('Error applying to project:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md mt-6">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project._id} className="p-6 bg-white border rounded-md shadow-sm">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <span className="font-semibold">Author: </span>{project.author}
                </div>
                <div className="mt-2">
                  <span className="font-semibold">Stack: </span>
                  {project.stack.join(', ')}
                </div>
                <div className="mt-4 flex flex-wrap items-center">
                  <span className="font-semibold mr-2">Current Users:</span>
                  {project.users.length > 0 ? (
                    project.users.map((user) => (
                      <span key={user} className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">
                        <FaUser className="mr-1" /> {user}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-600">No users yet</span>
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 flex items-center">
                <button
                  onClick={() => applyToProject(project._id)}
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Apply to Project
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
