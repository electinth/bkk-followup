import React, { useState } from "react";
import Layout from "../layouts/layout";
import { useRouter } from "next/router";
import Category_Manu from "../components/dashboard_category_manu";
import _ from "lodash";

const dashboard = () => {
  const category = [
    {
      name: "น้ำท่วมถนน",
      color: "#1570FF",
      text_color: "#0F52BB",
    },
    {
      name: "พื้นที่สีเขียว",
      color: "#00C853",
      text_color: "#007832",
    },
    {
      name: "มลพิษในคลอง",
      color: "#FF9E0D",
      text_color: "#CC7E0A",
    },
    {
      name: "ขยะมูลฝอย",
      color: "#DF3A6B",
      text_color: "#B22E56",
    },

    {
      name: "ฝุ่นควันเกินมาตรฐาน",
      color: "#476A8B",
      text_color: "#344E66",
    },
  ];
  const mock_ranking = [
    {
      name: "หนองจอก",
      value: "0.729",
    },
    {
      name: "หนองจอก",
      value: "0.729",
    },
    {
      name: "หนองจอก",
      value: "0.729",
    },
  ];
  const router = useRouter();

  let selected_theme = _.find(category, function (cat) {
    return cat.name === router.query.location;
  });

  if (selected_theme != null) {
    console.log("dashboard");
    return (
      <Layout id="dashboard">
        <div
          id="dashboard-wrapper"
          className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden"
          style={{ paddingTop: "60px" }}
        >
          <div className="flex-1 bg-pink-light">1</div>
          <div
            id="dashboard-right"
            className="flex flex-col flex-1 px-5 py-5 overflow-auto"
          >
            <Category_Manu category={category} />
            <div
              id="card-title"
              className="flex justify-center py-6 mt-3 text-center text-white-default card_cat_detail"
              style={{ backgroundColor: selected_theme.color }}
            >
              <span>
                <p className="d4">สถานการณ์{selected_theme.name}</p>
                <p className="h3">กรุงเทพมหานคร</p>
                <p className="h4">ภาพรวมย้อนหลัง 8 ปี (2555-2562)</p>
              </span>
            </div>
            <div
              id="good-to-know"
              className="flex flex-col justify-center mt-3 text-center card_cat_detail"
            >
              <div
                id="gtk-header"
                className="py-1 rounded-t text-white-default p2"
                style={{ backgroundColor: selected_theme.color }}
              >
                ข้อควรรู้
              </div>
              <span className="my-4 ">
                <p className="px-32 font-bold leading-tight h3">
                  เมื่อรายได้ค่าเก็บขยะคิดเป็นเพียง 5%
                  ของค่าใช้จ่ายในการเก็บขยะ..
                </p>
                <p className="px-5 mt-3 leading-tight p2">
                  รู้หรือไม่? กทม.
                  ใช้งบประมาณในการรักษาความสะอาดและจัดการขยะมูลฝอยในแต่ละปีไม่ต่ำกว่า
                  10,000 ล้านบาท แต่มีรายได้มาชดเชยภาระตรงนี้เพียงปีละประมาณ 500
                  ล้านซึ่งคิดเป็นแค่ 5% เท่านั้น และนับวัน
                  ปริมาณขยะก็ยังคงเพิ่มขึ้นอย่างต่อเนื่อง
                </p>
              </span>
            </div>
            <div id="AVG" className="flex mt-3">
              <div className="flex-1 mr-3 card_cat_detail" id="AVG-left">
                <div
                  className="flex justify-center py-1 rounded-t text-white-default p2"
                  style={{ backgroundColor: selected_theme.color }}
                >
                  ค่าเฉลี่ย
                </div>
                <div className="px-2 py-3">
                  <p className="font-bold leading-tight h4">
                    จำนวนขยะมูลฝอยต่อประชากรต่อคนโดยเฉลี่ย
                  </p>
                  <p
                    style={{ color: selected_theme.text_color }}
                    className="font-bold h5"
                  >
                    1.80
                  </p>
                  <p
                    style={{ color: selected_theme.text_color }}
                    className="font-bold h3"
                  >
                    กก./คน/วัน
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-1 " id="AVG-right">
                <div className="flex-1 card_cat_detail">
                  <div
                    className="flex justify-center py-1 rounded-t text-white-default p2"
                    style={{ backgroundColor: selected_theme.color }}
                  >
                    เขตที่ขยะน้อยที่สุด
                  </div>
                  <div className="px-2 py-3 leading-tight">
                    <p className="font-bold h4">เขตหนองจอก ปี 2555 </p>
                    <span
                      className="flex flex-row font-bold h4"
                      style={{ color: selected_theme.text_color }}
                    >
                      <p>0.67</p>
                      <p className="pl-2"> กก./คน/วัน</p>
                    </span>
                  </div>
                </div>
                <div className="flex-1 mt-3 card_cat_detail">
                  <div
                    className="flex justify-center py-1 rounded-t text-white-default p2"
                    style={{ backgroundColor: selected_theme.color }}
                  >
                    เขตที่ขยะมากที่สุด
                  </div>
                  <div className="px-2 py-3 leading-tight">
                    <p className="font-bold h4">เขตปทุมวัน ปี 2562 </p>
                    <span
                      className="flex flex-row font-bold h4"
                      style={{ color: selected_theme.text_color }}
                    >
                      <p>6.53</p>
                      <p className="pl-2"> กก./คน/วัน</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="graph-trend" className="mt-3 card_cat_detail">
              <div
                className="flex justify-center py-1 rounded-t text-white-default p2"
                style={{ backgroundColor: selected_theme.color }}
              >
                แนวโน้มของ 8 ปีที่ผ่านมา
              </div>
              <div className="px-2 py-3 leading-tight">
                <div className="flex justify-center px-24 font-bold text-center h4">
                  แนวโน้มจำนวนขยะมูลฝอยต่อประชากรต่อวัน (กก.) ตั้งแต่ปี
                  2555-2562
                </div>
                <div className="flex justify-center mt-3">GRAPH</div>
              </div>
            </div>
            <div
              id="ranking"
              className="py-3 mt-3 card_cat_detail"
              style={{ backgroundColor: selected_theme.color }}
            >
              <div className="flex justify-center rounded-t text-white-default p2">
                การจัดอันดับแต่ละเขต
              </div>
              <div className="flex justify-center mt-3 text-white-default h4">
                เรียงตามเขตที่มีขยะมูลฝอยน้อยที่สุด-มากที่สุด
              </div>
              <div id="less-most" className="flex mt-5">
                <div className="flex-1 px-2">
                  <div className="font-bold p1 text-white-default">
                    3 เขตขยะน้อยที่สุด
                  </div>
                  {mock_ranking.map((rank, index) => (
                    <div
                      key={index}
                      className="flex px-3 py-3 my-2 font-bold rounded bg-white-default p2"
                    >
                      <div className="flex flex-row flex-1">
                        <div className="mr-2">{index + 1}</div>
                        <p>{rank.name}</p>
                      </div>
                      <div
                        className="flex flex-row flex-1"
                        style={{ color: selected_theme.text_color }}
                      >
                        <div>{rank.value}</div>
                        <div className="ml-2"> กก./คน/วัน</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 px-2">
                  <div className="font-bold p1 text-white-default">
                    3 เขตขยะมากที่สุด
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return <div>loading</div>;
  }
};

export default dashboard;
