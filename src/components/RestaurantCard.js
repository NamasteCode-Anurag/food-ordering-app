import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="restaurant-card m-2 p-2 w-[300px] bg-neutral-700 rounded-lg text-white h-[400px] hover:bg-red-500 transition-colors">
      <img
        className="res-logo h-[180px] w-[400px] rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="rate-and-time">
        <h5>{avgRatingString}⭐</h5>
        <h5 className="time">{deliveryTime} MINS</h5>
      </div>
    </div>
  );
};

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
