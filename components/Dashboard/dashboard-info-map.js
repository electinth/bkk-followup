import React from 'react';
import * as d3 from 'd3';
import { isMobileOnly } from 'react-device-detect';
import noData from 'assets/images/no_data.svg';

const info_map = ({ selected_theme }) => {
  let infos, dots1, dots2;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    infos = [
      { id: 1, des: 'ระดับความสูงของน้ำโดยเฉลี่ย\nมากกว่าพื้นที่อื่น' },
      { id: 2, des: 'ระดับความสูงของน้ำโดยเฉลี่ย' },
      { id: 3, des: 'ระดับความสูงของน้ำโดยเฉลี่ย\nต่ำกว่าพื้นที่อื่น' },
    ];
    dots1 = [
      { w: '40px', h: '40px', color: '#1570FF', text: '100 cm +' },
      { w: '30px', h: '30px', color: '#3A87FF', text: '80 - 100 cm' },
      { w: '25px', h: '25px', color: '#609EFF', text: '60 - 79 cm' },
      { w: '20px', h: '20px', color: '#85B5FF', text: '40 - 59 cm' },
    ];
    dots2 = [
      {
        w: '15px',
        h: '15px',
        color: '#ABCCFF',
        text: '20 - 39 cm',
      },
      {
        w: '12px',
        h: '12px',
        color: '#D0E2FF',
        text: '0 - 19 cm',
      },
    ];
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    infos = [
      { id: 1, des: 'มีพื้นที่สีเขียวมากกว่ากำหนด' },
      { id: 2, des: 'ค่ามาตรฐานตามที่ WHO กำหนด\n(9 ตร.ม./คน)' },
      { id: 3, des: 'มีพื้นที่สีเขียวน้อยกว่ากำหนด' },
    ];
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    infos = [
      { id: 1, des: 'BOD ในน้ำคลองโดยเฉลี่ย\nเกินมาตรฐาน' },
      { id: 2, des: 'ค่่า BOD มาตรฐาน\n(ไม่เกิน 15 มก./ลิตร)' },
      { id: 3, des: 'BOD ในน้ำคลองโดยเฉลี่ย\nต่ำกว่ามาตรฐาน' },
    ];
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    infos = [
      { id: 1, des: 'จำนวนขยะต่อคนต่อวัน\nมากกว่าพื้นที่อื่นโดยเฉลี่ย' },
      { id: 2, des: 'ปริมาณขยะต่อคนต่อวัน\nโดยเฉลี่ยแต่ละปี' },
      { id: 3, des: 'จำนวนขยะต่อคนต่อวัน\nน้อยกว่าพื้นที่อื่นโดยเฉลี่ย' },
    ];
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    infos = [
      { id: 1, des: 'มีค่าฝุ่นมากกว่าที่กำหนด' },
      { id: 2, des: 'ค่าฝุ่นละออง PM2.5\n(ไม่เกิน 25 มคก./ลบ.ม.)' },
      { id: 3, des: 'มีค่าฝุ่นน้อยกว่าที่กำหนด' },
    ];
  }
  if (isMobileOnly) {
    infos = infos.filter((x) => x.id == 2);
  }

  const new_line = (text) => {
    return text.split('\n').map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });
  };

  setTimeout(() => {
    if (!isMobileOnly) {
      d3.selectAll('.circle0')
        .append('circle')
        .attr('class', 'info-circle0')
        .attr('r', 20)
        .attr('cx', 20)
        .attr('cy', 20)
        .style('fill', selected_theme.color);
    }
    if (!isMobileOnly) {
      d3.selectAll('.circle2')
        .append('circle')
        .attr('class', 'info-circle')
        .attr('r', 5)
        .attr('cx', 20)
        .attr('cy', 20)
        .style('fill', '#FFFFFF');
    }

    d3.selectAll('.circle')
      .append('circle')
      .attr('class', 'info-circle')
      .attr('r', 10)
      .attr('cx', 20)
      .attr('cy', 20)
      .style('fill', 'none')
      .style('stroke-width', 1)
      .style('stroke', 'white')
      .style('stroke-linecap', 'round')
      .style('stroke-dasharray', '5 4');
  }, 100);

  d3.select('.info-circle0').style('fill', selected_theme.color);

  return (
    <div
      className="absolute bottom-0 right-0 flex flex-col items-start flex-1 px-10 pb-5 text-white-default lg:relative "
      id="info-map-wrpper"
    >
      {selected_theme.name != 'น้ำท่วมถนน' ? (
        infos.map((info, index) => (
          <div id="wrapper" key={index} className="flex items-center">
            <div id="circle-wrpper" style={{ width: '40px', height: '40px' }}>
              <svg className={`circle circle${index}`} />
            </div>
            <p className="pl-3 mt-1 leading-4 p2">{new_line(info.des)}</p>
          </div>
        ))
      ) : !isMobileOnly ? (
        <div id="flood-wrapper" className="flex w-full">
          <div className="flex flex-col items-center flex-1" id="dot1">
            {dots1.map((dot, index) => (
              <div
                key={index}
                className="flex w-full"
                style={{ height: '40px' }}
              >
                <div className="flex items-center justify-end flex-1 my-1">
                  <span
                    className="rounded-full dot"
                    style={{
                      height: dot.h,
                      width: dot.w,
                      backgroundColor: dot.color,
                    }}
                  />
                </div>
                <p
                  className="flex items-center pl-2 font-bold p2"
                  style={{ flex: '2' }}
                >
                  {dot.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center flex-1" id="dot2">
            {dots2.map((dot, index) => (
              <div
                key={index}
                className="flex w-full"
                style={{ height: '40px' }}
              >
                <div className="flex items-center justify-end flex-1 my-1">
                  <span
                    className="rounded-full dot"
                    style={{
                      height: dot.h,
                      width: dot.w,
                      backgroundColor: dot.color,
                    }}
                  />
                </div>
                <p
                  className="flex items-center pl-2 font-bold p2"
                  style={{ flex: '2' }}
                >
                  {dot.text}
                </p>
              </div>
            ))}
            <div className="flex w-full" style={{ height: '40px' }}>
              <div className="flex items-center justify-end flex-1 my-1">
                <img src={noData} alt="noData" style={{ height: '19px' }} />
              </div>
              <p
                className="flex items-center pl-2 font-bold p2"
                style={{ flex: '2' }}
              >
                ไม่มีข้อมูล
              </p>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default info_map;
