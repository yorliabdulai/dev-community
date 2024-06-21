import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import CreateProject from './components/Project/CreateProject';
import ProjectList from './components/Project/ProjectList';
import CreateJob from './components/Job/CreateJob';
import JobList from './components/Job/JobList';
import ApplyMentor from './components/Mentorship/ApplyMentor';
import MentorshipList from './components/Mentorship/MentorshipList';
import AssignProject from './components/Mentorship/AssignProject';
import GrantMentor from './components/Admin/GrantMentor';
import GrantManager from './components/Admin/GrantManager';
import UserProfile from './components/Profile/UserProfile';
import Notification from './components/Notification';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
      <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/create" element={<CreateJob />} />
          <Route path="/mentorship" element={<MentorshipList />} />
          <Route path="/mentorship/apply" element={<ApplyMentor />} />
          <Route path="/mentorship/assign" element={<AssignProject />} />
          <Route path="/admin/grant-mentor" element={<GrantMentor />} />
          <Route path="/admin/grant-manager" element={<GrantManager />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
        </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
