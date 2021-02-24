import React from 'react';

const per_district = ({ selected_theme, district_data }) => {
  let unit;
  if (selected_theme.name === 'น้ำท่วมถนน') {
    unit = 'ครั้ง';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    unit = 'ตร.ม./คน';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    unit = 'มก./ลิตร';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    unit = 'กก./คน/วัน';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    unit = 'มค.ก./ลบ.ม.';
  }
  return (
    <div
      className="flex flex-col flex-1 card_cat_detail "
      id="list-ranking"
      style={{ backgroundColor: selected_theme.color }}
    >
      <div
        id="list-header"
        className="flex flex-col items-center mt-1 text-center text-white-default"
      >
        <p className="p2">การจัดอันดับในกลุ่มเขต</p>
        <span id="list-tile" className="mt-3 p1">
          <p>และในแต่ละปี เขตนี้อยู่ในอันดับที่เท่าไหร่บ้าง?</p>
        </span>
      </div>
      <div id="list-body" className="px-3 py-2">
        {district_data.map((rank, index) => (
          <div
            key={index}
            className="flex px-3 py-3 my-1 font-bold rounded bg-white-default p2"
          >
            <div className="flex flex-row flex-1">
              <div className="mr-2">ปี {rank.year}</div>
              <p> อันดับ {rank.ranked}</p>
            </div>
            <div
              className="flex flex-row justify-end flex-1"
              style={{ color: selected_theme.text_color }}
            >
              <div>{rank.value === null ? 'ไม่มีข้อมูล' : rank.value}</div>
              <div className="ml-2">{unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default per_district;
