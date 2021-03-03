import * as d3 from 'd3';
import React, { useEffect } from 'react';

const donut_chart = ({ selected_theme, percent }) => {
  const draw_donut_chart = () => {
    let data = [percent, 100 - percent];
    let width = 140,
      height = 140;
    let svg = d3
        .select('#donut-chart')
        .append('svg')
        .attr('class', 'svg-donut-chart')
        .attr('width', width)
        .attr('height', height),
      radius = Math.min(width, height) / 2,
      g = svg
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
        .attr('class', 'donut-chart');

    var color = d3.scaleOrdinal([selected_theme.color, '#CFD8DC']);

    // Generate the pie
    var pie = d3.pie().sort(null);

    // Generate the arcs
    var arc = d3
      .arc()
      .innerRadius(radius - 11)
      .outerRadius(radius);

    //Generate groups
    var arcs = g
      .selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('className', (_, i) => `pie${i}`);

    //Draw arc paths
    arcs
      .append('path')
      .attr('fill', function (d, i) {
        return color(i);
      })
      .attr('d', arc);
  };
  d3.select('.svg-donut-chart').remove();
  draw_donut_chart();
  useEffect(() => {
    draw_donut_chart();
  }, []);

  return (
    <div id="donut-chart" className="relative">
      <div
        id="text-donut"
        className="absolute flex flex-col w-full text-center top-2/4 left-2/4"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <p
          className="font-bold h3"
          style={{ color: selected_theme.text_color }}
        >
          {percent.toFixed(2)}%
        </p>
        <span className="font-bold p2">
          <p>ของงบประมาณ </p>
          <p>ทั้งหมด</p>
        </span>
      </div>
    </div>
  );
};

export default donut_chart;
