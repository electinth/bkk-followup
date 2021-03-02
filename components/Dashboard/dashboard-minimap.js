import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import topo_district from 'assets/data/district.topojson.json';

const mini_map = ({ selected_theme }) => {
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
  useEffect(() => {
    let svg_map = d3
      .select('#map')
      .append('svg')
      .style('position', 'absolute')
      .style('top', '-70%')
      .attr('width', width)
      .attr('height', height);

    svg_map
      .selectAll()
      .data(geojson.features)
      .enter()
      .append('g')

      .append('path')
      .attr('d', path)
      .attr('class', (d) => `minimap minimap${d.properties.dname.substring(3)}`)

      .style('stroke-width', 1)
      .style('stroke', 'white');
  }, []);
  return (
    <div id="map" className="flex justify-center text-white-default"></div>
  );
};

export default mini_map;
