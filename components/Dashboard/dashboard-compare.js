import React from 'react';

const compare = ({ selected_theme, data }) => {
  let title, unit;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    title = 'เปรียบเทียบจำนวนครั้งทั้งหมดที่น้ำท่วมแต่ละกลุ่มเขต';
    unit = 'ครั้ง';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    title = 'เปรียบเทียบจำนวนขยะแต่ละกลุ่มเขต';
    unit = 'ตร.ม./คน';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    title = 'เปรียบเทียบค่า BOD ในน้ำคลองแต่ละกลุ่มเขต';
    unit = 'มก./ลิตร';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    title = 'เปรียบเทียบสัดส่วนขยะมูลฝอยต่อประชากร 1 คนต่อวันแต่ละกลุ่มเขต';
    unit = 'กก./คน/วัน';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    title = 'เปรียบเทียบปัญหาฝุ่นควันสูงแต่ละกลุ่มเขต';
    unit = 'มค.ก./ลบ.ม.';
  }

  return (
    <div className="flex-1 card_cat_detail " style={{ height: 'fit-content' }}>
      <div
        className="flex justify-center px-5 py-1 font-bold text-center rounded-t text-white-default p2"
        style={{ backgroundColor: selected_theme.color }}
      >
        {title}
      </div>
      <div className="flex flex-col items-center py-2 font-bold rounded card_cat_detail ">
        {data.map((d, i) => (
          <div
            id="compare-wrapper"
            key={i}
            className="flex flex-row my-1"
            style={{
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.075)',
              width: '95%',
            }}
          >
            <div
              className="flex-1 py-4 pl-2 pr-5 rounded-l p2 text-white-default"
              style={{
                backgroundColor: i === 0 ? selected_theme.color : 'black',
              }}
            >
              {d.areaName}
            </div>
            <div
              className="flex items-center flex-1 px-2"
              style={{ color: selected_theme.text_color }}
            >
              <div className="pr-1 h4">{d.value}</div>
              <div className="ml-1 p2">{unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default compare;
