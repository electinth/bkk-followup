import React, { useState } from "react";
import { useRouter } from "next/router";

const category_manu = ({ category }) => {
  const router = useRouter();
  const [location_route, SET_LOCATION_ROUTE] = useState();

  setTimeout(() => {
    SET_LOCATION_ROUTE(router.query.location);
  }, 0);
  const setRoute = (name) => {
    router.push("/dashboard?location=" + name);
    SET_LOCATION_ROUTE(name);
  };
  return (
    <div
      className="flex flex-row flex-wrap justify-center"
      id="category-manu"
      style={{ height: "fit-content" }}
    >
      {category.map((cat, index) => (
        <div
          key={index}
          style={{
            border: `2px solid ${cat.color}`,
            borderRadius: "6px",
            height: "38px",
            backgroundColor: location_route === cat.name ? cat.color : "white",
          }}
          className={`px-1 mx-0.5 flex items-center font-bold cursor-pointer ${
            location_route === cat.name ? "text-white-default" : ""
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
