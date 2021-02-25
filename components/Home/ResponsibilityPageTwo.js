import React from "react";
import check from "assets/images/check.svg";

export default function ResponsibilityPageTwo() {
  const cards = [
    {
      title: "ด้านการคมนาคมและการขนส่ง",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      title: "ด้านการจัดบริการสาธารณะ",
      list: [
        "การจัดหาสถานที่พักผ่อน",
        "การจัดหาสาธารณูปโภค",
        "การจัดหาสถานที่พักผ่อน",
        "การควบคุมฌาปณสถาน",
        "การควบคุมการเลี้ยงสัตว์",
        "การจัดให้มีและควบคุมการฆ่าสัตว์",
        "การจัดการศึกษา",
        "การสาธารณูปการ",
      ],
    },
    {
      title: "ด้านการพัฒนาสังคม",
      list: [
        "การบำรุงรักษาศิลปะและประเพณี",
        "การสังคมสงเคราะห์",
        "การส่งเสริมการกีฬา",
        "การส่งเสริมการประกอบอาชีพ",
      ],
    },
    {
      title: "ด้านการโยธาและผังเมือง",
      list: [
        "การผังเมือง",
        "การจัดพื้นที่ค้าขายและเดินทาง",
        "การควบคุมอาคาร",
        "การปรับปรุงชุมชนแออัด",
      ],
    },
  ];

  return (
    <div className="flex items-center h-full text-center responsibility-page-two text-white-default">
      <div className="container mx-auto">
        <h2 className="d2">กทม. มีหน้าที่ทำอะไร?</h2>

        <h4 className="mt-3 d4">
          กทม. ไม่ใช่จังหวัด แต่เป็นองค์กรปกครองท้องถิ่นแบบพิเศษ
        </h4>

        <p className="mt-4 text-2xl">
          กทม. มีกฎหมายการบริหารเป็นของตนเอง ซึ่งจังหวัดอื่นไม่มี
          (พรบ.ระเบียบริหาราชการกรุงเทพมหานคร พ.ศ. 2528)
          และตามกฎหมายนี้ระบุไว้ว่า กทม.&nbsp;
          <b>
            มีหน้าที่ 28 ประการ ซึ่งอาจแบ่งเป็นประเภทของหน้าที่พอสังเขปได้ดังนี้
          </b>
        </p>

        <div className="grid grid-cols-4 gap-3 mt-14">
          {cards.map((c, c_index) => (
            <div
              key={c_index}
              className="p-4 text-left rounded-md box bg-blue-lightest text-black-default"
            >
              <h5 className="d5">{c.title}</h5>

              <hr className="my-4" />

              <ul className="list">
                {c.list.map((l, l_index) => (
                  <li key={l_index} className="flex items-center mt-3">
                    <img width={25} height={25} src={check} alt={check} />

                    <h4 className="flex-1 ml-3 text-lg">{l}</h4>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
