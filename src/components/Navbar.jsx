import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './css/navbar.css';
import Image from '../assets/cart.png';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasOpen(!offCanvasOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
        <h2>Logo</h2>
        </div>
        <ul className="nav-links">
          <li onClick={toggleOffCanvas} className="menu-icon">
          <IoMenu style={{ color: 'white', fontSize: '30px' }} />

          </li>
        </ul>
      </nav>

      {/* Off-canvas menu */}
      <div className={`offcanvas ${offCanvasOpen ? 'open' : ''}`}>
        <div className="offcanvas-content">
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500} onClick={toggleOffCanvas}>
                Home
              </Link>
            </li>
            <li>
              <Link to="products" smooth={true} duration={500} onClick={toggleOffCanvas}>
                Products
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={toggleOffCanvas}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={toggleOffCanvas}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="close-btn" onClick={toggleOffCanvas}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
