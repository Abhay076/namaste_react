import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    locality,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  const { offers } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;
  console.log(offers);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="menu-cart">
        <h4 className="rating">
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h4>
        <p className="cuisine">{cuisines.join(", ")}</p>
        <ul>
          <li>Outlet {locality}</li>
          <li>{sla.slaString}</li>
        </ul>
      </div>
      <h2>Deals for you</h2>
      <div className="deals">
        <div className="div1">
          <h4 className="text">{offers[0].info.header}</h4>
          <p className="text1">{offers[0].info.couponCode}</p>
        </div>
        <div className="div2">
          <h4 className="text">{offers[1].info.header}</h4>
          <p className="text1">{offers[1].info.couponCode}</p>
        </div>
        <div className="div3">
          <h4 className="text">{offers[2].info.header}</h4>
          <p className="text1">{offers[2].info.couponCode}</p>
        </div>
      </div>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <div className="menu1" key={item.card.info.id}>
            <p> {item.card.info.name}</p>
            <p>
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              {/* {item.card.info.price / 100}
              {item.card.info.offerTags[0].title}
              {item.card.info.offerTags[0].subTitle} */}
            </p>
            <p className="ratings">
              {item.card.info.ratings.aggregatedRating.rating}(
              {item.card.info.ratings.aggregatedRating.ratingCountV2 ||
                "not rated"}
              )
            </p>
            <img className="menu-logo" src={CDN_URL + item.card.info.imageId} />
            {/* <p></p> */}
            {/* <p>{item.card.info.description}</p> */}
            {/* <span>{item.card.info.offerTags[0].title}</span> */}
            <p className="descri">{item.card.info.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
