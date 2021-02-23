import React from 'react';

const AVG = ({ selected_theme, data, checked }) => {
  let AVG_title,
    unit,
    AVG_max,
    AVG_min,
    AVG,
    year_length,
    compare_title,
    compare_sub;

  function sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el) && obj[el] != null) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }
  year_length = Object.keys(data.valuePerYear).length;

  if (selected_theme.name === 'น้ำท่วมถนน') {
    AVG_title = 'ระดับน้ำท่วมบนถนนโดยเฉลี่ยตั้งแต่ปี 2555-2562';
    unit = 'ซม.';
    AVG_max = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยต่ำที่สุด';
    AVG_min = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยสูงที่สุด';
    AVG = (sum(data.valuePerYear) / year_length).toFixed(2);
    compare_title = 'เปรียบเทียบจำนวนครั้งทั้งหมดที่น้ำท่วมแต่ละกลุ่มเขต';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    AVG_title = 'สัดส่วนพื้นที่สีเขียวต่อประชากร 1 คนโดยเฉลี่ย ปี 2562';
    unit = 'ตร.ม./คน';
    AVG_max = 'เขตที่มีพื้นที่สีเขียวมากที่สุด';
    AVG_min = 'เขตที่มีพื้นที่สีเขียวน้อยที่สุด';
    AVG = data.value;
    compare_title = 'เปรียบเทียบสัดส่วนขยะมูลฝอย';
    compare_sub = 'ต่อประชากร 1 คนต่อวันแต่ละกลุ่มเขต';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    AVG_title = 'ค่า BOD ในน้ำคลองแต่ละเขตโดยเฉลี่ยตั้งแต่ปี 2555-2562';
    unit = 'มก./ลิตร';
    AVG_max = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยสูงที่สุด';
    AVG_min = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยต่ำที่สุด';
    AVG = (sum(data.valuePerYear) / year_length).toFixed(2);
    compare_title = 'เปรียบเทียบค่า BOD ในน้ำคลองแต่ละกลุ่มเขต';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    AVG_title = 'จำนวนขยะมูลฝอยโดยเฉลี่ย ปี 2562';
    unit = 'กก./คน/วัน';
    AVG_max = 'เขตที่ขยะมากที่สุด';
    AVG_min = 'เขตที่ขยะน้อยที่สุด';
    AVG = data.value;
    compare_title = 'เปรียบเทียบสัดส่วนขยะมูลฝอย';
    compare_sub = 'ต่อประชากร 1 คนต่อวันแต่ละกลุ่มเขต';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    AVG_title = 'ร้อยละของจำนวนครั้งที่ค่าฝุ่นเกินค่ามาตรฐาน';
    unit = 'มค.ก./ลบ.ม.';
    AVG_max = 'เขตที่มีค่าสูงสุดของ PM2.5 มากที่สุด';
    AVG_min = 'เขตที่มีค่าสูงสุดของ PM2.5 น้อยที่สุด';
    AVG = '39%';
    compare_title = 'เปรียบเทียบปัญหาฝุ่นควันสูงแต่ละกลุ่มเขต';
  }

  const box_compare = (data, unit, color) => {
    return (
      <div
        id="compare-wrapper"
        className="flex flex-row my-1"
        style={{
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.075)',
          width: '95%',
        }}
      >
        <div
          className="flex-1 py-4 pl-2 pr-5 rounded-l p2 text-white-default"
          style={{
            backgroundColor: color,
          }}
        >
          {data.areaName}
        </div>
        <div
          className="flex items-baseline flex-1 pl-2 font-bold"
          style={{ color: selected_theme.text_color }}
        >
          <div className="pr-1 h4">{data.value}</div>
          <div className="ml-1 p2">{unit}</div>
        </div>
      </div>
    );
  };

  const checked_choice = (data, unit) => {
    let choose, default_choose;
    default_choose = _.filter(data.benchmarks, { zoneId: 'all' });
    if (checked === 'เขตพื้นที่ธุรกิจ') {
      choose = _.filter(data.benchmarks, { zoneId: 'business' });
    } else if (checked === 'เขตพื้นที่ท่องเที่ยวและวัฒนธรรม') {
      choose = _.filter(data.benchmarks, { zoneId: 'tourism-and-cultural' });
    } else if (checked === 'เขตพื้นที่อยู่อาศัย') {
      choose = _.filter(data.benchmarks, { zoneId: 'residence' });
    } else if (checked === 'เขตพื้นที่ชานเมือง') {
      choose = _.filter(data.benchmarks, { zoneId: 'suburban' });
    }

    return (
      <div
        className="flex flex-col flex-1 "
        id="AVG-right"
        style={{ height: 'fit-content' }}
      >
        <div className="flex-1 card_cat_detail">
          <div
            className="flex flex-col justify-center px-5 py-1 text-center rounded-t text-white-default p2"
            style={{ backgroundColor: selected_theme.color }}
          >
            <p>{compare_title}</p>
            <p>{compare_sub ? compare_sub : ''}</p>
          </div>
          <div className="px-2 py-3 leading-tight">
            {selected_theme.name === 'น้ำท่วมถนน'
              ? ''
              : box_compare(...default_choose, unit, selected_theme.color)}
            {box_compare(...choose, unit, 'black')}
          </div>
        </div>
      </div>
    );
  };

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
            {AVG}
          </p>
          {selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน' ? (
            <p
              style={{ color: selected_theme.text_color }}
              className="mr-32 font-bold p1"
            >
              หรือ 86 ครั้ง จากทั้งหมด 216 ครั้งที่ตรวจวัด
            </p>
          ) : (
            <p
              style={{ color: selected_theme.text_color }}
              className="mr-32 font-bold p1"
            >
              {unit}
            </p>
          )}
        </div>
      </div>
      {checked === null || checked === 'เขตพื้นที่ทั้งหมด' ? (
        <div className="flex flex-col flex-1 " id="AVG-right">
          <div className="flex-1 card_cat_detail">
            <div
              className="flex justify-center py-1 rounded-t text-white-default p2"
              style={{ backgroundColor: selected_theme.color }}
            >
              {AVG_min}
            </div>
            <div className="px-2 py-3 leading-tight">
              <p className="font-bold h4">
                เขต{data.minimumPoint.districtName} ปี {data.minimumPoint.year}
              </p>
              <span
                className="flex flex-row font-bold h4"
                style={{ color: selected_theme.text_color }}
              >
                <p>{data.minimumPoint.value}</p>
                <p className="pl-2"> {unit}</p>
              </span>
            </div>
          </div>
          <div className="flex-1 mt-3 card_cat_detail">
            <div
              className="flex justify-center py-1 rounded-t text-white-default p2"
              style={{ backgroundColor: selected_theme.color }}
            >
              {AVG_max}
            </div>
            <div className="px-2 py-3 leading-tight">
              <p className="font-bold h4">
                เขต{data.maximumPoint.districtName} ปี {data.maximumPoint.year}
              </p>
              <span
                className="flex flex-row font-bold h4"
                style={{ color: selected_theme.text_color }}
              >
                <p>{data.maximumPoint.value}</p>
                <p className="pl-2"> {unit}</p>
              </span>
            </div>
          </div>
        </div>
      ) : (
        checked_choice(data, unit)
      )}
    </div>
  );
};

export default AVG;
