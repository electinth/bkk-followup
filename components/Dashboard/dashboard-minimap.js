import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import topo_district from 'assets/data/district.topojson.json';

const mini_map = ({
  // selected_tooltip,
  // SET_SELECTED_TOOLTIP,
  selected_theme,
}) => {
  // const active_tool_tip = (name) => {
  //   d3.selectAll(`.rect${name}`)
  //     .style('stroke-width', 1)
  //     .style('stroke', 'white');
  //   d3.selectAll(`.minimap${name}`).style('fill', 'white');
  //   d3.selectAll(`.tooltip${name}`).style('visibility', 'visible');
  // };

  // const disable_tool_tip = (name) => {
  //   d3.selectAll(`.rect${name}`).style('stroke', 'none');
  //   d3.selectAll(`.minimap${name}`).style('fill', 'black');
  //   d3.selectAll(`.tooltip${name}`).style('visibility', 'hidden');
  // };

  // const click = (name) => {
  //   d3.select('.minimap').remove();
  //   SET_SELECTED_TOOLTIP(name.substring(3));
  //   setTimeout(() => {
  //     active_tool_tip(name.substring(3));
  //     if (name.substring(3) === selected_tooltip) {
  //       disable_tool_tip(name.substring(3));
  //     }
  //   }, 200);
  // };

  // const mouseover = (name) => {
  //   active_tool_tip(name.substring(3));
  // };
  // const mouseout = (name) => {
  //   if (name.substring(3) != selected_tooltip) {
  //     disable_tool_tip(name.substring(3));
  //   }
  // };
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
    d3.selectAll(`.minimap`).style('fill', 'none');
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
      // .style('cursor', 'pointer')
      // .on('mouseover', (_, d) => mouseover(d.properties.dname))
      // .on('mouseout', (_, d) => mouseout(d.properties.dname))
      // .on('click', (_, d) => click(d.properties.dname))
      .append('path')
      .attr('d', path)
      .attr('class', (d) => `minimap minimap${d.properties.dname.substring(3)}`)

      .style('stroke-width', 1)
      .style('stroke', 'white');
  }, [selected_theme]);
  return (
    <div id="map" className="flex justify-center text-white-default"></div>
  );
};

export default mini_map;
