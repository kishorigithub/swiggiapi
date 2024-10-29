import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header = () => {
  const [btnnam, setBtnname] = useState("login");

  const onlinestatus = useOnlinestatus();

  useEffect(() => {
    console.log("use effect");
  }, []);

  return (
    <div className="flex">
      <div className="Logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlinestatus ? "✅" : " 🔴"}</li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnnam == "login" ? setBtnname("logout") : setBtnname("login");
            }}
          >
            {btnnam}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
