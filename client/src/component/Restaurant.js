import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import Navigation from "./Navigation";

const Restaurant = () => {
  const [Fooddata, setFoodData] = useState([]);
  const [FilterFoodData, setFilterFoodData] = useState([]);
  useEffect(() => {
    axios({
      url: "/fooditems",
      method: "GET"
    })
      .then((response) => {
        setFoodData(response.data);
        setFilterFoodData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let navArray = [
    ...new Set(
      Fooddata.map((curElement) => {
        return curElement.category;
      })
    )
  ];

  const datafilter = (category) => {
    if (category === "all") {
      setFilterFoodData(Fooddata);
    } else {
      let tempFilterFoodArray = Fooddata.filter((item) => {
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
