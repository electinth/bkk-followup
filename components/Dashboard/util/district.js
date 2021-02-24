const district = (d, selected_theme) => {
  let data;

  if (selected_theme.name === 'น้ำท่วมถนน') {
    data = require(`assets/data/report_flood_district${d.id}.json`);
  } else if (selected_theme.name === 'พื้นที่สีเขียว') {
    data = require(`assets/data/report_green_district${d.id}.json`);
  } else if (selected_theme.name === 'มลพิษในคลอง') {
    data = require(`assets/data/report_water_district${d.id}.json`);
  } else if (selected_theme.name === 'ขยะมูลฝอย') {
    data = require(`assets/data/report_waste_district${d.id}.json`);
  } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
    data = require(`assets/data/report_air_district${d.id}.json`);
  }
  return data;
};
export default district;
