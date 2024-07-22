import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineState = useOnlineState();
  console.log("header callded");

  // if no dependency[] array => useEffect is called an every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once means when component render first time)
  // if dependency array is [btnName] => called everytime btnName is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img className="w-56" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">Online Status: {onlineState ? "🟢" : "🔴"}</li>
          <li className="px-4 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg"> 
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
