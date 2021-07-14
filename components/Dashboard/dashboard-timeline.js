import React, { useState } from 'react';
import _ from 'lodash';
import playImg from 'assets/images/play.svg';
import pauseImg from 'assets/images/pause.svg';
import { isMobileOnly } from 'react-device-detect';

const timeLine = ({
  selected_index,
  SET_SELECTED_INDEX,
  years,
  selected_year,
}) => {
  const [interval, SET_INTERVAL] = useState();
  const [playing, SET_PLAYING] = useState(false);
  const selectedYear = (year, index) => {
    SET_PLAYING(false);
    SET_SELECTED_INDEX(index);
    clearInterval(interval);
  };
  let index = selected_index + 1;

  const play = () => {
    if (selected_index == years.length - 1) {
      SET_SELECTED_INDEX(0);
      index = 1;
    }
    SET_PLAYING(true);

    SET_INTERVAL(
      setInterval(() => {
        SET_SELECTED_INDEX(index++);
        if (index === years.length) SET_PLAYING(false);
      }, 1300)
    );
  };

  const resume = () => {
    SET_PLAYING(false);
    clearInterval(interval);
  };

  if (selected_index == years.length - 1) {
    clearInterval(interval);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     play();
  //   }, 4500);
  // }, []);

  return (
    <div
      className="items-center block mt-2 md:flex text-white-default"
      id="tile-line-wrapper"
    >
      {isMobileOnly ? (
        playing ? (
          <img
            src={pauseImg}
            alt="playImg"
            className="absolute z-20 ml-5 cursor-pointer top-44"
            onClick={resume}
          />
        ) : (
          <img
            src={playImg}
            alt="playImg"
            className="absolute z-20 ml-5 cursor-pointer top-44"
            onClick={play}
          />
        )
      ) : (
        <div className="flex justify-end flex-1 d2" id="time-line-text">
          {playing ? (
            <img
              src={pauseImg}
              alt="playImg"
              className="pt-2 cursor-pointer md:mr-5"
              onClick={resume}
            />
          ) : (
            <img
              src={playImg}
              alt="playImg"
              className="pt-2 cursor-pointer md:mr-5"
              onClick={play}
            />
          )}
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
                  index === selected_index
                    ? 'text-selected text h4'
                    : 'text h4 text-white-default'
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
