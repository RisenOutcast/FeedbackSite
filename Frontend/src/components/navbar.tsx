import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(window.innerWidth > 1200);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1200) {
      setNavbarVisible(true);
    }
  }, [windowWidth]);

  const toggleNavbarVisibility = () => {
    if (windowWidth < 1200) {
      setNavbarVisible(!navbarVisible);
    }
  };

  const deactivate_button = (
    <div className="hamburger-button-container">
      <button
        type="button"
        className="deactivate-nav-button"
        onClick={toggleNavbarVisibility}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="deactivate-nav-button-icon"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );

  const activate_button = (
    <div className="hamburger-button-container">
      <button
        type="button"
        className="activate-nav-button"
        onClick={toggleNavbarVisibility}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="activate-nav-button-icon"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  );

  const hamburger_button =
    navbarVisible === true ? deactivate_button : activate_button;

  return (
    <header className="navbar-container">
      {navbarVisible && (
        <div className="navbar">
          {
            <nav>
              <div className="navbarTitle">
                  <h2>Feedbank Inc.</h2>
              </div>
              <div className="navbarItems">
                <Link className="navElement" to="/">
                  Home
                </Link>

                <Link className="navElement" to="/contact">
                  Contact
                </Link>

                <Link className="navElement" to="/feedback">
                  Feedbacks
                </Link>
              </div>
            </nav>
          }
        </div>
      )}

      {windowWidth < 1200 && hamburger_button}
    </header>
  );
};

export default Navbar;
