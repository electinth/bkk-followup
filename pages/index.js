import Layout from "layouts/layout";
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
import IntroDashboard from "components/Home/IntroDashboard";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";
import SwiperCore, { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow_up_black from "assets/images/arrow_up_black.svg";
import arrow_down_black from "assets/images/arrow_down_black.svg";
import config from "jsconfig.json";
import Head from "next/head";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

SwiperCore.use([Mousewheel]);

export default function Home() {
  const router = useRouter();
  const [active_index, setActiveIndex] = useState(0);
  const [swiper_ref, setSwiperRef] = useState({});
  const swiper_options = {
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1,
    speed: 500,
    initialSlide: 0,
    onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex),
    onSwiper: (swiper) => {
      setSwiperRef(swiper);
      initSlideTo(swiper);
    },
  };

  useEffect(() => {
    initSlideTo(swiper_ref);
  }, [router.query.slide]);

  const initSlideTo = (swiper) => {
    if (swiper.slideTo && router.query.slide) {
      swiper.slideTo(router.query.slide);
    }
  };

  const MetaHead = () => {
    let og_image = config.og_main;
    // if (router.query.slide == 1) og_image = config.og_budget;
    // if (router.query.slide == 8) og_image = config.og_responsibility;

    return (
      <Head>
        <title>{config.title}</title>

        <meta name="description" content={config.description}></meta>

        <meta property="og:title" content={config.title} />

        <meta property="og:description" content={config.description} />

        <meta property="og:type" content="website" />

        <meta property="og:image" content={config.web_url + og_image} />

        <meta property="og:url" content={config.web_url} />

        <meta name="twitter:title" content={config.title} />

        <meta name="twitter:description" content={config.description} />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:image:src" content={config.web_url + og_image} />

        <meta property="twitter:url" content={config.web_url} />
      </Head>
    );
  };

  const Navigation = () => {
    return (
      <CSSTransition
        in={active_index !== 0}
        timeout={300}
        unmountOnExit
        classNames="fade"
      >
        <div className="fixed inset-y-0 z-20 flex flex-col justify-center pointer-events-none swiper-btn-wrap right-5">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl cursor-pointer pointer-events-auto swiper-btn-prev bg-white-default"
            onClick={() => swiper_ref.slidePrev()}
          >
            <img
              width={40}
              height={40}
              src={arrow_up_black}
              alt={arrow_up_black}
            />
          </div>

          {swiper_ref && !swiper_ref.isEnd ? (
            <div
              className="flex items-center justify-center w-12 h-12 mt-4 rounded-full shadow-xl cursor-pointer pointer-events-auto swiper-btn-next bg-white-default"
              onClick={() => swiper_ref.slideNext()}
            >
              <img
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
      {/* <span className="fixed z-50 text-blue-default">{active_index}</span> */}

      <MetaHead />

      <Swiper {...swiper_options} className="h-full page-swiper">
        <SwiperSlide>
          <Main swiper_ref={swiper_ref} />
        </SwiperSlide>

        {/* BudgetPageOne */}
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        {isMobileOnly ? <SwiperSlide></SwiperSlide> : null}

        {/* BudgetPageTwo */}
        <SwiperSlide></SwiperSlide>
        {isMobileOnly ? null : <SwiperSlide></SwiperSlide>}

        {/* BudgetPageThree */}
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>

        {/* BudgetPageFour */}
        <SwiperSlide></SwiperSlide>
        {isMobile ? <SwiperSlide></SwiperSlide> : null}

        <SwiperSlide>
          <ResponsibilityPageOne />
        </SwiperSlide>

        {/* ResponsibilityPageTwo */}
        <SwiperSlide></SwiperSlide>
        {isMobileOnly ? <SwiperSlide></SwiperSlide> : null}

        {/* ResponsibilityPageThree */}
        <SwiperSlide></SwiperSlide>

        {/* ResponsibilityPageFour */}
        <SwiperSlide></SwiperSlide>
        {isMobileOnly ? <SwiperSlide></SwiperSlide> : null}

        {/* CitizenPageOne */}
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        {isMobileOnly ? <SwiperSlide></SwiperSlide> : null}

        {/* IntroDashboard */}
        <SwiperSlide></SwiperSlide>
      </Swiper>

      {isMobileOnly ? null : <Navigation />}

      <CSSTransition
        in={(isMobileOnly ? [1, 2, 3] : [1, 2]).includes(active_index)}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <BudgetPageOne active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={(isMobileOnly ? [4] : [3, 4]).includes(active_index)}
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
        in={(isMobile ? [7, 8] : [7]).includes(active_index)}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <BudgetPageFour active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={(isMobileOnly ? [10, 11] : isTablet ? [10] : [9]).includes(
          active_index
        )}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <ResponsibilityPageTwo active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={(isMobileOnly ? [12] : isTablet ? [11] : [10]).includes(
          active_index
        )}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <ResponsibilityPageThree />
      </CSSTransition>

      <CSSTransition
        in={(isMobileOnly ? [13, 14] : isTablet ? [12] : [11]).includes(
          active_index
        )}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <ResponsibilityPageFour active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={(isMobileOnly
          ? [15, 16, 17]
          : isTablet
          ? [13, 14]
          : [12, 13]
        ).includes(active_index)}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <CitizenPageOne active_index={active_index} />
      </CSSTransition>

      <CSSTransition
        in={(isMobileOnly ? [18] : isTablet ? [15] : [14]).includes(
          active_index
        )}
        timeout={400}
        unmountOnExit
        classNames="fade"
      >
        <IntroDashboard />
      </CSSTransition>
    </Layout>
  );
}
