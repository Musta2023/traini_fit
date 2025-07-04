import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Sign Up</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? <Link to="/signin" className="text-indigo-600 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
