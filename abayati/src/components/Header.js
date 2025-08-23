import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.header-right') && !e.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="logo-button">ABAYATI</button>
        </div>
        
        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation - Desktop and Mobile */}
        <nav className={`header-right ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><button className="nav-button" onClick={() => setIsMenuOpen(false)}>About</button></li>
            <li><button className="nav-button" onClick={() => setIsMenuOpen(false)}>Shop</button></li>
            <li><button className="nav-button" onClick={() => setIsMenuOpen(false)}>Contact</button></li>
          </ul>
        </nav>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </header>
  );
}

export default Header;