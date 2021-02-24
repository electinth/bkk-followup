import React from "react";
import Image from "next/image";
import p_icon from "assets/images/p_icon.svg";

export default function ResponsibilityPageOne() {
  return (
    <div className="responsibility-page-one h-full bg-blue-default flex items-center text-white-default text-center">
      <div className="container mx-auto max-w-xl">
        <h2 className="d2">เข้าใจเพื่อมีส่วนร่วม</h2>

        <p className="text-2xl mt-10">
          การบริหารงานเพื่อให้ตอบสนองต่อความต้องการของ
          ประชาชนจึงถือเป็นโจทย์สำคัญสำหรับว่าที่ผู้ว่าฯ และสภา กทม.
          ชุดถัดไปที่ควรจะมีการเลือกตั้งเกิดขึ้นในเร็ววัน
        </p>

        <p className="text-2xl mt-10">
          เราเลยอยากชวนประชาชน ว่าที่ผู้ว่าฯ และสภา กทม.
          มาร่วมทำความเข้าใจอำนาจหน้าที่ การบริหารงบประมาณ
          และสถานการณ์ปัญหาด้านต่างๆ ผ่านชุดข้อมูลย้อนหลัง (พ.ศ. 2555-2562)
          เพื่อช่วยกันสร้างกรุงเทพฯ และชีวิตดีๆ แบบที่เราฝันอยากให้เป็นร่วมกัน
        </p>

        <div
          className="content bg-white-default p-2 rounded-md shadow-xl flex items-center max-w-lg mx-auto cursor-pointer mt-10"
          style={{ width: "fit-content" }}
        >
          <Image width={30} height={30} src={p_icon} alt={p_icon} />

          <h3 className="ml-2 text-black-default">อ่านบทความเกี่ยวกับงบกทม.</h3>
        </div>
      </div>
    </div>
  );
}
