import React, { useState } from "react";
import Link from "next/link";
import elect_logo from "assets/images/elect_logo.svg";
import map_logo from "assets/images/map_logo.svg";
import stb_logo from "assets/images/stb_logo.svg";
import cu_thai_logo from "assets/images/cu_thai_logo.svg";
import hamburger from "assets/images/hamburger.svg";
import arrow_right_white from "assets/images/arrow_right_white.svg";
import close from "assets/images/close.svg";
import p_icon from "assets/images/p_icon.svg";
import fb_icon from "assets/images/fb_icon.svg";
import twitter_icon from "assets/images/twitter_icon.svg";
import { CSSTransition } from "react-transition-group";
import { isMobile } from "react-device-detect";

export default function Header() {
  const [show_modal, showModal] = useState(false);

  return (
    <div
      id="header"
      className="sticky z-20 flex items-center justify-between px-3 shadow-xl bg-white-default lg:px-5"
      style={{ height: "60px" }}
    >
      <div className="flex items-center left">
        <a
          href="https://elect.in.th/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <img width={isMobile ? 94 : 124} src={elect_logo} alt={elect_logo} />
        </a>

        <img src={map_logo} alt={map_logo} className="hidden mr-2 lg:block" />

        <h5 className="hidden d5 lg:block">
          BKK<span className="text-green-default">FOLLOW-UP</span>
        </h5>
      </div>

      <div className="flex items-center right">
        <div className="hidden mr-4 d5 lg:block" style={{ fontSize: "16px" }}>
          In collaboration with
        </div>

        <img src={stb_logo} alt={stb_logo} className="hidden mr-3 lg:block" />

        <img
          src={cu_thai_logo}
          alt={cu_thai_logo}
          className="hidden mr-8 lg:block"
        />

        <img
          src={hamburger}
          alt={hamburger}
          className="cursor-pointer"
          onClick={() => showModal(!show_modal)}
        />
      </div>

      <CSSTransition
        in={show_modal}
        timeout={400}
        unmountOnExit
        classNames="slide"
      >
        <div
          className="fixed right-0 max-w-screen-lg overflow-y-auto shadow-xl modal bg-white-default"
          style={{
            top: isMobile ? "0" : "60px",
            bottom: isMobile ? "0" : "unset",
            maxHeight: isMobile ? "100%" : "calc(100vh - 60px)",
          }}
        >
          <div
            className="flex items-center justify-between px-3 head bg-green-default lg:bg-white-default"
            style={{ height: "60px" }}
          >
            <h3 className="hidden d3 lg:block">MENU</h3>

            <a
              href="https://elect.in.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mr-2 lg:hidden"
            >
              <img
                width={isMobile ? 94 : 124}
                src={elect_logo}
                alt={elect_logo}
              />
            </a>

            <img
              width={isMobile ? 30 : 40}
              src={close}
              alt={close}
              className="cursor-pointer"
              onClick={() => showModal(!show_modal)}
            />
          </div>

          <div className="p-3 content">
            <div className="flex items-center justify-center">
              <img
                src={map_logo}
                alt={map_logo}
                className="block mr-2 lg:hidden"
              />

              <h4 className="block d4 lg:hidden">
                BKK<span className="text-green-default">FOLLOW-UP</span>
              </h4>
            </div>

            <hr className="block my-4 lg:hidden" />

            <h5 className="block mb-4 text-center d5 lg:hidden">MENU</h5>

            <div className="z-30 grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-3">
              <Link href={`/?slide=${isMobile ? 18 : 14}`}>
                <div
                  className="flex items-center justify-between p-3 rounded-md cursor-pointer explore-map bg-black-default lg:p-6"
                  onClick={() => showModal(false)}
                >
                  <div className="hidden text-white-default lg:block">
                    <h3 className="d3">EXPLORE MAP</h3>

                    <h4 className="d4">
                      สำรวจแผนที่ตามประเด็น ที่กวนใจชาว กทม.
                    </h4>
                  </div>

                  <div className="block text-white-default lg:hidden">
                    <h5 className="d5">EXPLORE MAP</h5>

                    <h5 className="d5">สำรวจแผนที่ตามประเด็น</h5>
                  </div>

                  <img
                    src={arrow_right_white}
                    alt={arrow_right_white}
                    className="w-16 lg:w-18 2xl:w-24"
                  />
                </div>
              </Link>

              <div className="right">
                <Link href="/?slide=1">
                  <div
                    className="flex items-center justify-between p-3 rounded-md cursor-pointer lg:p-6 budget bg-green-default"
                    onClick={() => showModal(false)}
                  >
                    <h5 className="d5 text-white-default">
                      สำรวจดูงบประมาณกทม. ย้อนหลัง 8 ปี
                    </h5>

                    <img
                      src={arrow_right_white}
                      alt={arrow_right_white}
                      className="w-16 lg:w-18 2xl:w-24"
                    />
                  </div>
                </Link>

                <Link href={`/?slide=${isMobile ? 9 : 8}`}>
                  <div
                    className="flex items-center justify-between p-3 mt-1 rounded-md cursor-pointer lg:p-6 lg:mt-3 budget bg-blue-default"
                    onClick={() => showModal(false)}
                  >
                    <h5 className="d5 text-white-default">
                      กทม. มีหน้าที่ทำอะไร ?
                    </h5>

                    <img
                      src={arrow_right_white}
                      alt={arrow_right_white}
                      className="w-16 lg:w-18 2xl:w-24"
                    />
                  </div>
                </Link>

                <Link href={`/?slide=${isMobile ? 15 : 13}`}>
                  <div
                    className="flex items-center justify-between p-3 mt-1 rounded-md cursor-pointer lg:p-6 lg:mt-3 budget bg-pink-default"
                    onClick={() => showModal(false)}
                  >
                    <h5 className="d5 text-white-default">
                      ชาวกทม. มีส่วนร่วม อย่างไรได้บ้าง
                    </h5>

                    <img
                      src={arrow_right_white}
                      alt={arrow_right_white}
                      className="w-16 lg:w-18 2xl:w-24"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <hr className="block my-6 lg:hidden" />

            <div className="z-30 grid grid-cols-1 gap-1 mt-1 lg:grid-cols-2 lg:gap-3 lg:mt-3">
              <div className="p-0 border-0 rounded-md lg:border lg:p-3">
                <h5 className="mb-3 text-center d5 lg:text-left">
                  อ่านบทความเพิ่มเติม
                </h5>

                <ul>
                  <li>
                    <a
                      href="https://elect.in.th/bkk-admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start"
                    >
                      <img
                        width={30}
                        height={30}
                        src={p_icon}
                        alt={p_icon}
                        className="flex-none"
                      />

                      <h5 className="ml-2 underline">
                        (เกือบจะมี)เลือกตั้งกรุงเทพฯ: เข้าใจการบริหาร
                        ราชการของกรุงเทพฯก่อนที่จะฝันถึงการเลือกตั้ง
                      </h5>
                    </a>
                  </li>

                  <li className="mt-2">
                    <a
                      href="https://elect.in.th/bkk-budget/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start"
                    >
                      <img
                        width={30}
                        height={30}
                        src={p_icon}
                        alt={p_icon}
                        className="flex-none"
                      />

                      <h5 className="ml-2 underline">
                        ห้าแสนล้านใน 8 ปี: ว่าด้วยงบประมาณ
                        การจัดความสำคัญถึงการจัดสรรงบที่บิดเบี้ยว ของ กทม.
                      </h5>
                    </a>
                  </li>
                </ul>

                <hr className="block my-6 lg:hidden" />
              </div>

              <div className="p-0 border-0 rounded-md lg:border lg:p-3">
                <h5 className="mb-3 text-center d5 lg:text-left">
                  เกี่ยวกับเรา
                </h5>

                <div className="flex">
                  <div className="flex-1 mr-2 lg:mr-3">
                    <h5 className="text-sm">About Us</h5>

                    <a
                      href="https://elect.in.th/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 underline"
                    >
                      เราคือใคร.. ทำไมต้อง Elect?
                    </a>
                  </div>

                  <div className="flex-1 mr-2 lg:mr-3">
                    <h5 className="text-sm">Contact Us</h5>

                    <a
                      href="mailto:contact@elect.in.th"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 underline"
                    >
                      contact@elect.in.th
                    </a>
                  </div>

                  <div className="flex-1">
                    <h5 className="text-sm">Follow Us</h5>

                    <div className="flex items-center mt-2">
                      <a
                        href="https://www.facebook.com/electinth/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block m-2"
                      >
                        <img height={18} src={fb_icon} alt={fb_icon} />
                      </a>

                      <a
                        href="https://twitter.com/electinth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block m-2"
                      >
                        <img
                          height={18}
                          src={twitter_icon}
                          alt={twitter_icon}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-center p-2 callab-with lg:hidden"
            style={{
              boxShadow: "0px 16px 48px rgba(0, 0, 0, 0.176)",
            }}
          >
            <div className="mr-4 d5" style={{ fontSize: "14px" }}>
              In collaboration with
            </div>

            <img src={stb_logo} alt={stb_logo} className="mr-4" />

            <img src={cu_thai_logo} alt={cu_thai_logo} className="mr-4" />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
