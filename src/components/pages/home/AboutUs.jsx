import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { aboutPlatform } from "./data";

function AboutUs() {
  return (
    <section className="about">
      {/* <h2>Learn With Me</h2> */}
      {/* 
      <h3>فكرة المنصة</h3>
      <i /> */}

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {aboutPlatform.map((item, index) => {
          return (
            <SwiperSlide>
              <h2>{item.title}</h2>

              <i />

              <p>{item.content}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default AboutUs;
