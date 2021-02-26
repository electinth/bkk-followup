import React from 'react';
import * as d3 from 'd3';
import numeral from 'numeral';

const bar_chart = ({ data, selected_theme }) => {
  let budgetPerYear = [];
  let million = 100000;

  _.forIn(data.budgetPerYear, (data, key) => {
    budgetPerYear.push({
      year: key.substring(2, 4),
      all: data.all,
      focused: data.focused,
    });
  });
  let maxBudget = _.maxBy(budgetPerYear, 'all');

  const mouseOver = (_, year) => {
    d3.select(`#tooltip-budget${year}`).style('visibility', 'visible');
  };
  const mouseOut = (_, year) => {
    d3.select(`#tooltip-budget${year}`).style('visibility', 'hidden');
  };

  return (
    <div
      className="flex items-end justify-center w-full"
      style={{ height: '70px' }}
    >
      {budgetPerYear.map((d, index) => (
        <div
          id="bar"
          className="relative flex justify-center mx-1 cursor-pointer"
          onMouseOver={() => mouseOver(_, d.year)}
          onMouseOut={() => mouseOut(_, d.year)}
          key={index}
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '3px',
            width: '30px',
            height: `${(d.all / maxBudget.all) * 100}%`,
          }}
        >
          <div
            id="in-bar"
            className="absolute bottom-0 pointer-events-none"
            style={{
              backgroundColor: selected_theme.color,
              borderRadius: '3px',
              width: '30px',
              height: `${(d.focused / d.all) * 100}%`,
            }}
          ></div>
          <div
            id="text-in-bar"
            className="absolute pointer-events-none p2"
            style={{ bottom: '-25px' }}
          >
            {d.year}
          </div>
          <div
            id={`tooltip-budget${d.year}`}
            className="absolute invisible font-bold "
            style={{
              bottom: '90%',
              left: '70%',
              width: '160px',
            }}
          >
            <div
              id="tooltip-budget-header"
              className="px-2 py-1 rounded-t-md text-white-default p2"
              style={{
                backgroundColor: selected_theme.color,
              }}
            >
              ปี 25{d.year}
            </div>
            <div
              id="tooltip-budget-body"
              className="p-2 rounded-b-md p3"
              style={{
                backgroundColor: selected_theme.color50,
              }}
            >
              <span>
                <p>งบทั้งหมดในปี</p>
                <p
                  style={{
                    color: selected_theme.text_color,
                  }}
                >
                  {numeral(d.all / million).format('0,0')} ล้านบาท
                </p>
              </span>
              <span>
                <p>งบเฉพาะเรื่อง</p>
                <p
                  style={{
                    color: selected_theme.text_color,
                  }}
                >
                  {d.year / million >= 0
                    ? d.year / million
                    : numeral(d.year / million).format('0,0')}{' '}
                  ล้านบาท
                </p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default bar_chart;
