"use client";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "../ui/swipperStyles.css";

const Calender = () => {
  return (
    <Swiper
      speed={500}
      modules={[Navigation]}
      spaceBetween={0}
      breakpoints={{
        320: { slidesPerView: 3, navigation: { enabled: false } },
        768: { slidesPerView: 4, navigation: { enabled: true } },
        1024: { slidesPerView: 4, navigation: { enabled: true } },
      }}
      navigation
      loop={false}
      className="w-[90%] h-20 md:h-24 lg:h-36 relative cursor-pointer p-1 mt-3 inset-shadow-sm inset-shadow-gray-300 z-100"
    >
      <SwiperSlide className="event-container relative flex items-center justify-center rounded-sm flex-nowrap">
        <div className="relative flex justify-center h-full BGCcomponent items-center scale-95 hover:scale-100 transition-transform duration-150">
          <div className="w-[1px] bg-white h-full"></div>
          <span className="text-white text-[8px] md:text-[12px] lg:text-[16px] text-center w-full">
            Oct 22
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Calender;
