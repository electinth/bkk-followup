import React, { useEffect } from 'react';
import * as d3 from 'd3';
const topo_district = require('../assets/images/district.topojson.json');
const topojson = require('topojson');

const mini_map = () => {
  const mouseover = (name) => {
    d3.select(`.${name.substring(3)}`)
      .style('stroke-width', 1)
      .style('stroke', 'white');
    d3.select(`.${name}`).style('fill', 'white');
  };
  const mouseout = () => {
    d3.selectAll(`.group_circle`).style('stroke', 'none');
    d3.selectAll(`.minimap`).style('fill', 'black');
  };

  useEffect(() => {
    const height = 147;
    const width = 187;

    const projection = d3
      .geoMercator()
      .translate([width / 3, height / 3])
      .scale([height * 110])
      .center([100.5, 13.8]);
    const path = d3.geoPath(projection);
    const geojson = topojson.feature(
      topo_district,
      topo_district.objects.district
    );

    let svg_map = d3
      .select('#map')
      .append('svg')
      .style('position', 'absolute')
      .style('top', '-80%')
      .attr('width', width)
      .attr('height', height);

    svg_map
      .selectAll()
      .data(geojson.features)
      .enter()
      .append('g')
      .style('cursor', 'pointer')
      .on('mouseover', (_, d) => mouseover(d.properties.dname))
      .on('mouseout', mouseout)
      .append('path')
      .attr('d', path)
      .attr('class', (d) => `minimap ${d.properties.dname}`)

      .style('stroke-width', 1)
      .style('stroke', 'white');
  }, []);
  return (
    <div
      className="relative flex justify-center flex-1 w-full h-full text-white-default"
      id="map"
    ></div>
  );
};

export default mini_map;
