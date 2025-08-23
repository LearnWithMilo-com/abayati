import React from "react";
import "./Header.css"; // Import the correct CSS file for Header styles

function Header() {
  return (
    <header className="header">
      <div className="header-left">
      <button className="logo-button">ABAYATI</button>
      </div>
      <nav className="header-right">
        <ul className="nav-links">
          <li><button className="nav-button">About</button></li>
          <li><button className="nav-button">Shop</button></li>
          <li><button className="nav-button">Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;