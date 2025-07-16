import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-cont">
      <div className="footer-cont-top">
        <div className="footer-cont-brand">
          <h2 className="footer-cont-logo">Sri<span>Sai Charan</span></h2>
          
        </div>

        <div className="footer-cont-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-cont-contact">
          <h3>Contact Us</h3>
          <p>📍 Location, India</p>
          <p>📧 support@shop.com</p>
          <div className="footer-cont-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-cont-bottom">
        <p>&copy; {new Date().getFullYear()} sai charan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
