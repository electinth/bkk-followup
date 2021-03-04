import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as d3 from 'd3';

const category_manu = ({
  category,
  SET_SELECTED_INDEX,
  SET_SELECTED_TOOLTIP,
  SET_STATE_DROPDOWN,
  SET_CHECKED,
  SET_DISTRICT,
}) => {
  const router = useRouter();
  const [location_route, SET_LOCATION_ROUTE] = useState();

  setTimeout(() => {
    SET_LOCATION_ROUTE(router.query.location);
  }, 0);

  const setRoute = (name) => {
    router.push('/dashboard?location=' + name);
    SET_LOCATION_ROUTE(name);
    SET_SELECTED_INDEX(0);
    SET_SELECTED_TOOLTIP();
    SET_STATE_DROPDOWN(null);
    SET_CHECKED('เขตพื้นที่ทั้งหมด');
    SET_DISTRICT(null);
    d3.selectAll(`.minimap`).style('fill', 'none');
  };
  return (
    <div
      className="flex flex-row flex-wrap justify-center my-2"
      id="category-manu"
      style={{ minHeight: 'fit-content' }}
    >
      {category.map((cat, index) => (
        <div
          key={index}
          style={{
            border: `2px solid ${cat.color}`,
            borderRadius: '6px',
            height: '38px',
            backgroundColor: location_route === cat.name ? cat.color : 'white',
          }}
          className={`px-1 mx-0.5 flex items-center font-bold cursor-pointer ${
            location_route === cat.name ? 'text-white-default' : ''
          } `}
          onClick={() => setRoute(cat.name)}
        >
          <div className="p1">{cat.name}</div>
        </div>
      ))}
    </div>
  );
};
export default category_manu;
