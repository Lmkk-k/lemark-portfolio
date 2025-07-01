import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Lemark Rosales. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/Lmkk-k" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:lemarkrosales123@gmail.com">Email</a>
          <a href="https://www.instagram.com/lemarkkkk_/">Instragram</a>
          <a href="https://www.facebook.com/lemark.rosales.2025">Facebook</a>
          <a href="https://www.linkedin.com/in/lemark-rosales-919291300/">linkedin</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
