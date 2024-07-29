import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  // console.log(aggregatedDiscountInfoV3.header||"none")
  const a = "none";
  return (
    <div className="  w-[250px] m-4 p-2  rounded-lg bg-gray-100 hover:bg-gray-200 hover:border border-solid border-black">
      <img
        className="rounded-lg object-cover w-full h-48"
        alt="res-logo"
        flex
        border
        border-solid
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex-1">
        <h3 className="h-12 font-bold py-4 text-lg inline-block overflow-hidden ">
          {name}
        </h3>
        <h4
          className={
            (avgRating < 3.7 || avgRating == "--"
              ? "bg-orange-500"
              : "bg-green-500") +
            " " +
            "px-2 text-white rounded-md"
          }
        >
          <FontAwesomeIcon icon={faStar} size="sm" /> {avgRating}
          {/* {avgRating} stars */}
          <span className="p-2">{sla?.slaString}</span>
        </h4>
        {/* <h4 className=""></h4> */}
        {/* <h4>{costForTwoString}</h4> */}
        <h4 className="h-12 overflow-hidden">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

// High Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
