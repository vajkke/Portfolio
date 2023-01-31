import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>{slides[0]}</SwiperSlide>
        <SwiperSlide>{slides[1]}</SwiperSlide>
        <SwiperSlide>{slides[2]}</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
