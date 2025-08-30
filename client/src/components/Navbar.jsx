// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from '../pages/Weather';
import { Menu, X } from 'lucide-react'; // optional icons

export default function Navbar({ setSearch, onCategorySelect }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');
  const [open, setOpen] = useState(false);
const categories = ['All', 'News', 'Sports', 'Play', 'Money', 'Weather', 'Watch', 'Shopping'];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <nav className="bg-gray-800 text-white px-4 py-3 flex flex-wrap items-center justify-between">
        {/* <div className="text-2xl font-bold">clicksamachar.com</div> */}
        <Link to="/" className="text-2xl font-bold">MSN</Link>

        <div className="block sm:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>

        <div className={`sm:flex sm:items-center gap-4 ${open ? 'block w-full mt-4' : 'hidden sm:block'}`}>
          <input
            type="text"
            placeholder="Search news..."
            className="px-3 py-1 rounded text-black w-full sm:w-auto"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/">Home</Link>
          <Link to="/add">Add News</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
          <div className="mt-2 sm:mt-0">
            {/* <Weather /> */}
          </div>
        </div>
      </nav>

      {/* Category Bar */}
      <div className="bg-gray-100 px-4 py-2 flex flex-wrap gap-3 justify-center text-sm sm:text-base">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategorySelect(cat)}
            className="bg-white px-3 py-1 rounded border hover:bg-blue-100 transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}
