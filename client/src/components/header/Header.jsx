import React, { useState } from "react";
import "./Header.scss";

import { FaGithub } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // JS Window Scroll Method, whenever we scroll it runs the function
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  // Link Creator Function
  const createLink = (link, text) => {
    return (
      <li>
        <a href={link}>{text}</a>
      </li>
    );
  };

  return (
    <div className={isScrolled ? "header--scrolled" : "header"}>
      <div className="header__container main-container">
        <div className="header__logo">
          <img
            src="https://remote-europe.com/sites/default/files/styles/medium_300x300_/public/2021-08/omnipresent.png?itok=hDVlAUq1"
            alt="Header Logo"
          />
        </div>
        <nav className="header__nav">
          <ul>
            {createLink("#", "Home")}
            {createLink("#", "About Us")}
            {createLink("#", "Services")}
            {createLink("#", "Resources")}
            {createLink("#", "Contact Us")}
          </ul>
        </nav>
        <div className="header__github">
          <a href="https://github.com/harshitbehl/omnipresent-harshitbehl">
            <FaGithub className="header__github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
