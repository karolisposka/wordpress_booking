import React, { useState } from "react";
import image from '../../assets/logo.png';


const Header = () => {
  const [expanded, setExpanded] = useState("false");

  const toggleMenu = () => {
    if (expanded === "false") {
      setExpanded("true");
    } else {
      setExpanded("false");
    }
  };

  const Navigation = () => {
    return (
      <>
        <div expanded={expanded} className="header-collapse">
          <div className="header-collapse-wrap">
            <nav className="header-collapse-wrap-list">
              <li className="header-collapse-wrap-list-item">
                <a>Home</a>
              </li>
              <li className="header-collapse-wrap-list-item">
                <a>Hotels</a>
              </li>
              <li className="header-collapse-wrap-list-item">
                <a>Travel Guides</a>
              </li>
              <li className="header-collapse-wrap-list-item">
                <a>Top 5</a>
              </li>
              <li className="header-collapse-wrap-list-item">
                <a>Contact us</a>
              </li>
            </nav>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <header className="header-container">
        <div className="header-container-wrap">
          <a className="header-container-wrap-logo" href="/">
            <img src={image} alt='image'/>
          </a>
          <nav className="header-container-wrap-navigation">
            <li className="header-container-wrap-navigation-item">
              <a>Home</a>
            </li>
            <li className="header-container-wrap-navigation-item">
              <a>Hotels</a>
            </li>
            <li className="header-container-wrap-navigation-item">
              <a>Travel Guides</a>
            </li>
            <li className="header-container-wrap-navigation-item">
              <a>Top 5</a>
            </li>
            <li className="header-container-wrap-navigation-item">
              <a>Contact Us</a>
            </li>
          </nav>
          <div className="header-container-wrap-mobile">
            <div className="header-container-wrap-mobile-menu">
              <button
                className="header-container-wrap-mobile-menu-button"
                expanded={expanded}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <svg viewBox="0 0 100 100" width="24px" height="24px">
                  <rect className="header-container-wrap-mobile-menu-button-line" width="100" />
                  <rect className="header-container-wrap-mobile-menu-button-line" width="100" />
                  <rect className="header-container-wrap-mobile-menu-button-line" width="100" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
};

export default Header;
