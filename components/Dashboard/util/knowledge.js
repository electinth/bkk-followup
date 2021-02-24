import React from 'react';

const knowledge = ({ selected }) => {
  let title, body;
  if (selected.name === 'น้ำท่วมถนน') {
    title = 'ทุกพื้นที่ มีแต่น้ำ (รอการระบาย)';
    body =
      'นับตั้งแต่ปี 2555-2562 กทม.ใช้งบในการจัดการปัญหาน้ำท่วมไปมากกว่า 43,000 ล้านบาท แต่เมื่อฝนตกหนัก หลายที่ก็ยังคงมีน้ำท่วมถนนอยู่ และพื้นศูนย์กลางธุรกิจและพาณิชยกรรมเป็นพื้นที่ที่พบเจอกับป ัญหาน้ำท่วมขังบนถนนมากที่สุด เมื่อเทียบกับพื้นที่อื่นๆ ของ กทม.';
  } else if (selected.name === 'พื้นที่สีเขียว') {
    title = 'ก็ยังไม่เพียงพอสักที..';
    body =
      'เมื่อสิ้นปี 2562 กทม. มีพื้นที่สีเขียวให้กับประชาชน 1 คนได้เพียง 7.07 ตร.ม. แต่เมื่อคำนวณถึงพื้นที่ที่ชาว กทม. เข้าถึงได้จริง (เฉพาะพื้นที่สวนสาธารณะหลัก) ชาว กทม. 1 คนได้พื้นที่สีเขียวไว้ใช้บริการเพียง 0.79 ตร.ม. เท่านั้น';
  } else if (selected.name === 'มลพิษในคลอง') {
    title = 'เมื่อพื้นที่ค้าขาย กลับมีมลพิษในน้ำคลองมากกว่าพื้นที่อื่น..';
    body =
      'พื้นที่ธุรกิจและพาณิชยกรรมเป็นพื้นที่ที่มีน้ำคลองเน่าเสียมากที่สุด โดยเฉพาะน้ำคลองในบริเวณเขตคลองเตย เขตปทุมวัน เขตบางรัก และเขตดินแดง ทั้ง 4 เขตนี้ล้วนเป็นพื้นที่ที่มีมลพิษในน้ำคลองเกินค่ามาตรฐานมาโดยตลอด 8 ปี';
  } else if (selected.name === 'ขยะมูลฝอย') {
    title = 'เมื่อรายได้ค่าเก็บขยะคิดเป็นเพียง 5% ของค่าใช้จ่ายในการเก็บขยะ..';
    body =
      'รู้หรือไม่? กทม. ใช้งบประมาณในการรักษาความสะอาดและจัดการขยะมูลฝอยในแต่ละปีไม่ต่ำกว่า 10,000 ล้านบาท แต่มีรายได้มาชดเชยภาระตรงนี้เพียงปีละประมาณ 500 ล้านซึ่งคิดเป็นแค่ 5% เท่านั้น และนับวัน ปริมาณขยะก็ยังคงเพิ่มขึ้นอย่างต่อเนื่อง ในขณะที่ปลายทางขยะส่วนใหญ่คือการฝังกลบนอกพื้นที่ กทม. ซึ่งสร้างผลกระทบสิ่งแวดล้อมอย่างมา';
  } else if (selected.name === 'ฝุ่นควันเกินมาตรฐาน') {
    title = 'PM2.5 ความท้าทายหน้าใหม่ของคนกรุง';
    body =
      'รู้หรือไม่ว่า ช่วงเดือนพฤศจิกายนถึงกุมภาพันธ์ของอีกปี เป็นช่วงที่ค่าฝุ่นจะเกินค่ามาตรฐานบ่อยที่สุด';
  }

  return (
    <span className="my-4 ">
      <p className="px-32 font-bold leading-tight h3">{title}</p>
      <p className="px-5 mt-3 leading-tight p2">{body}</p>
    </span>
  );
};

export default knowledge;
