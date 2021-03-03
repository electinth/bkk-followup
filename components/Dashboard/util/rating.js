import React from 'react';

const rating = (selected_theme, rank_text, district_data) => {
  if (district_data) {
    return (
      <div className="flex flex-col flex-1 " id="AVG-right">
        <div className="flex-1 card_cat_detail">
          <div
            className="flex flex-col justify-center px-5 py-1 text-center rounded-t text-white-default p2"
            style={{ backgroundColor: selected_theme.color }}
          >
            <p>อันดับ</p>
          </div>
          <div className="px-2 py-3 leading-tight">
            <span className="flex flex-col">
              <p className="font-bold h4">{rank_text}</p>
              <p
                className="font-bold h2"
                style={{ color: selected_theme.text_color }}
              >
                {district_data.ranked}/50
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
};

export default rating;
