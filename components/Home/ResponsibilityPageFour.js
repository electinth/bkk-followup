import React, { useState, useEffect } from "react";
import check from "assets/images/check.svg";
import { isMobile, isTablet } from "react-device-detect";

export default function ResponsibilityPageFour(props) {
  const { active_index } = props;
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
  const [cards, setCards] = useState(data);

  useEffect(() => {
    if (!(isMobile || isTablet)) return;
    if (active_index === 13) setCards([data[0]]);
    if (active_index === 14) setCards([data[1]]);
  }, [active_index]);

  return (
    <div
      className="responsibility-page-four flex items-center bg-black-default text-white-default fixed z-10 inset-0 pointer-events-none"
      style={{ top: "60px" }}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="leading-tight text-center d2 hidden lg:block">
          บทบาทและอำนาจหน้าที่ของ กทม.
        </h2>

        <h3 className="leading-tight text-center d3">
          บทบาทและอำนาจหน้าที่ของ กทม.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4 2xl:mt-14">
          {cards.map((d, d_index) => (
            <div
              key={d_index}
              className="p-4 rounded-md box"
              style={{ background: d.bg_color }}
            >
              <h3 className="d3">{d.title}</h3>

              <ul className="mt-5 list">
                {d.list.map((l, l_index) => (
                  <li
                    key={l_index}
                    className="flex items-center mt-1.5 bg-white-default rounded-md text-black-default p-2"
                  >
                    <img width={25} height={25} src={check} alt={check} />

                    <h4 className="flex-1 ml-3 text-lg leading-6">{l}</h4>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xl text-center mt-4 2xl:mt-20 hidden lg:block">
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
