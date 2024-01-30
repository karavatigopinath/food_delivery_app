import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (restaId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + restaId);
    const json = await data.json();
    setRestInfo(json.data);
  };
  return restInfo;
};
export default useRestaurantMenu;
