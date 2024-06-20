import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { BrowserRouter as Switch } from 'react-router-dom';
//import { BrowserRouter as Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
//import Home from './pages/Home';
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
import PaystackPayment from './components/Payment/PaystackPayment';
import Notification from './components/Notification';
//import NotFound from './pages/NotFound';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {/*<Route path="/"  Component={Home} />*/}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/dashboard" Component={Dashboard} />
        <Route path="/projects" Component={ProjectList} />
          <Route path="/projects/create" Component={CreateProject} />
          <Route path="/jobs"  Component={JobList} />
          <Route path="/jobs/create" Component={CreateJob} />
          <Route path="/mentorship"  Component={MentorshipList} />
          <Route path="/mentorship/apply" Component={ApplyMentor} />
          <Route path="/mentorship/assign" Component={AssignProject} />
          <Route path="/admin/grant-mentor" Component={GrantMentor} />
          <Route path="/admin/grant-manager" Component={GrantManager} />
          <Route path="/profile" Component={UserProfile} />
          {/*<Route path="/payment" Component={PaystackPayment} />*/}
          <Route path="/notifications" Component={Notification} />
          {/*<Route Component={NotFound} />*/}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
