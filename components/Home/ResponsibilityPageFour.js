import React from "react";
import Image from "next/image";
import check from "assets/images/check.svg";

export default function ResponsibilityPageFour() {
  const data = [
    {
      title: "ผู้ว่าฯ กทม. ทำอะไรได้บ้าง?",
      bg_color: "#1570FF",
      list: [
        "กำหนดนโยบายและทิศทางการบริหาร กทม.",
        "สั่งการราชการของ กทม.",
        "รักษาการให้เป็นไปตามข้อบัญญัติ กทม.",
        "บริหารภายในหน่วยงาน กทม.",
        "แต่งตั้งหรือถอดถอนรองผู้ว่า และตำแหน่งข้าราชการการเมืองอื่น ๆ",
        "สั่งการราชการของ กทม.",
      ],
    },
    {
      title: "สภา กทม. ทำอะไรได้บ้าง?",
      bg_color: "#0F52BB",
      list: [
        "เสนอและให้ความเห็นชอบในการตราข้อบัญญัติ กทม.",
        "ให้ความเห็นชอบร่างข้อบัญญัติงบประมาณรายจ่ายตามที่ผู้ว่าฯ เสนอ",
        "ควบคุมการบริหารงานของฝ่ายบริหาร",
      ],
    },
  ];

  return (
    <div className="responsibility-page-four flex items-center h-full bg-black-default text-white-default">
      <div className="container mx-auto max-w-4xl">
        <h2 className="leading-tight d2 text-center">
          บทบาทและอำนาจหน้าที่ของ กทม.
        </h2>

        <div className="grid grid-cols-2 gap-5 mt-14">
          {data.map((d, d_index) => (
            <div
              key={d_index}
              className="box p-4 rounded-md"
              style={{ background: d.bg_color }}
            >
              <h3 className="d3">{d.title}</h3>

              <ul className="list mt-5">
                {d.list.map((l, l_index) => (
                  <li
                    key={l_index}
                    className="flex items-center mt-1.5 bg-white-default rounded-md text-black-default p-2"
                  >
                    <Image width={25} height={25} src={check} alt={check} />

                    <h4 className="text-lg ml-3 flex-1">{l}</h4>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xl mt-20 text-center">
          <b>
            ที่มา: • อรทัย ก๊กผล. (2547). สารานุกรมการปกครองท้องถิ่นไทย หมวดที่
            3 พัฒนาการและรูปแบบการปกครองท้องถิ่นไทย ลำดับที่ 5 เรื่อง
            กรุงเทพมหานคร. สถาบันพระปกเกล้า.
          </b>
        </p>
      </div>
    </div>
  );
}
