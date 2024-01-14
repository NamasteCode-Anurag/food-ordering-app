import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
// import resList from "../utils/mockData";

const Body = () => {
  // used to implement the Top Rated Restaurant feature
  const [listofRestaurants, setListofRestaurants] = useState([]);

  // Fetching data from API calls to Swiggy.com
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5010343&lng=73.9686775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListofRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
