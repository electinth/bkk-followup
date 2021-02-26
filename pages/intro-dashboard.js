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
      color: '#FF9E0D',
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
        className="absolute top-0 bottom-0 left-0 right-0 flex flex-row overflow-hidden bg-black-default text-white-default"
        id="dashboard-wrapper"
      >
        <div className="flex flex-col flex-1 px-20" id="intro-dashboard-left">
          <div className="flex items-center justify-center flex-1">
            <span>
              <p className="d5">หรืออีกวิธีที่สามารถมีส่วนร่วมได้ก็คือ</p>
              <p className="d3">
                ร่วมกันสำรวจสถานการณ์ ปัญหาด้านต่างๆ ของกรุงเทพฯ ในรอบ 8
                ปีที่ผ่านมา
              </p>
              <p className="d5">ข้อมูลย้อนหลัง พ.ศ. 2555-2562</p>
            </span>
          </div>
          <div className="flex items-center mb-3 flexflex-1 social-wrap">
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
        </div>
        <div className="flex-1 overflow-auto" id="intro-dashboard-right">
          {category.map((cat, index) => (
            <Link href={'/dashboard?location=' + cat.name} key={index}>
              <div
                className="flex card_cat_intro"
                id={`card${cat.name}`}
                style={{ backgroundColor: cat.color }}
              >
                <div className="flex-1">
                  {cat.name === 'ขยะมูลฝอย' ? (
                    <div className="d4">ปริมาณขยะมูลฝอย</div>
                  ) : (
                    <div className="d4">{cat.name}</div>
                  )}
                </div>
                <img
                  src={intro_next}
                  alt="intro_next"
                  className="flex-1"
                  style={{ height: '80px' }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
