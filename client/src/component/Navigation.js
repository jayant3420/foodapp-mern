import React from "react";
import { useState } from "react";

const Navigation = ({ navArray, datafilter }) => {
  let BtnClass = "btn-grp-item";
  const [name, setName] = useState("all");
  const btnClass = (name) => {
    setName(name);
  };
  return (
    <>
      <nav
        className="navigation-header flex-row flex-justify"
        id="navbar-heading"
      >
        <button
          className={BtnClass + (name === "all" ? " active" : "")}
          onClick={() => {
            datafilter("all");
            btnClass("all");
          }}
        >
          All
        </button>
        {navArray.map((category, index) => (
          <button
            className={BtnClass + (name === category ? " active" : "")}
            onClick={() => {
              datafilter(category);
              btnClass(category);
            }}
            key={index}
          >
            {category}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
