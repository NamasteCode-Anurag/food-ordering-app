import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  console.log(category);

  return (
    <div className="menu-container m-2 p-2">
      <div className="menu-header m-2 p-2">
        <br></br>
        <h1 className="font-bold text-xl">{name}</h1>
        <h4>
          {cuisines.join(",")} - {costForTwoMessage}
        </h4>
        <br></br>
      </div>
      <h2>Menu</h2>
      <br></br>
      <div className="menu flex m-2 p-2">
        {itemCards.map((item) => (
          <div
            className="menu-item h-[400px] w-[250px] m-2"
            key={item.card.info.id}
          >
            <h3>{item.card.info.name}</h3>
            <img
              className="menu-item-img"
              src={CDN_URL + item.card.info.imageId}
            />
            <h4>Rs. {item.card.info.price / 100}</h4>
            <h4>{item.card.info.ratings.aggregatedRating.rating}⭐</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
