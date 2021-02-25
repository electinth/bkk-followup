import React from 'react';

const bar_chart = ({ data, selected_theme }) => {
  let budgetPerYear = [];

  _.forIn(data.budgetPerYear, (data, key) => {
    budgetPerYear.push({
      year: key.substring(2, 4),
      all: data.all,
      focused: data.focused,
    });
  });
  let maxBudget = _.maxBy(budgetPerYear, 'all');

  const mouseOver = (e) => {
    console.log(e);
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
          onMouseOver={mouseOver}
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
          <div id={`tooltip-budget${d.year}`} className="absolute">
            <div
              id="tooltip-budget-header"
              className="p3"
              style={{
                backgroundColor: selected_theme.color,
              }}
            >
              ปี 25{d.year}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default bar_chart;
