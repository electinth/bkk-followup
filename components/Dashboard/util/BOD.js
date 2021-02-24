import React from 'react';

const BOD = ({ selected_theme }) => {
  return (
    <div
      id="BOD"
      className="flex flex-col justify-center mt-3 text-center card_cat_detail"
    >
      <div
        id="BOD-header"
        className="py-1 rounded-t text-white-default p2"
        style={{ backgroundColor: selected_theme.color }}
      >
        ค่ามาตรฐานกำกับ
      </div>
      <div id="BOD-body" className="flex flex-col items-center py-3">
        <div className="font-bold p1">
          ค่า BOD (Biological Oxygen Demand, BOD)
        </div>
        <span style={{ color: selected_theme.text_color }} className="flex flex-row font-bold h4">
          <p className='pr-2'>15</p>
          <p>มิลลิกรัมต่อลิตร</p>
        </span>
        <div className="p1">มาตรฐานตามที่กรมควบคุมมลพิษกำหนด</div>
      </div>
    </div>
  );
};

export default BOD;
