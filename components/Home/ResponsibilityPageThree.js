import React, { useEffect } from "react";
import Image from "next/image";
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
      className="responsibility-page-three fixed z-10 inset-0 pointer-events-none flex items-center text-white-default text-center"
      style={{ top: "60px" }}
    >
      <div className="w-full">
        <div className="container mx-auto">
          <h2 className="d2 leading-snug">
            กทม. มีทั้ง
            <span className="text-blue-default">ผู้ว่าราชการกรุงเทพมหานคร</span>
            เป็นผู้บริหาร และ
            <span className="text-blue-default">สภากรุงเทพมหานคร</span>
            ในการตรวจสอบการทำงานของผู้ว่าฯ อีกที
            โดยจะมาจากการเลือกตั้งโดยตรงของประชาชน ทุกๆ 4 ปี
          </h2>
        </div>

        <div className="scroll-list w-full overflow-x-auto flex pointer-events-auto mt-20 pl-4 pb-6">
          {data.map((d, index) => (
            <div key={index} className="item pr-4">
              {d.image ? (
                <div
                  className="bg-blue-default rounded-full overflow-hidden"
                  style={{ height: "120px", width: "120px" }}
                >
                  <Image width={120} height={120} src={d.image} alt={d.image} />
                </div>
              ) : (
                <div
                  className="image-placeholder overflow-hidden flex items-center justify-center"
                  style={{ height: "120px", width: "120px" }}
                >
                  <div
                    className="bg-white-default rounded-full"
                    style={{ height: "42px", width: "42px" }}
                  >
                    <Image
                      width={42}
                      height={42}
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
