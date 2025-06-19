import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Regina Cloman-Moore</h3>
            <p className="mb-2">Author</p>
            <p>Little Rock, Arkansas</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-gold transition-colors">Home</a></li>
              <li className="mb-2"><a href="/books" className="hover:text-gold transition-colors">Books</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-gold transition-colors">About</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="mb-4">Sign up for my newsletter to receive updates on new releases and events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l text-gray-800"
              />
              <button className="bg-gold text-burgundy px-4 py-2 rounded-r font-bold hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Regina Cloman-Moore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
