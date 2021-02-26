import React from 'react';

const standard = ({ selected_theme }) => {
  return (
    <div id="AVG" className="flex mt-3">
      <div
        className="flex-1 mr-3 card_cat_detail"
        id="AVG-left"
        style={{ backgroundColor: selected_theme.color50 }}
      >
        <div
          className="flex justify-center py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          ค่ามาตรฐาน
        </div>
        <div className="px-2 py-3">
          <p className="font-bold leading-tight h4">พื้นที่สีเขียวควรมากกว่า</p>
          <p
            style={{ color: selected_theme.text_color }}
            className="font-bold h5"
          >
            9
          </p>
          <p
            style={{ color: selected_theme.text_color }}
            className="font-bold h3"
          >
            ตร.ม./คน
          </p>
          <p id="footer" className="p1">
            ตามมาตรฐานของ WHO
          </p>
        </div>
      </div>
      <div
        className="flex flex-col flex-1 card_cat_detail"
        id="AVG-right"
        style={{ backgroundColor: selected_theme.color50 }}
      >
        <div
          className="flex justify-center py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          พื้นที่สีเขียวใช้ได้จริง
        </div>
        <div className="px-2 py-3">
          <p className="font-bold leading-tight h4">
            สัดส่วนพื้นที่สีเขียวเข้าถึงได้จริง (accessible green space)
          </p>
          <p
            style={{ color: selected_theme.text_color }}
            className="font-bold h3"
          >
            0.79
          </p>
          <p
            style={{ color: selected_theme.text_color }}
            className="font-bold h4"
          >
            ตร.ม./คน
          </p>
          <span className="flex p1 ">
            <p className="font-bold">หมายเหตุ</p>
            <p className="pl-2">ข้อมูลอัปเดท 2562</p>
          </span>
          <p className="p3">ที่มา: ศูนย์ออกแบบและพัฒนาเมือง (UddC)</p>
        </div>
      </div>
    </div>
  );
};

export default standard;
