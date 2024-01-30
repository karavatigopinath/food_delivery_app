import { useState } from "react";
import ItemList from "./ItemList";

const RestarantCatogiry = ({ data,showItems,setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="mx-auto my-4 bg-gray-100 w-6/12  p-2 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => handleClick()}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>🔽</span>
        </div>
         {showItems && <ItemList item={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestarantCatogiry;
