import React from 'react';

const location_water = ({ selected_theme, data }) => {
  if (data) {
    return (
      <div
        id="good-to-know"
        className="flex flex-col justify-center mt-3 text-center card_cat_detail"
        style={{ maxHeight: '50%' }}
      >
        <div
          id="gtk-header"
          className="py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          บริเวณที่มักมีน้ำท่วมขัง
        </div>
        <div
          id="body-lo-wrapper"
          className="py-3 pl-6 overflow-auto p1"
          style={{ backgroundColor: selected_theme.color50 }}
        >
          {data.map((lo, index) => (
            <div key={index} className="flex justify-start py-1">
              <p className="font-bold">•{lo.name}</p>
              <p className="pl-1">{lo.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return '';
  }
};

export default location_water;
