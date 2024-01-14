import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRatingString} = resData.info;
    const {deliveryTime} = resData.info.sla;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="rate-and-time">
          <h5>{avgRatingString}⭐</h5>
          <h5 className="time">{deliveryTime} MINS</h5>
        </div>
      </div>
    );
  };

  export default RestaurantCard;