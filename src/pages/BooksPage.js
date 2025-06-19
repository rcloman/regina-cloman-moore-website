import React from 'react';
import { Link } from 'react-router-dom';
import floridaPeppermintCover from '../assets/florida_peppermint_book_cover.jpeg';
import grandmasLapCover from '../assets/Grandma\'s Lap.JPG';
import fathersVoiceCover from '../assets/I know My Father\'s Voice.jpg';

const BooksPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-burgundy mb-8 text-center">Books by Regina Cloman-Moore</h1>
        
        {/* Book Categories Tabs */}
        <div className="flex justify-center mb-12">
          <button className="px-6 py-3 bg-burgundy text-white font-bold rounded-l">Children's Books</button>
          <button className="px-6 py-3 bg-gray-300 text-gray-700 font-bold">Adult Books</button>
          <button className="px-6 py-3 bg-gray-300 text-gray-700 font-bold rounded-r">Journals</button>
        </div>
        
        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Florida Peppermint Book */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={floridaPeppermintCover} 
              alt="Florida Peppermint Goes To School" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-burgundy mb-2">Florida Peppermint Goes To School</h3>
              <p className="text-gray-600 mb-4">
                August 23rd was just an ordinary day for some, but for Florida Peppermint, this was the most exciting day of her entire life. It was the beginning of a new school year, and Florida would be going to school for the very first time.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Published: March 5, 2025</span>
                <Link to="/books/florida-peppermint" className="text-burgundy font-bold hover:text-gold transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          {/* I Know My Father's Voice Book */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={fathersVoiceCover} 
              alt="I Know My Father's Voice" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-burgundy mb-2">I Know My Father's Voice</h3>
              <p className="text-gray-600 mb-4">
                Journey along with Florida as she experiences adventure, joy, and a little fear. On this journey, Florida discovers that no matter what happens or where she may be, her father is always near. All she has to do is listen for his voice!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Published: 2024</span>
                <Link to="/books/fathers-voice" className="text-burgundy font-bold hover:text-gold transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          {/* Grandma's Lap Book */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={grandmasLapCover} 
              alt="Grandma's Lap" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-burgundy mb-2">Grandma's Lap</h3>
              <p className="text-gray-600 mb-4">
                A heartwarming children's book about the special bond between a grandmother and her grandchildren.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Published: 2024</span>
                <Link to="/books/grandmas-lap" className="text-burgundy font-bold hover:text-gold transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
