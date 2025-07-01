import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.body.classList.add('dark-mode');
      setDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const enabled = document.body.classList.contains('dark-mode');
    setDark(enabled);
    localStorage.setItem('theme', enabled ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">YL<span></span></a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={toggleDarkMode} className="btn btn-secondary">
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
