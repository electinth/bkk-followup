import React, { useState, useEffect } from "react";
import { isMobileOnly, isMobile } from "react-device-detect";
import citizen_hand from "assets/images/citizen_hand.png";

export default function CitizenPageOne() {
  const [show_hand, setShowHand] = useState(false);
  const [show_card, setShowCard] = useState(false);
  const data = [
    {
      title: "ไปลงคะแนนเสียงเลือกตั้งผู้ว่าฯ และสมาชิกสภา กทม. ทุก ๆ 4 ปี",
      bg_color: "#FFFFFF",
    },
    {
      title: "เข้าชื่อเสนอข้อบัญญัติ กทม. แล้วยื่นต่อสภา กทม.",
      description:
        "ประชาชนที่มีสิทธิเลือกตั้งใน กทม. จำนวน ไม่น้อยกว่ากึ่งหนึ่งของประชาชนผู้มีสิทธิ์เลือกตั้งทั้งหมด สามารถเข้าชื่อร้องขอต่อประธานสภา กทม. เพื่อดำเนินการให้สภาพิจารณาออกข้อบัญญัติท้องถิ่นได้",
      bg_color: "#FFE8F3",
    },
    {
      title: "ร่วมลงชื่อถอดถอนผู้ว่าฯ และสมาชิกสภา กทม.",
      description:
        "ประชาชนที่มีสิทธิเลือกตั้งใน กทม. จำนวนไม่น้อยกว่า 30,000 คน สามารถเข้าชื่อร้องขอต่อรัฐมนตรีว่าการกระทรวงมหาดไทยเพื่อเริ่มกระบวนการลงคะแนนเสียงถอดถอนต่อไป",
      bg_color: "#F4B8CA",
    },
  ];

  useEffect(() => {
    setTimeout(
      () => {
        setShowHand(true);
      },
      isMobileOnly ? 1200 : 0
    );
    setTimeout(
      () => {
        setShowCard(true);
      },
      isMobileOnly ? 2400 : 1200
    );
  }, []);

  return (
    <div
      className="citizen-page-one flex lg:items-center fixed z-10 inset-0 bg-pink-default pointer-events-none py-4 md:py-14 lg:py-4"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        {!isMobileOnly ? (
          <h2 className="leading-tight d2 text-center text-white-default">
            ประชาชนสามารถมีส่วนร่วม กับกรุงเทพฯ อย่างไรได้บ้าง?
          </h2>
        ) : null}

        <div
          className="mt-0 lg:mt-6 2xl:mt-14 h-full relative z-10"
          style={{ opacity: show_card ? 1 : 0, transition: "0.4s" }}
        >
          <p className="text-xl mt-6 mx-auto text-center text-white-default max-w-4xl hidden md:block lg:hidden">
            <b>
              ที่มา: • พรบ.
              ว่าด้วยการลงคะแนนเสียงเพื่อถอดถอนสมาชิกหรือผู้บริหารท้องถิ่น พ.ศ.
              2542 • พรบ. ว่าด้วยการเข้าชื่อเสนอข้อบัญญัติท้องถิ่น พ.ศ. 2542”
            </b>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5 bg-white-default bg-opacity-90 lg:bg-opacity-0 rounded-md p-4 pb-0 lg:p-0 mt-0 md:mt-10 lg:mt-0  shadow-lg">
            {data.map((d, d_index) => (
              <div
                key={d_index}
                className="box p-0 lg:p-8 rounded-md"
                style={{
                  background: isMobile ? "none" : d.bg_color,
                }}
              >
                <h3 className="d3">{d_index + 1}.</h3>

                <h4 className="d4 leading-tight mt-4 hidden lg:block">
                  {d.title}
                </h4>

                <h5 className="d5 leading-tight mt-4 block lg:hidden">
                  {d.title}
                </h5>

                {d.description ? (
                  <p className="text-sm lg:text-lg leading-tight mt-5">
                    {d.description}
                  </p>
                ) : null}

                <hr className="mb-5 mt-3 lg:mt-5" />
              </div>
            ))}
          </div>

          <p className="text-xl mt-6 2xl:mt-20 mx-auto text-center text-white-default max-w-4xl hidden lg:block">
            <b>
              ที่มา: • พรบ.
              ว่าด้วยการลงคะแนนเสียงเพื่อถอดถอนสมาชิกหรือผู้บริหารท้องถิ่น พ.ศ.
              2542 • พรบ. ว่าด้วยการเข้าชื่อเสนอข้อบัญญัติท้องถิ่น พ.ศ. 2542”
            </b>
          </p>
        </div>

        {isMobile ? (
          <img
            src={citizen_hand}
            alt={citizen_hand}
            className="absolute bottom-0 inset-x-0 mx-auto w-2/4 md:w-1/4"
            style={{
              bottom: show_hand ? 0 : "-28%",
              transition: "0.4s",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
