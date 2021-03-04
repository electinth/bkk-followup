import React from 'react';
import Layout from 'layouts/layout';
import Link from 'next/link';
import intro_next from 'assets/images/intro_next.svg';
import fb_share from 'assets/images/fb_share.svg';
import twitter_share from 'assets/images/twitter_share.svg';
import line_share from 'assets/images/line_share.svg';
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from 'react-share';
import { isMobile, isTablet, isMobileOnly } from 'react-device-detect';

export default function Intro_Dashboard() {
  const category = [
    {
      name: 'น้ำท่วมถนน',
      color: '#1570FF',
    },
    {
      name: 'พื้นที่สีเขียว',
      color: '#00C853',
    },
    {
      name: 'มลพิษในคลอง',
      color: '#D6AD6D',
    },
    {
      name: 'ขยะมูลฝอย',
      color: '#DF3A6B',
    },

    {
      name: 'ฝุ่นควันเกินมาตรฐาน',
      color: '#476A8B',
    },
  ];

  return (
    <Layout>
      <div
        className="absolute inset-0 flex flex-col items-center overflow-hidden text-center lg:text-left lg:flex-row bg-black-default text-white-default"
        id="dashboard-wrapper"
      >
        <div
          className="flex flex-col px-5 md:px-20 lg:h-full lg:flex-1"
          id="intro-dashboard-left"
        >
          <div className="flex items-center justify-center flex-1 py-4 md:py-10 lg:py-0">
            <div>
              {!isMobile ? (
                <div className="d5">หรืออีกวิธีที่สามารถมีส่วนร่วมได้ก็คือ</div>
              ) : null}

              <div className="d3">
                ร่วมกันสำรวจสถานการณ์ ปัญหาด้านต่างๆ ของกรุงเทพฯ ในรอบ 8
                ปีที่ผ่านมา
              </div>

              {!isMobileOnly ? (
                <div className="d5">ข้อมูลย้อนหลัง พ.ศ. 2555-2562</div>
              ) : null}
              {isMobileOnly ? (
                <div className="d5">เลือกประเด็นที่คุณสนใจ</div>
              ) : null}
            </div>
          </div>
          {!isMobile ? (
            <div className="flex items-end flex-1 mb-5 social-wrap">
              <h4 className="d4">Share:</h4>

              <FacebookShareButton
                url={'https://ellisonleao.github.io/sharer.js/'}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={fb_share} alt={fb_share} />
              </FacebookShareButton>

              <TwitterShareButton
                url={'https://ellisonleao.github.io/sharer.js/'}
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
                url={'https://ellisonleao.github.io/sharer.js/'}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={line_share} alt={line_share} />
              </LineShareButton>
            </div>
          ) : null}
        </div>
        <div
          className="flex-1 h-full overflow-hidden"
          id="intro-dashboard-right"
        >
          <div id="link-wrapper" className="overflow-auto lg:h-full">
            {category.map((cat, index) => (
              <Link href={'/dashboard?location=' + cat.name} key={index}>
                <div
                  className="flex card_cat_intro"
                  id={`card${cat.name}`}
                  style={{ backgroundColor: cat.color }}
                >
                  <div className="flex flex-1">
                    {cat.name === 'ขยะมูลฝอย' ? (
                      <div className="d5">ปริมาณขยะมูลฝอย</div>
                    ) : (
                      <div className="d5">{cat.name}</div>
                    )}
                  </div>
                  <img
                    src={intro_next}
                    alt="intro_next"
                    className="flex flex-1"
                    style={{ height: isMobile ? '50px' : '80px' }}
                  />
                </div>
              </Link>
            ))}
          </div>
          {isTablet ? (
            <div id="mobile_wrapper">
              <div className="flex items-center justify-center my-7 flexflex-1 social-wrap">
                <h4 className="d4">Share:</h4>

                <FacebookShareButton
                  url={'https://ellisonleao.github.io/sharer.js/'}
                  className="ml-4 cursor-pointer social"
                >
                  <img width={40} height={40} src={fb_share} alt={fb_share} />
                </FacebookShareButton>

                <TwitterShareButton
                  url={'https://ellisonleao.github.io/sharer.js/'}
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
                  url={'https://ellisonleao.github.io/sharer.js/'}
                  className="ml-4 cursor-pointer social"
                >
                  <img
                    width={40}
                    height={40}
                    src={line_share}
                    alt={line_share}
                  />
                </LineShareButton>
              </div>
            </div>
          ) : null}
          {isMobile ? (
            <p className="mt-2 h4">ข้อมูลย้อนหลัง พ.ศ. 2555-2562</p>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
