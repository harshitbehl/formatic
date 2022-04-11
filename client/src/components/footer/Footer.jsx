import React from "react";
import "./Footer.scss";

import {
  FaApple,
  FaGooglePlay,
  FaAppStoreIos,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCanadianMapleLeaf,
  FaHeartbeat,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const createLink = (link, text) => {
    return (
      <li>
        <motion.a whileHover={{ scale: 1.2, x: 10 }} href={link}>
          {text}
        </motion.a>
      </li>
    );
  };

  return (
    <footer className="footer">
      <div className="footer__top main-container">
        <div className="footer__logo">
          <img
            src="https://remote-europe.com/sites/default/files/styles/medium_300x300_/public/2021-08/omnipresent.png?itok=hDVlAUq1"
            alt="Header Logo"
          />
          <p>
            Made with <FaHeartbeat className="footer__logo-heart" /> in{" "}
            <FaCanadianMapleLeaf className="footer__logo-maple" /> by Harshit
            Behl
          </p>
          <div className="footer__logo-icons">
            <FaApple className="footer__logo-icon" />
            <FaGooglePlay className="footer__logo-icon" />
            <FaAppStoreIos className="footer__logo-icon" />
          </div>
        </div>
        <div className="footer__other-pages">
          <h4>Other Pages</h4>
          <ul>
            {createLink("#", "Home")}
            {createLink("#", "About Us")}
            {createLink("#", "Services")}
            {createLink("#", "Contact")}
            {createLink("#", "Project")}
          </ul>
        </div>
        <div className="footer__quick-links">
          <h4>Quick Links</h4>
          <ul>
            {createLink("#", "Privacy Policy")}
            {createLink("#", "Terms Of Service")}
            {createLink("#", "Disclaimer")}
            {createLink("#", "Credits")}
            {createLink("#", "FAQ")}
          </ul>
        </div>
        <div className="footer__social-media">
          <h4>Social Media</h4>
          <p>
            Our Support and Sales team is available 24/7 to answer your queries
          </p>
          <div className="footer__social-media-icons">
            <FaFacebookSquare className="footer__social-media-icon" />
            <FaTwitter className="footer__social-media-icon" />
            <FaLinkedinIn className="footer__social-media-icon" />
            <FaInstagram className="footer__social-media-icon" />
          </div>
        </div>
      </div>

      <div className="footer__bottom main-container">
        <span>Copyright ©2022 Omnipresent. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
