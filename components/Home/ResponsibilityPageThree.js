import React, { useEffect } from "react";
import image_placeholder from "assets/images/image_placeholder.svg";

export default function ResponsibilityPageThree() {
  const data = [
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2519,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน 1.png"),
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
      appoint: true,
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      year: 2520,
      name: "ชำนาญ ยุวบูรณ์",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
  ];

  useEffect(() => {
    const scroll = document.querySelector(".scroll-list");
    setTimeout(() => {
      scroll.scrollLeft = scroll.scrollWidth;
    }, 2000);
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 flex items-center text-center pointer-events-none responsibility-page-three text-white-default"
      style={{ top: "60px" }}
    >
      <div className="w-full">
        <div className="container mx-auto">
          <h2 className="leading-snug d2">
            กทม. มีทั้ง
            <span className="text-blue-default">ผู้ว่าราชการกรุงเทพมหานคร</span>
            เป็นผู้บริหาร และ
            <span className="text-blue-default">สภากรุงเทพมหานคร</span>
            ในการตรวจสอบการทำงานของผู้ว่าฯ อีกที
            โดยจะมาจากการเลือกตั้งโดยตรงของประชาชน ทุกๆ 4 ปี
          </h2>
        </div>

        <div className="flex w-full pb-6 pl-4 mt-20 overflow-x-auto pointer-events-auto scroll-list">
          {data.map((d, index) => (
            <div key={index} className="pr-4 item">
              {d.image ? (
                <div
                  className="overflow-hidden rounded-full bg-blue-default"
                  style={{ height: "120px", width: "120px" }}
                >
                  <img className="w-full h-full" src={d.image} alt={d.image} />
                </div>
              ) : (
                <div
                  className="flex items-center justify-center overflow-hidden image-placeholder"
                  style={{ height: "120px", width: "120px" }}
                >
                  <div
                    className="rounded-full bg-white-default"
                    style={{ height: "42px", width: "42px" }}
                  >
                    <img
                      className="w-full h-full"
                      src={image_placeholder}
                      alt={image_placeholder}
                    />
                  </div>
                </div>
              )}

              <h4 className="d4">{d.year}</h4>

              <p className="name">{d.name}</p>

              {d.appoint ? <p className="appoint">(แต่งตั้ง)</p> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
