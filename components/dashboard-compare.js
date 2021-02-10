import React from "react";

const compare = ({ selected_theme }) => {
  return (
    <div className="flex-1 card_cat_detail " style={{ height: "fit-content" }}>
      <div
        className="flex justify-center px-5 py-1 text-center rounded-t text-white-default p2"
        style={{ backgroundColor: selected_theme.color }}
      >
        เปรียบเทียบสัดส่วนขยะมูลฝอยต่อประชากร 1 คน ต่อวันแต่ละกลุ่มเขต
      </div>
      <div className="flex items-center mx-3 my-3 font-bold rounded card_cat_detail ">
        <div
          className="flex-1 py-4 rounded-l p2 text-white-default"
          style={{ backgroundColor: selected_theme.color }}
        >
          ทุกเขตใน กรุงเทพมหานคร
        </div>
        <div
          className="flex items-baseline flex-1 pl-2"
          style={{ color: selected_theme.text_color }}
        >
          <div className="h4">1.798</div>
          <div className="ml-1 p2">กก./คน/วัน</div>
        </div>
      </div>
    </div>
  );
};
export default compare;
