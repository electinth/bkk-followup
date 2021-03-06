import React from "react";
import check from "assets/images/check.svg";
import { isMobile } from "react-device-detect";

export default function ResponsibilityPageTwo(props) {
  const { active_index } = props;
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
    <div
      className="responsibility-page-two py-4 flex lg:items-center text-center text-white-default fixed z-10 inset-0 pointer-events-none"
      style={{ top: "60px" }}
    >
      <div className="w-full">
        <div className="container mx-auto">
          <h2 className="d2">กทม. มีหน้าที่ทำอะไร?</h2>

          {!isMobile || active_index === 10 ? (
            <>
              <h4 className="mt-3 d4 text-xl lg:text-2xl">
                กทม. ไม่ใช่จังหวัด แต่เป็นองค์กรปกครองท้องถิ่นแบบพิเศษ
              </h4>

              <p className="mt-4 text-xl lg:text-2xl">
                กทม. มีกฎหมายการบริหารเป็นของตนเอง ซึ่งจังหวัดอื่นไม่มี
                (พรบ.ระเบียบริหาราชการกรุงเทพมหานคร พ.ศ. 2528)
                และตามกฎหมายนี้ระบุไว้ว่า กทม.&nbsp;
                <b>
                  มีหน้าที่ 28 ประการ
                  ซึ่งอาจแบ่งเป็นประเภทของหน้าที่พอสังเขปได้ดังนี้
                </b>
              </p>
            </>
          ) : null}
        </div>

        {!isMobile || active_index === 11 ? (
          <div className="container mx-auto pointer-events-auto lg:pointer-events-none mt-4 lg:mt-6 2xl:mt-14 w-screen pb-5 overflow-x-auto">
            <div className="inline-flex lg:grid grid-cols-4 gap-3 mr-4">
              {cards.map((c, c_index) => (
                <div
                  key={c_index}
                  className="p-4 text-left rounded-md box bg-blue-lightest text-black-default w-72 lg:w-auto flex-none"
                >
                  <h5 className="d5">{c.title}</h5>

                  <hr className="my-4" />

                  <ul className="list">
                    {c.list.map((l, l_index) => (
                      <li
                        key={l_index}
                        className="flex items-center mt-2 2xl:mt-3"
                      >
                        <img width={25} src={check} alt={check} />

                        <h4 className="flex-1 ml-3 text-lg">{l}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
