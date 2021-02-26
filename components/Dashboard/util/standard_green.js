import React from 'react';

const std_green = ({ selected_theme }) => {
  return (
    <div
      id="standard-green"
      className="flex flex-col justify-center mt-3 text-center card_cat_detail"
    >
      <div
        id="gtk-header"
        className="py-1 rounded-t text-white-default p2"
        style={{ backgroundColor: selected_theme.color }}
      >
        ค่ามาตรฐานกำกับ
      </div>
      <div
        id="body-lo-wrapper"
        className="py-3 pl-6 overflow-auto p1"
        style={{ backgroundColor: selected_theme.color50 }}
      >
        <p className="font-bold h4">ค่ามาตรฐานกำกับ</p>
        <p
          className="font-bold h4"
          style={{ color: selected_theme.text_color }}
        >
          9 ตร.ม./คน
        </p>
        <p className="p1 ">(ตามมาตรฐานของ WHO)</p>
      </div>
    </div>
  );
};
export default std_green;
