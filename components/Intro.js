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
      <div className="fixed inset-0 h-full mx-auto opacity-60">
        <img
          className="object-cover w-full h-full"
          src={intro_bg}
          alt={intro_bg}
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-2 gap-5 text-white-default">
          <h1 className="leading-tight d1">
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

            <div className="flex items-center mt-4 social-wrap">
              <h4 className="d4">Share:</h4>

              <FacebookShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={fb_share} alt={fb_share} />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="ml-4 cursor-pointer social"
              >
                <img
                  width={40}
                  height={40}
                  src={twitter_share}
                  alt={twitter_share}
                />
              </TwitterShareButton>

              <LineShareButton
                url={"https://ellisonleao.github.io/sharer.js/"}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={line_share} alt={line_share} />
              </LineShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
