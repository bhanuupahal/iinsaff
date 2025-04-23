import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const OwerClientSlider = () => {
    const [backgroundImage, setBackgroundImage] = useState('/CompanyImages/iinfra_back.webp');
    const [activeIndex, setActiveIndex] = useState(0);

    // Use placeholder images instead of actual imports
    const companies = [
        '/CompanyImages/mehartech.png',
        '/CompanyImages/iinfra icon.png',
        '/CompanyImages/gju.png',
        '/CompanyImages/iinsaf blood logo.png'
    ];

    const backgrounds = [
        '/CompanyImages/iifra_back.webp',
        '/CompanyImages/meharetech_back.webp',
        '/CompanyImages/gju_back.webp',
        '/CompanyImages/blood banner.jpg'
    ];

    const testimonials = [
        {
            name: "John Doe",
            profession: "Software Engineer",
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollitia fugit nihil, aperiam maxime minima consequuntur!",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            background: backgrounds[0],
            company: "Tech Solutions Inc."
        },
        {
            name: "Jane Smith",
            profession: "Product Manager",
            rating: 5,
            text: "Exceptional service and outstanding results. Would highly recommend!",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            background: backgrounds[1],
            company: "Innovation Labs"
        },
        {
            name: "Mike Johnson",
            profession: "CEO",
            rating: 5,
            text: "The team delivered beyond our expectations. Very professional and efficient.",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            background: backgrounds[2],
            company: "Global Systems"
        },
        {
            name: "Sarah Williams",
            profession: "Marketing Director",
            rating: 5,
            text: "Great experience working with the team. They understand client needs perfectly.",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            background: backgrounds[3],
            company: "Digital Marketing Pro"
        }
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
        dotsClass: "slick-dots custom-dots !bottom-[-3rem]", // Added bottom spacing
        customPaging: i => (
            <div className={`w-3 h-3 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-10' : 'bg-gray-400/50'}`} />
        ),
    };

    const renderPartners = () => (
        <div className="flex flex-wrap items-center justify-center gap-12">
            {companies.map((company, index) => (
                <div key={index} className="group relative p-6">
                    {/* Added background container for logos */}
                    <div className="backdrop-blur-sm rounded-xl p-4 transition-all duration-300">
                        <div className="bg-white/10 rounded-3xl p-4 hover:bg-gradient-to-b hover:from-blue-800 hover:via-indigo-900 hover:to-purple-900 shadow-lg hover:shadow-[0_0_25px_10px_rgba(59,130,246,0.4)] transition-all duration-300">
                            <img 
                                className="h-24 w-auto relative z-10 transform transition-all duration-500 group-hover:scale-110"
                                src={company} 
                                alt={`Partner ${index + 1}`}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="relative">
            {/* Testimonials Section */}
            <div id='reviews' className="relative min-h-screen py-32">
                {/* Background image with overlay */}
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center transition-all duration-1000"
                    style={{ 
                        backgroundImage: `url('${backgroundImage}')`
                    }}
                >
                    {/* Added gray overlay */}
                    <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase">
                            Testimonials
                        </span>
                        <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
                            Hear from our satisfied clients about their transformative experiences
                        </p>
                    </div>

                    {/* Added padding bottom to create space for dots */}
                    <div className="pb-16">
                        {/* Testimonial Slider */}
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="focus:outline-none px-6">
                                    <div className="max-w-4xl mx-auto h-[500px]"> {/* Added fixed height */}
                                        <div className="relative group h-full"> {/* Added h-full */}
                                            {/* Enhanced testimonial card */}
                                            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 rounded-3xl border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] h-full flex flex-col justify-center"> {/* Added h-full and flex properties */}
                                                {/* Profile image container */}
                                                <div className="relative mb-6 group flex justify-center">
                                                    {/* Animated glow effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                                                    
                                                    {/* Profile image */}
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="w-28 h-28 rounded-full border-4 border-white/30 object-cover relative z-10 transform transition-all duration-500 group-hover:scale-105 group-hover:border-white/50 p-1"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Content container */}
                                                <div className="flex flex-col items-center justify-center flex-grow">
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

                                                        {/* Testimonial text */}
                                                        <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
                                                            {testimonial.text}
                                                        </p>

                                                        {/* Rating stars */}
                                                        <div className="flex items-center justify-center gap-2 mt-4">
                                                            {[...Array(5)].map((_, i) => (
                                                                <span 
                                                                    key={i} 
                                                                    className={`text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer
                                                                        ${i < testimonial.rating ? 'animate-pulse-subtle' : ''} 
                                                                        ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
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
                    </div>
                </div>
            </div>

            {/* Partners Section with enhanced styling */}
            <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase">
                            Trusted Partners
                        </span>
                        <h3 className="text-4xl font-bold mt-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                            Companies That Trust Us
                        </h3>
                    </div>
                    
                    {/* Desktop view */}
                    <div className="hidden md:block">
                        {renderPartners()}
                    </div>

                    {/* Mobile view with Swiper */}
                    <div className="block md:hidden">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            speed={800}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="w-full"
                        >
                            {companies.map((company, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group relative p-6">
                                        <div className="backdrop-blur-sm rounded-xl p-4 transition-all duration-300">
                                            <div className="bg-white/10 rounded-3xl p-4 hover:bg-gradient-to-b hover:from-blue-800 hover:via-indigo-900 hover:to-purple-900 shadow-lg hover:shadow-[0_0_25px_10px_rgba(59,130,246,0.4)] transition-all duration-300">
                                                <img 
                                                    className="h-24 w-auto mx-auto relative z-10 transform transition-all duration-500 group-hover:scale-110"
                                                    src={company} 
                                                    alt={`Partner ${index + 1}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes pulse-subtle {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.9; }
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

