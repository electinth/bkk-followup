import React, { useState, useEffect, useRef } from 'react';
import arrow from 'assets/images/arrow.svg';
import * as d3 from 'd3';

const dropdown = ({
  filter,
  type,
  checked,
  SET_CHECKED,
  district,
  SET_DISTRICT,
  SET_STATE_DROPDOWN,
  SET_IS_RANK,
  SET_SELECTED_TOOLTIP,
}) => {
  const [dropdown_state, SET_DROPDOWN_STATE] = useState(false);
  const dropdown_menu_ref = useRef(null);

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
      SET_CHECKED(e.target.value);
      SET_DISTRICT(null);
    } else {
      SET_DISTRICT(e.target.value);
    }
    SET_DROPDOWN_STATE(false);
    SET_IS_RANK(false);
    document.removeEventListener('click', closeMenu);
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
  }, [dropdown_state]);

  return (
    <div>
      {type === 'group' ? (
        <div id="dropdown" className="relative inline-block ml-3 text-left">
          <div
            onClick={showMenu}
            id="manu"
            className="relative flex flex-row w-56 p-2 font-bold rounded cursor-pointer bg-white-default h4"
          >
            {checked === 'เขตพื้นที่ทั้งหมด' ? (
              <p>เลือกกลุ่มพื้นที่ </p>
            ) : (
              checked
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
              ref={dropdown_menu_ref}
              id="options"
            >
              {filter.map((f, index) => (
                <label
                  className="flex flex-row p-2 my-1 check"
                  id="options"
                  key={index}
                >
                  <span className="flex pointer-events-none pl-7">
                    <img src={f.img} alt="icon-dropdown" className="mr-3" />
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
      ) : (
        <div id="dropdown" className="relative inline-block ml-3 text-left">
          <div
            onClick={showMenu}
            id="manu"
            className="relative flex flex-row w-56 p-2 font-bold rounded cursor-pointer bg-white-default h4"
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
              className="absolute bottom-auto z-20 flex flex-col w-full p-3 mt-1 rounded bg-white-default"
              style={{
                border: '1px solid #eee',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
                maxHeight: '50vh',
                overflow: 'auto',
              }}
              ref={dropdown_menu_ref}
              id="options"
            >
              {filter.map((f, index) => (
                <label
                  className="flex flex-row p-2 my-1 check"
                  id="options"
                  key={index}
                >
                  <p className="pointer-events-none pl-7 p1">{f.filter_by}</p>
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
          ) : null}
        </div>
      )}
    </div>
  );
};

export default dropdown;
