import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

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
        <SwiperSlide>
          <h2>فكرة المنصة</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            perferendis similique quibusdam odit doloremque sapiente temporibus
            eligendi, ad natus ab saepe nemo reprehenderit. Unde blanditiis
            corporis delectus! Vitae minima reprehenderit commodi illum
            voluptate pariatur, iure laboriosam porro aperiam aspernatur, ut
            quidem necessitatibus, voluptatum amet explicabo incidunt magnam
            veniam! Assumenda praesentium at atque, laudantium possimus suscipit
            voluptate, ad quae esse repellendus nemo voluptatem numquam rem
            quasi quos, eveniet nesciunt voluptates adipisci repudiandae! Atque
            at provident cumque?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>اشمعنا تعلم معي وماذا ستقدم لك من مزايا ؟</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam id
            exercitationem soluta dolorem, consectetur doloribus officia illo?
            Magnam, non beatae quae eligendi exercitationem veniam repellat,
            quas, nihil consequuntur blanditiis aperiam. Aut hic ab aliquam,
            vero rem nam ad. Veniam, excepturi.
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default AboutUs;
