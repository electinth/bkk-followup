import React, { useState, useEffect } from "react";
import _ from "lodash";

const timeLine = () => {
  const years = [55, 56, 57, 58, 59, 60, 61, 62];
  const [selected_index, SET_SELECTED_INDEX] = useState(0);
  const [selected_year, SET_SELECTED_YEAR] = useState(55);
  const selectedYear = (year, index) => {
    SET_SELECTED_INDEX(index);
    SET_SELECTED_YEAR(year);
  };
  //   useEffect(() => {
  //     SET_SELECTED_INDEX(0);
  //   }, []);

  //   const play = () => {
  //     console.log(selected_index);
  //     setInterval(() => {
  //       SET_SELECTED_INDEX(selected_index + 1);
  //       console.log(selected_index, years.length);
  //       //   if (selected_index === years.length) {
  //         //   clearInterval();
  //       //   }
  //     }, 2000);
  //     console.log("play");
  //   };
  const [counter, setCounter] = useState(60);
  // useEffect(() => {
  //   const timer =
  //     counter > 0 &&
  //     setInterval(() => {
  //       console.log("log");
  //       setCounter(counter + 1);
  //     }, 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);

  return (
    <div
      className="flex items-center text-white-default"
      id="tile-line-wrapper"
    >
      <div className="flex justify-end flex-1 d2" id="time-line-text">
        <div onClick={() => play()}> {"-->"} </div>
        25{selected_year}
        {/* <div>Countdown: {counter}</div> */}
      </div>
      <div id="time-line" style={{ flex: 2 }}>
        <ul className="timeline">
          {years.map((y, index) => (
            <li
              key={index}
              className={
                index <= selected_index
                  ? "active-tl timeline-li"
                  : "unselected timeline-li"
              }
              onClick={() => selectedYear(y, index)}
            >
              <div
                className={
                  index <= selected_index ? "text-selected text h4" : "text h4"
                }
              >
                {y}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default timeLine;
