import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
  const { resdata } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    preparation_time,
  } = resdata?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n15vckntsiboiod3gpco"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>36 Minutes</h4>
    </div>
  );
};

export default Restaurantcard;