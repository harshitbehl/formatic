import React, { useState } from "react";
import "./Header.scss";

import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

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
          <motion.a
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            href="https://github.com/harshitbehl/omnipresent-harshitbehl"
          >
            <BsGithub className="header__github-icon" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Header;
