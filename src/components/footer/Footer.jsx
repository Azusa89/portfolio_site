import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kaho Cheng
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <AiFillInstagram />
        </a>
        <a href="https://www.twitter.com/">
          <AiFillTwitterSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kaho Cheng. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
