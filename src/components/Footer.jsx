import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-6 md:px-16 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Traini Fit</h2>
          <p className="text-sm text-gray-400">
            Des programmes adaptés à chaque corps. Une communauté qui se transforme ensemble.
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Programmes</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/fitness" className="hover:text-white">Fitness personnalisé</a></li>
            <li><a href="/nutrition" className="hover:text-white">Nutrition adaptée</a></li>
            <li><a href="/transformation" className="hover:text-white">Transformations réelles</a></li>
          </ul>
        </div>

        {/* Classement & Salles */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Salles & Classements</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/ranking" className="hover:text-white">Top salles au Maroc</a></li>
            <li><a href="/reviews" className="hover:text-white">Avis des membres</a></li>
            <li><a href="/map" className="hover:text-white">Carte interactive</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Rejoins la communauté</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://youtube.com" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} Traini Fit. Tous droits réservés.
      </div>
    </footer>
  );
}
