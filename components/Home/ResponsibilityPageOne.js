import React from 'react';
import p_icon from 'assets/images/p_icon.svg';
import bkk_follow_up2 from 'assets/images/bkk_follow_up2.gif';

export default function ResponsibilityPageOne() {
  return (
    <div className="relative flex items-center h-full text-center responsibility-page-one bg-blue-default text-white-default">
      <img
        src={bkk_follow_up2}
        alt={bkk_follow_up2}
        style={{filter: 'brightness(0.3)'}}
        className="absolute inset-0 object-cover w-full h-full opacity-90"
      />

      <div className="container relative z-10 flex flex-col items-center justify-center h-full max-w-full ">
        <h2 className="d2">เข้าใจเพื่อมีส่วนร่วม</h2>

        <p className="mt-6 text-xl leading-6 md:mt-10 lg:text-2xl">
          การบริหารงานเพื่อให้ตอบสนองต่อความต้องการของ
          ประชาชนจึงถือเป็นโจทย์สำคัญสำหรับว่าที่ผู้ว่าฯ และสภา กทม.
          ชุดถัดไปที่ควรจะมีการเลือกตั้งเกิดขึ้นในเร็ววัน
        </p>

        <p className="mt-4 text-xl leading-6 md:mt-10 lg:text-2xl">
          เราเลยอยากชวนประชาชน ว่าที่ผู้ว่าฯ และสภา กทม.
          มาร่วมทำความเข้าใจอำนาจหน้าที่ การบริหารงบประมาณ
          และสถานการณ์ปัญหาด้านต่างๆ ผ่านชุดข้อมูลย้อนหลัง (พ.ศ. 2555-2562)
          เพื่อช่วยกันสร้างกรุงเทพฯ และชีวิตดีๆ แบบที่เราฝันอยากให้เป็นร่วมกัน
        </p>

        <a
          href="https://elect.in.th/bkk-admin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full p-2 mx-auto mt-6 rounded-md shadow-xl content md:w-max md:mt-10 bg-white-default"
        >
          <img width={30} src={p_icon} alt={p_icon} />

          <h3 className="ml-2 text-black-default">
            อ่านบทความเกี่ยวกับหน้าที่กทม.
          </h3>
        </a>
      </div>
    </div>
  );
}
