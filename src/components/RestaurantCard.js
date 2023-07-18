import { RES_CDN_URL } from "../constant";

const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant);
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    deliveryTime,
    costForTwoString,
  } = restaurant?.data;

  return (
    <div
      className="p-2 hover:shadow-md cursor-pointer my-2"
      key={restaurant?.id}
    >
      <img
        className="w-[180px] h-[110px]"
        src={RES_CDN_URL + cloudinaryImageId}
        alt="resImage"
      />
      <div className="my-2">
        <h6 className="text-[10px] font-bold">{name}</h6>
        <p className="text-[9px]">{cuisines.join(", ")}</p>
      </div>
      <div className="flex justify-between text-[8px] mb-1">
        <span>{avgRating} ⭐ </span>
        <span>-</span>
        <span>{deliveryTime} MIN</span>
        <span>-</span>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};
export default RestaurantCard;
