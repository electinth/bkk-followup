import React, { useEffect } from 'react';
import { isMobileOnly, isMobile } from 'react-device-detect';
import * as d3 from 'd3';

const map = ({
  selected_year,
  selected_theme,
  selected_tooltip,
  SET_SELECTED_TOOLTIP,
  data,
  state_dropdown,
  checked,
  raw_data,
  SET_DISTRICT,
  SET_STATE_DROPDOWN,
  SET_CHECKED,
}) => {
  const actived_tool_tip = (name) => {
    setTimeout(() => {
      d3.select(`.rect${name}`)
        .style('stroke-width', 1)
        .style('stroke', 'white');
      d3.select(`.minimap${name}`).style('fill', 'white');
      d3.select(`.tooltip${name}`).style('visibility', 'visible');
    }, 0);
  };

  const disable_tool_tip = (name) => {
    d3.select(`.rect${name}`).style('stroke', 'none');
    d3.select(`.minimap${name}`).style('fill', 'black');
    d3.select(`.tooltip${name}`).style('visibility', 'hidden');
  };

  const click = (_, d) => {
    d3.selectAll(`.minimap`).style('fill', 'none');
    d3.selectAll('.tool_tip_detail_wrapper').style('visibility', 'hidden');
    SET_SELECTED_TOOLTIP(d.districtName);
    actived_tool_tip(d.districtName);
    SET_STATE_DROPDOWN(false);
    SET_DISTRICT(d.districtName);
    if (d.districtName === selected_tooltip) {
      disable_tool_tip(d.districtName);
      SET_CHECKED('เขตพื้นที่ทั้งหมด');
      SET_DISTRICT(null);
      SET_SELECTED_TOOLTIP();
    }
  };

  const mouseover = (_, d) => {
    if (!isMobile) {
      actived_tool_tip(d.districtName);
    }
  };
  const mouseout = (d) => {
    if (!isMobile) {
      if (state_dropdown === 'group' && checked != 'เขตพื้นที่ทั้งหมด') {
        if (!_.some(raw_data.rankings, { districtName: d.districtName })) {
          disable_tool_tip(d.districtName);
        }
        d3.select(`.tooltip${d.districtName}`).style('visibility', 'hidden');
      } else {
        if (selected_tooltip != d.districtName) {
          disable_tool_tip(d.districtName);
        }
      }
    }
  };

  const box_width = isMobileOnly ? 30 : 50;
  const box_gap = isMobileOnly ? 2 : 3;
  const r_max = isMobileOnly ? 15 : 20;

  const bkk_width = 11;
  const bkk_height = 8;

  let r_scale = d3.scaleSqrt().range([0, r_max]);

  let cx = (d) => (+d.X - 1) * (box_width + box_gap) + box_width / 2;
  let cy = (d) => (+d.Y - 1) * (box_width + box_gap) + box_width / 2;
  let add_map = function (parent, data, ref, colors, year) {
    let unit, tool_top, tool_bot;
    if (selected_theme.name === 'น้ำท่วมถนน') {
      unit = 'ซม.';
      tool_top = 'ระดับน้ำท่วมบนถนน';
      tool_bot = 'โดยเฉลี่ย';
    } else if (selected_theme.name === 'พื้นที่สีเขียว') {
      unit = 'ตร.ม./คน';
      tool_top = 'ปริมาณ';
      tool_bot = 'พื้นที่สีเขียว';
    } else if (selected_theme.name === 'มลพิษในคลอง') {
      unit = 'มก./ลิตร';
      tool_top = 'ปริมาณ';
      tool_bot = 'มลพิษในคลอง';
    } else if (selected_theme.name === 'ขยะมูลฝอย') {
      unit = 'กก./คน/วัน';
      tool_top = 'ปริมาณ';
      tool_bot = 'ขยะมูลฝอย';
    } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
      unit = 'มค.ก./ลบ.ม.';
      tool_top = 'ปริมาณ';
      tool_bot = 'ฝุ่นควันเกินมาตรฐาน';
    }

    r_scale.domain([0, d3.max(data, (d) => +d.value)]);

    d3.select('#maps')
      .style('width', bkk_width * box_width + (bkk_width - 1) * box_gap + 'px')
      .style(
        'height',
        bkk_height * box_width + (bkk_height - 1) * box_gap + 'px'
      );

    let map = parent
      .append('svg')
      .attr('class', year + ' ' + 'svg-wrapper')
      .style('display', year === selected_year ? 'block' : 'none')
      .attr('width', bkk_width * box_width + (bkk_width - 1) * box_gap)
      .attr('height', bkk_height * box_width + (bkk_height - 1) * box_gap);

    map
      .selectAll('g')
      .data(data)
      .join((enter) => {
        let group = enter
          .append('g')
          .attr('transform', (d) => `translate(${cx(d)}, ${cy(d)})`);

        // group.append('title').text((d) => `${d.dist} ${+d[data_key]}`);

        group
          .append('rect')
          .attr('class', (d) => `group_circle rect${d.districtName}`)
          .attr('width', box_width)
          .attr('height', box_width)
          .attr('x', -box_width / 2)
          .attr('y', -box_width / 2)
          .style('cursor', 'pointer')
          .on('mouseover', (e, d) => (d.value ? mouseover(e, d) : ''))
          .on('mouseout', (_, d) => mouseout(d))
          .on('click', (e, d) => (d.value ? click(e, d) : ''));

        group
          .append('circle')
          .attr('r', (d) => r_scale(+d.value))
          .style('pointer-events', 'none')
          .style('fill', (d) => {
            let value = +d.value;
            if (value === ref) return colors[1];
            if (value === 0) return 'none';
            return value > ref ? colors[0] : colors[2];
          });

        if (selected_theme.name != 'น้ำท่วมถนน') {
          group
            .append('circle')
            .attr('r', r_scale(ref))
            .style('fill', 'none')
            .style('stroke-width', 1)
            .style('stroke', 'white')
            .style('stroke-linecap', 'round')
            .style('stroke-dasharray', '5 4')
            .style('pointer-events', 'none');
        }

        d3.select('#maps')
          .append('div')
          .attr('class', 'tool_tip_wrapper')
          .selectAll('div')
          .data(data)
          .join((enter) => {
            let tooltip = enter
              .append('div')
              .attr(
                'class',
                (d) =>
                  `tool_tip_detail_wrapper rounded-lg tooltip${d.districtName}`
              )
              .style('top', (d) => cy(d) - 50 + 'px')
              .style('left', (d) => {
                if (cx(d) < screen.width / 2) {
                  return cx(d) + 20 + 'px';
                } else {
                  return cx(d) - 200 + 'px';
                }
              })
              .style('visibility', (d) => 'hidden');

            let header = tooltip
              .append('div')
              .attr('class', 'tooltip_header rounded-t-lg flex p3 font-bold')
              .style('background', selected_theme.color);

            header
              .append('div')
              .attr('class', 'tooltip_h_left flex-1')
              .append('div')
              .text((d) => `เขต${d.districtName}`)
              .append('div')
              .text((d) => `ปี 25${selected_year}`);

            // header
            //   .append('div')
            //   .attr('class', 'tooltip_h_right')
            //   .text((d) => `x`)
            //   .style('cursor', 'pointer')

            let body = tooltip
              .append('div')
              .attr('class', 'tooltip_body  flex leading-4 font-bold');

            body
              .append('div')
              .attr('class', 'tooltip_b_left p3 flex-1')
              .append('div')
              .text((_) => tool_top)
              .append('div')
              .text((_) => tool_bot);

            body
              .append('div')
              .attr(
                'class',
                'tooltip_b_right flex text-right flex-1 justify-end'
              )
              .style('color', (_) => selected_theme.text_color)
              .append('div')
              .attr('class', 'tooltip_number p2')
              .text((d) => (d.value ? d.value : 0))
              .append('div')
              .attr('class', 'tooltip_unit p3')
              .text((_) => unit);

            tooltip
              .append('div')
              .attr(
                'class',
                'tooltip_footer rounded-b-lg flex p3  justify-center'
              )
              .text(`สูงกว่าค่าเฉลี่ย`);
          });
      });
  };

  const run = () => {
    let unit;
    let data_per_year = data.byYear;
    let merge_data = [];
    d3.csv('/map.csv').then((map) => {
      let selected_data = data_per_year[`25${selected_year}`];
      _.forIn(selected_data, (data) => {
        const d = map.find((m) => m.districtName === data.districtName);
        merge_data.push({ ...data, ...d });
      });
      if (selected_theme.name === 'พื้นที่สีเขียว') {
        unit = 9;
      } else if (selected_theme.name === 'มลพิษในคลอง') {
        unit = 15;
      } else if (selected_theme.name === 'ขยะมูลฝอย') {
        unit = 1.8;
      } else if (selected_theme.name === 'ฝุ่นควันเกินมาตรฐาน') {
        unit = 37;
      } else if (selected_theme.name === 'น้ำท่วมถนน') {
        unit = d3.mean(merge_data, (d) => +d.value);
      }
      const maps = d3.select('#maps');

      d3.select('.svg-wrapper').remove();
      add_map(
        maps,
        merge_data,
        unit,
        [selected_theme.color, '#CCF4DD', '#FFFFFF'],
        selected_year
      );
      if (state_dropdown === 'group' && checked === 'เขตพื้นที่ทั้งหมด') {
        _.forEach(raw_data.rankings, (district) => {
          d3.select(`.rect${district.districtName}`)
            .style('stroke-width', 1)
            .style('stroke', 'white');
          d3.select(`.minimap${district.districtName}`).style('fill', 'white');
        });
      }
      // if (selected_tooltip) {
      //   console.log('selected_tooltip');
      // }
    });
  };

  useEffect(() => {
    if (state_dropdown === 'group' && checked != 'เขตพื้นที่ทั้งหมด') {
      _.forEach(raw_data.rankings, (d) => {
        setTimeout(() => {
          d3.selectAll(`.rect${d.districtName}`)
            .style('stroke-width', 1)
            .style('stroke', 'white');
          d3.select(`.minimap${d.districtName}`).style('fill', 'white');
        }, 100);
      });
    }
  }, [checked]);

  // useEffect(() => {
  //   run();
  // }, [selected_year]);

  useEffect(() => {
    // d3.select('.tool_tip_wrapper').remove();
    d3.selectAll('.tool_tip_wrapper').remove();
    run();
  }, [selected_theme]);

  return (
    <div className="relative flex items-center justify-center flex-1 m-auto my-5 lg:my-0">
      <div id="maps" />
    </div>
  );
};

export default map;
