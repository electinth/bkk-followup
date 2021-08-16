import React, { useEffect } from "react";
import image_placeholder from "assets/images/image_placeholder.png";

export default function ResponsibilityPageThree() {
  const data = [
    {
      year: 2516,
      name: "ชำนาญ ยุวบูรณ์",
      appoint: true,
      image: require("assets/images/01_ชำนาญ_ยุวบูรณ์.png"),
    },
    {
      year: 2516,
      name: "อรรถ วิสูตรโยธาภิบาล",
      appoint: true,
      image: require("assets/images/02_อรรถ_วิสูตรโยธาภิบาล.png"),
    },
    {
      year: 2517,
      name: "ศิริ สันติบุตร",
      appoint: true,
      image: require("assets/images/03_ศิริ.png"),
    },
    {
      year: 2518,
      name: "สาย หุตะเจริญ",
      appoint: true,
      image: require("assets/images/สาย.png"),
    },
    {
      year: 2518,
      image: require("assets/images/ธรรมนูญ_เทียนเงิน.png"),
      name: "ธรรมนูญ เทียนเงิน",
    },
    {
      year: 2520,
      name: "ชลอ ธรรมศิริ",
      appoint: true,
      image: require("assets/images/06_ชลอ_ธรรมศิริ.png"),
    },
    {
      year: 2522,
      name: "เชาวน์วัศ สุดลาภา",
      appoint: true,
      image: require("assets/images/07_เชาวน์วัศ_สุดลาภา.png"),
    },
    {
      year: 2524,
      name: "พลเรือเอก เทียม มกรานนท์",
      appoint: true,
      image: require("assets/images/เทียม.png"),
    },
    {
      year: 2527,
      name: "อาษา เมฆสวรรค์",
      appoint: true,
      image: require("assets/images/09_อาษา_เมฆสวรรค์.png"),
    },
    {
      year: 2528,
      name: "พลตรี จำลอง ศรีเมือง",
      image: require("assets/images/02-จำลอง-ศรีเมือง.png"),
    },
    {
      year: 2533,
      name: "พลตรี จำลอง ศรีเมือง",
      image: require("assets/images/02-จำลอง-ศรีเมือง.png"),
    },
    {
      year: 2535,
      name: "ร้อยเอก กฤษฎา อรุณวงษ์ ณ อยุธยา",
      image: require("assets/images/03-กฤษฎา-อรุณวงษ์-ณ-อยุธยา.png"),
    },
    {
      year: 2539,
      name: "พิจิตต รัตตกุล",
      image: require("assets/images/04-พิจิตต-รัตตกุล.png"),
    },
    {
      year: 2543,
      name: "สมัคร สุนทรเวช",
      image: require("assets/images/05-สมัคร-สุนทรเวช.png"),
    },
    {
      year: 2547,
      name: "อภิรักษ์ โกษะโยธิน",
      image: require("assets/images/06-อภิรักษ์-โกษะโยธิน.png"),
    },
    {
      year: 2551,
      name: "อภิรักษ์ โกษะโยธิน",
      image: require("assets/images/06-อภิรักษ์-โกษะโยธิน.png"),
    },
    {
      year: 2552,
      name: "หม่อมราชวงศ์สุขุมพันธุ์ บริพัตร",
      image: require("assets/images/07-สุขุมพันธุ์-บริพัตร.png"),
    },
    {
      year: 2556,
      name: "หม่อมราชวงศ์สุขุมพันธุ์ บริพัตร",
      image: require("assets/images/07-สุขุมพันธุ์-บริพัตร.png"),
    },
    {
      year: 2559,
      name: "พลตำรวจเอก อัศวิน ขวัญเมือง",
      appoint: true,
      image: require("assets/images/อัศวิน.png"),
    },
  ];

  useEffect(() => {
    const scroll = document.querySelector(".scroll-list");
    setTimeout(() => {
      scroll.scrollLeft = scroll.scrollWidth;
    }, 1500);
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 flex items-center text-center pointer-events-none responsibility-page-three text-white-default py-14"
      style={{ top: "60px" }}
    >
      <div className="flex flex-col justify-between w-full h-full">
        <div className="container mx-auto">
          <h2 className="hidden leading-snug d2 lg:block">
            กทม. มีทั้ง
            <span className="text-blue-default">ผู้ว่าราชการกรุงเทพมหานคร</span>
            เป็นผู้บริหาร และ
            <span className="text-blue-default">สภากรุงเทพมหานคร</span>
            ในการตรวจสอบการทำงานของผู้ว่าฯ อีกที
            โดยจะมาจากการเลือกตั้งโดยตรงของประชาชน ทุกๆ 4 ปี
          </h2>

          <h4 className="block leading-snug d4 lg:hidden">
            กทม. มีทั้ง
            <span className="text-blue-default">ผู้ว่าราชการกรุงเทพมหานคร</span>
            เป็นผู้บริหาร และ
            <span className="text-blue-default">สภากรุงเทพมหานคร</span>
            ในการตรวจสอบการทำงานของผู้ว่าฯ อีกที
            โดยจะมาจากการเลือกตั้งโดยตรงของประชาชน ทุกๆ 4 ปี
          </h4>
        </div>

        <div className="flex w-full pb-5 pl-4 mt-10 overflow-x-auto pointer-events-auto lg:mt-20 scroll-list">
          {data.map((d, index) => (
            <div key={index} className="pr-4 item">
              {d.image ? (
                <div
                  className="overflow-hidden rounded-full bg-blue-default"
                  style={{ height: "120px", width: "120px" }}
                >
                  <img
                    className="object-cover w-full h-full"
                    src={d.image}
                    alt={d.image}
                  />
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
                      className="object-cover w-full h-full"
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
