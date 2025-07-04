// App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import AddBlog from './pages/AddBlog';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem('userInfo');
    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user info:', error);
        localStorage.removeItem('userInfo');
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <>
      <Header user={user} logout={logout} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Body />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Hero />} />
        <Route path="/add-blog" element={user ? <AddBlog user={user} /> : <Hero />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
