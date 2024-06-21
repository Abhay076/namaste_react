import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  //Local State Variable - Super powerful Variable
  const arr = useState(resList);

  //arrays destructuring
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);


 // const [listOfRestaurants,setlistOfRestaurants]=arr;
//
  const listOfRestaurants=arr[0];
  const setlistOfRestaurants=arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //fileter function
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filteredList); 
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
