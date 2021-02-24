import Layout from "layouts/layout";
import Image from "next/image";
import Main from "components/Home/Main";
import BudgetPageOne from "components/Home/BudgetPageOne";
import BudgetPageTwo from "components/Home/BudgetPageTwo";
import BudgetPageThree from "components/Home/BudgetPageThree";
import BudgetPageFour from "components/Home/BudgetPageFour";
import ResponsibilityPageOne from "components/Home/ResponsibilityPageOne";
import ResponsibilityPageTwo from "components/Home/ResponsibilityPageTwo";
import ResponsibilityPageThree from "components/Home/ResponsibilityPageThree";
import ResponsibilityPageFour from "components/Home/ResponsibilityPageFour";
import CitizenPageOne from "components/Home/CitizenPageOne";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import SwiperCore, { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow_up_black from "assets/images/arrow_up_black.svg";
import arrow_down_black from "assets/images/arrow_down_black.svg";

SwiperCore.use([Mousewheel]);

export default function Home() {
  const [active_index, setActiveIndex] = useState(0);
  const [swiper_ref, setSwiperRef] = useState({});
  const swiper_options = {
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1,
    speed: 500,
    initialSlide: 0,
    onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex),
  };

  useEffect(() => {
    const swiper = document.querySelector(".swiper-container").swiper;
    setSwiperRef(swiper);
  }, []);

  const navigation = () => {
    return (
      <CSSTransition
        in={active_index !== 0}
        timeout={300}
        unmountOnExit
        classNames="fade"
      >
        <div className="swiper-btn-wrap fixed inset-y-0 right-5 z-20 flex flex-col justify-center pointer-events-none">
          <div
            className="swiper-btn-prev bg-white-default w-12 h-12 rounded-full flex items-center justify-center shadow-xl pointer-events-auto cursor-pointer"
            onClick={() => swiper_ref.slidePrev()}
          >
            <Image
              width={40}
              height={40}
              src={arrow_up_black}
              alt={arrow_up_black}
            />
          </div>

          {!swiper_ref.isEnd ? (
            <div
              className="swiper-btn-next bg-white-default w-12 h-12 rounded-full flex items-center justify-center shadow-xl mt-4 pointer-events-auto cursor-pointer"
              onClick={() => swiper_ref.slideNext()}
            >
              <Image
                width={40}
                height={40}
                src={arrow_down_black}
                alt={arrow_down_black}
              />
            </div>
          ) : null}
        </div>
      </CSSTransition>
    );
  };

  return (
    <Layout>
      <Swiper {...swiper_options} className="page-swiper h-full">
        <SwiperSlide>
          <Main swiper_ref={swiper_ref} />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>
          <BudgetPageFour />
        </SwiperSlide>
        <SwiperSlide>
          <ResponsibilityPageOne />
        </SwiperSlide>
        <SwiperSlide>
          <ResponsibilityPageTwo />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>
          <ResponsibilityPageFour />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

      {navigation()}

      <CSSTransition
        in={[1, 2].includes(active_index)}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <BudgetPageOne active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={[3, 4].includes(active_index)}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <BudgetPageTwo active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={[5, 6].includes(active_index)}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <BudgetPageThree active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={active_index === 10}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <ResponsibilityPageThree />
      </CSSTransition>

      <CSSTransition
        in={[12, 13].includes(active_index)}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <CitizenPageOne active_index={active_index} />
      </CSSTransition>
    </Layout>
  );
}
