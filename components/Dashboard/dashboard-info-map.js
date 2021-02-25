import React, { useEffect } from 'react';
import * as d3 from 'd3';

const info_map = ({ selected_theme }) => {
  let infos;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    infos = [
      { des: 'ระดับความสูงของน้ำโดยเฉลี่ย\nมากกว่าพื้นที่อื่น' },
      { des: 'ระดับความสูงของน้ำโดยเฉลี่ย' },
      { des: 'ระดับความสูงของน้ำโดยเฉลี่ย\nต่ำกว่าพื้นที่อื่น' },
    ];
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    infos = [
      { des: 'มีพื้นที่สีเขียวมากกว่ากำหนด' },
      { des: 'ค่ามาตรฐานตามที่ WHO กำหนด\n(9 ตร.ม./คน)' },
      { des: 'มีพื้นที่สีเขียวน้อยกว่ากำหนด' },
    ];
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    infos = [
      { des: 'BOD ในน้ำคลองโดยเฉลี่ย\nเกินมาตรฐาน' },
      { des: 'ค่่า BOD มาตรฐาน\n(ไม่เกิน 15 มก./ลิตร)' },
      { des: 'BOD ในน้ำคลองโดยเฉลี่ย\nต่ำกว่ามาตรฐาน' },
    ];
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    infos = [
      { des: 'จำนวนขยะต่อคนต่อวัน\nมากกว่าพื้นที่อื่นโดยเฉลี่ย' },
      { des: 'ปริมาณขยะต่อคนต่อวัน\nโดยเฉลี่ยแต่ละปี' },
      { des: 'จำนวนขยะต่อคนต่อวัน\nน้อยกว่าพื้นที่อื่นโดยเฉลี่ย' },
    ];
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    infos = [
      { des: 'มีค่าฝุ่นมากกว่าที่กำหนด' },
      { des: 'ค่าฝุ่นละออง PM2.5\n(ไม่เกิน 25 มคก./ลบ.ม.)' },
      { des: 'มีค่าฝุ่นน้อยกว่าที่กำหนด' },
    ];
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

  useEffect(() => {
    d3.selectAll('.circle0')
      .append('circle')
      .attr('class', 'info-circle0')
      .attr('r', 20)
      .attr('cx', 20)
      .attr('cy', 20)
      .style('fill', selected_theme.color);

    d3.selectAll('.circle2')
      .append('circle')
      .attr('class', 'info-circle')
      .attr('r', 5)
      .attr('cx', 20)
      .attr('cy', 20)
      .style('fill', '#FFFFFF');

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
  }, [selected_theme]);

  d3.select('.info-circle0').style('fill', selected_theme.color);

  return (
    <div className="flex-1 px-10 pb-5 text-white-default" id="info-map-wrpper">
      {infos.map((info, index) => (
        <div id="wrapper" key={index} className="flex items-center">
          <div id="circle-wrpper" style={{ width: '40px', height: '40px' }}>
            <svg className={`circle circle${index}`} />
          </div>
          <p className="pl-3 mt-1 leading-4 p2">{new_line(info.des)}</p>
        </div>
      ))}
    </div>
  );
};

export default info_map;
