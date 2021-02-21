import React, { useEffect } from "react";
// import intro_bg from "assets/images/intro-bg.png";
// import fb_share from "assets/images/fb-share.svg";

export default function DashboardLineChart() {
  useEffect(() => {}, []);

  return (
    <div
      className="main-page absolute inset-0 z-20 flex items-center"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-">
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

            <div className="social-wrap mt-4">
              <h4 className="d4">Share:</h4>

              <div
                className="social"
                data-sharer="twitter"
                data-title="Checkout Sharer.js!"
                data-hashtags="awesome, sharer.js"
                data-url="https://ellisonleao.github.io/sharer.js/"
              >
                {/* <img src={fb_share} alt={fb_share} /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <img src={intro_bg} alt={intro_bg} className=" /> */}
      </div>
    </div>
  );
}
