'use client';
import { useState, useEffect } from 'react';  // Import both at once
import Link from 'next/link';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaLinkedin } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensures code is only executed on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu state:", !isMenuOpen); 
  };

  if (!isClient) {
    // Return a simple loading state or placeholder during SSR
    return <div>Loading...</div>;
  }

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Logo" style={{ width: '250px', height: 'auto' }} />
          </Link>
        </div>

        {/* Toggle Button */}
        <div
          className="toggle-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link href="/">
              <AiOutlineHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              <AiOutlineUser className="icon" /> About
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <AiOutlineFundProjectionScreen className="icon" /> Projects
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1_eP3Y8CP9Mgw5lR_8378EuwS7nqgDztr/view"
              target="_blank"
              rel="noreferrer"
            >
              <CgFileDocument className="icon" /> Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/earl-joseph-claro-603350163/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
