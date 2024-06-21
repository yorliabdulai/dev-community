import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to DevCommunity
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering aspiring developers across Africa to learn, collaborate, and grow.
          </p>
          <div className="mt-8">
            <Link to="/register" className="btn-primary">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Collaborative Projects</h3>
              <p className="mt-4 text-gray-600">Work on real-world projects with fellow developers.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Mentorship</h3>
              <p className="mt-4 text-gray-600">Get guidance from experienced developers.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Job Opportunities</h3>
              <p className="mt-4 text-gray-600">Find your next career opportunity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Recent Projects
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with dynamic project data */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Project 1</h3>
              <p className="mt-4 text-gray-600">Description of project 1.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Project 2</h3>
              <p className="mt-4 text-gray-600">Description of project 2.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Project 3</h3>
              <p className="mt-4 text-gray-600">Description of project 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mentors
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with dynamic mentor data */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Mentor 1</h3>
              <p className="mt-4 text-gray-600">Bio of mentor 1.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Mentor 2</h3>
              <p className="mt-4 text-gray-600">Bio of mentor 2.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Mentor 3</h3>
              <p className="mt-4 text-gray-600">Bio of mentor 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-xl">
            Join DevCommunity today and start your journey towards becoming a professional developer.
          </p>
          <div className="mt-8">
            <Link to="/register" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
