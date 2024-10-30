import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Header from "./Header";
import Body from "./Body";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  // Additional state for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (resInfo) {
      setLoading(false);
    }
  }, [resInfo]);

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <h1>Error loading restaurant data: {error.message}</h1>;
  }

  return (
    <div className="restaurant-menu">
      <Header />
      <div className="card">
        <center>
          <img
            className="res-logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo?.cloudinaryImageId}`}
            alt={`${resInfo?.name} logo`}
          />
          <h1>{resInfo?.name}</h1>
          <ul className="data">
            <li><strong>Cuisines:</strong> {resInfo?.cuisines.join(", ")}</li>
            <li><strong>Price for Two:</strong> ₹{resInfo?.costForTwo}</li>
            <li><strong>Ratings:</strong> {resInfo?.avgRating}</li>
            <li><strong>Delivery Time:</strong> {resInfo?.deliveryTime} mins</li>
          </ul>
          <button className="order-button">Order Now</button>
        </center>
      </div>
      <div className="menu-items">
  <h2>Menu</h2>
  <ul>
    {resInfo?.menu ? (
      resInfo.menu.map((item) => (
        <li key={item.id}>
          <div className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
          </div>
        </li>
      ))
    ) : (
      <li>No menu items available.</li>
    )}
  </ul>
</div>

    </div>
  );
};

export default RestaurantMenu;
