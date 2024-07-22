import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineState from "../utils/useOnlineState";
const Body = () => {
  //Local State Variable - Super powerful Variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredListRestaturants, setFilteredListRestaturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const useOnline = useOnlineState();
  //whenever static variable update, react triggers a reconciliation cycle (re-render the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListRestaturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (useOnline === false) {
    return (
      <h1>
        Looks like you are offline!!, Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="v">
      <div className="flex">
        <div className="search  m-4 p-4">
          <input
            type="text"
            className="mt-1 px-10 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="h-8 px-7 font-semibold rounded-md bg-black text-white m-4"
            onClick={() => {
              // filter the restaurant card and update UI
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListRestaturants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="items-center">
          <button
            className="bg-green-500 px-14 py-2 m-11 font-semibold rounded-md mr-10 "
            onClick={() => {
              //fileter function
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredListRestaturants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap ml-28 ">
        {filteredListRestaturants.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
