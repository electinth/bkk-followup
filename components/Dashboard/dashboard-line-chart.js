import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function DashboardLineChart({ selected_theme }) {
  // const { subPageIndex } = props;

  const createChart = () => {
    d3.select('.svg-line-chart').remove();
    const data = [
      { year: 55, value: 4.111 },
      { year: 56, value: 1.923 },
      { year: 57, value: 1.323 },
      { year: 58, value: 1.423 },
      { year: 59, value: 1.623 },
      { year: 60, value: 1.123 },
      { year: 61, value: 1.423 },
      { year: 62, value: 3.823 },
    ];

    const second_data = data.map((d) => {
      return { year: d.year, value: d.value / 2 };
    });

    let height = 200;
    let width = 540;

    const margin = { top: 40, right: 25, bottom: 40, left: 25 };

    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    const x_scale = d3.scaleTime().range([0, width]);

    x_scale.domain(
      d3.extent(data, function (d) {
        return d.year;
      })
    );

    const y_scale = d3.scaleLinear().range([height, 0]);

    y_scale.domain([
      d3.min(data, function (d) {
        return 0;
      }),
      5,
    ]);

    const valueLine = d3
      .line()
      .x(function (d) {
        return x_scale(d.year);
      })
      .y(function (d) {
        return y_scale(d.value);
      });

    const lineBgArea = d3
      .area()
      .x(function (d) {
        return x_scale(d.year);
      })
      .y(function (d) {
        return y_scale(d.value);
      })
      .y1(function () {
        return height;
      });

    const x_axis = d3
      .axisBottom(x_scale)
      .ticks(6)
      .tickSize(0)
      .tickFormat(d3.format('.0f'))
      .tickValues(data.map((d) => d.year));

    const chart = d3
      .select('.line-chart')
      .append('svg')
      .attr('class', 'svg-line-chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    chart
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(x_axis);

    chart
      .append('path')
      .data([data])
      .attr('class', 'bg-line')
      .attr('d', lineBgArea)
      .style('fill', selected_theme.color50);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'value-line')
      .attr('x', function (d) {
        return x_scale(d.year);
      })
      .attr('y', function (d) {
        return y_scale(d.value);
      })
      .attr('height', function (d) {
        return height - y_scale(d.value);
      })
      .attr('width', 1)
      .style('fill', selected_theme.color);

    chart
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueLine)
      .style('fill', 'none')
      .style('stroke', selected_theme.color)
      .style('stroke-width', 2);

    chart
      .append('path')
      .data([second_data])
      .attr('class', 'dash-line')
      .attr('d', valueLine)
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', 1)
      .style('stroke-dasharray', 5);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', function (d) {
        return x_scale(d.year);
      })
      .attr('cy', function (d) {
        return y_scale(d.value);
      })
      .attr('r', 3)
      .style('fill', selected_theme.color);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bg-label')
      .attr('width', function (d) {
        return 36;
      })
      .attr('height', function (d) {
        return 17;
      })
      .attr('x', function (d) {
        return x_scale(d.year) - 18;
      })
      .attr('y', function (d) {
        return y_scale(d.value) - 23;
      })
      .attr('rx', 3)
      .style('fill', 'white')
      .style('opacity', 0.8);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', function (d) {
        return x_scale(d.year);
      })
      .attr('y', function (d) {
        return y_scale(d.value);
      })
      .attr('dy', '-10')
      .style('font-size', '12px')
      .style('text-anchor', 'middle')
      .text(function (d) {
        return d.value;
      });

    chart
      .selectAll('g.tick')
      .select('text')
      .attr('y', 12)
      .style('font-size', '14px')
      .style('font-weight', 'bold');
  };

  useEffect(() => {
    createChart();
  }, [selected_theme]);

  return <div className="inline-block mx-auto border line-chart"></div>;
}
