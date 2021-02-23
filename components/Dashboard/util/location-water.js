import React from 'react';

const location_water = ({ selected_theme }) => {
  const location = [
    { name: '• ถนนรัชดาภิเษก', sub: 'บริเวณหน้าธนาคารกรุงเทพ' },
    { name: '• ถนนพหลโยธิน', sub: 'บริเวณหน้าตลาดอมรพันธ์และแยกเกษตรศาสตร์' },
    { name: '• ถนนแจ้งวัฒนะ', sub: 'ช่วงจากคลองประปา ถึงคลองเปรมประชากร' },
    { name: '• ถนนราชวิถี', sub: 'บริเวณหน้าราชภัฎสวนดุสิตและเชิงสะพานกรุงธน' },
    { name: '• ถนนพญาไท', sub: 'บริเวณหน้ากรมปศุสัตว์' },
    { name: '• ถนนศรีอยุธยา', sub: 'บริเวณหน้า สน.พญาไท' },
    {
      name: '• ถนนจันทน์',
      sub: 'ช่วงจากซอยบำเพ็ญกุศล ถึงที่ทำการไแรษณีย์ยานนาวา',
    },
    { name: '• ถนนสวนพลู', sub: 'ช่วงจากถนนสาทรใต้ ถึงถนนนางลิ้นจี่' },
    { name: '• ถนนสาธุประดิษฐ์', sub: 'บริเวณแยกตัดถนนจันทน์' },
    { name: '• ถนนสวนพลู', sub: 'ช่วงจากถนนสาทรใต้ ถึงถนนนางลิ้นจี่' },
    { name: '• ถนนสุวินทวงศ์', sub: 'ช่วงจากคลองสามวา ถึงคลองแสนแสบ' },
    { name: '• ถนนประชาราษฎร์สาย 2', sub: 'บริเวณแยกเตาปูน' },
    {
      name: '• ถนนบางขุนเทียน - ชายทะเล',
      sub: 'ช่วงจากถนนพระรามที่ 2 ถึงคลองสะแกงาม',
    },
    { name: '• ถนนเพชรเกษม', sub: 'ช่วงจากคลองทวีวัฒนา ถึงคลองราชมนตรี' },
    {
      name: '• ถนนหมู่บ้านเศรษฐกิจ',
      sub: 'ช่วงจากถนนเพชรเกษม ถึงวงเวียนกาญจนาภิเษก',
    },
  ];

  return (
    <div
      id="good-to-know"
      className="flex flex-col justify-center mt-3 text-center card_cat_detail"
    >
      <div
        id="gtk-header"
        className="py-1 rounded-t text-white-default p2"
        style={{ backgroundColor: selected_theme.color }}
      >
        บริเวณที่มักมีน้ำท่วมขัง
      </div>
      <div id="body-lo-wrapper" className="py-3 pl-6 p1">
        {location.map((lo, index) => (
          <div key={index} className="flex justify-start">
            <p className="font-bold">{lo.name}</p>
            <p className="pl-1">{lo.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default location_water;
