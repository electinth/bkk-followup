import React from "react";
import p_icon from "assets/images/p_icon.svg";

export default function ResponsibilityPageOne() {
  return (
    <div className="flex items-center h-full text-center responsibility-page-one bg-blue-default text-white-default">
      <div className="container max-w-xl mx-auto">
        <h2 className="d2">เข้าใจเพื่อมีส่วนร่วม</h2>

        <p className="mt-6 lg:mt-10 text-xl lg:text-2xl leading-6">
          การบริหารงานเพื่อให้ตอบสนองต่อความต้องการของ
          ประชาชนจึงถือเป็นโจทย์สำคัญสำหรับว่าที่ผู้ว่าฯ และสภา กทม.
          ชุดถัดไปที่ควรจะมีการเลือกตั้งเกิดขึ้นในเร็ววัน
        </p>

        <p className="mt-4 lg:mt-10 text-xl lg:text-2xl leading-6">
          เราเลยอยากชวนประชาชน ว่าที่ผู้ว่าฯ และสภา กทม.
          มาร่วมทำความเข้าใจอำนาจหน้าที่ การบริหารงบประมาณ
          และสถานการณ์ปัญหาด้านต่างๆ ผ่านชุดข้อมูลย้อนหลัง (พ.ศ. 2555-2562)
          เพื่อช่วยกันสร้างกรุงเทพฯ และชีวิตดีๆ แบบที่เราฝันอยากให้เป็นร่วมกัน
        </p>

        <a
          href="https://elect.in.th/bkk-admin/"
          target="_blank"
          rel="noopener noreferrer"
          className="content flex items-center justify-center w-full lg:w-max p-2 mx-auto mt-6 lg:mt-10 rounded-md shadow-xl bg-white-default"
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
