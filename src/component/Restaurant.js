import React from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";
import Navigation from "./Navigation";
import FoodData from "./../data";

const Restaurant = () => {
  const [FilterFoodData, setFilterFoodData] = useState(FoodData);

  let navArray = [
    ...new Set(
      FoodData.map((curElement) => {
        return curElement.category;
      })
    )
  ];

  const datafilter = (category) => {
    if (category === "all") {
      setFilterFoodData(FoodData);
    } else {
      let tempFilterFoodArray = FoodData.filter((item) => {
        return item.category === category;
      });
      setFilterFoodData(tempFilterFoodArray);
    }
  };

  return (
    <>
      <Navigation navArray={navArray} datafilter={datafilter} />
      <MenuCard items={FilterFoodData} />
    </>
  );
};

export default Restaurant;
