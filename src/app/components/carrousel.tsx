"use client";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../ui/swipperStyles.css";
import Image from "next/image";

const Carrousel = () => {
  return (
    <Swiper
      speed={1000}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      className="relative w-full md:w-[90%] h-[50vh] flex justify-center md:mt-1 md:rounded-xl select-none"
    >
      <SwiperSlide>
        <Image
          src="\1.png"
          width={0}
          height={0}
          alt={""}
          layout="responsive/>"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="\2.png"
          width={0}
          height={0}
          alt={""}
          layout="responsive/>"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="\3.png"
          width={0}
          height={0}
          alt={""}
          layout="responsive/>"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="\4.png"
          width={0}
          height={0}
          alt={""}
          layout="responsive/>"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrousel;
