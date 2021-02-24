import React from 'react';
import numeral from 'numeral';
import DonutChart from 'components/Dashboard/util/donut-chart';

const budget = ({ selected_theme, data, checked, state_dropdown }) => {
  let focused = data.budgetOverall.focused / 1000000;
  let percent = data.budgetOverall.focused / data.budgetOverall.all;
  let title, sub;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    title = 'ในการจัดการระบายน้ำและแก้ไขน้ำท่วม';
    sub = 'งบประมาณใช้ไปเพื่อจัดการระบายน้ำและแก้ไขน้ำท่วมในแต่ละปี';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    title = 'ในการพัฒนาสภาวะสิ่งแวดล้อม';
    sub = 'งบประมาณใช้ไปเพื่อพัฒนาสภาวะสิ่งแวดล้อมในแต่ละปี';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    title = 'ในการจัดการคุณภาพน้ำ';
    sub = 'งบประมาณใช้ไปเพื่อจัดการคุณภาพน้ำในแต่ละปี';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    title = 'ในการรักษาความสะอาดและจัดการขยะมูลฝอย';
    sub = 'งบประมาณใช้ไปเพื่อจัดการขยะมูลฝอยและรักษาความสะอาดในแต่ละปี';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    title = 'ในการจัดการคุณภาพอากาศและเสียง';
    sub = 'งบประมาณใช้ไปเพื่อจัดการคุณภาพอากาศและเสียงในแต่ละปี';
  }
  if (
    checked != 'เขตพื้นที่ทั้งหมด' ||
    (selected_theme.name === 'มลพิษในคลอง' && state_dropdown === 'zone') ||
    checked != 'เขตพื้นที่ทั้งหมด' ||
    (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน' && state_dropdown === 'zone')
  ) {
    return '';
  } else {
    return (
      <div id="budget" className="relative flex-1 mr-3 card_cat_detail">
        <div
          className="flex justify-center py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          งบประมาณที่ใช้ไป
        </div>
        <span className="flex flex-col items-center py-3 font-bold leading-snug">
          <p className="p2">ในปี 2555-2562 กทม. ใช้เงินงบประมาณ</p>
          <p className="h5" style={{ color: selected_theme.text_color }}>
            {numeral(focused).format('0,0')} ล้านบาท
          </p>
          <p className="p2">{title}</p>
        </span>
        <div className="flex justify-center">
          <DonutChart selected_theme={selected_theme} percent={percent * 100} />
        </div>
        <p className="px-4 mt-3 font-bold text-center p1">{sub}</p>
        <div className="flex justify-center py-3">bar chart</div>
        <div className="absolute bottom-0 flex justify-center w-full py-2 mt-3 font-bold rounded-b text-white-default bg-black-default p1">
          เกี่ยวกับงบประมาณกทม
        </div>
      </div>
    );
  }
};
export default budget;
