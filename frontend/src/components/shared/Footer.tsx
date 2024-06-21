import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h2 className="text-lg font-bold">DevCommunity</h2>
            <p className="mt-2 text-sm">
              Empowering aspiring developers across Africa by providing a strong community and resources for learning and growth.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">Projects</Link>
              </li>
              <li>
                <Link to="/mentors" className="hover:underline">Mentors</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:underline">Jobs</Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">Login</Link>
              </li>
              <li>
                <Link to="/register" className="hover:underline">Register</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentorship" className="hover:underline">Mentorship</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:underline">Resources</Link>
              </li>
              <li>
                <Link to="/cv" className="hover:underline">CV Creation</Link>
              </li>
              <li>
                <Link to="/interview-prep" className="hover:underline">Interview Preparation</Link>
              </li>
              <li>
                <Link to="/linkedin-visibility" className="hover:underline">LinkedIn Visibility</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@devcommunity.com</li>
              <li>Phone: +233 24 123 4567</li>
              <li>Address: 123 Dev Street, Accra, Ghana</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.99 9.99 0 0 1-2.827.775 4.943 4.943 0 0 0 2.165-2.723 9.98 9.98 0 0 1-3.127 1.195 4.922 4.922 0 0 0-8.38 4.482A13.978 13.978 0 0 1 1.67 3.149a4.932 4.932 0 0 0 1.524 6.574 4.905 4.905 0 0 1-2.228-.616v.061a4.932 4.932 0 0 0 3.946 4.827 4.939 4.939 0 0 1-2.224.085 4.928 4.928 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.924 13.924 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.008 0-.213-.005-.425-.015-.637A9.936 9.936 0 0 0 24 4.557z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3H4.385A1.389 1.389 0 0 0 3 4.385v15.23A1.389 1.389 0 0 0 4.385 21h15.23A1.389 1.389 0 0 0 21 19.615V4.385A1.389 1.389 0 0 0 19.615 3zm-10.57 14.25h-3V10.5h3v6.75zm-1.5-7.875c-.966 0-1.75-.784-1.75-1.75S6.58 6.875 7.546 6.875s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm11.25 7.875h-3v-3.375c0-1.688-2-1.563-2 0v3.375h-3V10.5h3v1.125c1.378-2.554 6-2.75 6 2.438v4.187z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.994 4.569a10.12 10.12 0 0 1-2.828.775 4.935 4.935 0 0 0 2.165-2.725 9.89 9.89 0 0 1-3.127 1.192 4.92 4.92 0 0 0-8.384 4.483A13.94 13.94 0 0 1 1.671 3.149 4.928 4.928 0 0 0 3.194 9.724a4.906 4.906 0 0 1-2.228-.616v.061a4.936 4.936 0 0 0 3.95 4.823 4.942 4.942 0 0 1-2.224.085 4.929 4.929 0 0 0 4.6 3.421A9.9 9.9 0 0 1 0 19.54a13.936 13.936 0 0 0 7.548 2.212c9.054 0 14.009-7.5 14.009-14.008 0-.213-.005-.426-.015-.637A9.929 9.929 0 0 0 24 4.569z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c-5.522 0-10 4.478-10 10 0 4.991 3.657 9.128 8.437 9.878v-6.989h-2.54V12h2.54v-1.217c0-2.507 1.492-3.89 3.774-3.89 1.094 0 2.238.194 2.238.194v2.463h-1.26c-1.242 0-1.628.774-1.628 1.562V12h2.773l-.444 2.052h-2.329v6.989C18.343 21.292 22 17.155 22 12.163c0-5.522-4.478-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400 text-center">
          <p>&copy; 2024 DevCommunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
