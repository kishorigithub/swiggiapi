import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  const [listofrest, setlistofrest] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      "restaurant data",
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setlistofrest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlinestatus();
  if (onlinestatus == false)
    return <h1>Looks like you are offline check your internet connection</h1>;

  if (listofrest.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>&nbsp;&nbsp;&nbsp;&nbsp;
         
          <button
            onClick={() => {
              console.log("in serach my filter restaurant", listofrest);

              const filter = listofrest.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setlistofrest(filter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdata = listofrest.filter((res) => res.rating > 4);
            setlistofrest(filterdata);
            console.log("restaurant after the filter b rating", listofrest);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofrest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <Restaurantcard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
