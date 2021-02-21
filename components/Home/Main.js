import React from "react";
import fb_share from "assets/images/fb_share.svg";
import twitter_share from "assets/images/twitter_share.svg";
import line_share from "assets/images/line_share.svg";
import arrow_right_white from "assets/images/arrow_right_white.svg";
import arrow_down_black from "assets/images/arrow_down_black.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";

export default function Main() {
  return (
    <div className="main-page flex items-center flex-1">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <h1 className="d1 leading-tight">
            BANGKOK
            <br />
            <span className="text-green-default">FOLLOW-UP</span>
          </h1>

          <div className="right">
            <h3 className="d3 leading-tight">
              สำรวจย้อนหลัง 8 ปีกับ
              <br />
              ปัญหาที่กวนใจชาวกทม.
            </h3>

            <div className="social-wrap mt-4 flex items-center">
              <h4 className="d4">Share:</h4>

              <FacebookShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="social ml-4 cursor-pointer"
              >
                <img src={fb_share} alt={fb_share} />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="social ml-4 cursor-pointer"
              >
                <img src={twitter_share} alt={twitter_share} />
              </TwitterShareButton>

              <LineShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="social ml-4 cursor-pointer"
              >
                <img src={line_share} alt={line_share} />
              </LineShareButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-16">
          <div className="explore-map flex items-center justify-between bg-black-default p-14 rounded-md cursor-pointer">
            <div className="text-white-default">
              <h3 className="d3">EXPLORE MAP</h3>

              <h4 className="d4">สำรวจแผนที่ตามประเด็น ที่กวนใจชาว กทม.</h4>
            </div>

            <img src={arrow_right_white} alt={arrow_right_white} />
          </div>

          <div className="right">
            <div className="budget flex items-center justify-between bg-green-default p-5 rounded-md cursor-pointer">
              <h4 className="d4 text-white-default">
                สำรวจดูงบประมาณกทม. ย้อนหลัง 8 ปี
              </h4>

              <img src={arrow_right_white} alt={arrow_right_white} />
            </div>

            <div className="budget flex items-center justify-between bg-blue-default p-5 rounded-md mt-3 cursor-pointer">
              <h4 className="d4 text-white-default">กทม. มีหน้าที่ทำอะไร ?</h4>

              <img src={arrow_right_white} alt={arrow_right_white} />
            </div>

            <div className="budget flex items-center justify-between bg-pink-default p-5 rounded-md mt-3 cursor-pointer">
              <h4 className="d4 text-white-default">
                ชาวกทม. มีส่วนร่วม อย่างไรได้บ้าง
              </h4>

              <img src={arrow_right_white} alt={arrow_right_white} />
            </div>
          </div>
        </div>

        <div className="scroll-down absolute inset-x-0 bottom-0 p-3 bg-green-default flex items-center justify-center d5">
          Scroll Down <img src={arrow_down_black} alt={arrow_down_black} />
        </div>
      </div>
    </div>
  );
}
