import React from "react";

export default function CitizenPageOne(props) {
  const { active_index } = props;
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

  return (
    <div
      className="citizen-page-one flex items-center fixed z-10 inset-0 bg-pink-default pointer-events-none"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        <h2 className="leading-tight d2 text-center text-white-default">
          บทบาทและอำนาจหน้าที่ของ กทม.
        </h2>

        <div
          className="mt-14"
          style={{ opacity: active_index > 12 ? 1 : 0, transition: "0.4s" }}
        >
          <div className="grid grid-cols-3 gap-5">
            {data.map((d, d_index) => (
              <div
                key={d_index}
                className="box p-8 rounded-md"
                style={{ background: d.bg_color }}
              >
                <h3 className="d3">{d_index + 1}.</h3>

                <h4 className="d4 leading-tight mt-4">{d.title}</h4>

                <hr className="my-5" />

                <p className="text-lg leading-tight">{d.description}</p>
              </div>
            ))}
          </div>

          <p className="text-xl mt-20 mx-auto text-center text-white-default max-w-4xl">
            <b>
              ที่มา: • พรบ.
              ว่าด้วยการลงคะแนนเสียงเพื่อถอดถอนสมาชิกหรือผู้บริหารท้องถิ่น พ.ศ.
              2542 • พรบ. ว่าด้วยการเข้าชื่อเสนอข้อบัญญัติท้องถิ่น พ.ศ. 2542”
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
