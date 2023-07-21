import { useEffect, useState } from "react";
import { RES_DETL_URL } from "../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    fetchRestaurantsData(RES_DETL_URL);
  }, []);

  const fetchRestaurantsData = async (RES_DETL_URL) => {
    const data = await fetch(RES_DETL_URL);
    const json = await data.json();
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
  };

  if (restaurantList?.length === 0) return null;

  console.log(restaurantList);
  return !restaurantList ? (
    <h2>Loading...</h2>
  ) : (
    <div className="grid grid-cols-4 gap-4 w-[65%] mx-auto mt-4">
      {restaurantList?.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant?.data?.id} />
      ))}
    </div>
  );
};

export default Body;
