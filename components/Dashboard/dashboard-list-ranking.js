import React from 'react';

const listRanking = ({ selected_theme, data }) => {
  let title, subtitle, unit, standard, height_rank, low_rank, std_text;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    title = 'ระดับน้ำท่วมบนถนน';
    subtitle = 'เรียงลำดับจากมากไปน้อย';
    unit = 'ครั้ง';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    title = 'ปริมาณพื้นที่สีเขียว ปี 2562';
    subtitle = 'เรียงลำดับจากมากไปน้อย';
    unit = 'ตร.ม./คน';
    standard = 9;
    std_text = 'ค่ามาตรฐานตาม WHO 9 ตร.ม./คน';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    title = 'ค่า BOD ในน้ำคลอง ปี 2562';
    subtitle = 'เรียงลำดับจากมากไปน้อย';
    unit = 'มก./ลิตร';
    standard = 15;
    std_text = 'ค่ามาตรฐานกรมควบคุมมลพิษกำหนด 15 มก./ลิตร';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    title = 'เปรียบเทียบสัดส่วนขยะมูลฝอย';
    subtitle = 'ต่อประชากร 1 คนต่อวันแต่ละกลุ่มเขต';
    unit = 'กก./คน/วัน';
    standard = 1.8;
    std_text = 'ค่าเฉลี่ย 1.80 kg';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    title = 'ค่าสูงสุดของ PM2.5 ปี 2562';
    subtitle = 'เรียงลำดับจากมากไปน้อย';
    unit = 'มค.ก./ลบ.ม.';
    standard = 25;
    std_text = 'ค่ามาตรฐานตาม WHO กำหนด 25 มคก./ลบ.ม.';
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
    <div
      className="flex flex-col flex-1 mt-3 card_cat_detail md:mt-0 "
      id="list-ranking"
      style={{ backgroundColor: selected_theme.color }}
    >
      <div
        id="list-header"
        className="flex flex-col items-center mt-1 text-center text-white-default"
      >
        <p className="p2">การจัดอันดับในกลุ่มเขต</p>
        <span id="list-tile" className="mt-3 p1">
          <p>{title}</p>
          <p>{subtitle}</p>
        </span>
      </div>
      <div id="list-body" className="px-3 py-2">
        {height_rank.map((rank, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-3 my-1 font-bold rounded bg-white-default p2"
          >
            <div className="flex flex-row items-center flex-1">
              <div className="mr-2 circle_wrapper">{index + 1}</div>
              <p>{rank.districtName}</p>
            </div>
            <div
              className="flex flex-row justify-end flex-1"
              style={{ color: selected_theme.text_color }}
            >
              <div>{rank.value}</div>
              <div className="ml-2">{unit}</div>
            </div>
          </div>
        ))}
        <p className="flex justify-center p2 text-white-default">{std_text}</p>
        {low_rank.map((rank, index) => (
          <div
            key={index}
            className="flex px-3 py-3 my-1 font-bold rounded bg-white-default p2"
          >
            <div className="flex flex-row flex-1">
              <div className="mr-2 circle_wrapper">
                {height_rank.length + 1 + index}
              </div>
              <p>{rank.districtName}</p>
            </div>
            <div
              className="flex flex-row justify-end flex-1"
              style={{ color: selected_theme.text_color }}
            >
              <div>{rank.value}</div>
              <div className="ml-2">{unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default listRanking;
