import React from 'react';

const ranking = ({ selected_theme, checked, rankings }) => {
  let title, unit, top3, last3;

  if (selected_theme.name === 'น้ำท่วมถนน') {
    title = 'เรียงตามเขตที่มีจำนวนบ่อยที่สุด ปี 2562';
    top3 = '3 เขตที่น้ำท่วมบ่อยสุด';
    unit = 'ครั้ง';
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    title = 'เรียงตามเขตที่มีพื้นที่สีเขียวมากที่สุด-น้อยที่สุด ปี 2562';
    top3 = '3 เขตที่มีพื้นที่สีเขียวมากที่สุด';
    last3 = '3 เขตที่มีพื้นที่สีเขียวน้อยที่สุด';
    unit = 'ตร.ม./คน';
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    title = 'เรียงตามเขตที่มีค่า BOD น้อยที่สุด-มากที่สุด ปี 2562';
    top3 = '3 เขตที่มีค่า BOD มากที่สุด';
    last3 = '3 เขตที่มีค่า BOD น้อยที่สุด';
    unit = 'มก./ลิตร';
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    title = 'เรียงตามเขตที่มีขยะมูลฝอยมากที่สุด-น้อยที่สุด';
    top3 = '3 เขตขยะมากที่สุด';
    last3 = '3 เขตขยะน้อยที่สุด';
    unit = 'กก./คน/วัน';
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    title = 'เรียงตามเขตที่มีค่าสูงสุดของ PM2.5 จากมากไปน้อย ปี 2562';
    top3 = '3 เขตที่ค่าสูงสุด PM2.5 มากที่สุด';
    last3 = '3 เขตที่ค่าสูงสุด PM2.5 น้อยที่สุด';
    unit = 'มค.ก./ลบ.ม.';
  }

  const list_top3 = () => {
    return (
      <div className="flex-1 px-2">
        <div className="font-bold p1 text-white-default">{top3}</div>
        <div id="ranking-wrapper-body" className="flex flex-col">
          {rankings.map((rank, index) => {
            if (index < 3)
              return (
                <div
                  key={index}
                  className="flex px-3 py-3 my-1 font-bold rounded bg-white-default p2"
                >
                  <div className="flex flex-row flex-1">
                    <div className="mr-2">
                      {selected_theme.name === 'มลพิษในคลอง'
                        ? rankings.length - index
                        : index + 1}
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
              );
          })}
        </div>
      </div>
    );
  };

  const list_last3 = () => {
    return (
      <div className="flex-1 px-2">
        <div className="font-bold p1 text-white-default">{last3}</div>
        <div id="ranking-wrapper-body" className="flex flex-col-reverse">
          {rankings.map((rank, index) => {
            if (index > rankings.length - 4)
              return (
                <div
                  key={index}
                  className="flex px-3 py-3 my-1 font-bold rounded bg-white-default p2"
                >
                  <div className="flex flex-row flex-1">
                    <div className="mr-2">
                      {selected_theme.name === 'มลพิษในคลอง'
                        ? rankings.length - index
                        : index + 1}
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
              );
          })}
        </div>
      </div>
    );
  };

  const list_ranking = () => {
    if (selected_theme.name === 'น้ำท่วมถนน') {
      return (
        <div id="less-most" className="flex mt-5">
          {list_top3()}
        </div>
      );
    } else if (
      selected_theme.name === 'พื้นที่สีเขียว' ||
      selected_theme.name === 'ขยะมูลฝอย'
    ) {
      return (
        <div id="less-most" className="flex mt-5">
          {list_top3()}
          {list_last3()}
        </div>
      );
    } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
      return (
        <div id="less-most" className="flex mt-5">
          {list_top3()}
          {list_last3()}
        </div>
      );
    } else if (selected_theme.name === 'มลพิษในคลอง') {
      return (
        <div id="less-most" className="flex mt-5">
          {list_last3()}
          {list_top3()}
        </div>
      );
    }
  };

  return (
    <div
      id="ranking_wrapper"
      className={
        checked === null || checked === 'เขตพื้นที่ทั้งหมด'
          ? 'card_cat_detail pt-3 mt-3'
          : 'flex-1 card_cat_ranking card_cat_detail pt-3'
      }
      style={{ backgroundColor: selected_theme.color }}
    >
      {checked === null || checked === 'เขตพื้นที่ทั้งหมด' ? (
        <div id="ranking_default">
          <div className="flex justify-center rounded-t text-white-default p2">
            การจัดอันดับแต่ละเขต
          </div>
          <div className="flex justify-center mt-3 text-white-default h4">
            {title}
          </div>
          {list_ranking()}
          <div className="flex justify-center py-2 mt-3 font-bold rounded-b text-white-default bg-black-default p1">
            ดูการจัดอันดับทั้งหมด
          </div>
        </div>
      ) : (
        <div id="ranking_filter">
          <div className="flex justify-center rounded-t text-white-default p2">
            การจัดอันดับแต่ละเขต
          </div>
          <div className="flex justify-center mt-3 text-center text-white-default p1">
            ปริมาณขยะมูลฝอย
            <br />
            เรียงลำดับจากมากไปน้อย
          </div>
        </div>
      )}
    </div>
  );
};
export default ranking;
