import React, { useState } from 'react';
import Layout from 'layouts/layout';
import { useRouter } from 'next/router';
import Category_Manu from 'components/Dashboard/dashboard-category-manu';
import DropDown from 'components/Dashboard/dropdown';
import Ranking from 'components/Dashboard/dashboard-ranking';
import Compare from 'components/Dashboard/dashboard-compare';
import Map from 'components/Dashboard/dashboard-map';
import TimeLine from 'components/Dashboard/dashboard-timeline';
import InfoMap from 'components/Dashboard/dashboard-info-map';
import MiniMap from 'components/Dashboard/dashboard-minimap';
import selectData from 'components/Dashboard/util/select-data';
import Knowledge from 'components/Dashboard/util/knowledge';
import BOD from 'components/Dashboard/util/BOD';
import Standard from 'components/Dashboard/util/standard';
import AVG from 'components/Dashboard/util/AVG';
import LocationWater from 'components/Dashboard/util/location-water';
import ListRanking from 'components/Dashboard/dashboard-list-ranking';
import DistrictData from 'components/Dashboard/util/district';
import _ from 'lodash';

const dashboard = () => {
  const category = [
    {
      name: 'น้ำท่วมถนน',
      color: '#1570FF',
      text_color: '#0F52BB',
    },
    {
      name: 'พื้นที่สีเขียว',
      color: '#00C853',
      text_color: '#007832',
    },
    {
      name: 'มลพิษในคลอง',
      color: '#FF9E0D',
      text_color: '#CC7E0A',
    },
    {
      name: 'ขยะมูลฝอย',
      color: '#DF3A6B',
      text_color: '#B22E56',
    },

    {
      name: 'ฝุ่นควันเกินมาตรฐาน',
      color: '#476A8B',
      text_color: '#344E66',
    },
  ];
  const filter_by_group = [
    {
      filter_by: 'เขตพื้นที่ทั้งหมด',
      img: 'assets/images/by_all.svg',
    },
    { filter_by: 'เขตพื้นที่ธุรกิจ', img: 'assets/images/by_business.svg' },
    {
      filter_by: 'เขตพื้นที่ท่องเที่ยวและวัฒนธรรม',
      img: 'assets/images/by_culture.svg',
    },
    {
      filter_by: 'เขตพื้นที่อยู่อาศัย',
      img: 'assets/images/by_residence.svg',
    },
    { filter_by: 'เขตพื้นที่ชานเมือง', img: 'assets/images/by_suburb.svg' },
  ];

  const router = useRouter();
  const [checked, SET_CHECKED] = useState(null);
  const [district, SET_DISTRICT] = useState(null);
  const [selected_year, SET_SELECTED_YEAR] = useState(55);
  const [selected_tooltip, SET_SELECTED_TOOLTIP] = useState();
  const [state_dropdown, SET_STATE_DROPDOWN] = useState();

  let selected_theme = _.find(category, (cat) => {
    return cat.name === router.query.location;
  });
  let selectedData, data;
  if (selected_theme != null) {
    selectedData = selectData(selected_theme.name);
    let rankings;
    if (checked === null || checked === 'เขตพื้นที่ทั้งหมด') {
      rankings = selectedData.all.rankings;
      data = selectedData.all;
    } else if (checked === 'เขตพื้นที่ธุรกิจ') {
      rankings = selectedData.report_business.rankings;
      data = selectedData.report_business;
    } else if (checked === 'เขตพื้นที่ท่องเที่ยวและวัฒนธรรม') {
      rankings = selectedData.report_tourism.rankings;
      data = selectedData.report_tourism;
    } else if (checked === 'เขตพื้นที่อยู่อาศัย') {
      rankings = selectedData.report_residence.rankings;
      data = selectedData.report_residence;
    } else if (checked === 'เขตพื้นที่ชานเมือง') {
      rankings = selectedData.report_suburban.rankings;
      data = selectedData.report_suburban;
    }
    let districtName = _.map(rankings, (rank) => {
      return { filter_by: _.get(rank, 'districtName') };
    });
    let district_data;
    if (district && state_dropdown === 'zone') {
      let districtID = _.filter(rankings, (r) => {
        return r.districtName === district;
      })[0];

      district_data = DistrictData(districtID, selected_theme);
    }
    return (
      <Layout id="dashboard">
        <div
          id="dashboard-wrapper"
          className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden"
        >
          <div
            className="flex flex-col flex-1 bg-black-default"
            id="dashboard-left"
          >
            <div
              className="flex justify-center py-4"
              style={{
                height: 'fit-content',
                backgroundColor: selected_theme.color,
              }}
            >
              <div className="py-2 mr-6 font-bold text-white-default h4 ">
                สำรวจตาม
              </div>
              <DropDown
                filter={filter_by_group}
                checked={checked}
                SET_CHECKED={SET_CHECKED}
                type="group"
                SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
                SET_DISTRICT={SET_DISTRICT}
              />
              <DropDown
                filter={districtName}
                district={district}
                SET_DISTRICT={SET_DISTRICT}
                type="zone"
                SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
              />
            </div>
            <TimeLine
              selected_year={selected_year}
              SET_SELECTED_YEAR={SET_SELECTED_YEAR}
            />
            <Map
              selected_year={selected_year}
              selected_theme={selected_theme.color}
              selected_tooltip={selected_tooltip}
              SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
            />
            <div className="flex">
              <InfoMap selected_theme={selected_theme.color} />
              <MiniMap
                selected_tooltip={selected_tooltip}
                SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
                selected_theme={selected_theme.color}
              />
            </div>
          </div>
          <div
            id="dashboard-right"
            className="flex flex-col flex-1 px-5 py-5 overflow-auto"
          >
            <Category_Manu category={category} />
            <div
              id="card-title"
              className="flex justify-center py-6 mt-6 text-center text-white-default card_cat_detail"
              style={{ backgroundColor: selected_theme.color }}
            >
              <span>
                <p className="d4">สถานการณ์{selected_theme.name}</p>
                {district != null ? (
                  <p className="h3">{district}</p>
                ) : (
                  <p className="h3">
                    {checked === null || checked === 'เขตพื้นที่ทั้งหมด'
                      ? 'กรุงเทพมหานคร'
                      : checked}
                  </p>
                )}

                <p className="h4">ภาพรวมย้อนหลัง 8 ปี (2555-2562)</p>
              </span>
            </div>
            {checked === null || checked === 'เขตพื้นที่ทั้งหมด' ? (
              <div
                id="good-to-know"
                className="flex flex-col justify-center mt-3 text-center card_cat_detail"
              >
                <div
                  id="gtk-header"
                  className="py-1 rounded-t text-white-default p2"
                  style={{ backgroundColor: selected_theme.color }}
                >
                  ข้อควรรู้
                </div>
                <Knowledge selected={selected_theme} />
              </div>
            ) : (
              ''
            )}
            {selected_theme.name === 'พื้นที่สีเขียว' ? (
              <Standard selected_theme={selected_theme} />
            ) : (
              ''
            )}

            {selected_theme.name === 'มลพิษในคลอง' ? (
              <BOD selected_theme={selected_theme} />
            ) : (
              ''
            )}

            <AVG
              selected_theme={selected_theme}
              data={data}
              checked={checked}
            />
            {selected_theme.name === 'น้ำท่วมถนน' ? (
              <LocationWater selected_theme={selected_theme} />
            ) : (
              ''
            )}

            <div id="graph-trend" className="mt-3 card_cat_detail">
              <div
                className="flex justify-center py-1 rounded-t text-white-default p2"
                style={{ backgroundColor: selected_theme.color }}
              >
                แนวโน้มของ 8 ปีที่ผ่านมา
              </div>
              <div className="px-2 py-3 leading-tight">
                <div className="flex justify-center px-24 font-bold text-center h4">
                  แนวโน้มจำนวนขยะมูลฝอยต่อประชากรต่อวัน (กก.) ตั้งแต่ปี
                  2555-2562
                </div>
                <div className="flex justify-center mt-3">GRAPH</div>
              </div>
            </div>
            {checked === null || checked === 'เขตพื้นที่ทั้งหมด' ? (
              <Ranking
                id="ranking"
                selected_theme={selected_theme}
                checked={checked}
                rankings={rankings}
              />
            ) : (
              ''
            )}

            <div id="budget compare" className="flex flex-row mt-3 ">
              <div id="budget" className="relative flex-1 mr-3 card_cat_detail">
                <div
                  className="flex justify-center py-1 rounded-t text-white-default p2"
                  style={{ backgroundColor: selected_theme.color }}
                >
                  งบประมาณที่ใช้ไป
                </div>
                <span className="flex flex-col items-center py-3 font-bold leading-snug">
                  <p className="p2">ในปี 2555-2562 กทม. ใช้เงินงบประมาณ</p>
                  <p
                    className="h5"
                    style={{ color: selected_theme.text_color }}
                  >
                    94,887 ล้านบาท
                  </p>
                  <p className="p2">ในการรักษาความสะอาดและจัดการขยะมูลฝอย</p>
                </span>
                <div className="flex justify-center">donut chart</div>
                <p className="px-4 mt-3 font-bold text-center p1">
                  งบประมาณใช้ไปเพื่อจัดการขยะมูลฝอย และรักษาความสะอาดในแต่ละปี
                </p>
                <div className="flex justify-center py-3">bar chart</div>
                <div className="absolute bottom-0 flex justify-center w-full py-2 mt-3 font-bold rounded-b text-white-default bg-black-default p1">
                  เกี่ยวกับงบประมาณกทม
                </div>
              </div>
              {checked === null || checked === 'เขตพื้นที่ทั้งหมด' ? (
                <Compare
                  id="compare"
                  selected_theme={selected_theme}
                  checked={checked}
                  data={data.benchmarks}
                />
              ) : (
                <ListRanking
                  id="list-ranking"
                  selected_theme={selected_theme}
                  data={data.rankings}
                />
              )}
            </div>
            <div id="note" className="px-2 py-3 mt-3 card_cat_detail">
              <p className="font-bold h4">หมายเหตุ</p>
              <p className="p3">
                ที่มาข้อมูล: สํานักยุทธศาสตร์และประเมินผล และสำนักงบประมาณ
                กรุงเทพมหานคร{' '}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return <div>loading</div>;
  }
};

export default dashboard;
