import React, { useState, useEffect } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [screenW, setScreenW] = useState(window.innerWidth);
  const breakpointTab = 992;
  const breakpointMobile = 768;

  const handleWindowResize = () => {
    setScreenW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, [screenW]);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            {breakpointMobile < screenW ? (
              <img src="/snubes-logo.svg" alt="logo" />
            ) : (
              <img src="/logo-mobile.svg" alt="logo-mobile" />
            )}
          </div>
          {breakpointTab < screenW ? (
            <ul className="nav-links">
              <li className="nav-item">About us</li>
              <li className="nav-item">How it works</li>
              <li className="nav-item">Become a Partner</li>
              <li className="nav-item">EUR</li>
              <li className="nav-item">EN</li>
              <li className="nav-item">Sign in</li>
              <li className="nav-item">Get Access</li>
            </ul>
          ) : (
            <div>
              <img src="/burger-menu.svg" alt="burger-button" />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
