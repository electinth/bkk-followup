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
import LocationFlood from 'components/Dashboard/util/location-flood';
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
import rankingImg_w from 'assets/images/rankingImg_w.svg';
import allImg from 'assets/images/allImg.svg';
import allImg_w from 'assets/images/allImg_w.svg';
import LineChart from 'components/Dashboard/dashboard-line-chart';
import StandardGreen from 'components/Dashboard/util/standard_green';
import { isMobile, isMobileOnly } from 'react-device-detect';

import _ from 'lodash';
import * as d3 from 'd3';

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
      color: '#D6AD6D',
      text_color: '#AB8A57',
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
  const [selected_tooltip, SET_SELECTED_TOOLTIP] = useState();
  const [state_dropdown, SET_STATE_DROPDOWN] = useState(null);
  const [isRank, SET_IS_RANK] = useState(false);
  const [selected_index, SET_SELECTED_INDEX] = useState(0);
  const years = [55, 56, 57, 58, 59, 60, 61, 62];

  let selected_theme = _.find(category, (cat) => {
    return cat.name === router.query.location;
  });
  let selectedData, data;
  if (selected_theme != null) {
    selectedData = selectData(selected_theme.name);
    let rankings, format_type;
    if (checked === 'เขตพื้นที่ทั้งหมด') {
      rankings = selectedData.all.rankings;
      data = selectedData.all;
      format_type = 'all';
    } else if (checked === 'เขตพื้นที่ธุรกิจ') {
      rankings = selectedData.report_business.rankings;
      data = selectedData.report_business;
      format_type = 'business';
    } else if (checked === 'เขตพื้นที่ท่องเที่ยวและวัฒนธรรม') {
      rankings = selectedData.report_tourism.rankings;
      data = selectedData.report_tourism;
      format_type = 'tourism-and-cultural';
    } else if (checked === 'เขตพื้นที่อยู่อาศัย') {
      rankings = selectedData.report_residence.rankings;
      data = selectedData.report_residence;
      format_type = 'residence';
    } else if (checked === 'เขตพื้นที่ชานเมือง') {
      rankings = selectedData.report_suburban.rankings;
      data = selectedData.report_suburban;
      format_type = 'suburban';
    }
    let note;
    if (selected_theme.name === 'น้ำท่วมถนน') {
      note =
        'ที่มาข้อมูล: สํานักยุทธศาสตร์และประเมินผล และสำนักงบประมาณ กรุงเทพมหานคร ';
    } else if (selected_theme.name === 'พื้นที่สีเขียว') {
      note =
        'ที่มาข้อมูล: สํานักยุทธศาสตร์และประเมินผล สำนักงบประมาณ และสำนักสิ่งแวดล้อม กรุงเทพมหานคร ';
    } else if (selected_theme.name === 'มลพิษในคลอง') {
      note = 'สำนักการระบายน้ำ และสำนักงบประมาณ กรุงเทพมหานคร';
    } else if (selected_theme.name === 'ขยะมูลฝอย') {
      note = 'สํานักยุทธศาสตร์และประเมินผล และสำนักงบประมาณ กรุงเทพมหานคร ';
    } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
      note = 'กรมควบคุมมลพิษ กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม';
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
      d3.selectAll(`.minimap`).style('fill', 'none');
    };

    let districtName = _.map(group_district(format_type), (rank) => {
      return { filter_by: _.get(rank, 'name') };
    });
    let district_data;
    if (district) {
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
          className="absolute top-0 bottom-0 left-0 right-0 flex flex-col overflow-x-hidden lg:overflow-hidden lg:flex-row"
        >
          {/* md:flex-col md:overflow-auto */}
          <div
            className="relative flex-col flex-1 lg:flex bg-black-default"
            id="dashboard-left"
          >
            {/* group-dropdown */}

            <div
              className="relative z-50 "
              id="group-dropdown"
              style={{
                backgroundColor: selected_theme.color,
                padding: '10px 0',
              }}
            >
              <div className="flex flex-col items-start justify-center w-full md:items-center md:flex-row">
                {isMobile ? (
                  <DropDown
                    type="category"
                    filter={category}
                    SET_SELECTED_INDEX={SET_SELECTED_INDEX}
                    SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
                    SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
                    SET_CHECKED={SET_CHECKED}
                    SET_DISTRICT={SET_DISTRICT}
                  />
                ) : (
                  <div className="py-2 font-bold text-white-default h4 ">
                    สำรวจตาม
                  </div>
                )}
                <div className="flex w-full px-3 md:contents">
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
                      className="my-auto ml-2 cursor-pointer md:ml-5"
                      onClick={cancle_filter}
                      style={{
                        height: isMobileOnly ? '30px' : '',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>

            {/* group-dropdown */}
            {/* group-dropdown-mobile */}
            {isMobile ? (
              <div
                className="fixed z-50 flex flex-col items-start justify-center w-full md:items-center md:flex-row"
                id="group-dropdown"
                style={{
                  padding: '10px 0',
                  backgroundColor: selected_theme.color,
                  top: '60px',
                }}
              >
                {isMobile ? (
                  <DropDown
                    type="category"
                    filter={category}
                    SET_SELECTED_INDEX={SET_SELECTED_INDEX}
                    SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
                    SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
                    SET_CHECKED={SET_CHECKED}
                    SET_DISTRICT={SET_DISTRICT}
                  />
                ) : (
                  <div className="py-2 font-bold text-white-default h4 ">
                    สำรวจตาม
                  </div>
                )}
                <div className="flex w-full px-3 md:contents">
                  <DropDown
                    filter={filter_by_group}
                    checked={checked}
                    SET_CHECKED={SET_CHECKED}
                    type="group"
                    raw_data={data}
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
                      className="my-auto ml-2 cursor-pointer md:ml-5"
                      onClick={cancle_filter}
                      style={{
                        height: isMobileOnly ? '30px' : '',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ) : (
              ''
            )}

            {/* group-dropdown-mobile */}
            <TimeLine
              selected_index={selected_index}
              SET_SELECTED_INDEX={SET_SELECTED_INDEX}
              years={years}
              selected_year={years[selected_index]}
            />
            <Map
              selected_year={years[selected_index]}
              selected_theme={selected_theme}
              data={selectedData.map}
              state_dropdown={state_dropdown}
              checked={checked}
              raw_data={data}
              SET_DISTRICT={SET_DISTRICT}
              district={district}
            />
            <div className="relative flex" id="map-footer">
              <InfoMap selected_theme={selected_theme} />
              {isMobile ? (
                ''
              ) : (
                <div className="relative flex-1 w-full h-full ">
                  <MiniMap
                    selected_tooltip={selected_tooltip}
                    SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
                    selected_theme={selected_theme.color}
                  />

                  <div
                    id="btn-isRank"
                    className="absolute right-5 bottom-10 p1"
                  >
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
                        <img
                          src={rankingImg}
                          alt="rankingImg"
                          className="mr-3"
                        />
                        <p>ดูการจัดอันดับ</p>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            id="dashboard-right"
            className="flex flex-col flex-1 min-h-full lg:overflow-auto"
            style={{ backgroundColor: isRank ? 'black' : 'white' }}
          >
            {isMobile ? (
              ''
            ) : (
              <Category_Manu
                category={category}
                SET_SELECTED_INDEX={SET_SELECTED_INDEX}
                SET_SELECTED_TOOLTIP={SET_SELECTED_TOOLTIP}
                SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
                SET_CHECKED={SET_CHECKED}
                SET_DISTRICT={SET_DISTRICT}
              />
            )}

            {!isRank ? (
              <div
                id="isAll-wrapper"
                className="absolute max-w-full px-5 pb-10 md:pb-16 bg-white-default lg:relative lg:overflow-auto"
              >
                <div
                  id={`card${selected_theme.name}`}
                  className="flex justify-center py-6 mt-3 text-center pointer-events-none text-white-default card_cat_detail"
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

                    {isMobileOnly ? (
                      <p className="h4">ภาพรวมย้อนหลัง 8 ปี (2555-2562)</p>
                    ) : (
                      ''
                    )}
                  </span>
                </div>
                {district && selected_theme.name === 'น้ำท่วมถนน' ? (
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
                district != null ? (
                  <StandardGreen selected_theme={selected_theme} />
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
                {district && selected_theme.name != 'น้ำท่วมถนน' ? (
                  <MaxMinPerDistrict
                    selected_theme={selected_theme}
                    district_data={district_data}
                  />
                ) : (
                  ''
                )}
                {selected_theme.name === 'น้ำท่วมถนน' ? (
                  <LocationFlood
                    selected_theme={selected_theme}
                    data={
                      district
                        ? district_data.floodHotspots
                        : data.floodHotspots
                    }
                  />
                ) : (
                  ''
                )}
                <LineChart
                  selected_theme={selected_theme}
                  data={
                    district ? district_data.valuePerYear : data.valuePerYear
                  }
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
                <div
                  id="budget compare"
                  className="flex flex-col mt-3 md:flex-row "
                >
                  <Budget
                    id="budget"
                    selected_theme={selected_theme}
                    data={district ? district_data : data}
                    checked={checked}
                    state_dropdown={state_dropdown}
                  />
                  {checked === 'เขตพื้นที่ทั้งหมด' && !district ? (
                    <Compare
                      id="compare"
                      selected_theme={selected_theme}
                      checked={checked}
                      data={data.benchmarks}
                      SET_CHECKED={SET_CHECKED}
                      SET_STATE_DROPDOWN={SET_STATE_DROPDOWN}
                    />
                  ) : district ? (
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
                  <p className="p3">{note}</p>
                </div>
              </div>
            ) : (
              <Rank62
                selected_theme={selected_theme}
                data={selectedData.all.rankings}
                SET_DISTRICT={SET_DISTRICT}
                SET_IS_RANK={SET_IS_RANK}
              />
            )}
          </div>
          {isMobile ? (
            <div className="fixed z-40 flex w-full bottom-3" id="mobile_rank">
              {isRank ? (
                <button
                  className="flex flex-row items-center justify-center flex-1 mx-3 font-bold isRank_black text-white-default"
                  onClick={is_show}
                >
                  <img src={allImg_w} alt="allImg_w" className="mr-3" />
                  <p>ดูภาพรวม</p>
                </button>
              ) : (
                <button
                  className="flex flex-row items-center justify-center flex-1 mx-3 font-bold isRank_black text-white-default"
                  onClick={is_show}
                >
                  <img src={rankingImg_w} alt="rankingImg_w" className="mr-3" />
                  <p>ดูการจัดอันดับ</p>
                </button>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </Layout>
    );
  } else {
    return <div>loading</div>;
  }
};

export default dashboard;
