import React, { useState } from 'react';
import { FaEye, FaCheck, FaTimes, FaFilter, FaCalendar, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const NewAdvertise = () => {
  const [advertisements, setAdvertisements] = useState([
    {
      id: 1,
      title: "Breaking News Coverage",
      description: "Looking for reporters to cover local breaking news event",
      budget: "₹5000",
      location: "Mumbai, Maharashtra",
      postedDate: "2024-02-15",
      advertiser: "Media House News",
      category: "News Coverage",
      status: "New",
      requirements: "Experience in live reporting, own camera equipment",
      deadline: "2024-02-20"
    },
    {
      id: 2,
      title: "Event Photography",
      description: "Need professional photographer for corporate event",
      budget: "₹8000",
      location: "Delhi, NCR",
      postedDate: "2024-02-14",
      advertiser: "Corporate Events Ltd",
      category: "Photography",
      status: "New",
      requirements: "DSLR camera, 5+ years experience",
      deadline: "2024-02-22"
    },
    // Add more sample advertisements as needed
  ]);

  const [filters, setFilters] = useState({
    category: '',
    location: '',
    budget: ''
  });

  const handleApply = (adId) => {
    // Handle apply logic
    console.log(`Applied for advertisement ${adId}`);
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">New Advertisements</h1>
        <p className="text-gray-600">Browse and apply for new advertising opportunities</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center">
            <FaFilter className="text-gray-400 mr-2" />
            <span className="text-gray-700 font-medium">Filters:</span>
          </div>
          
          <select
            name="category"
            value={filters.category}
            onChange={handleFilter}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="news">News Coverage</option>
            <option value="photography">Photography</option>
            <option value="video">Video Production</option>
            <option value="social">Social Media</option>
          </select>

          <select
            name="location"
            value={filters.location}
            onChange={handleFilter}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
          </select>

          <select
            name="budget"
            value={filters.budget}
            onChange={handleFilter}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Budgets</option>
            <option value="0-5000">₹0 - ₹5,000</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000+">₹10,000+</option>
          </select>
        </div>
      </div>

      {/* Advertisement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advertisements.map(ad => (
          <div key={ad.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
              <h3 className="text-lg font-semibold text-white">{ad.title}</h3>
              <div className="flex items-center text-blue-100 text-sm mt-1">
                <FaUser className="mr-1" />
                <span>{ad.advertiser}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <p className="text-gray-600 mb-4">{ad.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{ad.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendar className="mr-2" />
                  <span>Posted: {ad.postedDate}</span>
                </div>
                <div className="font-semibold text-gray-800">
                  Budget: {ad.budget}
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Requirements:</h4>
                <p className="text-gray-600 text-sm">{ad.requirements}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Deadline: {ad.deadline}
                </span>
                <button
                  onClick={() => handleApply(ad.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                >
                  <FaCheck className="mr-2" />
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {advertisements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No advertisements found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default NewAdvertise;