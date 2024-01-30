import { useDispatch } from 'react-redux'
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItemCard = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {item.map((i) => (
        <div
          className="p-2 m-2 border-b-2 flex justify-between text-left"
          key={i.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-bold">{i.card.info.name}</span>
              <span>
                {" "}
                ₹{" "}
                {i.card.info.price
                  ? i.card.info.price / 100
                  : i.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{i.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="shadow-lg mx-12 text-white bg-black p-1 rounded-lg"
                onClick={()=>handleAddItemCard(i)}
              >
                Add ➕
              </button>
            </div>
            <img
              className="w-[70%]"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                i.card.info.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
