import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import Sidebar from "./Sidebar";
import SocialIcons from "./SocialIcons";

const DESKTOP_WIDTH = 800;

const Navbar = () => {
  // На десктопі меню показується одразу, на мобільному - приховане
  const [showLinks, setShowLinks] = useState(window.innerWidth > DESKTOP_WIDTH);

  // При зміні розміру вікна показуємо/ховаємо меню залежно від ширини
  useEffect(() => {
    const showMenu = () => {
      if (window.innerWidth > DESKTOP_WIDTH) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };
    window.addEventListener("resize", showMenu);
    return () => window.removeEventListener("resize", showMenu);
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && <Sidebar />}
        <SocialIcons />
      </div>
    </nav>
  );
};

export default Navbar;
