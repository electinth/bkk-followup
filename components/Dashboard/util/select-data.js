import map_air from 'assets/data/map_air.json';
import map_flood from 'assets/data/map_flood.json';
import map_green from 'assets/data/map_green.json';
import map_waste from 'assets/data/map_waste.json';
import map_water from 'assets/data/map_water.json';
import report_air_all from 'assets/data/report_air_all.json';
import report_air_business from 'assets/data/report_air_business.json';
import report_air_residence from 'assets/data/report_air_residence.json';
import report_air_suburban from 'assets/data/report_air_suburban.json';
import report_air_tourism_and_cultural from 'assets/data/report_air_tourism-and-cultural.json';
import report_flood_all from 'assets/data/report_flood_all.json';
import report_flood_business from 'assets/data/report_flood_business.json';
import report_flood_residence from 'assets/data/report_flood_residence.json';
import report_flood_suburban from 'assets/data/report_flood_suburban.json';
import report_flood_tourism_and_cultural from 'assets/data/report_flood_tourism-and-cultural.json';
import report_green_all from 'assets/data/report_green_all.json';
import report_green_business from 'assets/data/report_green_business.json';
import report_green_residence from 'assets/data/report_green_residence.json';
import report_green_suburban from 'assets/data/report_green_suburban.json';
import report_green_tourism_and_cultural from 'assets/data/report_green_tourism-and-cultural.json';
import report_waste_all from 'assets/data/report_waste_all.json';
import report_waste_business from 'assets/data/report_waste_business.json';
import report_waste_residence from 'assets/data/report_waste_residence.json';
import report_waste_suburban from 'assets/data/report_waste_suburban.json';
import report_waste_tourism_and_cultural from 'assets/data/report_waste_tourism-and-cultural.json';
import report_water_all from 'assets/data/report_water_all.json';
import report_water_business from 'assets/data/report_water_business.json';
import report_water_residence from 'assets/data/report_water_residence.json';
import report_water_suburban from 'assets/data/report_water_suburban.json';
import report_water_tourism_and_cultural from 'assets/data/report_water_tourism-and-cultural.json';

const select_data = (data) => {
  if (data === 'น้ำท่วมถนน') {
    return {
      map: map_flood,
      all: report_flood_all,
      report_business: report_flood_business,
      report_residence: report_flood_residence,
      report_suburban: report_flood_suburban,
      report_tourism: report_flood_tourism_and_cultural,
    };
  } else if (data === 'พื้นที่สีเขียว') {
    return {
      map: map_green,
      all: report_green_all,
      report_business: report_green_business,
      report_residence: report_green_residence,
      report_suburban: report_green_suburban,
      report_tourism: report_green_tourism_and_cultural,
    };
  } else if (data === 'มลพิษในคลอง') {
    return {
      map: map_water,
      all: report_water_all,
      report_business: report_water_business,
      report_residence: report_water_residence,
      report_suburban: report_water_suburban,
      report_tourism: report_water_tourism_and_cultural,
    };
  } else if (data === 'ขยะมูลฝอย') {
    return {
      map: map_waste,
      all: report_waste_all,
      report_business: report_waste_business,
      report_residence: report_waste_residence,
      report_suburban: report_waste_suburban,
      report_tourism: report_waste_tourism_and_cultural,
    };
  } else if (data === 'ฝุ่นควันเกินมาตรฐาน') {
    return {
      map: map_air,
      all: report_air_all,
      report_business: report_air_business,
      report_residence: report_air_residence,
      report_suburban: report_air_suburban,
      report_tourism: report_air_tourism_and_cultural,
    };
  }
};

export default select_data;
