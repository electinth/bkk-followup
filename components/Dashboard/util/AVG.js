import React from 'react';
import Rating from 'components/Dashboard/util/rating';
import exclamation from 'assets/images/exclamation.svg';
import smile from 'assets/images/smile.svg';

const AVG = ({
  selected_theme,
  data,
  checked,
  state_dropdown,
  district_data,
}) => {
  let AVG_title,
    unit,
    AVG_max,
    AVG_min,
    AVG,
    year_length,
    compare_title,
    compare_sub,
    unit_filter,
    rank_text;

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
    unit_filter = 'ครั้ง';
    AVG_max = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยต่ำที่สุด';
    AVG_min = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยสูงที่สุด';
    AVG = (sum(data.valuePerYear) / year_length).toFixed(2);
    compare_title = 'เปรียบเทียบจำนวนครั้งทั้งหมดที่น้ำท่วมแต่ละกลุ่มเขต';
    rank_text = 'ปี 2562 เขตนี้น้ำท่วมบ่อยสุดเป็นอันดับที่';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    AVG_title = 'สัดส่วนพื้นที่สีเขียวต่อประชากร 1 คนโดยเฉลี่ย ปี 2562';
    unit = 'ตร.ม./คน';
    unit_filter = 'ตร.ม./คน';
    AVG_max = 'เขตที่มีพื้นที่สีเขียวมากที่สุด';
    AVG_min = 'เขตที่มีพื้นที่สีเขียวน้อยที่สุด';
    AVG = data.value;
    compare_title = 'เปรียบเทียบสัดส่วนขยะมูลฝอย';
    compare_sub = 'ต่อประชากร 1 คนต่อวันแต่ละกลุ่มเขต';
    rank_text = 'ปี 2562 เขตนี้มีพื้นที่สีเขียวต่อคน มากที่สุดเป็นอันดับ';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    AVG_title = 'ค่า BOD ในน้ำคลองแต่ละเขตโดยเฉลี่ยตั้งแต่ปี 2555-2562';
    unit = 'มก./ลิตร';
    unit_filter = 'มก./ลิตร';
    AVG_max = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยสูงที่สุด';
    AVG_min = 'เขตที่มีระดับน้ำท่วมบนถนนโดยเฉลี่ยต่ำที่สุด';
    AVG = (sum(data.valuePerYear) / year_length).toFixed(2);
    compare_title = 'เปรียบเทียบค่า BOD ในน้ำคลองแต่ละกลุ่มเขต';
    rank_text = 'ปี 2562 เขตนี้มีค่า BOD มากที่สุดเป็นอันดับที่';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    AVG_title = 'จำนวนขยะมูลฝอยโดยเฉลี่ย ปี 2562';
    unit = 'กก./คน/วัน';
    unit_filter = 'กก./คน/วัน';
    AVG_max = 'เขตที่ขยะมากที่สุด';
    AVG_min = 'เขตที่ขยะน้อยที่สุด';
    AVG = data.value;
    compare_title = 'เปรียบเทียบสัดส่วนขยะมูลฝอย';
    compare_sub = 'ต่อประชากร 1 คนต่อวันแต่ละกลุ่มเขต';
    rank_text = 'ปี 2562 เขตนี้มีปริมาณขยะมูลฝอยต่อคนต่อวันมากสุดเป็นอันดับที่';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    AVG_title = 'ร้อยละของจำนวนครั้งที่ค่าฝุ่นเกินค่ามาตรฐาน';
    unit = 'มค.ก./ลบ.ม.';
    unit_filter = 'มค.ก./ลบ.ม.';
    AVG_max = 'เขตที่มีค่าสูงสุดของ PM2.5 มากที่สุด';
    AVG_min = 'เขตที่มีค่าสูงสุดของ PM2.5 น้อยที่สุด';
    AVG = '39%';
    compare_title = 'เปรียบเทียบปัญหาฝุ่นควันสูงแต่ละกลุ่มเขต';
    rank_text = 'ปี 2562 เขตนี้มีค่าสูงสุดของ PM2.5 มากที่สุดเป็นอันดับที่';
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
  const default_choice = (data, unit) => {
    return (
      <div className="flex flex-col flex-1 " id="AVG-right">
        <div className="flex-1 card_cat_detail">
          <div
            className="flex justify-center py-1 rounded-t text-white-default p2"
            style={{ backgroundColor: selected_theme.color }}
          >
            <img
              src={smile}
              alt="smile"
              className="mr-3"
              style={{ width: '20px' }}
            />
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
            <img
              src={exclamation}
              alt="exclamation"
              className="mr-3"
              style={{ width: '20px' }}
            />
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
  const checked_district = (district_data) => {
    return Rating(selected_theme, rank_text, district_data);
  };

  return (
    <div id="AVG" className="flex mt-3 ">
      <div
        className="flex-1 mr-3 card_cat_detail"
        id="AVG-left"
        style={{
          backgroundColor:
            selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน'
              ? selected_theme.color50
              : '',
        }}
      >
        <div
          className="flex justify-center py-1 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          {selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน'
            ? 'จำนวนครั้งที่ค่าฝุ่นเกินกำหนด'
            : 'ค่าเฉลี่ย'}
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

      {state_dropdown === 'zone'
        ? checked_district(district_data)
        : checked === 'เขตพื้นที่ทั้งหมด'
        ? default_choice(data, unit_filter)
        : checked_choice(data, unit_filter)}
    </div>
  );
};

export default AVG;
