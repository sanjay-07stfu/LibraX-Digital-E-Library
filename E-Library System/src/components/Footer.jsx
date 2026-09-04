import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  BookOpen,
} from "lucide-react";

import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen size={24} />
              </div>

              <h2 className="text-2xl font-bold">
                E-Library
              </h2>
            </div>

            <p className="text-gray-400 leading-7">
              Your digital library for discovering, reading,
              and managing your favorite books anytime,
              anywhere.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={21} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaFacebook size={21} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FaInstagram size={21} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaLinkedin size={21} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition"
              >
                <FaTwitter size={21} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/books"
                  className="hover:text-white transition"
                >
                  Browse Books
                </a>
              </li>

              <li>
                <a
                  href="/categories"
                  className="hover:text-white transition"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Useful Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/login"
                  className="hover:text-white transition"
                >
                  Login
                </a>
              </li>

              <li>
                <a
                  href="/register"
                  className="hover:text-white transition"
                >
                  Create Account
                </a>
              </li>

              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="/help"
                  className="hover:text-white transition"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-blue-500 mt-1 shrink-0"
                />

                <p>
                  Mumbai, Maharashtra, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-blue-500 shrink-0"
                />

                <a
                  href="mailto:support@elibrary.com"
                  className="hover:text-white transition"
                >
                  support@elibrary.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-blue-500 shrink-0"
                />

                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition"
                >
                  +91 98765 43210
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} E-Library.
            All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;