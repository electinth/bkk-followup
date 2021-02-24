import React from 'react';

const per_district = ({ selected_theme, district_data }) => {
  let unit, text_max, text_min;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    unit = 'ซม.';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    unit = 'ตร.ม./คน';
    text_max = 'ปีที่มีสัดส่วนพื้นที่สีเขียวมากที่สุด';
    text_min = 'ปีที่มีสัดส่วนพื้นที่สีเขียวน้อยที่สุด';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    unit = 'มก./ลิตร';
    text_max = 'ปีที่มีค่า BOD ในน้ำคลองสูงสุด';
    text_min = 'ปีที่มีค่า BOD ในน้ำคลองต่ำสุด';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    unit = 'กก./คน/วัน';
    text_max = 'ปีที่มีขยะมูลฝอยต่อคนต่อวันเยอะที่สุด';
    text_min = 'ปีที่มีขยะมูลฝอยต่อคนต่อวันน้อยที่สุด';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    unit = 'มค.ก./ลบ.ม.';
    text_max = 'ปีที่ค่าสูงสุดของ PM2.5 มากที่สุด';
    text_min = 'ปีที่ค่าสูงสุดของ PM2.5 น้อยที่สุด';
  }

  return (
    <div id="AVG" className="flex mt-3">
      <div className="flex-1 mr-3 card_cat_detail" id="AVG-left">
        <div
          className="flex justify-center py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          {text_min}
        </div>
        <div className="px-2 py-3">
          <p className="font-bold leading-tight h4">
            เขต{district_data.minimumPoint.districtName} ปี
            {district_data.minimumPoint.year}
          </p>
          <p
            style={{ color: selected_theme.text_color }}
            className="font-bold h4"
          >
            {district_data.minimumPoint.value} {unit}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 " id="AVG-right">
        <div className="flex-1 card_cat_detail">
          <div
            className="flex flex-col justify-center px-5 py-1 text-center rounded-t text-white-default p2"
            style={{ backgroundColor: selected_theme.color }}
          >
            {text_max}
          </div>
          <div className="px-2 py-3">
            <p className="font-bold leading-tight h4">
              เขต{district_data.maximumPoint.districtName} ปี
              {district_data.maximumPoint.year}
            </p>
            <p
              style={{ color: selected_theme.text_color }}
              className="font-bold h4"
            >
              {district_data.maximumPoint.value} {unit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default per_district;
