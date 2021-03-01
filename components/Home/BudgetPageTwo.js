import React, { useEffect } from "react";
import * as d3 from "d3";
import numeral from "numeral";
import { isMobile, isTablet } from "react-device-detect";

export default function BudgetPageTwo(props) {
  const { active_index } = props;

  useEffect(() => {
    const data = [
      { year: 2555, value: 12338 },
      { year: 2556, value: 12295 },
      { year: 2557, value: 12297 },
      { year: 2558, value: 11411 },
      { year: 2559, value: 12310 },
      { year: 2560, value: 13676 },
      { year: 2561, value: 13829 },
      { year: 2562, value: 14119 },
    ];

    const parent_width = d3.select(".line-chart").node().clientWidth;

    let height = 200;
    let width = parent_width;

    const margin = {
      top: 5,
      right: isMobile || isTablet ? 40 : 25,
      bottom: 5,
      left: isMobile || isTablet ? 40 : 25,
    };

    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    const x_scale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.year))
      .range([0, width]);

    const y_scale = d3
      .scaleLinear()
      .domain([10000, d3.max(data, (d) => d.value * 1.2)])
      .range([height, 0]);

    const valueLine = d3
      .line()
      .x((d) => x_scale(d.year))
      .y((d) => y_scale(d.value));

    const x_axis = d3.axisBottom(x_scale).ticks(6).tickSize(0).tickValues("");

    let chart = d3
      .select(".line-chart")
      .select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    chart
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueLine)
      .style("fill", "none")
      .style("stroke", "white")
      .style("stroke-width", 4);

    chart
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(x_axis)
      .select("path")
      .style("color", "#00C853")
      .style("stroke-dasharray", "4, 4")
      .style("stroke-width", 2);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-year")
      .attr("x", (d) => x_scale(d.year))
      .attr("y", (d) => y_scale(d.value))
      .attr("dy", "-50")
      .style("font-size", "24px")
      .style("fill", "white")
      .style("text-anchor", "middle")
      .style("opacity", "0")
      .text((d) => d.year);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-value")
      .attr("x", (d) => x_scale(d.year))
      .attr("y", (d) => y_scale(d.value))
      .attr("dy", "-28")
      .style("font-size", "16px")
      .style("font-family", "TheMATTER")
      .style("fill", "#7AE2A6")
      .style("text-anchor", "middle")
      .style("opacity", "0")
      .text((d) => numeral(d.value).format("0,0"));

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-unit")
      .attr("x", (d) => x_scale(d.year))
      .attr("y", (d) => y_scale(d.value))
      .attr("dy", "-12")
      .style("font-size", "16px")
      .style("fill", "#7AE2A6")
      .style("text-anchor", "middle")
      .style("opacity", "0")
      .text((_) => "บาท/คน");

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x_scale(d.year))
      .attr("cy", (d) => y_scale(d.value))
      .attr("r", 6)
      .style("fill", "white");

    if (isMobile || isTablet) showValue();
  }, []);

  const showValue = () => {
    if (active_index === 3) {
      d3.select(".line").style("stroke", "white");
      d3.select(".x-axis").select("path").style("color", "#00C853");
      d3.selectAll(".label-year").style("opacity", "0");
      d3.selectAll(".label-value").style("opacity", "0");
      d3.selectAll(".label-unit").style("opacity", "0");
    }
    if (active_index === 4) {
      d3.select(".line").style("stroke", "#00C853");
      d3.select(".x-axis").select("path").style("color", "white");
      d3.selectAll(".label-year").style("opacity", "1");
      d3.selectAll(".label-value").style("opacity", "1");
      d3.selectAll(".label-unit").style("opacity", "1");
    }
  };

  useEffect(() => {
    if (!(isMobile || isTablet)) showValue();
  }, [active_index]);

  return (
    <div
      className="budget-page-two bg-black-default fixed z-10 inset-0 pointer-events-none"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        <h3 className="d3 text-white-default w-9/12 mt-14 hidden lg:block">
          8 ปีที่ผ่านมา (2555-2562) กทม. ใช้งบประมาณ
          ดูแลประชาชนต่อคนไม่เคยต่ำกว่า
        </h3>

        <h4 className="d4 text-white-default w-full mt-5 block ld:hidden">
          8 ปีที่ผ่านมา (2555-2562) กทม. ใช้งบประมาณ
          ดูแลประชาชนต่อคนไม่เคยต่ำกว่า
        </h4>

        <h2 className="d2 text-green-default">10,000 บาท/คน/ปี</h2>
      </div>

      <div className="overflow-x-auto pointer-events-auto lg:pointer-events-none pb-5">
        <div
          className="line-chart mt-14 mx-auto relative"
          style={{ width: isMobile || isTablet ? "200%" : "80%" }}
        >
          <svg></svg>

          <h4 className="start-at text-green-default text-base absolute -bottom-1 -right-24 hidden lg:block">
            10,000 บาท
          </h4>
        </div>
      </div>
    </div>
  );
}
