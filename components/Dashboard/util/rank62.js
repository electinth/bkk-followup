import React from 'react';

const rank62 = ({ selected_theme, data }) => {
  let title, sub, standard, avg, height_rank, low_rank, unit;

  if (selected_theme.name === 'น้ำท่วมถนน') {
    title = 'อันดับน้ำท่วมกรุงเทพมหานคร';
    sub = 'จำนวนครั้งที่มีน้ำท่วมบนถนน (ครั้ง)';
    unit = 'ครั้ง';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    title = 'อันดับพื้นที่สีเขียวในกรุงเทพมหานคร';
    sub = 'ปริมาณพื้นที่สีเขียวต่อคนต่อวัน (ตร.ม./คน)';
    standard = 9;
    avg = 'ค่ามาตรฐานตาม WHO 9 ตร.ม./คน';
    unit = 'ตร.ม./คน';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    title = 'อันดับค่ามลพิษในคลองกรุงเทพมหานคร';
    sub = 'ปริมาณมลพิษในคลอง (มก./ลบ.ซม.)';
    standard = 15;
    avg = 'ค่่า BOD มาตรฐาน (ไม่เกิน 15 มก./ลิตร)';
    unit = 'ตร.ม./คน';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    title = 'อันดับขยะมูลฝอยในกรุงเทพมหานคร';
    sub = 'ปริมาณขยะต่อคนต่อวัน (กก./คน/วัน)';
    standard = 1.8;
    avg = 'ปริมาณขยะมูลฝอยต่อคนต่อวันโดยทั้งประเทศ ปี 2562 คือ 1.180 กก.';
    unit = 'กก./คน/วัน';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    title = 'อันดับค่าฝุ่นควันในกรุงเทพมหานคร';
    sub = 'ค่าฝุ่นควันสูงสุด ( มคก./ลบ.ม.)';
    standard = 25;
    avg = 'ค่าฝุ่นละออง PM2.5 (ไม่เกิน 25 มคก./ลบ.ม.)';
    unit = 'kg/คน/วัน';
  }

  height_rank = _.filter(data, (d) => {
    if (selected_theme.name != 'น้ำท่วมถนน') {
      return d.value > standard;
    } else {
      return data;
    }
  });
  low_rank = _.filter(data, (d) => d.value < standard);

  return (
    <div id="rank62">
      <div
        id="rank62-header"
        className="flex flex-col justify-center mt-3 text-center text-white-default"
      >
        <p className="font-bold d4">{title}</p>
        <p className="font-bold h4">ข้อมูลประจำปี 2562</p>
        <span className="flex m-auto p1">
          <p>{sub}</p>
          <p className="font-bold">เรียงลำดับมากไปน้อย</p>
        </span>
      </div>
      <div id="list-body" className="px-3 pt-2">
        {height_rank.map((rank, index) => (
          <div
            key={index}
            className="flex px-3 py-3 my-1 font-bold rounded bg-white-default p2"
          >
            <div className="flex flex-row items-center flex-1">
              <div className="mr-2 circle_wrapper">{index + 1}</div>
              <p>{rank.districtName}</p>
            </div>
            <div
              className="flex flex-row items-center justify-end flex-1"
              style={{ color: selected_theme.text_color }}
            >
              <div>{rank.value}</div>
              <div className="ml-2 font-bold p2">{unit}</div>
            </div>
          </div>
        ))}
        <p className="flex justify-center p2 text-white-default">{avg}</p>
        {low_rank.map((rank, index) => (
          <div
            key={index}
            className="flex px-3 py-3 my-1 font-bold rounded bg-white-default p2"
          >
            <div className="flex flex-row items-center flex-1">
              <div className="mr-2 circle_wrapper">
                {height_rank.length + 1 + index}
              </div>
              <p>{rank.districtName}</p>
            </div>
            <div
              className="flex flex-row items-center justify-end flex-1"
              style={{ color: selected_theme.text_color }}
            >
              <div>{rank.value}</div>
              <div className="ml-2 font-bold p2">{unit}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        id="note"
        className="flex flex-col px-2 py-3 mx-3 my-1 font-bold rounded bg-white-default p2"
      >
        <p className="font-bold h4">หมายเหตุ</p>
        <p className="p3">
          ที่มาข้อมูล: สํานักยุทธศาสตร์และประเมินผล และสำนักงบประมาณ
          กรุงเทพมหานคร
        </p>
      </div>
    </div>
  );
};

export default rank62;
