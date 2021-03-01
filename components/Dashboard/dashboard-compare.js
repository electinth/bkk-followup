import React from 'react';

const compare = ({ selected_theme, data, SET_CHECKED, SET_STATE_DROPDOWN }) => {
  let title, unit;
  let arr_filter = [
    'เขตพื้นที่ทั้งหมด',
    'เขตพื้นที่อยู่อาศัย',
    'เขตพื้นที่ชานเมือง',
    'เขตพื้นที่ท่องเที่ยวและวัฒนธรรม',
    'เขตพื้นที่ธุรกิจ',
  ];
  if (selected_theme.name === 'น้ำท่วมถนน') {
    title = 'เปรียบเทียบจำนวนครั้งทั้งหมดที่น้ำท่วมแต่ละกลุ่มเขต';
    unit = 'ครั้ง';
    data = _.drop(data);
    arr_filter = _.drop(arr_filter);
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

  let arr_img = {
    ทุกเขตในกรุงเทพมหานคร: require('assets/images/by_all_w.svg'),
    พื้นที่ศูนย์กลางธุรกิจและพาณิชยกรรม: require('assets/images/by_business_w.svg'),
    พื้นที่อนุรักษ์ศิลปวัฒนธรรมและส่งเสริมการท่องเที่ยว: require('assets/images/by_business_w.svg'),
    ทุกเขตพื้นที่อยู่อาศัย: require('assets/images/by_residence_w.svg'),
    ทุกเขตพื้นที่อยู่อาศัยชานเมือง: require('assets/images/by_suburb_w.svg'),
  };

  const clickOverAll = (_, filter) => {
    SET_STATE_DROPDOWN('group');
    SET_CHECKED(filter);
  };

  return (
    <div
      className="flex-1 mt-3 card_cat_detail md:mt-0"
      style={{ height: 'fit-content' }}
    >
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
              className="flex flex-1 py-4 pl-2 pr-5 rounded-l cursor-pointer p2 text-white-default"
              style={{
                backgroundColor:
                  i === 0
                    ? selected_theme.name === 'น้ำท่วมถนน'
                      ? 'black'
                      : selected_theme.color
                    : 'black',
              }}
              onClick={() => clickOverAll(_, arr_filter[i])}
            >
              <img
                src={arr_img[`${d.areaName}`]}
                alt="compare-icon"
                className="mr-2 pointer-events-none"
              />
              <p className="pointer-events-none">{d.areaName}</p>
            </div>
            <div className="flex flex-col flex-1 px-2 pt-1">
              <span
                className="flex flex-row items-center"
                style={{ color: selected_theme.text_color }}
              >
                <p className="pr-1 h4">{d.value}</p>
                <p className="ml-1 p2">{unit}</p>
              </span>
              <p
                style={{ color: '#344E66' }}
                className="underline opacity-50 cursor-pointer p2"
                onClick={() => clickOverAll(_, arr_filter[i])}
              >
                ดูภาพรวมของกลุ่ม
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default compare;
