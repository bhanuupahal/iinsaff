import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OwerClientSlider = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://via.placeholder.com/1920x1080"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  // Use placeholder images instead of actual imports
  const companies = [
    "https://via.placeholder.com/200x100?text=MeharTech",
    "https://via.placeholder.com/200x100?text=IInfra",
    "https://via.placeholder.com/200x100?text=GJU",
    "https://via.placeholder.com/200x100?text=IINSAF",
  ];

  const backgrounds = [
    "https://via.placeholder.com/1920x1080?text=Background1",
    "https://via.placeholder.com/1920x1080?text=Background2",
    "https://via.placeholder.com/1920x1080?text=Background3",
    "https://via.placeholder.com/1920x1080?text=Background4",
  ];

  const testimonials = [
    {
      name: "John Doe",
      profession: "Software Engineer",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollitia fugit nihil, aperiam maxime minima consequuntur!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      background: backgrounds[0],
      company: "Tech Solutions Inc.",
    },
    {
      name: "Jane Smith",
      profession: "Product Manager",
      rating: 5,
      text: "Exceptional service and outstanding results. Would highly recommend!",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      background: backgrounds[1],
      company: "Innovation Labs",
    },
    {
      name: "Mike Johnson",
      profession: "CEO",
      rating: 5,
      text: "The team delivered beyond our expectations. Very professional and efficient.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      background: backgrounds[2],
      company: "Global Systems",
    },
    {
      name: "Sarah Williams",
      profession: "Marketing Director",
      rating: 5,
      text: "Great experience working with the team. They understand client needs perfectly.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      background: backgrounds[3],
      company: "Digital Marketing Pro",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    fade: true,
    beforeChange: (current, next) => {
      setBackgroundImage(testimonials[next].background);
      setActiveIndex(next);
    },
    dotsClass: "slick-dots custom-dots",
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-500 ${
          i === activeIndex
            ? "bg-gradient-to-r from-blue-500 to-purple-500 w-10"
            : "bg-gray-400/50"
        }`}
      />
    ),
  };

  const renderPartners = () => (
    <div className="flex flex-wrap items-center justify-center gap-12">
      {companies.map((company, index) => (
        <div key={index} className="group relative p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl group-hover:blur-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
          <img
            className="h-24 relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            src={company}
            alt={`Partner ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-blue-800 via-indigo-900 to-purple-900 relative">
      {/* Enhanced animated background pattern with improved opacity */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                        radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0),
                        linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%),
                        linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)
                    `,
            backgroundSize: "40px 40px, 60px 60px, 60px 60px",
          }}
        ></div>
      </div>

      <div
        id="reviews"
        className="relative min-h-screen flex items-center py-32"
      >
        {/* Enhanced dynamic background with improved overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            animation: "kenburns 20s infinite alternate",
            transform: "translateZ(0)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800/80 via-indigo-900/70 to-purple-900/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Enhanced section header */}
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block relative">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50"></span>
              <span className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase px-6 py-3 rounded-full border border-blue-500/20 backdrop-blur-xl">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-7xl font-black mt-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
              Success Stories
            </h2>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their transformative
              experiences
            </p>
          </div>

          {/* Enhanced testimonial slider */}
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="focus:outline-none px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="relative group">
                    {/* Enhanced testimonial card */}
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 rounded-3xl border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                      {/* Enhanced quote icon */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-200 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform-gpu transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                          </svg>
                        </div>
                      </div>

                      {/* Enhanced testimonial content */}
                      <div className="text-center mb-10">
                        <p className="text-2xl italic text-gray-100 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Enhanced author info Section */}
                      <div className="flex flex-col items-center relative">
                        {/* Decorative background elements */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl"></div>
                        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl rotate-3 blur-xl"></div>

                        {/* Profile image container */}
                        <div className="relative mb-6 group">
                          {/* Animated glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

                          {/* Profile image */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700 rounded-full animate-spin-slow"></div>
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-28 h-28 rounded-full border-4 border-white/30 object-cover relative z-10 transform transition-all duration-500 group-hover:scale-105 group-hover:border-white/50 p-1"
                            />
                          </div>
                        </div>

                        {/* Author details with enhanced styling */}
                        <div className="relative z-10 text-center space-y-3">
                          <h4 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-1 transform transition-all duration-300 hover:scale-105">
                            {testimonial.name}
                          </h4>

                          <div className="space-y-2">
                            <p className="text-blue-300 font-medium text-lg tracking-wide">
                              {testimonial.profession}
                            </p>
                            <p className="text-gray-400 font-medium">
                              {testimonial.company}
                            </p>
                          </div>

                          {/* Enhanced rating with animation */}
                          <div className="flex items-center justify-center gap-2 mt-4">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer
                                      ${
                                      i <
                                      testimonial.rating
                                      ? "animate-pulse-subtle"
                                      : ""
                                     } 
                                        ${
                                        i < 
                                        testimonial.rating
                                        ? "text-yellow-400"
                                        : "text-gray-600"
                                        }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Enhanced partners section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase">
                Trusted Partners
              </span>
              <h3 className="text-4xl font-bold mt-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Companies That Trust Us
              </h3>
            </div>
            {renderPartners()}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-1%, -1%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default OwerClientSlider;
