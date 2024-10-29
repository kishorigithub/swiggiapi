import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  console.log("my restairant id", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log("this is my json data", json);

    setresInfo(json?.data?.cards[2]?.card?.card?.info);

    console.log("this is my only restaurant info", resInfo);
    // console.log("this is my only restaurant info", resInfo?.name);
  };

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
