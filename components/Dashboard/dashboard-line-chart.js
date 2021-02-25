import React from 'react';
import LineChart from 'components/Dashboard/util/line-chart';
import dashImg from 'assets/images/dash.svg';

const line_chart = ({ selected_theme, data }) => {
  let title, sub, dis, note;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    title = 'จำนวนครั้งที่น้ำท่วมขังถนน (ครั้ง) ';
    sub = 'ตั้งแต่ปี 2555-2562';
    dis = 'ระดับน้ำท่วมบนถนนเฉลี่ย 22.53 ซม.';
    note = 'ยิ่งระดับน้ำท่วมต่ำ ยิ่งดี และควรมีระดับน้ำท่วมถนนต่ำกว่าค่าเฉลี่ย';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    title = 'แนวโน้มของสัดส่วนพื้นที่สีเขียวต่อประชากร 1 คน (ตร.ม.)';
    sub = 'ตั้งแต่ปี 2555-2562';
    dis = 'ค่ามาตรฐาน ตาม WHO 9 ตร.ม.';
    note = 'ยิ่งมาก ยิ่งดี และควรมีสัดส่วนพื้นที่มากกว่ามาตรฐาน WHO';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    title = 'แนวโน้มค่า BOD ในน้ำคลองโดยเฉลี่ย (มก./ลิตร)';
    sub = 'ตั้งแต่ปี 2555-2562';
    dis = 'ค่่า BOD มาตรฐาน (ไม่เกิน 15 มก./ลิตร)';
    note = 'ยิ่งน้อย ยิ่งดี และควรมีค่า BOD ไม่เกินกว่ามาตรฐานที่กำหนด';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    title = 'ปริมาณขยะมูลฝอยเฉพาะพื้นที่ กทม.';
    sub = 'เมื่อเทียบกับทั้งประเทศ (กก./คน/วัน)';
    dis = 'ปริมาณขยะต่อคนต่อวันของทั้งประเทศ';
    note = 'ยิ่งน้อย ยิ่งดี และควรมีสัดส่วนขยะน้อยกว่าค่าเฉลี่ย';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    title = 'แนวโน้มค่าสูงสุดของ PM2.5 (มคก./ลบ.ม.) ';
    sub = 'ตั้งแต่ปี 2555-2562';
    dis = 'ค่าฝุ่นละออง PM2.5 (ไม่เกิน 25 มคก./ลบ.ม.)';
    note = 'ยิ่งน้อย ยิ่งดี และควรมีฝุ่นละออง PM2.5 ไม่เกินกว่ามาตรฐานที่กำหนด';
  }
  return (
    <div id="graph-trend" className="mt-3 card_cat_detail">
      <div
        className="flex justify-center py-1 rounded-t text-white-default p2"
        style={{ backgroundColor: selected_theme.color }}
      >
        แนวโน้มของ 8 ปีที่ผ่านมา
      </div>
      <div className="px-2 py-3 leading-tight">
        <div className="flex flex-col justify-center px-24 font-bold text-center h4">
          <p>{title}</p>
          <p>{sub}</p>
        </div>
        <div className="flex justify-center mt-3">
          <LineChart selected_theme={selected_theme} data_line_chart={data} />
        </div>
        <div id="line-chart-footer" className="flex flex-col items-center mt-4">
          <span className="flex">
            <img src={dashImg} alt="dashImg" className="mr-3" />
            <p className="font-bold p2">{dis}</p>
          </span>
          <span className="flex mt-2 p1">
            <p className="mr-2 font-bold">หมายเหตุ</p>
            <p>{note}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default line_chart;
