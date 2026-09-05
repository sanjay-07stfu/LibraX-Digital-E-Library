import React from "react";
import { Mail, Phone, MapPin, ArrowUp, BookOpen } from "lucide-react";

import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* Statistics */}
      <div className="footer-stats">
        <div>
          <h2>5K+</h2>
          <p>Active Readers</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Categories</p>
        </div>

        <div>
          <h2>1M+</h2>
          <p>Books Read</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-container">

        {/* About */}
        <div className="footer-about">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <BookOpen size={24} />
            </div>

            <h2>E-Library</h2>
          </div>

          <p>
            Your digital library for discovering, reading,
            and managing your favorite books anytime,
            anywhere.
          </p>

          {/* Social Icons */}
          <div className="social-icons">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/explore">Browse Books</a>
            </li>

            <li>
              <a href="/categories">Categories</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>

          <ul>
            <li>
              <a href="/login">Login</a>
            </li>

            <li>
              <a href="/register">Create Account</a>
            </li>

            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>

            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>

            <li>
              <a href="/help">Help Center</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <MapPin size={20} />

            <p>
              Mumbai, Maharashtra, India
            </p>
          </div>

          <div className="contact-item">
            <Mail size={20} />

            <a href="mailto:support@elibrary.com">
              support@elibrary.com
            </a>
          </div>

          <div className="contact-item">
            <Phone size={20} />

            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} E-Library.
          All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="back-to-top"
        >
          <ArrowUp size={18} />
          Back to Top
        </button>

      </div>

    </footer>
  );
};

export default Footer;