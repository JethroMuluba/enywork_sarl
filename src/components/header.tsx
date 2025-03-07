'use client'

import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          ENYWORK
        </Link>

        {/* Menu Hamburger pour mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="text-gray-700 hover:text-blue-600">
                Réalisations
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-gray-700 hover:text-blue-600">
                Équipe
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-700 hover:text-blue-600">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;