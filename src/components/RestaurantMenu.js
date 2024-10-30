import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Header from "./Header";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
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

  // Dummy menu data with images
  const dummyMenu = [
    {
      id: 1,
      name: "Pizza Margherita",
      description: "Classic pizza with mozzarella and basil.",
      price: 350,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597", // Dummy image URL
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      description: "Spaghetti with creamy sauce and pancetta.",
      price: 400,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597", // Dummy image URL
   },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Fresh salad with Caesar dressing and croutons.",
      price: 250,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597", // Dummy image URL
   },
    {
      id: 4,
      name: "Tiramisu",
      description: "Italian dessert made with coffee and mascarpone.",
      price: 300,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597", // Dummy image URL
    },
    {
      id: 5,
      name: "Margherita Burger",
      description: "Juicy burger with mozzarella and tomato.",
      price: 450,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597", // Dummy image URL
    },
  ];

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
       <br></br>
       <br></br>
        <div className="menu-cards">
          {resInfo?.menu ? (
            resInfo.menu.map((item) => (
              <div className="menu-card" key={item.id}>
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
              </div>
            ))
          ) : (
            dummyMenu.map((item) => (
              <div className="menu-card" key={item.id}>
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <button>Order Now</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
