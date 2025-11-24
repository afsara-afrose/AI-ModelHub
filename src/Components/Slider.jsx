import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/ladyMLEng.jpg";
import img2 from "../assets/Image2.jpg";
import img3 from "../assets/image3.jpg";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[400px] object-cover"
            src={img1}
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[400px] object-cover"
            src={img2}
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[400px] object-cover"
            src={img3}
            alt=""
          />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
