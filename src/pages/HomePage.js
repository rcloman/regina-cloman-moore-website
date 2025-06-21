import React from 'react';
import { Link } from 'react-router-dom';
import authorImage from '../assets/Reginapic2updated.904b3b774ee58a83641d.jpg;
import floridaPeppermintCover from '../assets/florida_peppermint_book_cover.jpeg';
import grandmasLapCover from '../assets/Grandma\'s Lap.JPG';
import fathersVoiceCover from '../assets/I know My Father\'s Voice.jpg';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-burgundy to-cream">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-serif mb-4">Regina Cloman-Moore</h1>
              <p className="text-xl mb-6">Author</p>
              <p className="mb-8">Inspiring readers of all ages through stories that encourage, uplift, and entertain.</p>
              <div className="flex space-x-4">
                <Link to="/books" className="bg-white text-burgundy px-6 py-3 rounded font-bold hover:bg-opacity-90 transition-colors">
                  Explore Books
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-burgundy transition-colors">
                  About Regina
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={authorImage} 
                alt="Regina Cloman-Moore" 
                className="rounded-full border-4 border-white shadow-xl max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Adult Books */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-serif text-burgundy mb-6">Books for Adults</h2>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {/* Adult books coming soon message */}
                <div className="h-64 rounded-md overflow-hidden bg-burgundy flex items-center justify-center text-white p-4 text-center">
                  <p className="text-xl font-serif">Coming Soon: Adult Fiction and Inspirational Works</p>
                </div>
              </div>
              <Link to="/books" className="block w-full text-center bg-burgundy text-white py-3 rounded font-bold hover:bg-opacity-90 transition-colors">
                Explore Regina's Books for Adults
              </Link>
            </div>
            
            {/* Children's Books */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-serif text-burgundy mb-6">Books for Children</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Children's book covers */}
                <div className="h-64 rounded-md overflow-hidden">
                  <img 
                    src={floridaPeppermintCover} 
                    alt="Florida Peppermint Goes To School" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-md overflow-hidden">
                  <img 
                    src={fathersVoiceCover} 
                    alt="I Know My Father's Voice" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <Link to="/books" className="block w-full text-center bg-burgundy text-white py-3 rounded font-bold hover:bg-opacity-90 transition-colors">
                Explore Regina's Books for Children
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-burgundy mb-6">About Regina</h2>
            <p className="text-lg mb-8">
              Regina Cloman Moore resides in Little Rock, Arkansas with her family. 
              She worked for the Little Rock School District for over 20 years. She is a mother and grandmother who enjoys 
              encouraging people from every walk of life and writing.
            </p>
            <Link to="/about" className="inline-block bg-burgundy text-white px-8 py-3 rounded font-bold hover:bg-opacity-90 transition-colors">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 bg-burgundy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">Join My Newsletter</h2>
            <p className="text-lg mb-8">
              Subscribe to receive updates on new releases, events, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 w-full rounded-l text-gray-800 mb-2 sm:mb-0"
              />
              <button className="bg-gold text-burgundy px-6 py-3 rounded-r font-bold hover:bg-opacity-90 transition-colors sm:w-auto w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
