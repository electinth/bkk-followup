import React, { useState, useEffect, useRef } from 'react';
import arrow from 'assets/images/arrow.svg';
import { useRouter } from 'next/router';
import { isMobileOnly, isMobile } from 'react-device-detect';
import useOutsideClick from 'components/Dashboard/util/useOutsideClick';

import * as d3 from 'd3';

const dropdown = ({
  filter,
  type,
  checked,
  district,
  SET_IS_RANK,
  SET_SELECTED_YEAR,
  SET_SELECTED_INDEX,
  SET_SELECTED_TOOLTIP,
  SET_STATE_DROPDOWN,
  SET_CHECKED,
  SET_DISTRICT,
}) => {
  const [dropdown_state, SET_DROPDOWN_STATE] = useState(false);
  const [category, SET_CATEGORY] = useState('น้ำท่วมถนน');
  const router = useRouter();

  const showMenu = (e) => {
    SET_DROPDOWN_STATE(true);
  };

  const closeMenu = (e) => {
    if (dropdown_state && e.target.id != 'options') {
      SET_DROPDOWN_STATE(false);
      document.removeEventListener('click', closeMenu);
    }
  };

  const handleOptionChange = (e) => {
    SET_STATE_DROPDOWN(type);
    if (type === 'group') {
      d3.selectAll(`.minimap`).style('fill', 'none');
      SET_CHECKED(e.target.value);
      SET_DISTRICT(null);
    } else {
      SET_DISTRICT(e.target.value);
    }
    SET_DROPDOWN_STATE(false);
    SET_IS_RANK(false);
    document.removeEventListener('click', closeMenu);
  };

  setTimeout(() => {
    SET_CATEGORY(router.query.location);
  }, 0);

  const hamdleCategory = (e) => {
    router.push('/dashboard?location=' + e.target.value);
    SET_SELECTED_YEAR(55);
    SET_SELECTED_INDEX(0);
    SET_SELECTED_TOOLTIP();
    SET_STATE_DROPDOWN(null);
    SET_CHECKED('เขตพื้นที่ทั้งหมด');
    SET_DISTRICT(null);
    SET_CATEGORY(e.target.value);
    SET_DROPDOWN_STATE(false);
    document.removeEventListener('click', closeMenu);
  };
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (dropdown_state) {
      SET_DROPDOWN_STATE(false);
    }
  });

  return (
    <div
      style={{
        width: isMobileOnly ? '100%' : '',
        maxWidth: isMobileOnly && type != 'category' ? '50%' : '',
      }}
    >
      {type === 'group' ? (
        <div
          id="dropdown"
          className="relative inline-block w-full text-left md:ml-3"
        >
          <div
            onClick={dropdown_state ? closeMenu : showMenu}
            id="manu"
            className="relative flex flex-row p-2 font-bold rounded cursor-pointer md:w-56 bg-white-default h4 "
          >
            {checked === 'เขตพื้นที่ทั้งหมด' ? (
              <p>เลือกกลุ่มพื้นที่ </p>
            ) : (
              <p
                className="truncate ..."
                style={{ width: isMobileOnly ? '60%' : '80%' }}
              >
                {checked}
              </p>
            )}
            <div
              id="arrow-wrpper"
              className="absolute right-0 flex justify-center pr-3"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              {dropdown_state ? (
                <img src={arrow} alt="arrow" className="transform rotate-180" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
          {dropdown_state ? (
            <div
              className="absolute bottom-auto z-20 flex flex-col w-full p-3 mt-1 rounded bg-white-default"
              style={{
                border: '1px solid #eee',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
              }}
              id="options"
              ref={ref}
            >
              {filter.map((f, index) => (
                <label
                  className="flex flex-row p-2 my-1 check"
                  id="options"
                  key={index}
                >
                  <span className="flex pointer-events-none pl-7">
                    {isMobileOnly ? (
                      ''
                    ) : (
                      <img src={f.img} alt="icon-dropdown" className="mr-3" />
                    )}

                    <p className=" p1">{f.filter_by}</p>
                  </span>
                  <input
                    type="radio"
                    id="options"
                    value={f.filter_by}
                    checked={checked === f.filter_by}
                    onChange={handleOptionChange}
                  />
                  <span className="ml-2 pointer-events-none checkmark"></span>
                </label>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      {type === 'zone' ? (
        <div
          id="dropdown"
          className="relative inline-block w-full pl-3 text-left md:ml-3"
        >
          <div
            onClick={dropdown_state ? closeMenu : showMenu}
            id="manu"
            className="relative flex flex-row p-2 font-bold rounded cursor-pointer md:w-56 bg-white-default h4"
          >
            {district === null ? <p>เลือกเขต </p> : district}
            <div
              id="arrow-wrpper"
              className="absolute right-0 flex justify-center pr-3"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              {dropdown_state ? (
                <img src={arrow} alt="arrow" className="transform rotate-180" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
          {dropdown_state ? (
            <div
              className="absolute bottom-auto z-50 flex flex-col w-full p-3 mt-1 overflow-hidden rounded bg-white-default"
              style={{
                border: '1px solid #eee',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
                maxHeight: '50vh',
              }}
              ref={ref}
              id="options"
            >
              <div id="option-wrapper " className="overflow-auto">
                {filter.map((f, index) => (
                  <label
                    className="flex flex-row p-2 my-1 check"
                    id="options"
                    key={index}
                  >
                    <p className="pointer-events-none pl-7 p1 truncate ...">
                      {f.filter_by}
                    </p>
                    <input
                      type="radio"
                      id="options"
                      value={f.filter_by}
                      checked={district === f.filter_by}
                      onChange={handleOptionChange}
                    />
                    <span className="ml-2 pointer-events-none checkmark"></span>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      {type === 'category' ? (
        <div
          id="dropdown"
          className="relative inline-block mb-2 text-left md:mb-0"
          style={{
            width: isMobileOnly ? '100%' : '',
          }}
        >
          <div
            onClick={dropdown_state ? closeMenu : showMenu}
            id="manu"
            className="relative flex flex-row p-2 mx-3 font-bold rounded cursor-pointer md:w-52 bg-white-default h4 md:mx-0"
          >
            <p
              className="truncate ..."
              style={{ width: isMobileOnly ? '60%' : '80%' }}
            >
              {category}
            </p>

            <div
              id="arrow-wrpper"
              className="absolute right-0 flex justify-center pr-3"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              {dropdown_state ? (
                <img src={arrow} alt="arrow" className="transform rotate-180" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
          {dropdown_state ? (
            <div
              className="absolute bottom-auto z-50 flex flex-col w-full p-3 mt-1 rounded bg-white-default"
              style={{
                border: '1px solid #eee',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
              }}
              id="options"
              ref={ref}
            >
              {filter.map((f, index) => (
                <label
                  className="flex flex-row p-2 my-1 check"
                  id="options"
                  key={index}
                >
                  <span className="flex pointer-events-none pl-7">
                    <p className=" p1">{f.name}</p>
                  </span>
                  <input
                    type="radio"
                    id="options"
                    value={f.name}
                    checked={category === f.name}
                    onChange={hamdleCategory}
                  />
                  <span className="ml-2 pointer-events-none checkmark"></span>
                </label>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default dropdown;
