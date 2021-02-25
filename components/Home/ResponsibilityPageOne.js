import React from "react";
import p_icon from "assets/images/p_icon.svg";

export default function ResponsibilityPageOne() {
  return (
    <div className="flex items-center h-full text-center responsibility-page-one bg-blue-default text-white-default">
      <div className="container max-w-xl mx-auto">
        <h2 className="d2">เข้าใจเพื่อมีส่วนร่วม</h2>

        <p className="mt-10 text-2xl">
          การบริหารงานเพื่อให้ตอบสนองต่อความต้องการของ
          ประชาชนจึงถือเป็นโจทย์สำคัญสำหรับว่าที่ผู้ว่าฯ และสภา กทม.
          ชุดถัดไปที่ควรจะมีการเลือกตั้งเกิดขึ้นในเร็ววัน
        </p>

        <p className="mt-10 text-2xl">
          เราเลยอยากชวนประชาชน ว่าที่ผู้ว่าฯ และสภา กทม.
          มาร่วมทำความเข้าใจอำนาจหน้าที่ การบริหารงบประมาณ
          และสถานการณ์ปัญหาด้านต่างๆ ผ่านชุดข้อมูลย้อนหลัง (พ.ศ. 2555-2562)
          เพื่อช่วยกันสร้างกรุงเทพฯ และชีวิตดีๆ แบบที่เราฝันอยากให้เป็นร่วมกัน
        </p>

        <div
          className="flex items-center max-w-lg p-2 mx-auto mt-10 rounded-md shadow-xl cursor-pointer content bg-white-default"
          style={{ width: "fit-content" }}
        >
          <img width={30} height={30} src={p_icon} alt={p_icon} />

          <h3 className="ml-2 text-black-default">อ่านบทความเกี่ยวกับงบกทม.</h3>
        </div>
      </div>
    </div>
  );
}
