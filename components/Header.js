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

export default function Header() {
  const [show_modal, showModal] = useState(false);

  return (
    <div
      id="header"
      className="sticky z-20 shadow-xl bg-white-default flex items-center justify-between px-5"
      style={{ height: "60px" }}
    >
      <div className="left flex items-center">
        <img src={elect_logo} alt={elect_logo} className="mr-4" />

        <img src={map_logo} alt={map_logo} className="mr-2" />

        <h5 className="d5">
          BKK<span className="text-green-default">FOLLOW-UP</span>
        </h5>
      </div>

      <div className="right flex items-center">
        <div className="d5 mr-4" style={{ fontSize: "16px" }}>
          In collaboration with
        </div>

        <img src={stb_logo} alt={stb_logo} className="mr-3" />

        <img src={cu_thai_logo} alt={cu_thai_logo} className="mr-8" />

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
          className="modal fixed right-0 shadow-xl max-w-screen-lg bg-white-default p-3"
          style={{ top: "60px" }}
        >
          <div className="head flex items-center justify-between">
            <h3 className="d3">MENU</h3>

            <img
              width={40}
              height={40}
              src={close}
              alt={close}
              className="cursor-pointer"
              onClick={() => showModal(!show_modal)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3 z-30">
            <Link href="/intro-dashboard">
              <div
                className="flex items-center justify-between rounded-md cursor-pointer explore-map bg-black-default p-6"
                onClick={() => showModal(false)}
              >
                <div className="text-white-default">
                  <h3 className="d3">EXPLORE MAP</h3>

                  <h5 className="d5">สำรวจแผนที่ตามประเด็น ที่กวนใจชาว กทม.</h5>
                </div>

                <img
                  width={80}
                  height={80}
                  src={arrow_right_white}
                  alt={arrow_right_white}
                />
              </div>
            </Link>

            <div className="right">
              <Link href="/?slide=1">
                <div
                  className="flex items-center justify-between p-6 rounded-md cursor-pointer budget bg-green-default"
                  onClick={() => showModal(false)}
                >
                  <h5 className="d5 text-white-default">
                    สำรวจดูงบประมาณกทม. ย้อนหลัง 8 ปี
                  </h5>

                  <img
                    width={80}
                    height={80}
                    src={arrow_right_white}
                    alt={arrow_right_white}
                  />
                </div>
              </Link>

              <Link href="/?slide=8">
                <div
                  className="flex items-center justify-between p-6 mt-3 rounded-md cursor-pointer budget bg-blue-default"
                  onClick={() => showModal(false)}
                >
                  <h5 className="d5 text-white-default">
                    กทม. มีหน้าที่ทำอะไร ?
                  </h5>

                  <img
                    width={80}
                    height={80}
                    src={arrow_right_white}
                    alt={arrow_right_white}
                  />
                </div>
              </Link>

              <Link href="/?slide=13">
                <div
                  className="flex items-center justify-between p-6 mt-3 rounded-md cursor-pointer budget bg-pink-default"
                  onClick={() => showModal(false)}
                >
                  <h5 className="d5 text-white-default">
                    ชาวกทม. มีส่วนร่วม อย่างไรได้บ้าง
                  </h5>

                  <img
                    width={80}
                    height={80}
                    src={arrow_right_white}
                    alt={arrow_right_white}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3 z-30">
            <div className="border rounded-md p-3">
              <h5 className="d5 mb-3">อ่านบทความเพิ่มเติม</h5>

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
            </div>

            <div className="border rounded-md p-3">
              <h5 className="d5 mb-3">เกี่ยวกับเรา</h5>

              <div className="flex">
                <div className="mr-3">
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

                <div className="mr-3">
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

                <div className="mr-3">
                  <h5 className="text-sm">Follow Us</h5>

                  <div className="flex mt-2 items-center">
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
                      <img height={18} src={twitter_icon} alt={twitter_icon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
