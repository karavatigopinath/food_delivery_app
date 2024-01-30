import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestarantCatogiry from "./RestarantCatogiry";

const RestaurantMenu = () => {
  const { restaId } = useParams();
  const restInfo = useRestaurantMenu(restaId);

  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) return <Shimmer />;

  const { name, costForTwo, cuisines } = restInfo?.cards[0]?.card?.card?.info;
  const itemInfo =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  const restCatogiry =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (resta) => {
        return (
          resta.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className="text-center my-4">
      <h1 className="font-bold">{name}</h1>
      <h3 className="font-bold my-4">
        {cuisines.join(", ")} - Rs {costForTwo / 100}
      </h3>
      {restCatogiry.map((restaInfo, index) => (
        <RestarantCatogiry
          key={restaInfo?.card?.card?.title}
          data={restaInfo?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex((prevIndex) => (prevIndex === index ? null : index))}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
