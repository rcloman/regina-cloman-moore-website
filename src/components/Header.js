import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-4xl font-serif italic text-burgundy">
              Regina Cloman-Moore
            </Link>
            <p className="text-sm text-gray-600">Author</p>
          </div>
          
          <nav className="flex flex-wrap justify-center">
            <Link to="/" className="px-4 py-2 text-burgundy hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/books" className="px-4 py-2 text-burgundy hover:text-gold transition-colors">
              Books
            </Link>
            <Link to="/about" className="px-4 py-2 text-burgundy hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="px-4 py-2 text-burgundy hover:text-gold transition-colors">
              Contact
            </Link>
            <a href="#newsletter" className="px-4 py-2 text-white bg-burgundy hover:bg-opacity-90 rounded transition-colors">
              Newsletter
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
