import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../reducers/cartReducer";

const CartTable = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  console.log(cartData);

  const getProduct = (cartItem) => {
    return products.find((product) => product.id === Number(cartItem));
  };

  const quantityIncreaseHandler = (e) => {
    const element = e.target.parentElement.parentElement.dataset;
    dispatch(
      increaseQuantity({
        id: element.id,
        price: element.price,
      })
    );
  };

  const quantityDecreaseHandler = (e) => {
    const element = e.target.parentElement.parentElement.dataset;
    dispatch(
      decreaseQuantity({
        id: element.id,
        price: element.price,
      })
    );
  };

  const removeItemHandler = (e) => {
    const element = e.target.parentElement.parentElement.dataset;
    dispatch(
      removeItem({
        id: element.id,
        price: element.price,
      })
    );
  };

  return (
    <table className="w-2/3 border-2 h-fit mt-4">
      <thead>
        <tr>
          <th className="px-4">Sr. No</th>
          <th className="px-4">Product ID</th>
          <th className="px-4 w-60 overflow-ellipsis">Product Name</th>
          <th className="px-4">Amount</th>
          <th className="px-4">Quanity</th>
          <th className="px-4">Remove</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {Object.keys(cartData).map((productId, index) => (
          <tr data-id={productId} data-price={getProduct(productId)?.price}>
            <td>{index + 1}</td>
            <td>{getProduct(productId)?.id}</td>
            <td>{getProduct(productId)?.title}</td>
            <td>{getProduct(productId)?.price} $</td>
            <td className="flex gap-4 justify-center">
              <button
                className="bg-green-400 px-2"
                onClick={quantityDecreaseHandler}
              >
                -
              </button>
              {cartData[productId]}
              <button
                className="bg-green-400 px-2"
                onClick={quantityIncreaseHandler}
              >
                +
              </button>
            </td>
            <td>
              <button onClick={removeItemHandler}> X </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
