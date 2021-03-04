import React from 'react';

const max_min_flood = ({ selected_theme, data }) => {
  return (
    <div id="max_min_flood" className="flex mt-3">
      <div className="flex-1 mr-3 card_cat_detail" id="AVG-left">
        <div
          className="flex justify-center py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          เขตที่มีน้ำท่วมถนนบ่อยที่สุด
        </div>
        <div className="px-2 py-3">
          <p className="font-bold leading-tight h4">
            เขต{data.maximumPoint.districtName} {data.maximumPoint.year}
          </p>
          <p
            style={{ color: selected_theme.text_color }}
            className="font-bold h4"
          >
            {data.maximumPoint.value} ครั้ง
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 " id="AVG-right">
        <div className="flex-1 card_cat_detail">
          <div
            className="flex flex-col justify-center px-3 py-1 text-center rounded-t text-white-default p2"
            style={{ backgroundColor: selected_theme.color }}
          >
            เขตที่มีน้ำท่วมบนถนนสูงสุด
          </div>
          <div
            className="px-2 py-3"
            style={{ backgroundColor: selected_theme.color50 }}
          >
            <p className="font-bold leading-tight h4">
              เขต{data.meanFloodLevelMaximumPoint.districtName}
            </p>
            <p
              style={{ color: selected_theme.text_color }}
              className="font-bold h4"
            >
              {data.meanFloodLevelMaximumPoint.value} ซม.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default max_min_flood;
