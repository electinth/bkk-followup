import React from 'react';

const AVG = ({ selected_theme }) => {
  let AVG_title, unit;

  if (selected_theme.name === 'น้ำท่วมถนน') {
    AVG_title = 'ระดับน้ำท่วมบนถนนโดยเฉลี่ยตั้งแต่ปี 2555-2562';
    unit = 'ซม.';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    AVG_title = 'สัดส่วนพื้นที่สีเขียวต่อประชากร 1 คนโดยเฉลี่ย ปี 2562';
    unit = 'ตร.ม./คน';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    AVG_title = 'ค่า BOD ในน้ำคลองแต่ละเขตโดยเฉลี่ยตั้งแต่ปี 2555-2562';
    unit = 'มก./ลิตร';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    AVG_title = 'จำนวนขยะมูลฝอยโดยเฉลี่ย ปี 2562';
    unit = 'กก./คน/วัน';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    AVG_title = 'ร้อยละของจำนวนครั้งที่ค่าฝุ่นเกินค่ามาตรฐาน';
    unit = 'หรือ 86 ครั้ง จากทั้งหมด 216 ครั้งที่ตรวจวัด';
  }

  return (
    <div id="AVG" className="flex mt-3">
      <div className="flex-1 mr-3 card_cat_detail" id="AVG-left">
        <div
          className="flex justify-center py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          ค่าเฉลี่ย
        </div>
        <div className="px-2 py-3">
          <p className="font-bold leading-tight h4">{AVG_title}</p>
          <p
            style={{ color: selected_theme.text_color }}
            className="font-bold h5"
          >
            1.80
          </p>
          <p
            style={{ color: selected_theme.text_color }}
            className="mr-32 font-bold  p1"
          >
            {unit}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 " id="AVG-right">
        <div className="flex-1 card_cat_detail">
          <div
            className="flex justify-center py-1 rounded-t text-white-default p2"
            style={{ backgroundColor: selected_theme.color }}
          >
            เขตที่ขยะน้อยที่สุด
          </div>
          <div className="px-2 py-3 leading-tight">
            <p className="font-bold h4">เขตหนองจอก ปี 2555 </p>
            <span
              className="flex flex-row font-bold h4"
              style={{ color: selected_theme.text_color }}
            >
              <p>0.67</p>
              <p className="pl-2"> กก./คน/วัน</p>
            </span>
          </div>
        </div>
        <div className="flex-1 mt-3 card_cat_detail">
          <div
            className="flex justify-center py-1 rounded-t text-white-default p2"
            style={{ backgroundColor: selected_theme.color }}
          >
            เขตที่ขยะมากที่สุด
          </div>
          <div className="px-2 py-3 leading-tight">
            <p className="font-bold h4">เขตปทุมวัน ปี 2562 </p>
            <span
              className="flex flex-row font-bold h4"
              style={{ color: selected_theme.text_color }}
            >
              <p>6.53</p>
              <p className="pl-2"> กก./คน/วัน</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AVG;
