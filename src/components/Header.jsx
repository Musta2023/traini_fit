import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ user, logout }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm p-4 fixed top-0 left-0 right-0 z-50 shadow-xl">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          🏋️ FitLife
        </Link>

        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a></li>
          <li><a href="#nutrition" className="text-gray-700 hover:text-indigo-600 font-medium">Nutrition</a></li>
          <li><a href="#exercises" className="text-gray-700 hover:text-indigo-600 font-medium">Exercises</a></li>
          <li><a href="#gyms" className="text-gray-700 hover:text-indigo-600 font-medium">Find Gyms</a></li>
        </ul>

        <div className="hidden md:flex items-center space-x-4 relative" ref={dropdownRef}>
          {!user ? (
            <>
              <Link
                to="/signin"
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {/* زر الأيقونة */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold uppercase flex items-center justify-center"
              >
                {user.name ? user.name[0] : 'U'}
              </button>

              {/* القائمة المنسدلة */}
              {dropdownOpen && (
                <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-xl py-2 z-50">
                  <button
                    onClick={() => {
                      navigate('/add-blog');
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    ➕ Add Blog
                  </button>
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    📝 Delete Blog
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    🚪 Sign Out
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
