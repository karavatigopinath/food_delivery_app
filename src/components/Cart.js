import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const fetchCart = useDispatch();
  const handleClear = () => {
    fetchCart(clearItems());
  };
  return (
    <div>
      <div>
        <h1 className="text-center font-bold"> Cart </h1>
      </div>
      <div className="text-right">
        <button
          onClick={() => handleClear()}
          className="bg-black text-white p-2 mx-4 rounded-xl"
        >
          ClearCart
        </button>
      </div>
      <div className="m-auto w-6/12">
        {cartItems.length === 0 && <h1 className="text-center font-bold">Cart is Empty, Add Items to the Cart</h1>}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
