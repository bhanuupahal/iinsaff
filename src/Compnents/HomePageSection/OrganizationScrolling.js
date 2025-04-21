import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import axios from "axios";
// import { baseUrl } from "../../utils/const";

const OrganizationScrolling = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEntries, setFilteredEntries] = useState([]);

  // useEffect(() => {
  //   const fetchEntries = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}getIinsafEntryForAll`);
  //       console.log(response.data);
  //       if (response.data.data) {
  //         setEntries(response.data.data);
  //         setFilteredEntries(response.data.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching entries:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchEntries();
  // }, []);

  const filterEntriesByRole = (role) => {
    const filtered = entries.filter(
      (entry) =>
        entry.role.toLowerCase().trim() === role.toLowerCase().trim() &&
        entry.status === "Approved"
    );
    return filtered;
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const searchResults = entries.filter(
      (entry) =>
        entry.status === "Approved" &&
        (entry.name.toLowerCase().includes(query.toLowerCase()) ||
          entry._id.toLowerCase().includes(query.toLowerCase()))
    );

    setFilteredEntries(searchResults);
  };

  const categories = [
    { name: "Doctor", role: "doctor" },
    { name: "Advocate", role: "advocate" },
    { name: "NGO", role: "ngo" },
    { name: "Partner", role: "partner" },
    { name: "Company", role: "company" },
    { name: "Organization", role: "organization" },
  ];

  return (
    <div className="relative w-full flex flex-col gap-4 overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3 ">
            <span className="text-red-500">ii</span>nsaf Organization
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Connect with our network of verified professionals, organizations, and service providers
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by name or ID..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-full 
                       focus:outline-none focus:border-blue-500 focus:ring-2 
                       focus:ring-blue-200 transition-all duration-300 
                       bg-white shadow-sm hover:shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilteredEntries([]);
                }}
                className="absolute right-4 text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Search Stats */}
          {searchQuery && (
            <div className="absolute -bottom-6 left-0 right-0 text-center">
              <span className="text-sm text-gray-500">
                {filteredEntries.length} result{filteredEntries.length !== 1 ? 's' : ''} found
              </span>
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          categories.map((category, index) => {
            const filteredByRole = filterEntriesByRole(category.role);

            if (filteredByRole.length === 0) return null;

            return (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-black text-center mb-6">
                  {category.name}s
                </h2>
                
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={6}
                  loop={true}
                  speed={5000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  style={{ transitionTimingFunction: 'linear !important' }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 3, spaceBetween: 15 },
                    768: { slidesPerView: 4, spaceBetween: 15 },
                    1024: { slidesPerView: 6, spaceBetween: 20 },
                  }}
                >
                  {filteredByRole.map((entry) => (
                    <SwiperSlide
                      key={entry._id}
                      className="text-center rounded-lg bg-white flex flex-col items-center justify-center p-4 h-[150px] border shadow-sm"
                    >
                      <img
                        src={entry.photoUrl || "https://via.placeholder.com/150"}
                        alt={entry.name}
                        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                      />
                      <span className="text-lg text-black">
                        {entry.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {entry.city}, {entry.state}
                      </span>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default OrganizationScrolling;