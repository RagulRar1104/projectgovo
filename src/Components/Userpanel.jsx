import React from 'react';
import{Link} from "react-router-dom"
import { FaUserCircle, FaChartPie, FaLifeRing } from 'react-icons/fa';

const Userpanel = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-green-700">User Panel</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition">
        <Link to={"/"}>LOG-OUT</Link>

        </button>
      </header>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* View Profile Card */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <div className="text-green-600 text-4xl">
            <FaUserCircle />
          </div>
          <div>
            <h2 className="font-bold text-xl">View Profile</h2>
            <p className="text-gray-600">Update personal information and settings.</p>
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <div className="text-blue-600 text-4xl">
            <FaChartPie />
          </div>
          <div>
            <h2 className="font-bold text-xl">Dashboard</h2>
            <p className="text-gray-600">Access your dashboard and recent activities.</p>
          </div>
        </div>

        {/* Help Center Card */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <div className="text-yellow-600 text-4xl">
            <FaLifeRing />
          </div>
          <div>
            <h2 className="font-bold text-xl">Help Center</h2>
            <p className="text-gray-600">Contact support or find answers to FAQs.</p>
          </div>
        </div>
      </div>

      {/* Additional Section: Welcome or Quick Info */}
      <div className="bg-white shadow-xl rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
        <p className="text-gray-600">
          Here’s a quick overview of your recent activities and tasks. Make sure to check out the dashboard for more
          insights.
        </p>
      </div>

      {/* Footer Quick Links */}
      <div className="bg-gray-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-bold text-gray-700 mb-3">Quick Links</h3>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition">
            Update Profile
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition">
            View Dashboard
          </button>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-700 transition">
            FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userpanel;
