import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, HashNavigation } from "swiper";

const Slider = ({ slides }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide>{slides[0]}</SwiperSlide>
        <SwiperSlide>{slides[1]}</SwiperSlide>
        <SwiperSlide>{slides[2]}</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
