import React from 'react';
import * as d3 from 'd3';

const map = ({ selected_year, selected_theme }) => {
  const toolTip = (d) => {
    d3.select(`.${d.dist}`).style('stroke-width', 1).style('stroke', 'white');
    d3.select(`.เขต${d.dist}`).style('fill', 'white');

    d3.select('#maps')
      .append('div')
      .attr('class', 'tool_tip_wrapper rounded-lg');

    d3.select('.tool_tip_wrapper ')
      .append('div')
      .attr('class', 'tooltip_header rounded-t-lg flex p3 font-bold')
      .style('background', selected_theme);

    d3.select('.tooltip_header')
      .append('div')
      .attr('class', 'tooltip_h_left flex-1')
      .append('div')
      .text(`เขต${d.dist}`)
      .append('div')
      .text(`ปี 25${selected_year}`);

    d3.select('.tooltip_header')
      .append('div')
      .attr('class', 'tooltip_h_right')
      .text(`x`);

    d3.select('.tool_tip_wrapper')
      .append('div')
      .attr('class', 'tooltip_body  flex leading-4 font-bold');

    d3.select('.tooltip_body')
      .append('div')
      .attr('class', 'tooltip_b_left p3 flex-1')
      .append('div')
      .text(`ปริมาณ`)
      .append('div')
      .text(`ขยะมูลฝอย`);

    d3.select('.tooltip_body')
      .append('div')
      .attr('class', 'tooltip_b_right flex text-right flex-1 justify-end')
      .style('color', selected_theme)
      .append('div')
      .attr('class', 'tooltip_number p2')
      .text(`2.085 `)
      .append('div')
      .attr('class', 'tooltip_unit p3')
      .text(`กก./คน/วัน`);

    d3.select('.tool_tip_wrapper')
      .append('div')
      .attr('class', 'tooltip_footer rounded-b-lg flex p3  justify-center')
      .text(`สูงกว่าค่าเฉลี่ย`);
  };
  const click = (d) => {
    toolTip(d);
  };

  const mouseover = (d) => {};
  const mouseout = () => {
    // d3.selectAll(`.group_circle`).style('stroke', 'none');
    // d3.selectAll(`.minimap`).style('fill', 'black');
    // d3.selectAll('.tool_tip_wrapper').remove();
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
          .attr('transform', (d) => `translate(${cx(d)}, ${cy(d)})`)
          .style('cursor', 'pointer')
          .on('mouseover', (_, d) => mouseover(d))
          .on('mouseout', mouseout)
          .on('click', click);

        group.append('title').text((d) => `${d.dist} ${+d[data_key]}`);

        group
          .append('rect')
          .attr('class', (d) => `group_circle ${d.dist}`)
          .attr('width', '50')
          .attr('height', '50')
          .attr('x', '-25')
          .attr('y', '-25')
          .attr('stroke', 'none');

        group
          .append('circle')
          .attr('r', (d) => r_scale(+d[data_key]))
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
          .style('stroke-dasharray', '5 4');
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
