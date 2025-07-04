// src/pages/SignIn.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';  // مسار صحيح
import Hero from '../components/Hero';
import Body from '../components/Body';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function SignIn({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
     const res = await fetch('http://localhost:5000/api/auth/signin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.user));
        setUser(data.user);  // حدث حالة المستخدم في الأب (App)
        alert('Signed in successfully!');
        navigate('/');
      } else {
        alert(data.message || 'Failed to sign in.');
      }
    } catch (err) {
      console.error('Error signing in:', err);
      alert('Error signing in: ' + err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Sign In</h2>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
