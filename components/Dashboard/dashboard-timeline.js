import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import playImg from 'assets/images/play.svg';
import { isMobileOnly } from 'react-device-detect';

const timeLine = ({
  selected_year,
  SET_SELECTED_YEAR,
  selected_index,
  SET_SELECTED_INDEX,
}) => {
  const years = [55, 56, 57, 58, 59, 60, 61, 62];
  const [interval, SET_INTERVAL] = useState();
  const selectedYear = (year, index) => {
    SET_SELECTED_INDEX(index);
    SET_SELECTED_YEAR(year);
    clearInterval(interval);
  };
  let year = selected_year + 1;
  let index = selected_index + 1;

  const play = () => {
    if (index < years.length) {
      SET_INTERVAL(
        setInterval(() => {
          SET_SELECTED_INDEX(index++);
          SET_SELECTED_YEAR(year++);
        }, 1000)
      );
    }
  };
  const resume = () => {
    clearInterval(interval);
  };
  useEffect(() => {
    if (index === years.length) {
      clearInterval(interval);
    }
  }, [index]);

  return (
    <div
      className="flex items-center mt-2 text-white-default"
      id="tile-line-wrapper"
    >
      {isMobileOnly ? (
        <img
          src={playImg}
          alt="playImg"
          className="absolute z-20 ml-5 cursor-pointer top-44"
          onClick={play}
        />
      ) : (
        <div className="flex justify-end flex-1 d2" id="time-line-text">
          <img
            src={playImg}
            alt="playImg"
            className="pt-2 cursor-pointer md:mr-5"
            onClick={play}
          />
          {/* <div onClick={resume} className="cursor-pointer">
          {'='}
        </div> */}
          25{selected_year}
        </div>
      )}

      <div id="time-line" style={{ flex: 2 }}>
        <ul className="flex justify-center timeline">
          {years.map((y, index) => (
            <li
              key={index}
              className={
                index <= selected_index
                  ? 'active-tl timeline-li'
                  : 'unselected timeline-li'
              }
            >
              <div
                className={
                  index <= selected_index ? 'text-selected text h4' : 'text h4'
                }
                onClick={() => selectedYear(y, index)}
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
