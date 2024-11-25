import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Adminpanel from './Components/Adminpanel';
import Userpanel from './Components/Userpanel';
import Home from './Components/Home';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-200 min-h-screen">
        <nav className="bg-blue-700 text-black p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" element={ <Home/>}className="text-lg font-bold">Home</Link>
            <div className="flex space-x-4 text-green-500">
              <Link to="/admin"  element={ <Adminpanel/>}  >Admin Panel</Link>
              <p>|</p>
              <Link to="/user" element={<Userpanel/>} >User Panel</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto mt-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Adminpanel />} />
            <Route path="/user" element={<Userpanel />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
