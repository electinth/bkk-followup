import React from "react";

const ranking = ({ ranking_data, selected_theme, checked }) => {
  return (
    <div
      id="ranking_wrapper"
      className={
        checked === null || checked === "เขตพื้นที่ทั้งหมด"
          ? "card_cat_detail pt-3 mt-3"
          : "flex-1 card_cat_ranking card_cat_detail pt-3"
      }
      style={{ backgroundColor: selected_theme.color }}
    >
      {checked === null || checked === "เขตพื้นที่ทั้งหมด" ? (
        <div id="ranking_default">
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
              {ranking_data.map((rank, index) => (
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
          <div className="flex justify-center py-2 mt-3 font-bold rounded-b text-white-default bg-black-default p1">
            ดูการจัดอันดับทั้งหมด
          </div>
        </div>
      ) : (
        <div id="ranking_filter">
          <div className="flex justify-center rounded-t text-white-default p2">
            การจัดอันดับแต่ละเขต
          </div>
          <div className="flex justify-center mt-3 text-center text-white-default p1">
            ปริมาณขยะมูลฝอย
            <br />
            เรียงลำดับจากมากไปน้อย
          </div>
        </div>
      )}
    </div>
  );
};
export default ranking;
