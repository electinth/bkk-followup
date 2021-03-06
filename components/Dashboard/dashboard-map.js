import React from "react";
import { isMobileOnly, isMobile } from "react-device-detect";
import * as d3 from "d3";
import close_img from "../../assets/images/close_map.svg";

const map = ({
  selected_year,
  selected_theme,
  data,
  state_dropdown,
  checked,
  raw_data,
  SET_DISTRICT,
  district,
}) => {
  const actived_tool_tip = (name) => {
    SET_DISTRICT(name);
  };
  const disable_tool_tip = (name) => {
    d3.select(`.rect${name}`).style("stroke", "none");
    d3.select(`.minimap${name}`).style("fill", "black");
    d3.select(`.tooltip${name}`).style("visibility", "hidden");
    SET_DISTRICT(null);
  };

  const mouseover = (_, d) => {
    if (!isMobile) {
      if (d.districtName != district) {
        d3.select(`.rect${d.districtName}`)
          .style("stroke-width", 1)
          .style("stroke", "white");
        d3.select(`.minimap${d.districtName}`).style("fill", "white");
        d3.select(`.tooltip${d.districtName}`).style("visibility", "visible");
      }
    }
  };
  const mouseout = (d) => {
    if (!isMobile) {
      if (state_dropdown === "group" && checked != "เขตพื้นที่ทั้งหมด") {
        if (!_.some(raw_data.rankings, { districtName: d.districtName })) {
          d3.select(`.rect${d.districtName}`).style("stroke", "none");
          d3.select(`.minimap${d.districtName}`).style("fill", "black");
          d3.select(`.tooltip${d.districtName}`).style("visibility", "hidden");
        }
      } else {
        if (district != d.districtName) {
          d3.select(`.rect${d.districtName}`).style("stroke", "none");
          d3.select(`.minimap${d.districtName}`).style("fill", "black");
          d3.select(`.tooltip${d.districtName}`).style("visibility", "hidden");
        }
      }
    }
  };

  const color = (d) => {
    if (d > 100) {
      return "#1570FF";
    } else if (d > 80) {
      return "#3A87FF";
    } else if (d > 60) {
      return "#609EFF";
    } else if (d > 40) {
      return "#85B5FF";
    } else if (d > 20) {
      return "#ABCCFF";
    } else if (d > 0) {
      return "#D0E2FF";
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
    let unit, tool_top, tool_bot, avg;
    if (selected_theme.name === "น้ำท่วมถนน") {
      unit = "ครั้ง";
      tool_top = "ระดับน้ำท่วมบนถนน";
      tool_bot = "โดยเฉลี่ย";
    } else if (selected_theme.name === "พื้นที่สีเขียว") {
      unit = "ตร.ม./คน";
      tool_top = "ปริมาณ";
      tool_bot = "พื้นที่สีเขียว";
      avg = "9";
    } else if (selected_theme.name === "มลพิษในคลอง") {
      unit = "มก./ลิตร";
      tool_top = "ปริมาณ";
      tool_bot = "มลพิษในคลอง";
      avg = "15";
    } else if (selected_theme.name === "ขยะมูลฝอย") {
      unit = "กก./คน/วัน";
      tool_top = "ปริมาณ";
      tool_bot = "ขยะมูลฝอย";
      avg = "1.864";
    } else if (selected_theme.name === "ฝุ่นควันเกินมาตรฐาน") {
      unit = "มค.ก./ลบ.ม.";
      tool_top = "ปริมาณ";
      tool_bot = "ฝุ่นควันเกินมาตรฐาน";
      avg = "25";
    }

    r_scale.domain([0, d3.max(data, (d) => +d.value)]);

    d3.select("#maps")
      .style("width", bkk_width * box_width + (bkk_width - 1) * box_gap + "px")
      .style(
        "height",
        bkk_height * box_width + (bkk_height - 1) * box_gap + "px"
      );

    let map = parent
      .append("svg")
      .attr("class", year + " " + "svg-wrapper")
      .style("display", year === selected_year ? "block" : "none")
      .attr("width", bkk_width * box_width + (bkk_width - 1) * box_gap)
      .attr("height", bkk_height * box_width + (bkk_height - 1) * box_gap);

    map
      .selectAll("g")
      .data(data)
      .join((enter) => {
        let group = enter
          .append("g")
          .attr("transform", (d) => `translate(${cx(d)}, ${cy(d)})`);
        group
          .append("rect")
          .attr("class", (d) => `group_circle rect${d.districtName}`)
          .attr("width", box_width)
          .attr("height", box_width)
          .attr("x", -box_width / 2)
          .attr("y", -box_width / 2)
          .style("cursor", (d) => (d.value > 0 ? "pointer" : ""))
          .on("mouseover", (e, d) => (d.value ? mouseover(e, d) : ""))
          .on("mouseout", (_, d) => mouseout(d))
          .on("click", (_, d) =>
            d.value > 0 ? actived_tool_tip(d.districtName) : ""
          );

        group
          .append("circle")
          .attr("r", (d) => r_scale(+d.value))
          .style("pointer-events", "none")
          .style("fill", (d) => {
            let value = +d.value;
            if (value === ref) return colors[1];
            if (value === 0) return null;
            if (selected_theme.name === "น้ำท่วมถนน") return color(d.value);
            return value > ref ? colors[0] : colors[2];
          });

        group
          .append("circle")
          .attr("r", r_scale(ref))
          .style("fill", "none")
          .style("stroke-width", (d) =>
            selected_theme.name === "น้ำท่วมถนน" && d.value > 0 ? 0 : 1
          )
          .style("stroke", "white")
          .style("stroke-linecap", "round")
          .style("stroke-dasharray", "5 4")
          .style("pointer-events", (_) => "none");

        group
          .append("svg:image")
          .attr("xlink:href", (d) => {
            let value = +d.value;
            return value === 0 ? close_img : "";
          })
          .attr("x", (_) => -3)
          .attr("y", (_) => -3)
          .attr("height", 6)
          .attr("width", 6)
          .style("pointer-events", (_) => "none");

        d3.select("#maps")
          .append("div")
          .attr("class", "tool_tip_wrapper")
          .selectAll("div")
          .data(data)
          .join((enter) => {
            let tooltip = enter
              .append("div")
              .attr(
                "class",
                (d) =>
                  `tool_tip_detail_wrapper rounded-lg tooltip${d.districtName}`
              )
              .style("top", (d) => {
                if (isMobile) {
                  return cy(d) + "px";
                } else {
                  return cy(d) + 60 + "px";
                }
              })
              .style("left", (d) => {
                if (isMobileOnly) {
                  if (cx(d) < screen.width / 2) {
                    return cx(d) + 20 + "px";
                  } else {
                    return cx(d) - 150 + "px";
                  }
                } else if (isMobile) {
                  if (cx(d) < screen.width / 2) {
                    return cx(d) + 120 + "px";
                  } else {
                    return cx(d) - 130 + "px";
                  }
                } else {
                  return cx(d) + 40 + "px";
                }
              })
              .style("visibility", (d) => "hidden");

            let header = tooltip
              .append("div")
              .attr("class", "tooltip_header rounded-t-lg flex p3 font-bold")
              .style("background", selected_theme.color);

            header
              .append("div")
              .attr("class", "tooltip_h_left flex-1")
              .append("div")
              .text((d) => `เขต${d.districtName}`)
              .append("div")
              .text((_) => `ปี 25${selected_year}`);

            header
              .append("div")
              .attr("class", "close_tooltip cursor-pointer")
              .text((_) => "x")
              .on("click", (_, d) => disable_tool_tip(d.districtName));

            let body = tooltip
              .append("div")
              .attr("class", "tooltip_body  flex leading-4 font-bold");

            body
              .append("div")
              .attr("class", "tooltip_b_left p3 flex-1")
              .append("div")
              .text((_) => tool_top)
              .append("div")
              .text((_) => tool_bot);

            body
              .append("div")
              .attr(
                "class",
                "tooltip_b_right flex text-right flex-1 justify-end"
              )
              .style("color", (_) => selected_theme.text_color)
              .append("div")
              .attr("class", "tooltip_number p2")
              .text((d) => (d.value ? d.value : 0))
              .append("div")
              .attr("class", "tooltip_unit p3")
              .text((_) => unit);

            tooltip
              .append("div")
              .attr(
                "class",
                "tooltip_footer rounded-b-lg flex p3  justify-center"
              )
              .text((d) => {
                if (d.value > avg) {
                  return `สูงกว่าค่าเฉลี่ย`;
                } else if (d.value < avg) {
                  return `ต่ำกว่าค่าเฉลี่ย`;
                }
              });
          });
      });
  };

  const run = () => {
    let unit;
    let data_per_year = data.byYear;
    let merge_data = [];
    d3.csv("/data/map.csv").then((map) => {
      let selected_data = data_per_year[`25${selected_year}`];
      _.forIn(selected_data, (data) => {
        const d = map.find((m) => m.districtName === data.districtName);
        merge_data.push({ ...data, ...d });
      });
      if (selected_theme.name === "พื้นที่สีเขียว") {
        unit = 9;
      } else if (selected_theme.name === "มลพิษในคลอง") {
        unit = 15;
      } else if (selected_theme.name === "ขยะมูลฝอย") {
        unit = 1.8;
      } else if (selected_theme.name === "ฝุ่นควันเกินมาตรฐาน") {
        unit = 37;
      } else if (selected_theme.name === "น้ำท่วมถนน") {
        unit = d3.mean(merge_data, (d) => +d.value);
      }
      const maps = d3.select("#maps");
      d3.select(".svg-wrapper").remove();
      d3.selectAll(".tool_tip_wrapper").remove();
      add_map(
        maps,
        merge_data,
        unit,
        [selected_theme.color, "#CCF4DD", "#FFFFFF"],
        selected_year
      );
      if (
        state_dropdown === "group" &&
        checked != "เขตพื้นที่ทั้งหมด" &&
        !district
      ) {
        _.forEach(raw_data.rankings, (district) => {
          d3.select(`.rect${district.districtName}`)
            .style("stroke-width", 1)
            .style("stroke", "white");
          d3.select(`.minimap${district.districtName}`).style("fill", "white");
        });
      } else if (district) {
        d3.selectAll(`.minimap`).style("fill", "none");
        d3.selectAll(".tool_tip_detail_wrapper").style("visibility", "hidden");
        d3.selectAll(`.group_circle`).style("stroke", "none");
        d3.select(`.rect${district}`)
          .style("stroke-width", 1)
          .style("stroke", "white");
        d3.select(`.minimap${district}`).style("fill", "white");
        d3.select(`.tooltip${district}`).style("visibility", "visible");
      }
    });
  };

  run();

  return (
    <div className="relative flex items-center justify-center flex-1 m-auto my-5 lg:my-0">
      <div id="maps" />
    </div>
  );
};

export default map;
