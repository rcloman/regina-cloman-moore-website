import React from 'react';

const ContactPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-burgundy mb-8 text-center">Contact Regina</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-lg mb-8 text-center">
            I'd love to hear from you! Whether you have questions about my books, 
            are interested in scheduling an event, or just want to connect, 
            please feel free to reach out using the form below.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-burgundy"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-burgundy"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-burgundy"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-burgundy"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full bg-burgundy text-white py-3 rounded font-bold hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-serif text-burgundy mb-4">Publisher Information</h2>
            <p className="mb-2">
              <strong>Publisher:</strong> Living Water Books Publishing
            </p>
            <p>
              For book orders and publishing inquiries, please contact Living Water Books Publishing directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
