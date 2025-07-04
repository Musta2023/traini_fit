import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-2xl mt-16 mx-4 p-10 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏋️‍♂️ FitLife</h2>
          <p className="text-sm text-gray-600">
            Programs tailored for every body.<br />
            A community transforming together.
          </p>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-3">🎓 Programs</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/fitness" className="hover:text-indigo-800 transition-colors">Personalized Fitness</a></li>
            <li><a href="/nutrition" className="hover:text-indigo-800 transition-colors">Adapted Nutrition</a></li>
            <li><a href="/transformation" className="hover:text-indigo-800 transition-colors">Real Transformations</a></li>
          </ul>
        </div>

        {/* Gyms */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-3">🏆 Gyms & Rankings</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/ranking" className="hover:text-green-800 transition-colors">Top Gyms in Morocco</a></li>
            <li><a href="/reviews" className="hover:text-green-800 transition-colors">Member Reviews</a></li>
            <li><a href="/map" className="hover:text-green-800 transition-colors">Interactive Map</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-3">📱 Follow Us</h3>
          <div className="flex space-x-4 text-2xl mt-2 text-gray-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-sm text-center text-gray-500">
        &copy; {year} FitLife. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
