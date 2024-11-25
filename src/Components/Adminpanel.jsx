import React from 'react';
import {Link} from 'react-router-dom'
import { FaUsers, FaChartLine, FaCog } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Adminpanel = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Users',
        data: [50, 100, 150, 200, 250, 300],
        backgroundColor: 'rgba(59, 130, 246, 0.8)', // Tailwind Blue
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Admin Panel</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          <Link to={"/"}>LOG-OUT</Link>
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <div className="text-blue-500 text-3xl">
            <FaUsers />
          </div>
          <div>
            <h2 className="font-bold text-xl">Manage Users</h2>
            <p>View, add, edit, or remove users from the platform.</p>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <div className="text-green-500 text-3xl">
            <FaChartLine />
          </div>
          <div>
            <h2 className="font-bold text-xl">Analytics</h2>
            <p>View platform usage statistics and reports.</p>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <div className="text-yellow-500 text-3xl">
            <FaCog />
          </div>
          <div>
            <h2 className="font-bold text-xl">Settings</h2>
            <p>Update system configurations and preferences.</p>
          </div>
        </div>
      </div>


      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="font-bold text-xl mb-4">User Activity Overview</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-bold text-xl mb-4">Latest Activities</h2>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Anusha updated their profile.</span>
              <span className="text-gray-500 text-sm">10 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span>Angel registered.</span>
              <span className="text-gray-500 text-sm">30 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span>Admin updated system settings.</span>
              <span className="text-gray-500 text-sm">1 hour ago</span>
            </li>
          </ul>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-bold text-xl mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
              Add User
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
              View Reports
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-700">
              Update Settings
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700">
              Delete User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminpanel;
