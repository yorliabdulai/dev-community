import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Define the type for a Project object
type Project = {
  _id: string;
  title: string;
  description: string;
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

  return (
    <div className="p-6 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <ul className="mt-4 space-y-4">
        {projects.map((project) => (
          <li key={project._id} className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
