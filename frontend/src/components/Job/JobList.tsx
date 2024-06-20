import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for a Job object
type Job = {
  _id: string;
  title: string;
  description: string;
};

const JobList: React.FC = () => {
  // Use the Job type for the jobs state
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get<Job[]>('/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-2xl font-bold">Jobs</h2>
      <ul className="mt-4 space-y-4">
        {jobs.map((job) => (
          <li key={job._id} className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
