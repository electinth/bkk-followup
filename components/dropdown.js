import React, { useState, useEffect, useRef } from "react";
import arrow from "assets/images/arrow.svg";

const dropdown = ({ filter, type, checked, SET_CHECKED }) => {
  const [dropdown_state, SET_DROPDOWN_STATE] = useState(false);

  const dropdown_menu_ref = useRef(null);

  const showMenu = (e) => {
    SET_DROPDOWN_STATE(true);
  };

  const closeMenu = (e) => {
    if (dropdown_state && e.target.id != "options") {
      SET_DROPDOWN_STATE(false);
      document.removeEventListener("click", closeMenu);
    }
  };

  const handleOptionChange = (e) => {
    SET_CHECKED(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
  }, [dropdown_state]);

  return (
    <div id="dropdown" className="relative inline-block ml-3 text-left">
      <div
        onClick={showMenu}
        id="manu"
        className="relative flex flex-row w-56 p-2 font-bold rounded cursor-pointer bg-white-default h4"
      >
        {checked === null ? <p>เลือกกลุ่มพื้นที่ </p> : checked}
        <div
          id="arrow-wrpper"
          className="absolute right-0 flex justify-center pr-3"
          style={{ top: "50%", transform: "translateY(-50%)" }}
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
            border: "1px solid #eee",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
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
                checked={checked === f.filter_by}
                onChange={handleOptionChange}
              />
              <span className="ml-2 pointer-events-none checkmark"></span>
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default dropdown;
