import React, { useEffect } from "react";
import _ from "lodash";

export default function BudgetPageOne(props) {
  const { active_index } = props;
  const chart_legends = [
    {
      title: "การศึกษา",
      color: "#F4B8CA",
    },
    {
      title: "สาธารณสุข",
      color: "#B22E56",
    },
    {
      title: "การพัฒนาและบริการสังคม",
      color: "#DF3A6B",
    },
    {
      title: "การระบายน้ำและกำจัดน้ำเสีย",
      color: "#FF9E0D",
    },
    {
      title: "การโยธาและระบบจราจร",
      color: "#9FB2C3",
    },
    {
      title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
      color: "#CCF4DD",
    },
    {
      title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
      color: "#00C853",
    },
  ];
  const chart_data = [
    {
      year: 2555,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2556,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2557,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2558,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2559,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2560,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2561,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2562,
      values: [
        {
          title: "การศึกษา",
          value: 14.28,
        },
        {
          title: "สาธารณสุข",
          value: 14.28,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 14.28,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 14.28,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14.28,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14.28,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
  ];

  const getColor = (title) => {
    const legend = chart_legends.find((l) => l.title === title);
    return _.get(legend, "color");
  };

  useEffect(() => {}, []);

  return (
    <div
      className="budget-page-three bg-black-default fixed z-10 inset-x-0 bottom-0 pointer-events-none text-white-default"
      style={{ top: "60px" }}
    >
      <div className="container h-full mx-auto py-14">
        <div className="grid grid-cols-2 gap-5 h-full">
          <div className="left">
            <h3 className="d3">8 ปีที่ผ่านมา กทม. ใช้งบประมาณไป</h3>

            <h2 className="d2">581,112,916,500 บาท</h2>

            <h4 className="d4 mt-6">งบประมาณ กทม. ใช้ไปกับอะไรบ้าง?</h4>

            <ul className="legends mt-9">
              {chart_legends.map((l) => (
                <li key={l.title} className="d5 flex items-center">
                  <div
                    className="w-5 h-5 rounded mr-3 flex-none"
                    style={{ background: l.color }}
                  ></div>
                  {l.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="right flex items-center">
            <div className="chart text-center grid grid-cols-8 gap-4">
              {chart_data.map((d) => (
                <div key={d.year} className="bar">
                  <div
                    className="box-wrap flex flex-col"
                    style={{ height: "560px" }}
                  >
                    {d.values.map((v) => (
                      <div
                        key={v.title}
                        className="box rounded-md mb-1 relative pointer-events-auto cursor-pointer"
                        style={{
                          width: "52px",
                          height: `${v.value}%`,
                          background: getColor(v.title),
                        }}
                      >
                        <div
                          className="tooltip text-xs bg-white-default rounded-md py-2 px-4 absolute -top-20 left-2/4 transform -translate-x-2/4 mx-auto text-black-default z-10"
                          style={{ minWidth: "176px" }}
                        >
                          ปี {d.year}
                          <br />
                          <b>{v.title}</b>
                          <br />
                          494.58 ล้านบาท (23%)
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="year d5">
                    '{d.year.toString().split("25")[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
