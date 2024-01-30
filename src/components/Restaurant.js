import RestaurantCard, { withPrometedLabel } from "./RestaurantCard";
import { restData } from "../utils/mockData";
import React, { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Restaurant = () => {
  const [resData, setResData] = useState([]);
  const [searchResData, setSearchResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPrometedLabel(RestaurantCard);
  const {loggedInUser,setUserName} = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   /*  console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); */
  };

  if (onlineStatus == false) return <h1>Looks like your in offline</h1>;

  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterData = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchResData(filterData);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-300 m-4 rounded-lg"
            onClick={() => {
              const filterData = resData.filter(
                (res) => res.info.avgRating > 4.5
              );
              setSearchResData(filterData);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label> UserName : </label>
          <input
            className="border border-solid border-black p-1"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          </div>
      </div>
      <div className="flex flex-wrap">
        {searchResData.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
            {restaurant.info?.type === "T" ? (
              <withPrometedLabel propsObj={restaurant.info}/>
            ) : (
              <RestaurantCard propsObj={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
