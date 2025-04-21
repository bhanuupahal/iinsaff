import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const BrandScrolling = () => {
  const brands = [
    { id: 1, name: 'Brand 1' },
    { id: 2, name: 'Brand 2' },
    { id: 3, name: 'Brand 3' },
    { id: 4, name: 'Brand 4' },
    { id: 5, name: 'Brand 5' },
    { id: 6, name: 'Brand 6' },
    { id: 7, name: 'Brand 7' },
    { id: 8, name: 'Brand 8' },
    { id: 9, name: 'Brand 9' }
  ];

  return (
    <div className="relative w-full flex flex-col gap-4 overflow-hidden">
      {/* First Slider (Left to Right) */}
      <div className="w-full h-full mt-4">
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
          pagination={{ clickable: true }}
          className="mySwiper"
          style={{ transitionTimingFunction: 'linear !important' }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide
              key={brand.id}
              className="text-center font-bold rounded-lg bg-white flex flex-col items-center justify-center p-2 h-[100px] border shadow-sm overflow-hidden"
            >
              <span className="text-lg text-black whitespace-nowrap overflow-hidden text-ellipsis px-2 w-full">
                <span className='text-red-600'>II</span>NSAF
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Second Slider (Right to Left) */}
      <div className="w-full h-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={7}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          style={{
            direction: 'rtl',
            transitionTimingFunction: 'linear !important',
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 5, spaceBetween: 15 },
            1024: { slidesPerView: 7, spaceBetween: 20 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide
              key={brand.id}
              className="text-center font-bold rounded-lg bg-white flex flex-col items-center justify-center p-2 h-[100px] border shadow-sm overflow-hidden"
            >
              <span className="text-lg text-black whitespace-nowrap overflow-hidden text-ellipsis px-2 w-full">
                <span className='text-red-600'>II</span>NSAF
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandScrolling;
