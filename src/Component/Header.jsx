import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <img
          className="logo"
          src="./image and icon/Blue Gray Modern Technology Logo.png"
          alt=""
        />
        <h1>ANURAG KUSHWAH</h1>
        <ul className="navigation">
          <li>
            <Link to="#about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <a to="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a to="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a to="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    </>
  );
}

export default Header;
