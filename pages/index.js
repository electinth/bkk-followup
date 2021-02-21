import Layout from "layouts/layout";
import Intro from "components/Home/Intro";
import Main from "components/Home/Main";
import React, { useState, useEffect } from "react";
import SwiperCore, { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Mousewheel]);

export default function Home() {
  const swiper_options = {
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1,
    speed: 500,
    onSlideChange: () => console.log("slide change"),
    onSwiper: (swiper) => console.log(swiper),
  };

  return (
    <Layout>
      <Intro />

      <Swiper
        {...swiper_options}
        className="page-swiper inset-0 z-20"
        style={{ position: "absolute !important" }}
      >
        <SwiperSlide>
          <Main />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Layout>
  );
}
