import React from 'react';
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
import { isMobileOnly, isMobile, isTablet } from 'react-device-detect';
import config from 'jsconfig.json';
import { useRouter } from 'next/router';

export default function IntroDashboard() {
  const router = useRouter();
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

  if (router.query.title == 'น้ำท่วมถนน')
    web_url = config.web_url + '/dashboard/' + router.query.title;
  if (router.query.title == 'พื้นที่สีเขียว')
    web_url = config.web_url + '/dashboard/' + router.query.title;
  if (router.query.title == 'มลพิษในคลอง')
    web_url = config.web_url + '/dashboard/' + router.query.title;
  if (router.query.title == 'ขยะมูลฝอย')
    web_url = config.web_url + '/dashboard/' + router.query.title;
  if (router.query.title == 'ฝุ่นควันเกินมาตรฐาน')
    web_url = config.web_url + '/dashboard/' + router.query.title;

  return (
    <div
      id="dashboard-wrapper"
      className="fixed inset-0 z-10 flex flex-col items-center text-center pointer-events-none lg:text-left lg:flex-row text-white-default"
      style={{ top: '60px' }}
    >
      <div
        className="flex flex-col px-5 pt-0 pb-0 lg:pt-20 lg:pb-16 md:px-20 lg:h-full lg:flex-1"
        id="intro-dashboard-left"
      >
        <div className="flex justify-center flex-1 py-4 md:py-10 lg:py-0">
          <div>
            {!isMobileOnly ? (
              <div className="d5">หรืออีกวิธีที่สามารถมีส่วนร่วมได้ก็คือ</div>
            ) : null}

            <div className="mt-5 d3">
              ร่วมกันสำรวจสถานการณ์ ปัญหาด้านต่างๆ ของกรุงเทพฯ ในรอบ 8
              ปีที่ผ่านมา
            </div>

            {!isMobileOnly ? (
              <h5 className="mt-4 text-lg">ข้อมูลย้อนหลัง พ.ศ. 2555-2562</h5>
            ) : null}

            {isMobileOnly ? (
              <h5 className="mt-4 text-lg">เลือกประเด็นที่คุณสนใจ</h5>
            ) : null}
          </div>
        </div>

        {!isMobile ? (
          <div className="flex items-end flex-1 pointer-events-auto social-wrap">
            <h4 className="d4">Share:</h4>

            <FacebookShareButton
              url={web_url}
              className="ml-4 cursor-pointer social"
            >
              <img width={40} height={40} src={fb_share} alt={fb_share} />
            </FacebookShareButton>

            <TwitterShareButton
              url={web_url}
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
              url={web_url}
              className="ml-4 cursor-pointer social"
            >
              <img width={40} height={40} src={line_share} alt={line_share} />
            </LineShareButton>
          </div>
        ) : null}
      </div>

      <div
        className="flex-1 w-full h-full px-4 overflow-y-auto pointer-events-auto md:px-10"
        id="intro-dashboard-right"
      >
        <div id="link-wrapper" className="overflow-auto lg:h-full">
          {category.map((cat, index) => (
            <Link href={'/dashboard/' + cat.name} key={index}>
              <div
                className="flex px-3 mb-2 rounded-md card_cat_intro lg:px-10"
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
                  className="flex flex-none"
                  style={{ width: isMobileOnly ? '60px' : '80px' }}
                />
              </div>
            </Link>
          ))}
        </div>

        {isTablet ? (
          <div id="mobile_wrapper">
            <div className="flex items-center justify-center my-6 flexflex-1 social-wrap">
              <h4 className="d4">Share:</h4>

              <FacebookShareButton
                url={web_url}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={fb_share} alt={fb_share} />
              </FacebookShareButton>

              <TwitterShareButton
                url={web_url}
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
                url={web_url}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={line_share} alt={line_share} />
              </LineShareButton>
            </div>
          </div>
        ) : null}

        {isMobile ? (
          <p className="mt-2 h4">ข้อมูลย้อนหลัง พ.ศ. 2555-2562</p>
        ) : null}
      </div>
    </div>
  );
}
