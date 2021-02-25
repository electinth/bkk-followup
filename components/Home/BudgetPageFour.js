import React, { useState } from "react";
import _ from "lodash";

export default function BudgetPageFour() {
  const [hover_legend, setHoverLegend] = useState(null);
  const chart_legends = [
    {
      title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
      color: "#00C853",
      total: 29.6,
    },
    {
      title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
      color: "#CCF4DD",
      total: 18.0,
    },
    {
      title: "งานรักษาความสะอาด",
      color: "#DAE1E8",
      total: 34.6,
    },
    {
      title: "อื่นๆ",
      color: "black",
      total: 17.6,
    },
  ];
  const chart_data = [
    {
      year: 2555,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2556,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2557,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2558,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2559,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2560,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2561,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
    {
      year: 2562,
      values: [
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "อื่นๆ",
          value: 14.28,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14.28,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 14.28,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 14.28,
        },
      ],
    },
  ];

  const getColor = (title) => {
    const legend = chart_legends.find((l) => l.title === title);
    return _.get(legend, "color");
  };

  return (
    <div className="budget-page-four h-full bg-black-default text-white-default">
      <div className="container h-full mx-auto py-14">
        <div className="grid grid-cols-2 gap-5 h-full">
          <div className="left w-4/5">
            <h2 className="d2">3 ประเด็นที่งบกทม. ถูกใชัมากที่สุด</h2>

            <ul className="legends mt-9">
              {chart_legends.map((l) => (
                <li
                  key={l.title}
                  className="flex items-center py-5 px-9 mb-0.5 rounded-md cursor-pointer"
                  style={{
                    background: l.color,
                    color: l.title === "อื่นๆ" ? "white" : "black",
                    border:
                      l.title === "อื่นๆ"
                        ? "2px solid rgba(255, 255, 255, 0.9)"
                        : "none",
                  }}
                  onMouseOver={() => setHoverLegend(l.title)}
                >
                  <div className="title d5 flex-1">{l.title}</div>

                  <h3 className="value flex-none ml-3 text-right">
                    x,xxx ล้านบาท
                    <br />
                    (29.6%)
                  </h3>
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
                    {d.values.map((v, index) => (
                      <div
                        key={index}
                        className={`box rounded-md mb-0.5 relative pointer-events-auto pt-1 ${
                          hover_legend === v.title ? "is-hover" : ""
                        }`}
                        style={{
                          width: "52px",
                          height: `${v.value}%`,
                          border:
                            v.title === "อื่นๆ"
                              ? "2px solid rgba(255, 255, 255, 0.9)"
                              : "none",
                          background: getColor(v.title),
                        }}
                      >
                        {v.title !== "อื่นๆ" ? (
                          <h5 className="value text-xs text-black-default">
                            13.44%
                          </h5>
                        ) : null}
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
