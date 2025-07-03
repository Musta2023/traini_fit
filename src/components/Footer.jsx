import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-2xl mt-16 mx-4 p-10 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏋️‍♂️ Traini Fit</h2>
          <p className="text-sm text-gray-600">
            Des programmes adaptés à chaque corps.<br />
            Une communauté qui se transforme ensemble.
          </p>
        </div>

        {/* Programmes */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-3">🎓 Programmes</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/fitness" className="hover:text-indigo-800 transition-colors">Fitness personnalisé</a></li>
            <li><a href="/nutrition" className="hover:text-indigo-800 transition-colors">Nutrition adaptée</a></li>
            <li><a href="/transformation" className="hover:text-indigo-800 transition-colors">Transformations réelles</a></li>
          </ul>
        </div>

        {/* Salles */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-3">🏆 Salles & Classements</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/ranking" className="hover:text-green-800 transition-colors">Top salles au Maroc</a></li>
            <li><a href="/reviews" className="hover:text-green-800 transition-colors">Avis des membres</a></li>
            <li><a href="/map" className="hover:text-green-800 transition-colors">Carte interactive</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-3">📱 Suis-nous</h3>
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
        &copy; {year} Traini Fit. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;