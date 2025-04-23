import React from 'react';

const WebsiteOverview = () => {
  return (
    <div className="py-8 bg-gray-50"> {/* Reduced padding */}
      <div className="container mx-auto px-4 max-w-5xl"> {/* Added max-width */}
        {/* Section Header */}
        <div className="text-center mb-8"> {/* Reduced margin */}
          <h2 className="text-2xl md:text-3xl font-bold bg-black bg-clip-text text-transparent mb-2">
            Our Platforms
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-3 rounded-full"></div>
          <p className="text-black max-w-xl mx-auto text-sm">
            Explore our digital platforms dedicated to news and entertainment
          </p>
        </div>

        {/* Iframes Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Reduced gap */}
          {/* IINSAF News */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden"> {/* Smaller shadow and border radius */}
            <div className="p-4 bg-blue-500"> {/* Reduced padding */}
              <h3 className="text-3xl md:text-xl font-bold text-black mb-1"><span className='text-red-600'>ii</span>nsaf news</h3>
              <p className="text-blue-100 text-xs">Your trusted source for news and updates</p>
            </div>
            <div className="relative overflow-hidden bg-gray-100" style={{ height: '300px' }}> {/* Reduced height */}
              <iframe
                src="https://www.iinsaf.news/"
                title="IINSAF News"
                className="w-full h-full"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <a 
                  href="https://www.iinsaf.news/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-1.5 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* IINSAFLIX */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-blue-500">
              <h3 className="text-3xl md:text-xl font-bold text-black mb-1"><span className='text-red-600'>ii</span>nsaflix</h3>
              <p className="text-white text-xs">Your entertainment destination</p>
            </div>
            <div className="relative overflow-hidden bg-gray-100" style={{ height: '300px' }}>
              <iframe
                src="https://iinsaflix.com/"
                title="IINSAFLIX"
                className="w-full h-full"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <a 
                  href="https://iinsaflix.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-1.5 text-sm bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteOverview;