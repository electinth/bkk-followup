import React, { useState, useEffect } from "react";
import intro_bg from "assets/images/intro-bg.png";
import fb_share from "assets/images/fb_share.svg";
import twitter_share from "assets/images/twitter_share.svg";
import line_share from "assets/images/line_share.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";

export default function Intro() {
  const [hide_intro, hideIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      hideIntro(true);
    }, 3000);
  }, []);

  return (
    <div
      className={`intro-page fixed z-30 inset-0 bg-black-default flex items-center ${
        hide_intro ? "hide-intro" : ""
      }`}
      onClick={() => hideIntro(true)}
    >
      <img
        className="object-cover fixed inset-0 h-full mx-auto opacity-60"
        src={intro_bg}
        alt={intro_bg}
      />

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center text-white-default text-center lg:text-left">
          <h1 className="leading-tight d1 mr-0 lg:mr-20 mb-5 lg:mb-0">
            BANGKOK
            <br />
            <span className="text-green-default">FOLLOW-UP</span>
          </h1>

          <div className="right">
            <h3 className="leading-tight d3">
              สำรวจย้อนหลัง 8 ปีกับ
              <br />
              ปัญหาที่กวนใจชาวกทม.
            </h3>

            <div className="flex items-center justify-center lg:justify-start mt-8 lg:mt-4 social-wrap">
              <h4 className="d4">Share:</h4>

              <FacebookShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} src={fb_share} alt={fb_share} />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} src={twitter_share} alt={twitter_share} />
              </TwitterShareButton>

              <LineShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} src={line_share} alt={line_share} />
              </LineShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
