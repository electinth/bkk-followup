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
import MaxMinPerDistrict from 'components/Dashboard/util/max-min-per-district';
import MaxMinFlood from 'components/Dashboard/util/max-min-flood';
import DistrictJson from 'assets/data/districts.json';
import Rating from 'components/Dashboard/util/rating';
import ListPerDistrict from 'components/Dashboard/dashboard-list-per-district';
import Budget from 'components/Dashboard/dashboard-budget';
import Rank62 from 'components/Dashboard/util/rank62';
import close_filter from 'assets/images/cancle.svg';
import rankingImg from 'assets/images/rankingImg.svg';
import allImg from 'assets/images/allImg.svg';
import LineChart from 'components/Dashboard/dashboard-line-chart';
import _ from 'lodash';

const dashboard = () => {
  const category = [
    {
      name: 'น้ำท่วมถนน',
      color: '#1570FF',
      text_color: '#0F52BB',
      color50: '#D0E2FF',
    },
    {
      name: 'พื้นที่สีเขียว',
      color: '#00C853',
      text_color: '#007832',
      color50: '#CCF4DD',
    },
    {
      name: 'มลพิษในคลอง',
      color: '#FF9E0D',
      text_color: '#CC7E0A',
      color50: '#FFECCF',
    },
    {
      name: 'ขยะมูลฝอย',
      color: '#DF3A6B',
      text_color: '#B22E56',
      color50: '#F4B8CA',
    },

    {
      name: 'ฝุ่นควันเกินมาตรฐาน',
      color: '#476A8B',
      text_color: '#344E66',
      color50: '#DAE1E8',
    },
  ];
  const filter_by_group = [
    {
      filter_by: 'เขตพื้นที่ทั้งหมด',
      img: require('assets/images/by_all.svg'),
    },
    {
      filter_by: 'เขตพื้นที่ธุรกิจ',
      img: require('assets/images/by_business.svg'),
    },
    {
      filter_by: 'เขตพื้นที่ท่องเที่ยวและวัฒนธรรม',
      img: require('assets/images/by_culture.svg'),
    },
    {
      filter_by: 'เขตพื้นที่อยู่อาศัย',
      img: require('assets/images/by_residence.svg'),
    },
    {
      filter_by: 'เขตพื้นที่ชานเมือง',
      img: require('assets/images/by_suburb.svg'),
    },
  ];

  const router = useRouter();
  const [checked, SET_CHECKED] = useState('เขตพื้นที่ทั้งหมด');
  const [district, SET_DISTRICT] = useState(null);
  const [selected_year, SET_SELECTED_YEAR] = useState(55);
  const [selected_tooltip, SET_SELECTED_TOOLTIP] = useState();
  const [state_dropdown, SET_STATE_DROPDOWN] = useState(null);
  const [isRank, SET_IS_RANK] = useState(false);
  const [selected_index, SET_SELECTED_INDEX] = useState(0);

  let selected_theme = _.find(category, (cat) => {
    return cat.name === router.query.location;
  });
  let selectedData, data;
  if (selected_theme != null) {
    selectedData = selectData(selected_theme.name);
    let rankings;
    if (checked === 'เขตพื้นที่ทั้งหมด') {
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

    const group_district = (type) => {
      if (type != 'all') {
        return _.groupBy(DistrictJson, (d) => d.districtType === type).true;
      } else {
        return DistrictJson;
      }
    };
    const cancle_filter = () => {
      SET_CHECKED('เขตพื้นที่ทั้งหมด');
      SET_DISTRICT(null);
      SET_STATE_DROPDOWN(null);
      SET_SELECTED_TOOLTIP();
    };

    let format_type;
    if (checked === 'เขตพื้นที่ธุรกิจ') {
      format_type = 'business';
    } else if (checked === 'เขตพื้นที่ท่องเที่ยวและวัฒนธรรม') {
      format_type = 'tourism-and-cultural';
    } else if (checked === 'เขตพื้นที่อยู่อาศัย') {
      format_type = 'residence';
    } else if (checked === 'เขตพื้นที่ชานเมือง') {
      format_type = 'suburban';
    } else {
      format_type = 'all';
    }

    let districtName = _.map(group_district(format_type), (rank) => {
      return { filter_by: _.get(rank, 'name') };
    });
    let district_data;
    if (district && state_dropdown === 'zone') {
      let districtID = _.filter(group_district(format_type), (r) => {
        return r.name === district;
      })[0];

      district_data = DistrictData(districtID, selected_theme);
    }

    const is_show = () => {
      SET_IS_RANK(!isRank);
    };
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
                SET_IS_RANK={SET_IS_RANK}
              />
              <DropDown
                filter={districtName}
                district={district}
                SET_DISTRICT={SET_DISTRICT}
                type="zone"
                SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
                SET_IS_RANK={SET_IS_RANK}
              />
              {checked != 'เขตพื้นที่ทั้งหมด' || district != null ? (
                <img
                  src={close_filter}
                  alt="close"
                  className="ml-2 cursor-pointer"
                  onClick={cancle_filter}
                />
              ) : (
                ''
              )}
            </div>
            <TimeLine
              selected_index={selected_index}
              SET_SELECTED_INDEX={SET_SELECTED_INDEX}
              selected_year={selected_year}
              SET_SELECTED_YEAR={SET_SELECTED_YEAR}
            />
            <Map
              selected_year={selected_year}
              selected_theme={selected_theme}
              selected_tooltip={selected_tooltip}
              SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
              data={selectedData.map}
              state_dropdown={state_dropdown}
              checked={checked}
              raw_data={data}
              SET_DISTRICT={SET_DISTRICT}
              SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
              district={district}
              SET_CHECKED={SET_CHECKED}
            />
            <div className="flex" id="map-footer">
              <InfoMap selected_theme={selected_theme.color} />
              <div className="relative flex-1 w-full h-full ">
                <MiniMap
                  selected_tooltip={selected_tooltip}
                  SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
                  selected_theme={selected_theme.color}
                />
                <div id="btn-isRank" className="absolute right-5 bottom-10 p1">
                  {isRank ? (
                    <button
                      className="flex flex-row items-center justify-center font-bold isRank"
                      onClick={is_show}
                    >
                      <img src={allImg} alt="allImg" className="mr-3" />
                      <p>ดูภาพรวม</p>
                    </button>
                  ) : (
                    <button
                      className="flex flex-row items-center justify-center font-bold isRank"
                      onClick={is_show}
                    >
                      <img src={rankingImg} alt="rankingImg" className="mr-3" />
                      <p>ดูการจัดอันดับ</p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            id="dashboard-right"
            className="flex flex-col flex-1 px-5 py-5 overflow-auto"
            style={{ backgroundColor: isRank ? 'black' : '' }}
          >
            <Category_Manu
              category={category}
              SET_SELECTED_YEAR={SET_SELECTED_YEAR}
              SET_SELECTED_INDEX={SET_SELECTED_INDEX}
              SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
              SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
              SET_CHECKED={SET_CHECKED}
            />
            {!isRank ? (
              <div id="isAll-wrapper">
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
                        {checked === 'เขตพื้นที่ทั้งหมด'
                          ? 'กรุงเทพมหานคร'
                          : checked}
                      </p>
                    )}

                    <p className="h4">ภาพรวมย้อนหลัง 8 ปี (2555-2562)</p>
                  </span>
                </div>
                {state_dropdown === 'zone' &&
                selected_theme.name === 'น้ำท่วมถนน' ? (
                  <div className="mt-3" id="flood-rating">
                    {Rating(
                      selected_theme,
                      'ปี 2562 เขตนี้น้ำท่วมบ่อยสุดเป็นอันดับที่',
                      district_data
                    )}
                  </div>
                ) : (
                  ''
                )}
                {checked === 'เขตพื้นที่ทั้งหมด' && district === null ? (
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

                {selected_theme.name === 'พื้นที่สีเขียว' &&
                district === null ? (
                  <Standard selected_theme={selected_theme} />
                ) : (
                  ''
                )}
                {selected_theme.name === 'มลพิษในคลอง' ? (
                  <BOD selected_theme={selected_theme} />
                ) : (
                  ''
                )}
                {selected_theme.name != 'น้ำท่วมถนน' ? (
                  <AVG
                    selected_theme={selected_theme}
                    data={data}
                    district_data={district_data}
                    checked={checked}
                    state_dropdown={state_dropdown}
                  />
                ) : (
                  ''
                )}
                {checked === 'เขตพื้นที่ทั้งหมด' &&
                district === null &&
                selected_theme.name === 'น้ำท่วมถนน' ? (
                  <MaxMinFlood data={data} selected_theme={selected_theme} />
                ) : (
                  ''
                )}
                {state_dropdown === 'zone' &&
                selected_theme.name != 'น้ำท่วมถนน' ? (
                  <MaxMinPerDistrict
                    selected_theme={selected_theme}
                    district_data={district_data}
                  />
                ) : (
                  ''
                )}
                {selected_theme.name === 'น้ำท่วมถนน' ? (
                  <LocationWater
                    selected_theme={selected_theme}
                    data={
                      state_dropdown === 'zone'
                        ? district_data.floodHotspots
                        : data.floodHotspots
                    }
                  />
                ) : (
                  ''
                )}
                <LineChart
                  selected_theme={selected_theme}
                  data={data.valuePerYear}
                />
                {checked === 'เขตพื้นที่ทั้งหมด' ? (
                  <Ranking
                    id="ranking"
                    selected_theme={selected_theme}
                    checked={checked}
                    rankings={rankings}
                    is_show={is_show}
                  />
                ) : (
                  ''
                )}
                <div id="budget compare" className="flex flex-row mt-3 ">
                  <Budget
                    id="budget"
                    selected_theme={selected_theme}
                    data={data}
                    checked={checked}
                    state_dropdown={state_dropdown}
                  />
                  {checked === 'เขตพื้นที่ทั้งหมด' &&
                  state_dropdown != 'zone' ? (
                    <Compare
                      id="compare"
                      selected_theme={selected_theme}
                      checked={checked}
                      data={data.benchmarks}
                    />
                  ) : state_dropdown === 'zone' ? (
                    <ListPerDistrict
                      id="list-ranking-per-district"
                      selected_theme={selected_theme}
                      district_data={district_data.rankings}
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
                    กรุงเทพมหานคร
                  </p>
                </div>
              </div>
            ) : (
              <Rank62
                selected_theme={selected_theme}
                data={selectedData.all.rankings}
              />
            )}
          </div>
        </div>
      </Layout>
    );
  } else {
    return <div>loading</div>;
  }
};

export default dashboard;
