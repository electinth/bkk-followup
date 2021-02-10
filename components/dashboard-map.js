import React from "react";
import * as d3 from "d3";

const map = () => {
  const box_width = 50;
  const box_gap = 3;
  const r_max = 20;

  const bkk_width = 11;
  const bkk_height = 8;

  let r_scale = d3.scaleSqrt().range([0, r_max]);

  let cx = (d) => (d.X - 1) * (box_width + box_gap) + box_width / 2;
  let cy = (d) => (d.Y - 1) * (box_width + box_gap) + box_width / 2;
  let add_map = function (parent, data, data_key, ref, colors) {
    r_scale.domain([0, d3.max(data, (d) => +d[data_key])]);

    let map = parent
      .append("svg")
      .attr("width", bkk_width * box_width + (bkk_width - 1) * box_gap)
      .attr("height", bkk_height * box_width + (bkk_height - 1) * box_gap);

    map
      .selectAll("g")
      .data(data)
      .join((enter) => {
        let group = enter
          .append("g")
          .attr("transform", (d) => `translate(${cx(d)}, ${cy(d)})`);
        group.append("title").text((d) => `${d.dist} ${+d[data_key]}`);
        group
          .append("circle")
          .attr("r", (d) => r_scale(+d[data_key]))
          .style("fill", (d) => {
            let value = +d[data_key];
            if (value === ref) return colors[1];
            return value > ref ? colors[0] : colors[2];
          });
        group
          .append("circle")
          .attr("r", r_scale(ref))
          .style("fill", "none")
          .style("stroke-width", 1)
          .style("stroke", "white")
          .style("stroke-linecap", "round")
          .style("stroke-dasharray", "5 4");
      });
  };

  d3.csv("/data.csv").then((data) => {
    d3.csv("/map.csv").then((map) => {
      data = data.map((d) =>
        Object.assign(
          d,
          map.find((e) => e.District == d.dist)
        )
      );

      const maps = d3.select("#maps");
      d3.range(55, 56).forEach((year) => {
        let data_key = "green" + year;
        maps
          .append("div")
          .classed("key", true)
          .text(data_key)
          .style("color", "white");
        add_map(maps, data, data_key, 9, ["#00C853", "#CCF4DD", "#FFFFFF"]);
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

  return <div id="maps"></div>;
};

export default map;
