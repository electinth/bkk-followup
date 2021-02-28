import React from "react";
import numeral from "numeral";
import _ from "lodash";

export default function BudgetPageThree(props) {
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
  let chart_data = [
    {
      year: 2555,
      values: [
        {
          title: "การศึกษา",
          value: 6377129080,
        },
        {
          title: "สาธารณสุข",
          value: 4954041000,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 8817996000,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 7490564300,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 11745330820,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 9407826600,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 21207112200,
        },
      ],
    },
    {
      year: 2556,
      values: [
        {
          title: "การศึกษา",
          value: 9113839500,
        },
        {
          title: "สาธารณสุข",
          value: 5170299900,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 7228200700,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 5697053500,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 11511754000,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 13788670400,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 17390182000,
        },
      ],
    },
    {
      year: 2557,
      values: [
        {
          title: "การศึกษา",
          value: 5690207300,
        },
        {
          title: "สาธารณสุข",
          value: 5522328600,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 6951754400,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 5868312300,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 11604899100,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 14743038700,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 19619459600,
        },
      ],
    },
    {
      year: 2558,
      values: [
        {
          title: "การศึกษา",
          value: 5327612260,
        },
        {
          title: "สาธารณสุข",
          value: 5436231200,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 7501896200,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 6875239600,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 10721085000,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 13395895700,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 15742040040,
        },
      ],
    },
    {
      year: 2559,
      values: [
        {
          title: "การศึกษา",
          value: 5339825700,
        },
        {
          title: "สาธารณสุข",
          value: 5199125000,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 7109940700,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 9135334762,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 12415062000,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 13089534400,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 17711177438,
        },
      ],
    },
    {
      year: 2560,
      values: [
        {
          title: "การศึกษา",
          value: 4142355400,
        },
        {
          title: "สาธารณสุข",
          value: 6141582200,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 7459922417,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 6827092100,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 14743356700,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 11649415683,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 26749192000,
        },
      ],
    },
    {
      year: 2561,
      values: [
        {
          title: "การศึกษา",
          value: 5077764500,
        },
        {
          title: "สาธารณสุข",
          value: 6086651800,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 6559004200,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 5936177400,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 15934089400,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 13029289300,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
          value: 25877023400,
        },
      ],
    },
    {
      year: 2562,
      values: [
        {
          title: "การศึกษา",
          value: 4529808000,
        },
        {
          title: "สาธารณสุข",
          value: 6490147850,
        },
        {
          title: "การพัฒนาและบริการสังคม",
          value: 6207329598,
        },
        {
          title: "การระบายน้ำและกำจัดน้ำเสีย",
          value: 6281779301,
        },
        {
          title: "การโยธาและระบบจราจร",
          value: 15774401980,
        },
        {
          title: "การรักษาความสะอาดและความเป็นระเบียบเรียบร้อย",
          value: 12978587552,
        },
        {
          title: "การบริหารทั่วไป (สำหรับการจัดการภายในและการวางแผน)",
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
      className="budget-page-three bg-black-default fixed z-10 inset-x-0 bottom-0 pointer-events-none text-white-default"
      style={{ top: "60px" }}
    >
      <div className="container h-full mx-auto py-14">
        <div className="grid grid-cols-2 gap-5 h-full">
          <div className="left w-4/5">
            <h3 className="d3">8 ปีที่ผ่านมา กทม. ใช้งบประมาณไป</h3>

            <h2 className="d2">581,112,916,500 บาท</h2>

            <h4 className="d4 mt-6">งบประมาณ กทม. ใช้ไปกับอะไรบ้าง?</h4>

            {active_index === 6 ? (
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
            ) : null}
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
                        className="box rounded-md mb-0.5 relative pointer-events-auto cursor-pointer"
                        style={{
                          width: "52px",
                          height: `${v.percent}%`,
                          background: getColor(v.title),
                        }}
                      >
                        <div
                          className="tooltip text-xs bg-white-default rounded-md py-2 px-4 absolute -top-10 left-2/4 transform -translate-x-2/4 mx-auto text-black-default z-10 shadow-md pointer-events-none"
                          style={{ minWidth: "176px" }}
                        >
                          ปี {d.year}
                          <br />
                          <b>{v.title}</b>
                          <br />
                          {numeral(v.value / 1e7).format("0.00")} ล้านบาท (
                          {numeral(v.percent).format("0.00")}
                          %)
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
