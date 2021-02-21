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
      className={`intro-page fixed z-10 inset-0 bg-black-default flex items-center ${
        hide_intro ? "hide-intro" : ""
      }`}
      onClick={() => hideIntro(true)}
    >
      <img
        src={intro_bg}
        alt={intro_bg}
        className="fixed inset-0 h-full object-cover mx-auto"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-5 text-white-default">
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
      </div>
    </div>
  );
}
