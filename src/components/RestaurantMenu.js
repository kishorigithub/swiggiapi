import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Header from "./Header";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  return (
    <div>
      <card className="card">
        {" "}
        <center>
          <div className="items">
            <Header />
            <h1>{resInfo?.name}</h1>
            <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo?.cloudinaryImageId}`} />
      
            

            <ul className="data">
              <li>cuisines   :-  {resInfo?.cuisines.join(", ")} </li>
              <li>Prise   :-    {resInfo?.costForTwo}</li>
              <li>Ratings    :-  {resInfo?.avgRating}</li>
              
              
            </ul>
          </div>
        </center>
      </card>
    </div>
  );
};

export default RestaurantMenu;
