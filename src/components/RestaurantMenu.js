import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

const { resId } = useParams();

const resInfo= useRestaurantMenu(resId)
  



  return (
    <div>
      <h1>{resInfo?.name}</h1>
      <h2>
        {resInfo?.cuisines.join(", ")} - {resInfo?.costForTwo}
      </h2>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coken</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
