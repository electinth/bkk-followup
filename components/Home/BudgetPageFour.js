import React, { useState } from "react";
import _ from "lodash";
import numeral from "numeral";
import { isMobile } from "react-device-detect";

export default function BudgetPageFour(props) {
  const { active_index } = props;
  const [hover_legend, setHoverLegend] = useState(null);
  const chart_legends = [
    {
      title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
      color: "#00C853",
      value: 172034132397,
      percent: 29.6,
    },
    {
      title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
      color: "#CCF4DD",
      value: 104449979000,
      percent: 18.0,
    },
    {
      title: "งานรักษาความสะอาด",
      color: "#DAE1E8",
      value: 94887660735,
      percent: 16.3,
    },
    {
      title: "อื่นๆ",
      color: "black",
      value: 412040688835,
      percent: 70.9,
    },
  ];
  let chart_data = [
    {
      year: 2555,
      values: [
        {
          title: "อื่นๆ",
          value: 49690262400,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 11745330820,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 11000391100,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 21207112200,
        },
      ],
    },
    {
      year: 2556,
      values: [
        {
          title: "อื่นๆ",
          value: 49435413000,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 11511754000,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 12478124100,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 17390182000,
        },
      ],
    },
    {
      year: 2557,
      values: [
        {
          title: "อื่นๆ",
          value: 48598911100,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 11604899100,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 13328421600,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 19619459600,
        },
      ],
    },
    {
      year: 2558,
      values: [
        {
          title: "อื่นๆ",
          value: 43352395700,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 10721085000,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 12054632300,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 15742040040,
        },
      ],
    },
    {
      year: 2559,
      values: [
        {
          title: "อื่นๆ",
          value: 46011061638,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 12415062000,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 11946842700,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 17711177438,
        },
      ],
    },
    {
      year: 2560,
      values: [
        {
          title: "อื่นๆ",
          value: 57343687300,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 14743356700,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 10481866083,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 26749192000,
        },
      ],
    },
    {
      year: 2561,
      values: [
        {
          title: "อื่นๆ",
          value: 58178763652,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 15934089400,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 11869146200,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 25877023400,
        },
      ],
    },
    {
      year: 2562,
      values: [
        {
          title: "อื่นๆ",
          value: 59430194045,
        },
        {
          title: "งานก่อสร้างโครงสร้างพื้นฐานและวิศวกรรมจราจร",
          value: 15774401980,
        },
        {
          title: "งานรักษาความสะอาด",
          value: 11728236652,
        },
        {
          title: "บริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 27737945719,
        },
      ],
    },
  ];
  chart_data = _.map(chart_data, (d) => {
    const sum = _.sumBy(d.values, "value");
    return {
      year: d.year,
      values: _.map(d.values, (v) => {
        return {
          ...v,
          percent: (v.value * 100) / sum,
        };
      }),
    };
  });

  const getColor = (title) => {
    const legend = chart_legends.find((l) => l.title === title);
    return _.get(legend, "color");
  };

  return (
    <div
      className="budget-page-four bg-black-default text-white-default fixed z-10 inset-0 pointer-events-none"
      style={{ top: "60px" }}
    >
      <div className="container h-full mx-auto py-5 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
          <div className="left lg:w-4/5">
            <h2 className="d2">3 ประเด็นที่งบกทม. ถูกใชัมากที่สุด</h2>

            {!isMobile || active_index === 7 ? (
              <ul className="legends mt-6 lg:mt-9">
                {chart_legends.map((l) => (
                  <li
                    key={l.title}
                    className="flex items-center py-4 lg:py-5 px-4 lg:px-9 mb-0.5 rounded-md cursor-pointer pointer-events-none lg:pointer-events-auto"
                    style={{
                      background: l.color,
                      color: l.title === "อื่นๆ" ? "white" : "black",
                      border:
                        l.title === "อื่นๆ"
                          ? "2px solid rgba(255, 255, 255, 0.9)"
                          : "none",
                    }}
                    onMouseOver={() => setHoverLegend(l.title)}
                    onMouseLeave={() => setHoverLegend(null)}
                  >
                    <div className="title d5 flex-1">{l.title}</div>

                    <h3 className="value flex-none ml-3 text-right">
                      {numeral(l.value / 1e7).format("0,0")} ล้านบาท
                      <br />({l.percent}%)
                    </h3>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {!isMobile || active_index === 8 ? (
            <>
              <div className="right flex items-center">
                <div className="chart text-center grid grid-cols-8 gap-2 lg:gap-4 w-full lg:w-auto">
                  {chart_data.map((d) => (
                    <div key={d.year} className="bar">
                      <div
                        className="box-wrap flex flex-col"
                        style={{
                          height: isMobile ? "calc(100vh - 380px)" : "560px",
                        }}
                      >
                        {d.values.map((v, index) => (
                          <div
                            key={index}
                            className={`box rounded-md mb-0.5 pt-1 ${
                              hover_legend === v.title ? "is-hover" : ""
                            }`}
                            style={{
                              width: isMobile ? "100%" : "52px",
                              height: `${v.percent}%`,
                              border:
                                v.title === "อื่นๆ"
                                  ? "2px solid rgba(255, 255, 255, 0.9)"
                                  : "none",
                              background: getColor(v.title),
                            }}
                          >
                            {v.title !== "อื่นๆ" ? (
                              <h5 className="value text-xs text-black-default">
                                {numeral(v.percent).format("0.00")}%
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

              {isMobile ? (
                <ul className="legends">
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
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
