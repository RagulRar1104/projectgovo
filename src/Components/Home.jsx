import React from 'react';
import { FaTools, FaLaptopCode, FaUsers, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">GOVO Solutions</h1>
          <nav className="space-x-6 text-lg">
            <a href="#about" className="hover:text-gray-400 transition">
              About Us
            </a>
            <a href="#services" className="hover:text-gray-400 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Empowering Your Business with Cutting-Edge Solutions
          </h2>
          <p className="text-lg mb-10">
            At GOVO Solutions, we specialize in delivering innovative tech solutions tailored to
            your needs. Let’s grow together.
          </p>
          <button className="bg-black px-8 py-3 text-white text-lg font-bold rounded-lg hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-600 text-center mx-auto max-w-3xl">
            GOVO Solutions is a forward-thinking tech company dedicated to providing customized 
            solutions to businesses worldwide. With expertise in software development, IT consulting, 
            and customer-focused services, we aim to drive innovation and excellence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
              <FaLaptopCode className="text-blue-500 text-6xl mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-2">Software Development</h3>
              <p className="text-gray-600">
                Custom-built software to enhance your operations and drive efficiency.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
              <FaTools className="text-green-500 text-6xl mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-2">IT Consulting</h3>
              <p className="text-gray-600">
                Expert advice to navigate complex tech landscapes and improve scalability.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
              <FaUsers className="text-yellow-500 text-6xl mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Dedicated 24/7 support to ensure seamless operations for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
              <FaPhoneAlt className="text-green-500 text-6xl mx-auto mb-4" />
              <h3 className="font-bold text-xl">Phone</h3>
              <p className="text-gray-600">+91-7598459312</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
              <FaEnvelope className="text-blue-500 text-6xl mx-auto mb-4" />
              <h3 className="font-bold text-xl">Email</h3>
              <p className="text-gray-600">ragulr1109@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-4 text-center">
        <p className="text-sm">&copy; 2024 GOVO Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
