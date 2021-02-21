import React from 'react';
import * as d3 from 'd3';

const map = ({
  selected_year,
  selected_theme,
  selected_tooltip,
  SET_SELECTED_TOOLTIP,
}) => {
  d3.select('.tool_tip_wrapper').remove();

  const actived_tool_tip = (name) => {
    d3.select(`.rect${name}`).style('stroke-width', 1).style('stroke', 'white');
    d3.select(`.minimap${name}`).style('fill', 'white');
    d3.select(`.tooltip${name}`).style('visibility', 'visible');
  };

  const disable_tool_tip = (name) => {
    d3.select(`.rect${name}`).style('stroke', 'none');
    d3.select(`.minimap${name}`).style('fill', 'black');
    d3.select(`.tooltip${name}`).style('visibility', 'hidden');
  };

  const click = (e, d) => {
    SET_SELECTED_TOOLTIP(d.dist);
    actived_tool_tip(d.dist);
    if (d.dist === selected_tooltip) {
      disable_tool_tip(d.dist);
    }
  };

  const mouseover = (e, d) => {
    actived_tool_tip(d.dist);
  };
  const mouseout = (d) => {
    if (selected_tooltip != d.dist) {
      disable_tool_tip(d.dist);
    }
  };

  const box_width = 50;
  const box_gap = 3;
  const r_max = 20;

  const bkk_width = 11;
  const bkk_height = 8;

  let r_scale = d3.scaleSqrt().range([0, r_max]);

  let cx = (d) => (d.X - 1) * (box_width + box_gap) + box_width / 2;
  let cy = (d) => (d.Y - 1) * (box_width + box_gap) + box_width / 2;
  let add_map = function (parent, data, data_key, ref, colors, year) {
    r_scale.domain([0, d3.max(data, (d) => +d[data_key])]);

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
          .attr('class', (d) => `group_circle rect${d.dist}`)
          .attr('width', '50')
          .attr('height', '50')
          .attr('x', '-25')
          .attr('y', '-25')
          .style('cursor', 'pointer')
          .on('mouseover', (e, d) => mouseover(e, d))
          .on('mouseout', (_, d) => mouseout(d))
          .on('click', (e, d) => click(e, d));

        group
          .append('circle')
          .attr('r', (d) => r_scale(+d[data_key]))
          .style('pointer-events', 'none')
          .style('fill', (d) => {
            let value = +d[data_key];
            if (value === ref) return colors[1];
            return value > ref ? colors[0] : colors[2];
          });

        group
          .append('circle')
          .attr('r', r_scale(ref))
          .style('fill', 'none')
          .style('stroke-width', 1)
          .style('stroke', 'white')
          .style('stroke-linecap', 'round')
          .style('stroke-dasharray', '5 4')
          .style('pointer-events', 'none');

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
                (d) => `tool_tip_detail_wrapper rounded-lg tooltip${d.dist}`
              )
              .style('top', (d) => cy(d) - 50 + 'px')
              .style('left', (d) => cx(d) + 40 + 'px')
              .style('visibility', 'hidden');

            tooltip
              .append('div')
              .attr('class', 'tooltip_header rounded-t-lg flex p3 font-bold')
              .style('background', selected_theme)
              .append('div')
              .attr('class', 'tooltip_h_left flex-1')
              .append('div')
              .text((d) => `เขต${d.dist}`)
              .append('div')
              .text((d) => `ปี 25${selected_year}`);

            d3.select('.tooltip_header')
              .append('div')
              .attr('class', 'tooltip_h_right')
              .text(`x`);

            tooltip
              .append('div')
              .attr('class', 'tooltip_body  flex leading-4 font-bold');

            d3.selectAll('.tooltip_body')
              .append('div')
              .attr('class', 'tooltip_b_left p3 flex-1')
              .append('div')
              .text((d) => `ปริมาณ`)
              .append('div')
              .text((d) => `ขยะมูลฝอย`);

            d3.selectAll('.tooltip_body')
              .append('div')
              .attr(
                'class',
                'tooltip_b_right flex text-right flex-1 justify-end'
              )
              .style('color', selected_theme)
              .append('div')
              .attr('class', 'tooltip_number p2')
              .text((d) => `2.085 `)
              .append('div')
              .attr('class', 'tooltip_unit p3')
              .text((d) => `กก./คน/วัน`);

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

  d3.csv('/data.csv').then((data) => {
    d3.csv('/map.csv').then((map) => {
      data = data.map((d) =>
        Object.assign(
          d,
          map.find((e) => e.District == d.dist)
        )
      );

      const maps = d3.select('#maps');
      d3.selectAll('.svg-wrapper').remove();
      d3.range(selected_year, selected_year + 1).forEach((year) => {
        let data_key = 'green' + year;
        add_map(
          maps,
          data,
          data_key,
          9,
          [selected_theme, '#CCF4DD', '#FFFFFF'],
          year
        );
      });
      // d3.range(55, 63).forEach((year) => {
      //   let data_key = "waste" + year;
      //   maps.append("div").classed("key", true).text(data_key);
      //   add_map(
      //     maps,
      //     data,
      //     data_key,
      //     d3.mean(data, (d) => +d[data_key]),
      //     ["#DF3A6B", "#F4B8CA", "#FFFFFF"]
      //   );
      // });
    });
  });

  return (
    <div className="relative flex items-center flex-1 m-auto">
      <div id="maps" />
    </div>
  );
};

export default map;
