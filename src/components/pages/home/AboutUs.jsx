import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css";

import { aboutPlatform } from "./data";
import { Container, Stack } from "@mui/material";
import Card from "../../Card";
import mohamedNasr from "../../../assets/img1.png";
import mohamedNasrCover from "../../../assets/img2.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { teachersData } from "../../teachers";

function AboutUs() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="about">
      {/* <h2>Learn With Me</h2> */}
      {/* 
      <h3>فكرة المنصة</h3>
      <i /> */}

      {aboutPlatform.map((item, index) => {
        return (
          <div
            id={item.id}
            key={index}
            className="content"
            style={{
              backdropFilter: `${
                item.id === "teachers" ? "brightness(100%)" : "brightness(10%)"
              }`,
              padding: `${item.id === "teachers" ? "0px 0 50px 0" : "30px 0"}`,
            }}
          >
            <Container maxWidth={"xl"}>
              <h2>{item.title}</h2>

              <i />

              {item.id === "teachers" && (
                <Swiper
                  onSwiper={setSwiperRef}
                  slidesPerView={4}
                  centeredSlides={false}
                  spaceBetween={20}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {teachersData.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Card
                          bg={item.imgCvr}
                          bgPos={item.cvrPos}
                          img={item.img}
                          imgTitle={item.name}
                          imgWidth={item.imgWidth}
                          imgLeft={item.imgLeft}
                          h4={item.name}
                          p={item.title}
                          waLink={item.waLink}
                          fbLink={item.fbLink}
                          tgLink={item.tgLink}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                // <Stack direction={"row"} alignItems={"center"} gap={2}>
                //   <Card
                //     bg={mohamedNasrCover}
                //     bgPos="center center"
                //     img={mohamedNasr}
                //     imgTitle="Mohamed Nasr"
                //     imgWidth="100%"
                //     imgLeft="-13px"
                //     h4="Mohamed Nasr"
                //     p="BackEnd Developer"
                //     waLink="https://wa.me/+201009300000"
                //   />
                // </Stack>
              )}

              <p>{item.content}</p>
            </Container>
          </div>
        );
      })}
    </section>
  );
}

export default AboutUs;
