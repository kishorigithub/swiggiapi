import React from "react";
import Header from "./Header";


const groceryData = [
  {
    id: 1,
    name: "Apples",
    price: 2.5,
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Apples",
  },
  {
    id: 2,
    name: "Bananas",
    price: 1.2,
    image: "https://via.placeholder.com/150/FFFF00/000000?text=Bananas",
  },
  {
    id: 3,
    name: "Carrots",
    price: 1.5,
    image: "https://picsum.photos/seed/carrot/150/150",
  },
  {
    id: 4,
    name: "Broccoli",
    price: 2.0,
    image: "https://via.placeholder.com/150/008000/FFFFFF?text=Broccoli",
  },
  {
    id: 5,
    name: "Chicken Breast",
    price: 5.0,
    image: "https://via.placeholder.com/150/FFFFFF/000000?text=Chicken+Breast",
  },
];

const Grocery = () => {
  return (
    
    <div className="grocery-container">
        <Header/>
      <h1>Grocery Items</h1>
      <div className="grocery-list">
        {groceryData.map(item => (
          <div key={item.id} className="grocery-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
